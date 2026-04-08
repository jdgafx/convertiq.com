import type { Context } from '@netlify/functions'

/**
 * AI Detection Audit — Netlify Function
 *
 * Accepts: POST { text: string }
 * Returns: { score: number, passed: boolean }
 *
 * Runs headless Chromium against undetectableai.pro/detector (the same
 * detector our local pipeline uses) and parses the score percentage out
 * of the result page.
 *
 * Pass threshold: ≤ 4% AI = passed.
 *
 * Required deps (add to package.json):
 *   "@netlify/functions": "^2",
 *   "@sparticuz/chromium": "^131",
 *   "playwright-core": "^1.47"
 *
 * Required netlify.toml:
 *   [functions]
 *     directory = "netlify/functions"
 *     node_bundler = "esbuild"
 *     external_node_modules = ["@sparticuz/chromium"]
 *
 * Note: Cold starts are ~5-10s due to Chromium init. Warm runs are ~15-20s
 * end-to-end (most of that is the detector waiting). For lower latency,
 * swap in a hosted detector with a JSON API (ZeroGPT, Sapling, GPTZero).
 */

const PASS_THRESHOLD = 4
const DETECTOR_URL = 'https://undetectableai.pro/detector'

const corsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'POST, OPTIONS',
  'access-control-allow-headers': 'content-type',
}

export default async (req: Request, _context: Context): Promise<Response> => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders })
  }
  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405)
  }

  let text: string
  try {
    const body = (await req.json()) as { text?: unknown }
    if (typeof body.text !== 'string' || body.text.length < 30) {
      return json({ error: 'text must be a string with at least 30 chars' }, 400)
    }
    text = body.text
  } catch {
    return json({ error: 'Invalid JSON body' }, 400)
  }

  let browser: import('playwright-core').Browser | null = null
  try {
    const chromium = (await import('@sparticuz/chromium')).default
    const { chromium: pwChromium } = await import('playwright-core')

    browser = await pwChromium.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
    })

    const page = await browser.newPage()
    await page.goto(DETECTOR_URL, { waitUntil: 'domcontentloaded', timeout: 30000 })

    // Find the textarea (placeholder is "Add 30 + words" per the existing pipeline).
    const textarea = page.locator('textarea').first()
    await textarea.waitFor({ state: 'visible', timeout: 10000 })
    await textarea.fill(text)

    // Click the "Check for AI" / "Detect" button.
    await page
      .locator('button:has-text("Check for AI"), button:has-text("Detect"), button[type="submit"]')
      .first()
      .click()

    // Wait for a percentage to appear anywhere on the page.
    await page.waitForFunction(
      () => /\b\d{1,3}\s*%/.test(document.body.innerText),
      { timeout: 45000 },
    )

    const bodyText = await page.locator('body').innerText()
    // First number followed by % is the score.
    const match = bodyText.match(/(\d{1,3})\s*%/)
    const score = match ? parseInt(match[1], 10) : -1

    if (score < 0 || score > 100) {
      return json({ error: 'Could not parse detection score', raw: bodyText.slice(0, 500) }, 502)
    }

    return json({ score, passed: score <= PASS_THRESHOLD })
  } catch (err) {
    return json({ error: (err as Error).message }, 500)
  } finally {
    if (browser) await browser.close().catch(() => {})
  }
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'content-type': 'application/json' },
  })
}

export const config = {
  path: '/.netlify/functions/ai-audit',
}

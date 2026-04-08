#!/usr/bin/env node
/**
 * test-ai-text.mjs — minimal raw-text AI-detection check
 *
 * Reads a text file (default: scripts/new-post-content.txt), pastes it into
 * undetectableai.pro/detector via puppeteer-core + system Chrome, then prints
 * the parsed score. Used for iterating on draft blog content before publishing.
 *
 * Usage:
 *   node scripts/test-ai-text.mjs                      # default file
 *   node scripts/test-ai-text.mjs path/to/draft.txt    # custom file
 */
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import puppeteer from 'puppeteer-core'

const __dirname = dirname(fileURLToPath(import.meta.url))
const file = process.argv[2] || resolve(__dirname, 'new-post-content.txt')

const text = (await readFile(file, 'utf8')).trim()
if (text.length < 50) {
  console.error('File text is too short (<50 chars).')
  process.exit(1)
}

console.log(`📄 Loaded ${text.length} chars from ${file}`)
console.log('🚀 Launching headless Chrome...')

const browser = await puppeteer.launch({
  executablePath: '/usr/bin/google-chrome',
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
})

try {
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 900 })

  console.log('🌐 Loading detector...')
  await page.goto('https://undetectableai.pro/detector', {
    waitUntil: 'domcontentloaded',
    timeout: 30000,
  })
  await new Promise((r) => setTimeout(r, 3000))

  // Find textarea + paste content
  const ta = await page.$('textarea')
  if (!ta) throw new Error('No textarea found on detector page')
  await ta.click({ clickCount: 3 })
  await page.keyboard.press('Backspace')
  await page.evaluate((t) => {
    const el = document.querySelector('textarea')
    if (el) {
      const setter = Object.getOwnPropertyDescriptor(
        window.HTMLTextAreaElement.prototype,
        'value',
      )?.set
      setter?.call(el, t)
      el.dispatchEvent(new Event('input', { bubbles: true }))
      el.dispatchEvent(new Event('change', { bubbles: true }))
    }
  }, text)

  console.log('🔍 Submitting...')
  // Click any button containing 'Check' or 'Detect'
  const buttons = await page.$$('button')
  let clicked = false
  for (const btn of buttons) {
    const txt = (await page.evaluate((el) => el.textContent || '', btn)).trim().toLowerCase()
    if (txt.includes('check for ai') || txt.includes('detect') || txt === 'check') {
      await btn.click()
      clicked = true
      break
    }
  }
  if (!clicked) {
    // Fallback: submit button
    const sb = await page.$('button[type="submit"]')
    if (sb) {
      await sb.click()
      clicked = true
    }
  }
  if (!clicked) throw new Error('No detect/check button found')

  console.log('⏳ Waiting for score...')
  await page.waitForFunction(
    () => /\b\d{1,3}\s*%/.test(document.body.innerText),
    { timeout: 60000 },
  )
  // Give it a moment to settle on the final number
  await new Promise((r) => setTimeout(r, 2000))

  const bodyText = await page.evaluate(() => document.body.innerText)
  const matches = bodyText.match(/\b(\d{1,3})\s*%/g) || []
  // Pick the lowest plausible AI score from the page (often there are
  // multiple percentages — engagement, etc).
  const scores = matches
    .map((m) => parseInt(m, 10))
    .filter((n) => n >= 0 && n <= 100)
  const score = scores.length > 0 ? scores[0] : -1

  console.log('')
  console.log(`📊 RAW PERCENTAGES FOUND ON PAGE: ${matches.join(', ')}`)
  console.log(`📊 PARSED SCORE: ${score}%`)
  console.log(score <= 4 ? '✅ PASSED (≤4%)' : '❌ FAILED (>4%)')
} finally {
  await browser.close()
}

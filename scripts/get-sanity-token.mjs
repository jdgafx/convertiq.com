#!/usr/bin/env node
/**
 * get-sanity-token.mjs
 *
 * Logs into sanity.io with the project email/password using Playwright
 * (driving the system Chrome at /usr/bin/google-chrome — matches the
 * existing sanity-setup.mjs approach), navigates to the project's API
 * tokens page, creates a new "claude-import-<timestamp>" Editor token,
 * and writes the secret to ~/.sanity-token.
 *
 * On failure, it dumps a screenshot to /tmp/sanity-debug-<step>.png so
 * we can see exactly what the page looked like.
 *
 * Usage: node scripts/get-sanity-token.mjs
 */
import { chromium } from 'playwright'
import { writeFile } from 'node:fs/promises'
import { homedir } from 'node:os'
import { join } from 'node:path'

const EMAIL = 'cgdarkstardev1@pm.me'
const PASS = 'CCGGblog26'
const PROJECT_ID = '36hj0d6k'
const OUT_PATH = join(homedir(), '.sanity-token')
const HEADLESS = process.env.HEADFUL ? false : true

const ss = async (page, name) => {
  await page.screenshot({ path: `/tmp/sanity-debug-${name}.png`, fullPage: true })
  console.log(`   📸 /tmp/sanity-debug-${name}.png`)
}

const browser = await chromium.launch({
  executablePath: '/usr/bin/google-chrome',
  headless: HEADLESS,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
})
const ctx = await browser.newContext({
  viewport: { width: 1400, height: 900 },
  userAgent:
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
})
const page = await ctx.newPage()

try {
  // ============================================================
  // STEP 1 — Land on /manage which forces a login redirect.
  // ============================================================
  console.log('🔑 Loading sanity.io/manage...')
  await page.goto('https://www.sanity.io/manage', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  })
  await page.waitForTimeout(5000)
  await ss(page, '01-landing')

  console.log('   URL:', page.url())

  // If we landed already-logged-in (cookie?), skip the login flow.
  const alreadyIn =
    page.url().includes('/manage') &&
    !page.url().includes('/login') &&
    !page.url().includes('/auth')

  if (!alreadyIn) {
    // ============================================================
    // STEP 2 — Click "Sign in with email" / "E-mail" button if it exists.
    // ============================================================
    const emailBtnLocators = [
      page.locator('button:has-text("Continue with email")'),
      page.getByRole('button', { name: /continue with e-?mail/i }),
      page.locator('button:has-text("Sign in with email")'),
      page.locator('button:has-text("E-mail")'),
      page.locator('button:has-text("Email")'),
      page.locator('a:has-text("Continue with email")'),
    ]
    let clickedEmail = false
    for (const loc of emailBtnLocators) {
      if ((await loc.count()) > 0) {
        await loc.first().click()
        clickedEmail = true
        console.log('   ✓ Clicked email-login option')
        break
      }
    }
    if (!clickedEmail) {
      console.log('   (no email-login button found — assuming inline form)')
    }
    // The sign-in form is lazy-rendered behind reCAPTCHA — give it longer
    // and wait for the password field specifically (most reliable signal).
    await page.waitForTimeout(3000)
    await page
      .locator('input[type="password"]')
      .first()
      .waitFor({ state: 'visible', timeout: 15000 })
      .catch(() => {})
    await ss(page, '02-after-email-click')

    // ============================================================
    // STEP 3 — Fill credentials
    // ============================================================
    const emailInput = (await page.locator('input[type="email"]').count()) > 0
      ? page.locator('input[type="email"]').first()
      : (await page.locator('input[name="email"]').count()) > 0
        ? page.locator('input[name="email"]').first()
        : (await page.locator('input[autocomplete="email"]').count()) > 0
          ? page.locator('input[autocomplete="email"]').first()
          : page.locator('input[placeholder*="@"]').first()

    if ((await emailInput.count()) === 0) {
      throw new Error('No email input visible after clicking email-login')
    }
    await emailInput.fill(EMAIL)

    const passInput = page.locator('input[type="password"]').first()
    if ((await passInput.count()) === 0) {
      // Some flows have a 2-step login: enter email → click "next" → password screen.
      const nextBtn = page
        .locator('button[type="submit"], button:has-text("Continue"), button:has-text("Next")')
        .first()
      if ((await nextBtn.count()) > 0) {
        await nextBtn.click()
        await page.waitForTimeout(3000)
      }
      const passInput2 = page.locator('input[type="password"]').first()
      if ((await passInput2.count()) === 0) {
        await ss(page, '03-no-password-input')
        throw new Error('Password input never appeared')
      }
      await passInput2.fill(PASS)
    } else {
      await passInput.fill(PASS)
    }
    await ss(page, '04-credentials-filled')

    // ============================================================
    // STEP 4 — Submit the form
    // ============================================================
    const submitBtn = page.locator('button[type="submit"]').first()
    await submitBtn.click()
    await page.waitForTimeout(8000)
    await ss(page, '05-after-submit')

    console.log('   URL after submit:', page.url())
    if (page.url().includes('/login') || page.url().includes('/auth')) {
      throw new Error(`Login failed — still at ${page.url()}`)
    }
  }

  // ============================================================
  // STEP 5 — Navigate to project API > Tokens page
  // ============================================================
  console.log(`📋 Loading project ${PROJECT_ID} API page...`)
  await page.goto(
    `https://www.sanity.io/manage/project/${PROJECT_ID}/api`,
    { waitUntil: 'domcontentloaded', timeout: 60000 },
  )
  await page.waitForTimeout(7000)
  await ss(page, '06-api-page')

  // ============================================================
  // STEP 5b — Dismiss ALL blocking modals/dialogs.
  // The "Project downgraded to Free" dialog and any other tour/onboarding
  // modal intercepts pointer events. Loop until no dialog is visible.
  // ============================================================
  for (let attempt = 0; attempt < 6; attempt++) {
    const dialogs = await page.locator('[role="dialog"][aria-modal="true"]').count()
    if (dialogs === 0) break
    console.log(`   ⚠ Dialog open (attempt ${attempt + 1}/6) — dismissing`)

    // Try every dismissal strategy in order
    const strategies = [
      async () => {
        // Click the modal's "Dismiss" button text (force, no waiting)
        const btn = page.locator('[role="dialog"] button:has-text("Dismiss")').first()
        if ((await btn.count()) > 0) {
          await btn.click({ force: true, timeout: 5000 })
          return 'Dismiss button'
        }
      },
      async () => {
        // Click an X / close icon button
        const btn = page
          .locator('[role="dialog"] button[aria-label*="close" i], [role="dialog"] button[aria-label*="Close" i]')
          .first()
        if ((await btn.count()) > 0) {
          await btn.click({ force: true, timeout: 5000 })
          return 'Close icon'
        }
      },
      async () => {
        // Programmatically remove all dialog layers from the DOM
        const removed = await page.evaluate(() => {
          const layers = document.querySelectorAll('[role="dialog"], [data-portal] > div')
          layers.forEach((el) => el.remove())
          return layers.length
        })
        if (removed > 0) return `removed ${removed} layer(s) from DOM`
      },
      async () => {
        await page.keyboard.press('Escape')
        return 'Escape key'
      },
    ]

    let progressed = false
    for (const strat of strategies) {
      try {
        const ok = await strat()
        if (ok) {
          console.log(`   ✓ Tried: ${ok}`)
          progressed = true
          await page.waitForTimeout(1500)
          break
        }
      } catch (e) {
        // try next strategy
      }
    }
    if (!progressed) {
      console.log('   ✗ No dismissal strategy worked this round')
      break
    }
  }
  await ss(page, '06b-dialog-dismissed')

  // ============================================================
  // STEP 6 — Click "Add API token"
  // ============================================================
  const uniqueLabel = `claude-import-${Date.now()}`
  console.log(`➕ Creating token "${uniqueLabel}"...`)

  const addBtnLocators = [
    page.getByRole('button', { name: /add (api )?token/i }),
    page.locator('button:has-text("Add API token")'),
    page.locator('button:has-text("Add token")'),
    page.locator('button:has-text("Create token")'),
  ]
  let addClicked = false
  for (const loc of addBtnLocators) {
    if ((await loc.count()) > 0) {
      await loc.first().click()
      addClicked = true
      console.log('   ✓ Clicked Add Token button')
      break
    }
  }
  if (!addClicked) {
    await ss(page, '07-no-add-button')
    throw new Error('No Add API token button found on /api page')
  }
  await page.waitForTimeout(3000)
  await ss(page, '08-token-modal')

  // ============================================================
  // STEP 7 — Fill the token label and pick Editor permissions
  // ============================================================
  const labelInput =
    (await page.locator('input[name="label"]').count()) > 0
      ? page.locator('input[name="label"]').first()
      : page.locator('input[type="text"]').first()
  await labelInput.fill(uniqueLabel)
  await page.waitForTimeout(500)

  // Editor permission — try multiple shapes
  const editorClickers = [
    page.locator('input[value="editor"]'),
    page.getByRole('radio', { name: /editor/i }),
    page.locator('label:has-text("Editor")'),
  ]
  for (const loc of editorClickers) {
    if ((await loc.count()) > 0) {
      await loc.first().click()
      console.log('   ✓ Selected Editor permission')
      break
    }
  }
  await page.waitForTimeout(500)
  await ss(page, '09-modal-filled')

  // ============================================================
  // STEP 8 — Submit the modal
  // ============================================================
  const saveBtnLocators = [
    page.getByRole('button', { name: /^(save|create|generate|add token)$/i }),
    page.locator('button:has-text("Save")'),
    page.locator('button:has-text("Create")'),
    page.locator('button:has-text("Generate")'),
  ]
  let savedClicked = false
  for (const loc of saveBtnLocators) {
    if ((await loc.count()) > 0) {
      // Click the LAST matching button (usually the modal's primary action)
      const count = await loc.count()
      await loc.nth(count - 1).click()
      savedClicked = true
      console.log('   ✓ Submitted token modal')
      break
    }
  }
  if (!savedClicked) {
    await ss(page, '10-no-save-button')
    throw new Error('No Save/Create button found in token modal')
  }
  await page.waitForTimeout(5000)
  await ss(page, '11-token-displayed')

  // ============================================================
  // STEP 9 — Parse the new token from the page
  // ============================================================
  const bodyText = await page.locator('body').innerText()
  const match = bodyText.match(/sk[A-Za-z0-9_-]{30,}/)
  if (!match) {
    console.error('\n⚠️  Token modal opened but no sk... pattern found.')
    console.error('Page text snippet:')
    console.error(bodyText.slice(0, 1500))
    throw new Error('Could not parse new token from page')
  }

  const token = match[0]
  await writeFile(OUT_PATH, token, 'utf8')
  console.log('')
  console.log('✅ TOKEN ACQUIRED:')
  console.log(`   ${token}`)
  console.log(`   Saved to: ${OUT_PATH}`)
  console.log(`   Label:    ${uniqueLabel}`)
} catch (err) {
  console.error('\n❌ ERROR:', err.message)
  await ss(page, 'fatal').catch(() => {})
  process.exit(1)
} finally {
  await browser.close()
}

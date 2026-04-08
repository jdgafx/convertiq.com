#!/usr/bin/env node
/**
 * audit-sanity-drafts.mjs
 *
 * Fetches all Sanity posts (published + drafts if SANITY_AUDIT_TOKEN is set)
 * and runs each one through the undetectableai.pro detector via Playwright.
 * Exits non-zero if any post scores above THRESHOLD — wire it into the
 * Netlify build via `npm run build` to block AI-failing content from shipping.
 *
 * Usage:
 *   node scripts/audit-sanity-drafts.mjs                # public posts only
 *   SANITY_AUDIT_TOKEN=xxx node scripts/audit-sanity-drafts.mjs   # incl. drafts
 *
 * Env:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID  (default: 36hj0d6k)
 *   NEXT_PUBLIC_SANITY_DATASET     (default: production)
 *   SANITY_AUDIT_TOKEN             (optional read token for drafts)
 *   AI_AUDIT_THRESHOLD             (default: 4)
 */

import { createClient } from '@sanity/client'
import { chromium } from 'playwright'

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '36hj0d6k'
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const TOKEN = process.env.SANITY_AUDIT_TOKEN
const THRESHOLD = Number.parseInt(process.env.AI_AUDIT_THRESHOLD || '4', 10)
const DETECTOR_URL = 'https://undetectableai.pro/detector'

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: TOKEN || undefined,
  perspective: TOKEN ? 'previewDrafts' : 'published',
})

function extractText(blocks) {
  if (!Array.isArray(blocks)) return ''
  return blocks
    .filter((b) => b && b._type === 'block' && Array.isArray(b.children))
    .map((b) => b.children.map((c) => c.text || '').join(''))
    .filter((line) => line.trim().length > 0)
    .join('\n\n')
    .trim()
}

async function auditOne(page, text) {
  await page.goto(DETECTOR_URL, { waitUntil: 'domcontentloaded', timeout: 30000 })
  await page.waitForTimeout(1500)

  const textarea = page.locator('textarea').first()
  await textarea.waitFor({ state: 'visible', timeout: 10000 })
  await textarea.fill(text)

  await page
    .locator('button:has-text("Check for AI"), button:has-text("Detect"), button[type="submit"]')
    .first()
    .click()

  await page.waitForFunction(() => /\b\d{1,3}\s*%/.test(document.body.innerText), {
    timeout: 60000,
  })

  const body = await page.locator('body').innerText()
  const match = body.match(/(\d{1,3})\s*%/)
  return match ? parseInt(match[1], 10) : -1
}

async function main() {
  console.log(`📡 Sanity audit — project ${PROJECT_ID}/${DATASET}`)
  console.log(`   Threshold: ≤ ${THRESHOLD}% AI`)
  console.log(`   Drafts: ${TOKEN ? 'INCLUDED' : 'excluded (set SANITY_AUDIT_TOKEN to include)'}\n`)

  const posts = await client.fetch('*[_type == "post"]{_id, title, body}')
  if (posts.length === 0) {
    console.log('No posts found. Nothing to audit.')
    return
  }
  console.log(`Found ${posts.length} post(s)\n`)

  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()

  const results = []
  let failures = 0

  try {
    for (const post of posts) {
      const text = extractText(post.body)
      const label = post.title || post._id
      if (text.length < 50) {
        console.log(`⏭  ${label} — skipped (body < 50 chars)`)
        continue
      }
      process.stdout.write(`🧪 ${label} ... `)
      try {
        const score = await auditOne(page, text)
        const passed = score >= 0 && score <= THRESHOLD
        if (passed) {
          console.log(`✅ ${score}%`)
        } else {
          console.log(`❌ ${score}%  (over threshold)`)
          failures++
        }
        results.push({ id: post._id, title: label, score, passed })
      } catch (err) {
        console.log(`💥 error: ${err.message}`)
        failures++
        results.push({ id: post._id, title: label, score: -1, passed: false, error: err.message })
      }
    }
  } finally {
    await browser.close()
  }

  console.log('\n=== SUMMARY ===')
  console.log(`Total audited: ${results.length}`)
  console.log(`Passed:        ${results.filter((r) => r.passed).length}`)
  console.log(`Failed:        ${failures}`)

  if (failures > 0) {
    console.error('\n❌ One or more posts failed AI detection. Rewrite (Professional & Direct pattern) and re-test.')
    process.exit(1)
  }
  console.log('\n✅ All posts pass AI detection.')
}

main().catch((err) => {
  console.error('Fatal:', err)
  process.exit(1)
})

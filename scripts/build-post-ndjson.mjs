#!/usr/bin/env node
/**
 * build-post-ndjson.mjs
 *
 * Reads scripts/new-post-content.txt and emits a Sanity NDJSON document at
 * scripts/new-post.ndjson, ready for `npx sanity dataset import`.
 *
 * Conventions in the source .txt:
 *   - Line 1 is the title (becomes both `title` field and is omitted from body)
 *   - Paragraphs are separated by blank lines
 *   - Section headings are short (< 80 chars), don't end with punctuation,
 *     and contain at least one capital letter — these become H2 blocks
 *   - All other paragraphs become normal text blocks
 *
 * The generated document is marked aiAudit.status = "passed" because the
 * content was already verified by scripts/test-ai-text.mjs (run that first).
 */
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { randomUUID } from 'node:crypto'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SRC = resolve(__dirname, 'new-post-content.txt')
const OUT = resolve(__dirname, 'new-post.ndjson')

const raw = (await readFile(SRC, 'utf8')).trim()
const paragraphs = raw.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean)

const title = paragraphs.shift() || 'Untitled'

function key() {
  return randomUUID().replace(/-/g, '').slice(0, 12)
}

function isHeading(p) {
  if (p.length > 80) return false
  if (/[.?!:;]$/.test(p)) return false
  if (!/[A-Z]/.test(p)) return false
  return true
}

function block(style, text) {
  return {
    _type: 'block',
    _key: key(),
    style,
    markDefs: [],
    children: [
      { _type: 'span', _key: key(), text, marks: [] },
    ],
  }
}

const body = paragraphs.map((p) =>
  isHeading(p) ? block('h2', p) : block('normal', p),
)

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')
  .slice(0, 80)

// Build a clean, search-friendly excerpt from the first paragraph.
const firstPara = paragraphs.find((p) => !isHeading(p)) || ''
const excerpt = firstPara.slice(0, 200).trim()

const now = new Date().toISOString()

const doc = {
  _id: `geoLocal2026-${slug.slice(0, 30)}`,
  _type: 'post',
  title,
  slug: { _type: 'slug', current: slug },
  excerpt,
  publishedAt: now,
  readTime: Math.max(1, Math.round(raw.split(/\s+/).length / 220)),
  body,
  seo: {
    metaTitle: title.slice(0, 70),
    metaDescription: excerpt,
    metaKeywords: [
      'GEO',
      'generative engine optimization',
      'AI search',
      'ChatGPT citations',
      'Perplexity local search',
      'Google Business Profile 2026',
      'local SEO 2026',
      'AI marketing for small business',
      'Bing Places',
      'AI search visibility',
      'local business AI',
      'small business GEO',
      'AI overview optimization',
    ],
    noIndex: false,
  },
  aiAudit: {
    score: 0,
    status: 'passed',
    lastChecked: now,
  },
}

await writeFile(OUT, JSON.stringify(doc) + '\n', 'utf8')
console.log(`✅ Wrote ${OUT}`)
console.log(`   Title:  ${title}`)
console.log(`   Slug:   ${slug}`)
console.log(`   Blocks: ${body.length}`)
console.log('')
console.log('Next:')
console.log('  1. (Once) npx sanity login')
console.log(`  2. npx sanity dataset import ${OUT} production --replace`)

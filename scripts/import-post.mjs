#!/usr/bin/env node
/**
 * import-post.mjs
 *
 * Reads scripts/new-post.ndjson and creates the document directly via the
 * Sanity HTTP API using the token saved at ~/.sanity-token (set by
 * scripts/get-sanity-token.mjs).
 *
 * If the document already exists, this overwrites it via createOrReplace.
 *
 * Usage: node scripts/import-post.mjs
 */
import { createClient } from '@sanity/client'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { homedir } from 'node:os'
import { join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const NDJSON_PATH = resolve(__dirname, 'new-post.ndjson')
const TOKEN_PATH = process.env.SANITY_AUTH_TOKEN
  ? null
  : join(homedir(), '.sanity-token')

const token =
  process.env.SANITY_AUTH_TOKEN ||
  (await readFile(TOKEN_PATH, 'utf8').catch(() => '')).trim()

if (!token) {
  console.error(
    `❌ No token found. Run scripts/get-sanity-token.mjs first or set SANITY_AUTH_TOKEN.`,
  )
  process.exit(1)
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '36hj0d6k',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token,
})

const raw = await readFile(NDJSON_PATH, 'utf8')
const lines = raw.split('\n').filter((l) => l.trim().length > 0)
console.log(`📥 Importing ${lines.length} document(s) from ${NDJSON_PATH}`)

for (const line of lines) {
  const doc = JSON.parse(line)
  console.log(`   ↑ ${doc._type}/${doc._id}  "${doc.title || ''}"`)
  const result = await client.createOrReplace(doc)
  console.log(`     ✓ ${result._id}  rev=${result._rev}`)
}

console.log('')
console.log('✅ Import complete.')
console.log('   Visit https://melodic-travesseiro-f5ef27.netlify.app/studio')
console.log('   to verify the document under "Blog Post".')

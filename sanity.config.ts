import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from '@/sanity/schemas'
import { aiAuditAction } from '@/sanity/actions/aiAuditAction'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '36hj0d6k'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'amp-marketing',
  title: 'AMP Marketing CMS',

  projectId,
  dataset,

  basePath: '/studio',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    // Add the "Test for AI Detection" action to post documents.
    // The publish gate itself lives in post.ts as document-level validation
    // — Sanity disables Publish whenever a custom validation returns an error.
    actions: (prev, context) => {
      if (context.schemaType !== 'post') return prev
      return [...prev, aiAuditAction]
    },
  },
})

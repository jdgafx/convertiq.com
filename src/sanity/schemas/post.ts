import { defineType, defineField } from 'sanity'

/**
 * Common AI-writing tells. The body validation below scans for these and
 * surfaces them as a Studio warning so Michael (or any editor) gets instant
 * feedback BEFORE running the full undetectableai.pro test. The actual
 * publish gate still relies on aiAudit.status === 'passed' — this is a
 * fast-feedback guide, not the source of truth.
 */
const AI_MARKERS = [
  'honestly,',
  'actually,',
  'look,',
  'the thing is',
  ' stuff ',
  ' stuff.',
  'in conclusion',
  'to sum up',
  'in summary',
  'delve',
  'leverage',
  'leverages',
  'leveraging',
  'harness',
  'harnessing',
  'intricate',
  'seamless',
  'seamlessly',
  'moreover',
  'furthermore',
  'tapestry',
  "in today's digital age",
  "in today's fast-paced",
  'ever-evolving',
  'ever evolving',
  'unleash',
  'navigating the world of',
  'in the realm of',
]

function extractBodyText(blocks: unknown): string {
  if (!Array.isArray(blocks)) return ''
  return blocks
    .filter(
      (b: { _type?: string; children?: unknown }) =>
        b && b._type === 'block' && Array.isArray(b.children),
    )
    .flatMap((b: { children: Array<{ text?: string }> }) =>
      b.children.map((c) => c.text || ''),
    )
    .join(' ')
}

function findAiMarkers(blocks: unknown): string[] {
  const text = extractBodyText(blocks).toLowerCase()
  return AI_MARKERS.filter((m) => text.includes(m.toLowerCase()))
}

export const postType = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'seo', title: 'SEO' },
    { name: 'audit', title: 'AI Audit' },
  ],

  // Document-level validation: blocks publish until the AI audit passes.
  // The "Test for AI Detection" custom action populates aiAudit.status.
  validation: (Rule) =>
    Rule.custom((doc) => {
      const status = (doc as { aiAudit?: { status?: string } } | undefined)
        ?.aiAudit?.status
      if (status !== 'passed') {
        return 'Run "Test for AI Detection" and achieve ≤4% AI score before publishing.'
      }
      return true
    }),

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required().max(95),
      description: 'On-page H1. Also the default meta title.',
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'content',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
      description: 'Lives at /blog/<slug>. Bing weighs URL keywords heavily — keep it short and exact-match.',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      group: 'content',
      validation: (Rule) => Rule.max(220),
      description: 'Used on blog index cards. Default meta description if SEO override is empty.',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          validation: (Rule) =>
            Rule.required().error('Alt text is required for SEO and accessibility.'),
        }),
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      group: 'content',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      group: 'content',
      to: [{ type: 'author' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      group: 'content',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time (minutes)',
      type: 'number',
      group: 'content',
      validation: (Rule) => Rule.min(1).max(60),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      group: 'content',
      // Fast-feedback warning: flag known AI tells inline so the editor
      // can fix them before running the full Playwright detector test.
      validation: (Rule) =>
        Rule.custom((blocks) => {
          const found = findAiMarkers(blocks)
          if (found.length === 0) return true
          return `Found ${found.length} common AI-writing marker(s): ${found
            .map((m) => `"${m.trim()}"`)
            .join(
              ', ',
            )}. Rewrite to remove these — they will likely fail the AI Detection test.`
        }).warning(),
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External Link',
                fields: [{ name: 'href', type: 'url', title: 'URL' }],
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal Site Link',
                fields: [
                  {
                    name: 'path',
                    type: 'string',
                    title: 'Site Path',
                    description: 'Internal path, e.g. /services/ai-chatbot',
                    validation: (Rule) =>
                      Rule.required().regex(/^\//, { name: 'starts with /' }),
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
        },
      ],
    }),
    defineField({
      name: 'relatedServices',
      title: 'Related Service Pages',
      type: 'array',
      group: 'content',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
      description:
        'Cross-link this post to one or more /services/* pages. Renders a "Related Services" block under the body and feeds the internal-link graph.',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      group: 'content',
      description:
        'Each FAQ renders on the post AND is emitted as FAQPage JSON-LD for Google rich results.',
      of: [
        {
          type: 'object',
          name: 'faq',
          fields: [
            {
              name: 'question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'answer',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: { select: { title: 'question' } },
        },
      ],
    }),

    // SEO group
    defineField({
      name: 'seo',
      title: 'SEO Overrides',
      type: 'object',
      group: 'seo',
      description:
        'Optional. If empty, falls back to title / excerpt / mainImage.',
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: (Rule) =>
            Rule.max(70).warning(
              'Bing/Google truncate titles over ~60 chars.',
            ),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          validation: (Rule) =>
            Rule.max(160).warning(
              'Most search engines truncate over 160 chars.',
            ),
        },
        {
          name: 'metaKeywords',
          title: 'Meta Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          options: { layout: 'tags' },
          description:
            'Bing still reads this. Use 12–15 specific phrases. Google ignores it.',
        },
        {
          name: 'canonicalUrl',
          title: 'Canonical URL',
          type: 'url',
          description: 'Only set if this content is republished from elsewhere.',
        },
        {
          name: 'ogImage',
          title: 'Social Share Image',
          type: 'image',
          description: 'Falls back to mainImage if empty. 1200×630 recommended.',
        },
        {
          name: 'noIndex',
          title: 'Hide from search engines (noindex)',
          type: 'boolean',
          initialValue: false,
        },
      ],
    }),

    // AI Audit group — populated by the "Test for AI Detection" action.
    defineField({
      name: 'aiAudit',
      title: 'AI Detection Audit',
      type: 'object',
      group: 'audit',
      readOnly: true,
      description:
        'Auto-populated by the "Test for AI Detection" action. Posts must achieve ≤4% AI score before they can be published.',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'score', title: 'AI Score (%)', type: 'number' },
        {
          name: 'status',
          title: 'Status',
          type: 'string',
          options: {
            list: [
              { title: 'Pending — not yet tested', value: 'pending' },
              { title: 'Passed (≤4%)', value: 'passed' },
              { title: 'Failed (>4%)', value: 'failed' },
            ],
          },
        },
        { name: 'lastChecked', title: 'Last Checked', type: 'datetime' },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      score: 'aiAudit.score',
      status: 'aiAudit.status',
    },
    prepare(selection) {
      const { author, score, status } = selection as {
        author?: string
        score?: number
        status?: string
      }
      const badge =
        status === 'passed' ? '✅' : status === 'failed' ? '❌' : '⏳'
      const subtitle = [
        author && `by ${author}`,
        typeof score === 'number' && `${badge} ${score}% AI`,
      ]
        .filter(Boolean)
        .join(' · ')
      return { ...selection, subtitle }
    },
  },
})

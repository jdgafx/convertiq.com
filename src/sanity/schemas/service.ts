import { defineType, defineField } from 'sanity'

/**
 * Service page reference. Used by `post.relatedServices` so an editor
 * can link a blog post to one or more existing /services/* pages.
 *
 * These are NOT the source of truth for the live service pages (those are
 * statically rendered Next.js routes). Treat this schema as a controlled
 * vocabulary so editors can pick from the real site routes without
 * fat-fingering URLs.
 */
export const serviceType = defineType({
  name: 'service',
  title: 'Service Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'path',
      title: 'URL Path',
      description: 'Site path, e.g. /services/ai-chatbot',
      type: 'string',
      validation: (Rule) =>
        Rule.required().regex(/^\/.+/, { name: 'must start with /' }),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'icon',
      title: 'Icon (emoji or short label)',
      type: 'string',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'path' },
  },
})

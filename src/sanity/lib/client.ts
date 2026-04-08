import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '36hj0d6k'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = '2024-01-01'

const isSanityConfigured =
  projectId && projectId !== 'YOUR_PROJECT_ID' && /^[a-z0-9-]+$/.test(projectId)

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === 'production',
    })
  : null

const builder = client ? imageUrlBuilder(client) : null

export function urlFor(source: unknown) {
  if (!builder) throw new Error('Sanity not configured')
  // Cast at the boundary; image-url's types accept any image-like object.
  return builder.image(source as Parameters<typeof builder.image>[0])
}

/**
 * Blog index — slim projection for cards. Excludes drafts (only published
 * posts have an aiAudit.status of "passed", but the draft system already
 * filters those out at the API level).
 */
export async function getPosts() {
  if (!client) return []
  // Index/cards: keep category as a plain string so the existing
  // blog/page.tsx (which renders {post.category} directly) doesn't break.
  return client.fetch(
    `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      readTime,
      "category": category->title,
      "author": author->name
    }`,
    {},
    { next: { tags: ['post'] } },
  )
}

/**
 * Single post — full projection including SEO overrides, related services,
 * FAQs, and the resolved category/author. Used by blog/[slug]/page.tsx for
 * rendering AND generateMetadata.
 */
export async function getPost(slug: string) {
  if (!client) return null
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      _updatedAt,
      title,
      slug,
      excerpt,
      mainImage,
      body,
      publishedAt,
      readTime,
      "category": category->{title, slug},
      "author": author->{name, image, bio},
      seo,
      faqs,
      aiAudit,
      "relatedServices": relatedServices[]->{
        _id, title, path, shortDescription, icon
      }
    }`,
    { slug },
    { next: { tags: ['post', `post:${slug}`] } },
  )
}

/**
 * All slugs — used by sitemap.ts to enumerate post URLs at build time.
 */
export async function getAllPostSlugs(): Promise<
  Array<{ slug: string; updatedAt: string }>
> {
  if (!client) return []
  return client.fetch(
    `*[_type == "post" && defined(slug.current)]{
      "slug": slug.current,
      "updatedAt": _updatedAt
    }`,
  )
}

export async function getCategories() {
  if (!client) return []
  return client.fetch(
    `*[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      description
    }`,
    {},
    { next: { tags: ['category'] } },
  )
}

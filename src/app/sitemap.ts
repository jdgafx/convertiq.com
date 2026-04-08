import { MetadataRoute } from 'next';
import { getAllPostSlugs } from '@/sanity/lib/client';

export const dynamic = 'force-static';

const baseUrl = 'https://melodic-travesseiro-f5ef27.netlify.app';

const staticRoutes = [
  '',
  '/about',
  '/services',
  '/pricing',
  '/contact',
  '/services/ad-copy',
  '/services/ai-chatbot',
  '/services/ai-voice',
  '/services/email-automation',
  '/services/google-business',
  '/services/landing-pages',
  '/services/lead-funnel',
  '/services/review-response',
  '/services/seo-content',
  '/services/social-media',
  '/blog',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Pull blog post slugs from Sanity at build time. Falls back to no extra
  // entries if Sanity is unreachable so we never break the build.
  let postEntries: MetadataRoute.Sitemap = [];
  try {
    const slugs = await getAllPostSlugs();
    postEntries = slugs.map((p) => ({
      url: `${baseUrl}/blog/${p.slug}`,
      lastModified: p.updatedAt ? new Date(p.updatedAt) : now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch (err) {
    console.warn('[sitemap] Failed to fetch Sanity post slugs:', err);
  }

  return [...staticEntries, ...postEntries];
}

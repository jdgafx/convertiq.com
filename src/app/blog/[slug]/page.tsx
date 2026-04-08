import { Navbar, Footer } from '@/components/Layout';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost, getPosts, urlFor } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import type { Metadata } from 'next';

const SITE_URL = 'https://melodic-travesseiro-f5ef27.netlify.app';
const SITE_NAME = 'AMP Marketing';
const ORG_LOGO = `${SITE_URL}/logo.png`;

type PortableImage = { asset: { _ref: string }; alt?: string };
type PortableLink = { href?: string };
type PortableInternalLink = { path?: string };

type SanityImageRef = {
  asset?: { _ref?: string; _type?: string };
  hotspot?: unknown;
  crop?: unknown;
} | null | undefined;

type Faq = { question: string; answer: string };

type RelatedService = {
  _id: string;
  title: string;
  path: string;
  shortDescription?: string;
  icon?: string;
};

type PostShape = {
  _id: string;
  _updatedAt?: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: SanityImageRef;
  body?: unknown[];
  publishedAt?: string;
  readTime?: number;
  category?: { title?: string; slug?: { current: string } } | null;
  author?: { name?: string; image?: SanityImageRef; bio?: string } | null;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string[];
    canonicalUrl?: string;
    ogImage?: SanityImageRef;
    noIndex?: boolean;
  };
  faqs?: Faq[];
  aiAudit?: { score?: number; status?: string; lastChecked?: string };
  relatedServices?: RelatedService[];
};

export async function generateStaticParams() {
  try {
    const posts = await getPosts();
    if (posts && posts.length > 0) {
      return posts.map((post: { slug: { current: string } }) => ({
        slug: post.slug.current,
      }));
    }
  } catch {}
  return [{ slug: 'placeholder' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = (await getPost(slug)) as PostShape | null;
    if (!post) return { title: 'Post Not Found' };

    const seo = post.seo || {};
    const title = seo.metaTitle || post.title;
    const description = seo.metaDescription || post.excerpt || '';
    const url =
      seo.canonicalUrl || `${SITE_URL}/blog/${post.slug.current}/`;
    const ogImageRef = seo.ogImage || post.mainImage;
    const ogImageUrl = ogImageRef
      ? urlFor(ogImageRef).width(1200).height(630).url()
      : undefined;

    return {
      title,
      description,
      keywords:
        seo.metaKeywords && seo.metaKeywords.length > 0
          ? seo.metaKeywords
          : undefined,
      alternates: { canonical: url },
      robots: seo.noIndex ? { index: false, follow: false } : undefined,
      openGraph: {
        type: 'article',
        title,
        description,
        url,
        siteName: SITE_NAME,
        publishedTime: post.publishedAt,
        modifiedTime: post._updatedAt,
        authors: post.author?.name ? [post.author.name] : undefined,
        images: ogImageUrl
          ? [{ url: ogImageUrl, width: 1200, height: 630 }]
          : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: ogImageUrl ? [ogImageUrl] : undefined,
      },
    };
  } catch {
    return { title: 'Post Not Found' };
  }
}

const portableTextComponents = {
  types: {
    image: ({ value }: { value: PortableImage }) => (
      <div className="my-8 rounded-lg overflow-hidden">
        <Image
          src={urlFor(value).width(800).url()}
          alt={value.alt || 'Blog image'}
          width={800}
          height={400}
          className="w-full"
        />
      </div>
    ),
  },
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">{children}</h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-gray-700 leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-8 rounded-r-lg text-indigo-800">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
        {children}
      </ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-8">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    // External links open in a new tab and pass nofollow.
    link: ({
      value,
      children,
    }: {
      value?: PortableLink;
      children?: React.ReactNode;
    }) => (
      <a
        href={value?.href}
        className="text-indigo-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    // Internal links use Next.js Link so link equity flows through and the
    // user stays in the same tab. The custom mark is configured in
    // src/sanity/schemas/post.ts.
    internalLink: ({
      value,
      children,
    }: {
      value?: PortableInternalLink;
      children?: React.ReactNode;
    }) => (
      <Link
        href={value?.path || '#'}
        className="text-indigo-600 hover:underline font-medium"
      >
        {children}
      </Link>
    ),
  },
};

function buildJsonLd(post: PostShape) {
  const url =
    post.seo?.canonicalUrl || `${SITE_URL}/blog/${post.slug.current}/`;
  const imageRef = post.seo?.ogImage || post.mainImage;
  const imageUrl = imageRef
    ? urlFor(imageRef).width(1200).height(630).url()
    : undefined;

  const article: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: imageUrl ? [imageUrl] : undefined,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt,
    author: post.author?.name
      ? { '@type': 'Person', name: post.author.name }
      : undefined,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: ORG_LOGO },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: SITE_URL + '/blog/',
      },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  const faqs =
    post.faqs && post.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }
      : null;

  return [article, breadcrumbs, faqs].filter(Boolean) as Record<
    string,
    unknown
  >[];
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post: PostShape | null = null;
  try {
    post = (await getPost(slug)) as PostShape | null;
  } catch {
    notFound();
  }

  if (!post) {
    notFound();
  }

  const jsonLd = buildJsonLd(post);

  return (
    <main className="min-h-screen bg-white font-poppins">
      <Navbar />

      {/* JSON-LD: Article + BreadcrumbList + (optional) FAQPage */}
      {jsonLd.map((blob, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blob) }}
        />
      ))}

      <article>
        <section className="bg-[#f9f6f3] py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link
              href="/blog"
              className="text-indigo-600 font-bold text-sm uppercase tracking-widest hover:underline mb-6 inline-block"
            >
              ← Back to Blog
            </Link>
            {post.category?.title && (
              <div className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">
                {post.category.title}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-gray-500 text-sm">
              {post.publishedAt && (
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              )}
              {post.readTime && <span>{post.readTime} min read</span>}
              {post.author?.name && <span>{post.author.name}</span>}
            </div>
          </div>
        </section>

        {post.mainImage && (
          <section className="py-8">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={urlFor(post.mainImage).width(1200).height(600).url()}
                  alt={post.title}
                  width={1200}
                  height={600}
                  className="w-full"
                />
              </div>
            </div>
          </section>
        )}

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="prose prose-lg prose-indigo max-w-none">
              {post.excerpt && (
                <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                  {post.excerpt}
                </p>
              )}
              {post.body && (
                <PortableText
                  value={post.body as never}
                  components={portableTextComponents}
                />
              )}
            </div>
          </div>
        </section>

        {post.faqs && post.faqs.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {post.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
                  >
                    <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                      {faq.question}
                    </summary>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {post.relatedServices && post.relatedServices.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
                Related Services
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {post.relatedServices.map((s) => (
                  <Link
                    key={s._id}
                    href={s.path}
                    className="block p-6 border border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all group"
                  >
                    {s.icon && <div className="text-3xl mb-3">{s.icon}</div>}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600">
                      {s.title}
                    </h3>
                    {s.shortDescription && (
                      <p className="text-gray-600 text-sm">
                        {s.shortDescription}
                      </p>
                    )}
                    <span className="text-indigo-600 font-bold text-sm uppercase tracking-widest mt-3 inline-block">
                      Learn more →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-6">
            Ready to get results?
          </h2>
          <p className="text-indigo-100 text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s help you implement AI-powered marketing that actually works.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            Book a Free Call
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

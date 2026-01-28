import { Navbar, Footer } from '@/components/Layout';
import Link from 'next/link';

export default function BlogPage() {
    const posts = [
        {
            slug: 'ai-marketing-guide-2025',
            title: 'The Complete Guide to AI-Powered Marketing in 2025',
            excerpt: 'AI is changing everything, and honestly, if you\'re not paying attention, you\'re falling behind fast. We break down exactly how AI is transforming marketing.',
            category: 'Marketing',
            date: '2025-01-15',
            readTime: '8 min read',
            image: 'bg-gradient-to-br from-blue-500 to-indigo-600'
        },
        {
            slug: 'chatbot-best-practices-2025',
            title: 'Chatbot Best Practices for 2025: What Actually Converts',
            excerpt: 'Most chatbots are terrible, right? They frustrate people instead of helping. Here is how to build ones that actually convert visitors into paying customers.',
            category: 'Technology',
            date: '2025-01-10',
            readTime: '6 min read',
            image: 'bg-gradient-to-br from-emerald-500 to-teal-600'
        },
        {
            slug: 'roi-ai-voice-receptionist',
            title: 'Calculate the ROI of AI Voice Receptionists',
            excerpt: 'Curious about AI phone systems? See the real numbers—actual savings from real businesses. The results might surprise you.',
            category: 'Business',
            date: '2025-01-05',
            readTime: '7 min read',
            image: 'bg-gradient-to-br from-amber-500 to-orange-600'
        },
        {
            slug: 'google-business-optimization-guide',
            title: 'The Ultimate Google Business Optimization Guide',
            excerpt: 'Local search matters more than ever. This guide walks you through dominating Google Maps so customers can actually find you.',
            category: 'Local SEO',
            date: '2024-12-28',
            readTime: '10 min read',
            image: 'bg-gradient-to-br from-red-500 to-pink-600'
        },
        {
            slug: 'email-automation-strategies',
            title: 'Email Automation Strategies That Actually Get Results',
            excerpt: 'Email marketing is broken. Everyone is sending the same boring newsletters. Learn how to build automated sequences that nurture leads and drive real sales.',
            category: 'Email Marketing',
            date: '2024-12-20',
            readTime: '9 min read',
            image: 'bg-gradient-to-br from-violet-500 to-purple-600'
        },
        {
            slug: 'social-media-content-strategy',
            title: 'Social Media Content Strategy for Service Businesses',
            excerpt: 'If social media feels like a time-suck, you are not imagining it. Here is how to create content that attracts customers without living on your phone.',
            category: 'Social Media',
            date: '2024-12-15',
            readTime: '8 min read',
            image: 'bg-gradient-to-br from-cyan-500 to-blue-600'
        }
    ];

    return (
        <main className="min-h-screen bg-white font-poppins">
            <Navbar />

            <section className="bg-[#f9f6f3] py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#1a1a1a] mb-6">Our Blog</h1>
                    <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed italic">
                        Want to stay ahead of the curve? Let&apos;s talk about what&apos;s actually working in digital marketing, tech, and growing your business right now.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {posts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="flex flex-col group cursor-pointer">
                                <div className={`h-48 rounded-lg mb-6 ${post.image} flex items-center justify-center`}>
                                    <span className="text-6xl text-white/30">📄</span>
                                </div>
                                <div className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-2">{post.category}</div>
                                <h3 className="text-xl font-extrabold text-gray-900 mb-4 leading-tight group-hover:text-indigo-600 transition-colors">{post.title}</h3>
                                <p className="text-gray-500 text-sm mb-4 leading-relaxed flex-grow">{post.excerpt}</p>
                                <div className="flex items-center justify-between text-gray-400 text-sm">
                                    <span>{post.date}</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <div className="mt-4 text-indigo-600 font-bold text-sm uppercase tracking-widest flex items-center">
                                    Read More <span className="ml-2 text-xl group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Grow Your Business?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        See how our AI-powered marketing can help you get more leads and make more sales.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-colors">
                            Book a Free Call
                        </Link>
                        <Link href="/pricing" className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 transition-colors">
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

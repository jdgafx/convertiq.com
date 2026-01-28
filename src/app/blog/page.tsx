import { Navbar, Footer } from '@/components/Layout';
import Link from 'next/link';

export default function BlogPage() {
    const posts = [
        {
            title: '2025 State of Marketing Report: The AI Revolution',
            excerpt: 'The marketing landscape is shifting fast. This report from HubSpot explores the trends and tools that define a successful AI-first strategy this year.',
            category: 'Marketing',
            date: '2025-01-25',
            readTime: '12 min read',
            image: 'bg-gradient-to-br from-blue-500 to-indigo-600',
            url: 'https://www.hubspot.com/state-of-marketing'
        },
        {
            title: 'Choosing the Best AI Sales Agents for Your Business',
            excerpt: 'Not all chatbots are created equal. We look at the top-performing AI sales agents that actually help businesses book more meetings and close deals.',
            category: 'Technology',
            date: '2025-01-20',
            readTime: '10 min read',
            image: 'bg-gradient-to-br from-emerald-500 to-teal-600',
            url: 'https://www.ruh.ai/blogs/best-ai-sales-agents-for-business'
        },
        {
            title: 'The Ultimate AI Marketing Strategy Guide',
            excerpt: 'AI can do more than just write emails. It can find your best prospects by analyzing behavior and scoring them for priority. Here is how to use it.',
            category: 'Strategy',
            date: '2025-01-15',
            readTime: '15 min read',
            image: 'bg-gradient-to-br from-amber-500 to-orange-600',
            url: 'https://reply.io/blog/ai-marketing-strategy/'
        },
        {
            title: 'Top AI Lead Generation Software to Watch in 2025',
            excerpt: 'We compared the top lead gen tools on the market. If you want to scale your outreach without increasing your workload, these are the tools you need.',
            category: 'Tools',
            date: '2025-01-10',
            readTime: '8 min read',
            image: 'bg-gradient-to-br from-red-500 to-pink-600',
            url: 'https://fr.dorik.com/blog/best-ai-lead-generation-software'
        },
        {
            title: 'Automating Lead Generation with Intelligent Workflows',
            excerpt: 'Learn how connecting your forms to automation tools can streamline your entire sales process. It is about working smarter, not harder.',
            category: 'Automation',
            date: '2025-01-05',
            readTime: '9 min read',
            image: 'bg-gradient-to-br from-violet-500 to-purple-600',
            url: 'https://heyform.net/blog/the-ultimate-guide-to-heyform-zapier-integration-automate-lead-generation-in-2025/'
        },
        {
            title: 'How Top Sales Teams are Using AI to Win',
            excerpt: 'Real-world examples of how sales teams are using AI to automate routine work and personalize their outreach at scale.',
            category: 'Sales',
            date: '2024-12-28',
            readTime: '7 min read',
            image: 'bg-gradient-to-br from-cyan-500 to-blue-600',
            url: 'https://www.linkedin.com/pulse/5-ways-top-sales-reps-used-ai-crush-2025-goals-what-you-fairchild-b6nme'
        }
    ];

    return (
        <main className="min-h-screen bg-white font-poppins">
            <Navbar />

            <section className="bg-[#f9f6f3] py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#1a1a1a] mb-6">Latest Insights</h1>
                    <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed italic">
                        Stay informed on how artificial intelligence is changing the way we find leads and grow businesses.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {posts.map((post, idx) => (
                            <a key={idx} href={post.url} target="_blank" rel="noopener noreferrer" className="flex flex-col group cursor-pointer">
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
                                    Read Article <span className="ml-2 text-xl group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </a>
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

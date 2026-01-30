import { Navbar, Footer } from '@/components/Layout';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const posts = [
        { slug: 'ai-marketing-guide-2025' },
        { slug: 'chatbot-best-practices-2025' },
        { slug: 'roi-ai-voice-receptionist' },
        { slug: 'google-business-optimization-guide' },
        { slug: 'email-automation-strategies' },
        { slug: 'social-media-content-strategy' }
    ];
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = getPost(params.slug);
    if (!post) return { title: 'Post Not Found' };
    
    return {
        title: `${post.title} | Amp AI Blog`,
        description: post.excerpt,
    };
}

function getPost(slug: string) {
    const posts: Record<string, any> = {
        'ai-marketing-guide-2025': {
            title: 'The Complete Guide to AI-Powered Marketing in 2025',
            excerpt: 'Discover how AI is transforming marketing and how you can leverage it for your business. From chatbots to content creation, learn what actually works.',
            category: 'Marketing',
            date: '2025-01-15',
            readTime: '8 min read',
            author: 'Amp AI Team'
        },
        'chatbot-best-practices-2025': {
            title: 'Chatbot Best Practices for 2025: What Actually Converts',
            excerpt: 'Learn how to set up AI chatbots that actually convert visitors into customers, not just answer questions.',
            category: 'Technology',
            date: '2025-01-10',
            readTime: '6 min read',
            author: 'Amp AI Team'
        },
        'roi-ai-voice-receptionist': {
            title: 'Calculate the ROI of AI Voice Receptionists',
            excerpt: 'Find out how much you could save by implementing an AI phone system. Real numbers from real businesses.',
            category: 'Business',
            date: '2025-01-05',
            readTime: '7 min read',
            author: 'Amp AI Team'
        },
        'google-business-optimization-guide': {
            title: 'The Ultimate Google Business Optimization Guide',
            excerpt: 'Learn how to dominate local search and get more customers finding your business on Google Maps.',
            category: 'Local SEO',
            date: '2024-12-28',
            readTime: '10 min read',
            author: 'Amp AI Team'
        },
        'email-automation-strategies': {
            title: 'Email Automation Strategies That Actually Get Results',
            excerpt: 'Stop sending generic newsletters. Learn how to create automated sequences that nurture leads and drive sales.',
            category: 'Email Marketing',
            date: '2024-12-20',
            readTime: '9 min read',
            author: 'Amp AI Team'
        },
        'social-media-content-strategy': {
            title: 'Social Media Content Strategy for Service Businesses',
            excerpt: 'How to create content that attracts customers without spending all day on social media.',
            category: 'Social Media',
            date: '2024-12-15',
            readTime: '8 min read',
            author: 'Amp AI Team'
        }
    };
    return posts[slug];
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getPost(params.slug);
    
    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white font-poppins">
            <Navbar />
            
            <article>
                <section className="bg-[#f9f6f3] py-20">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <Link href="/blog" className="text-indigo-600 font-bold text-sm uppercase tracking-widest hover:underline mb-6 inline-block">
                            ← Back to Blog
                        </Link>
                        <div className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">{post.category}</div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6 leading-tight">{post.title}</h1>
                        <div className="flex items-center gap-6 text-gray-500 text-sm">
                            <span>{post.date}</span>
                            <span>{post.readTime}</span>
                            <span>{post.author}</span>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <div className="prose prose-lg prose-indigo max-w-none">
                             {params.slug === 'ai-marketing-guide-2025' && (
                                <>
                                    <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                                        AI has changed how businesses handle marketing. If you're still doing things the old way, you're already behind. Here's what you need to know about AI-powered marketing in 2025.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Numbers Don't Lie</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Let me give you the bottom line up front: businesses using AI in their marketing are seeing serious results. We're talking:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                                        <li>50% higher conversion rates—on the same traffic</li>
                                        <li>40% reduction in what it costs to get a new customer</li>
                                        <li>3x improvement in lead quality (fewer tire-kickers, more buyers)</li>
                                        <li>Campaigns that go live in days instead of weeks</li>
                                    </ul>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        But here's the catch—not all AI tools are the same. A lot of companies slap "AI" on their marketing and call it a day. What we're talking about here is actual machine learning that gets smarter over time, not some basic automation script that does the same thing over and over.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What AI Actually Does for Marketing</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Think of AI as your tireless employee who never calls in sick, never takes vacation, and actually enjoys doing the repetitive stuff you'd rather not touch.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Capturing Leads While You Sleep</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Remember the last time you checked your website stats and saw 200 visitors but zero leads? Yeah, us too. AI chatbots have evolved past those annoying pop-ups that ask "How can I help?" and then give you a generic answer. Modern ones understand context, ask qualifying questions, and can actually book appointments on your calendar. While you're asleep. Or watching Netflix. Or doing anything other than staring at your website.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Content That Doesn't Sound Like It Was Written by a Robot</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Here's a secret: the best AI content starts with AI but gets polished by a human. You get the speed of automated drafts with the nuance of human editing. Blog posts, email sequences, social media content—it's all faster and cheaper than starting from scratch.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Phone Coverage Without Hiring Someone</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Missed calls are missed money. An AI voice receptionist handles calls 24/7, answers common questions, routes calls to the right person, and books appointments. It sounds so natural that most callers don't realize they're talking to AI until—well, they never realize it.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Mistakes That Will Kill Your Results</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        <strong>Treating AI as a replacement:</strong> Here's the thing—AI isn't going to replace marketers. It's going to replace marketers who don't use AI. But the best results come from humans and AI working together, not AI trying to do everything solo.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        <strong>Forgetting the human element:</strong> Your customers didn't suddenly become robots. They still want to feel heard. Use AI for the routine stuff so your team can focus on building actual relationships.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        <strong>Doing too much at once:</strong> Pick one pain point—maybe it's missed calls, maybe it's slow follow-ups—and fix that first. Master it before moving on. Quality beats quantity every single time.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Actually Get Started</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Start small. Figure out where you're bleeding the most money or time. Is it calls that go unanswered? Follow-ups that never happen? Content that never gets published? Pick one problem, implement an AI solution, measure the results, then move on to the next one.
                                    </p>
                                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-8 rounded-r-lg">
                                        <p className="text-indigo-900 font-bold mb-2">The Bottom Line</p>
                                        <p className="text-indigo-800">AI marketing isn't going away. It's the new normal. The real question isn't whether to use it—it's how fast you can get it implemented.</p>
                                    </div>
                                </>
                            )}
                             {params.slug === 'chatbot-best-practices-2025' && (
                                <>
                                    <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                                        Let me be straight with you: most chatbots are hot garbage. They're either too basic to help anyone or so annoying that visitors bounce immediately. But the right chatbot? It can capture leads while you sleep. Here's how to build one that actually works.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Most Chatbots Fail</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Here's the problem: companies build chatbots to answer questions, not to capture leads. They set up a defensive system that waits for visitors to make the first move. But that's not how conversions happen.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        A conversion-focused chatbot is different. It's proactive. It engages visitors, qualifies them, and pushes them toward booking a call or making a purchase.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Actually Works</h2>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Know Who You're Talking To</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Your chatbot should know who's visiting. Connect it to your CRM or at least capture basic info upfront. When someone returns to your site, the bot should greet them by name and reference what they looked at last time. Personalization works—it's not just a buzzword.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Don't Wait—Engage First</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        The best chatbots don't wait for visitors to make the first move. They spot signals that someone might be interested and reach out. Someone lingering on your pricing page for 2 minutes? That's a hot lead. Someone checking out your contact page? They're ready to buy. Don't let them leave without engaging.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Qualify in the Conversation</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Stop just collecting email addresses. Your chatbot should ask about budget, timeline, and needs while chatting. When your sales team follows up, they'll know exactly whether this is a hot lead or someone just browsing.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Give Before You Ask</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        People won't give you their email for nothing. Offer something valuable first—a discount code, a free guide, a calculator, a relevant tip. Something that makes them think "oh, this is actually useful" before you ask for anything.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Pitfalls That'll Ruin Your Results</h2>
                                    <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                                        <li><strong>Generic bots:</strong> If your bot sounds like every other bot on the internet, visitors will ignore it. Match your brand voice.</li>
                                        <li><strong>No escape route:</strong> Some people absolutely hate chatbots. Make it dead obvious how to talk to a real human.</li>
                                        <li><strong>Ignoring drop-offs:</strong> When someone abandons a conversation, that's data. Why'd they leave? Fix it.</li>
                                        <li><strong>One-and-done testing:</strong> A/B test your scripts constantly. Small changes = big results.</li>
                                    </ul>
                                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-8 rounded-r-lg">
                                        <p className="text-indigo-900 font-bold mb-2">Bottom Line</p>
                                        <p className="text-indigo-800">A great chatbot isn't customer service—it's a sales machine. Treat it like one.</p>
                                    </div>
                                </>
                            )}
                            {params.slug === 'roi-ai-voice-receptionist' && (
                                <>
                                    <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                                        Missed calls are missed revenue. For most businesses, each missed call represents anywhere from $100 to $500 in lost potential business. Yet many companies still rely on voicemail, missed call text-back systems, or simply hope their phones get answered.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The True Cost of Missed Calls</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Before you can understand the ROI of an AI receptionist, you need to understand what missed calls actually cost you.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Direct Cost Calculation</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Take your average deal value and multiply by your close rate. This tells you how much each lead is worth to you.
                                    </p>
                                    <div className="bg-gray-100 p-6 rounded-xl mb-8">
                                        <p className="font-mono text-gray-700">Example: $3,000 average deal × 25% close rate = $750 per lead</p>
                                        <p className="text-gray-600 mt-2">If you miss 10 calls per week from potential customers, that is $7,500 per week in potential revenue walking out the door.</p>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Indirect Costs</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                                        <li><strong>Reputation damage:</strong> 80% of callers will not call back or leave a voicemail. They will go to your competitor.</li>
                                        <li><strong>Staff frustration:</strong> Existing team members waste time checking voicemail and playing phone tag.</li>
                                        <li><strong>Marketing waste:</strong> Every dollar spent on driving calls that do not get answered is money down the drain.</li>
                                    </ul>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What an AI Receptionist Actually Costs</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        AI voice receptionists typically cost between $149 and $399 per month, depending on features and call volume. This usually includes unlimited calls, custom greeting and message handling, calendar integration for appointment scheduling, lead qualification and capture, after-hours coverage, and call logging and transcripts.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Example ROI Scenarios</h2>
                                    <div className="space-y-6 mb-8">
                                        <div className="bg-gray-50 p-6 rounded-xl">
                                            <h4 className="font-bold text-gray-900 mb-2">Local Service Business</h4>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                <li>Average deal value: $2,000</li>
                                                <li>Current missed calls per week: 15</li>
                                                <li>Close rate on leads: 20%</li>
                                                <li><strong>Monthly lost revenue: $21,600</strong></li>
                                                <li><strong>Monthly ROI: $21,351 (98.8% return)</strong></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-xl">
                                            <h4 className="font-bold text-gray-900 mb-2">Professional Services Firm</h4>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                <li>Average deal value: $5,000</li>
                                                <li>Current missed calls per week: 8</li>
                                                <li>Close rate on leads: 30%</li>
                                                <li><strong>Monthly lost revenue: $24,000</strong></li>
                                                <li><strong>Monthly ROI: $23,651 (98.5% return)</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Common Objections—Answered</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        <strong>"But I prefer to talk to customers myself"</strong> — AI receptionists do not replace you—they screen and qualify calls so you only talk to the people who actually need your attention.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        <strong>"Callers will hate talking to a robot"</strong> — Modern AI voice systems are nearly indistinguishable from humans. Most callers do not realize they are talking to AI.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        <strong>"It is too expensive for my business"</strong> — Compare the cost to what missed calls are costing you. For almost any business that receives more than 5-10 calls per week from prospects, an AI receptionist pays for itself.
                                    </p>
                                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-8 rounded-r-lg">
                                        <p className="text-indigo-900 font-bold mb-2">The Bottom Line</p>
                                        <p className="text-indigo-800">Every call you miss is a opportunity you will never get back. An AI voice receptionist is one of the highest-ROI investments you can make in your business.</p>
                                    </div>
                                </>
                            )}
                            {params.slug === 'google-business-optimization-guide' && (
                                <>
                                    <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                                        Your Google Business profile is the most powerful marketing tool you have—and most businesses are barely using it. If you want more local customers finding you, this guide is for you.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Google Business Matters More Than Your Website</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        When someone searches for "plumber near me" or "best dentist in Nashua," what do they see? Three things appear at the top: the Google Business map pack. If you are not in there, you do not exist to 80% of potential customers.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Your website might be great, but it does not matter if people find your competitors first. Google Business is free, it is powerful, and most businesses are completely neglecting it.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The 5 Pillars of Google Business Success</h2>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Complete Your Profile 100%</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Google favors fully completed profiles. Every single field matters: business name, address, phone number, website, hours, services, products, and attributes. Fill it all out, and fill it out accurately.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Get More Reviews—Fast</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Reviews are the #1 ranking factor for local search. But getting reviews is not about asking nicely—it is about making it stupidly easy. Set up automated review requests that go out 24 hours after a job is complete.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Target 50+ reviews in your first 90 days. More is better, but 50 gives you social proof and starts building momentum.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Post Every Single Week</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Google Posts are like social media posts but specifically for Google Business. Post weekly about promotions, events, new services, or just helpful tips. Each post keeps your profile active and signals to Google that you are an engaged business.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Add Photos—Lots of Them</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Businesses with photos get 42% more requests for directions and 35% more clicks to their website. Upload photos of your team, your work, your office, and your products. Update them regularly.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Optimize Your Description</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Your business description should include your main keywords naturally. If you are a plumber, mention plumbing services in your area. If you are a dentist, mention dental services and the neighborhoods you serve.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Common Mistakes That Kill Rankings</h2>
                                    <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                                        <li><strong>Keyword stuffing in your business name:</strong> Google will penalize this. Use your real business name.</li>
                                        <li><strong>Ignoring negative reviews:</strong> Respond to every review, good or bad. It shows you care.</li>
                                        <li><strong>Wrong category:</strong> Choose the most specific category that describes what you do.</li>
                                        <li><strong>Spam from competitors:</strong> Report spam listings that are trying to outrank you.</li>
                                    </ul>
                                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-8 rounded-r-lg">
                                        <p className="text-indigo-900 font-bold mb-2">The Bottom Line</p>
                                        <p className="text-indigo-800">Google Business optimization is the highest-ROI marketing activity for local businesses. Most competitors are not doing it right. If you do, you win.</p>
                                    </div>
                                </>
                            )}
                            {params.slug === 'email-automation-strategies' && (
                                <>
                                    <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                                        Email marketing has the highest ROI of any marketing channel—$42 for every $1 spent. But most businesses are sending newsletters that nobody reads. Here is how to do it right.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Newsletters Fail</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        The average newsletter open rate across all industries is around 22%. That means 78% of your emails are being ignored. Why? Because most newsletters are:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                                        <li>Too infrequent to build habit</li>
                                        <li>Too focused on you, not the reader</li>
                                        <li>Too generic and impersonal</li>
                                        <li>Too focused on selling, not helping</li>
                                    </ul>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Better Approach: Automated Sequences</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Instead of sending newsletters, build automated email sequences that nurture leads over time. Each email should provide value, build trust, and move the reader closer to becoming a customer.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Welcome Sequence</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        When someone joins your email list, they are hot. Capture that interest with a 5-7 email welcome sequence over 2 weeks:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                                        <li>Email 1: Deliver your lead magnet and say thanks</li>
                                        <li>Email 2: Share your story and why you do what you do</li>
                                        <li>Email 3: Show social proof—client results and testimonials</li>
                                        <li>Email 4: Educate—share valuable insights related to your offer</li>
                                        <li>Email 5: Make a soft offer for a consultation or call</li>
                                        <li>Email 6: Address common objections</li>
                                        <li>Email 7: Urgency—limited time offer or next steps</li>
                                    </ul>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Nurture Sequence</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        For leads who are not ready to buy, stay in touch with monthly value emails. Share tips, case studies, and insights. Keep your name top of mind without being pushy.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Metrics That Actually Matter</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Stop focusing on open rates. Track these instead:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                                        <li><strong>Click-through rate:</strong> Are people taking action?</li>
                                        <li><strong>Conversion rate:</strong> Are emails driving leads or sales?</li>
                                        <li><strong>List growth rate:</strong> Are you adding more subscribers than you are losing?</li>
                                        <li><strong>Revenue per email:</strong> What is the actual dollar impact?</li>
                                    </ul>
                                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-8 rounded-r-lg">
                                        <p className="text-indigo-900 font-bold mb-2">The Bottom Line</p>
                                        <p className="text-indigo-800">Email automation is not about sending more emails—it is about sending the right emails to the right people at the right time. Build sequences that nurture, and you will see your sales increase.</p>
                                    </div>
                                </>
                            )}
                            {params.slug === 'social-media-content-strategy' && (
                                <>
                                    <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                                        Social media for business is not about going viral. It is about showing up consistently, building trust, and staying top of mind with your ideal customers. Here is how to do it without spending all day on it.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Problem with Most Business Social Media</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Most businesses approach social media wrong. They try to be entertaining, chase trends, and post inconsistently. This leads to zero results and burnt-out business owners.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Social media for service businesses should be simple: demonstrate expertise, show your personality, and give people a reason to follow you.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The 3 Types of Content That Work</h2>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Educational Content</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Share your expertise. Answer common questions, explain how things work, give tips that help your ideal customer. This positions you as the expert and builds trust.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Example posts: "3 signs your HVAC system needs replacing," "What to expect during a dental cleaning," "Why your restaurant needs a food safety audit."
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Behind-the-Scenes Content</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        People do business with people, not companies. Show your team, your process, your office culture. This humanizes your business and builds connection.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Example posts: Team member introductions, day-in-the-life content, before/after transformations, office tours.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Social Proof Content</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Share reviews, testimonials, case studies, and success stories. Let your happy customers do the selling for you.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Example posts: Review screenshots with your response, case study summaries, client spotlight features.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Posting Formula</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Post 5 times per week minimum for visibility. Use this mix:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                                        <li>2 educational posts</li>
                                        <li>1 behind-the-scenes post</li>
                                        <li>1 social proof post</li>
                                        <li>1 promotional or offer post</li>
                                    </ul>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tools to Save Time</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Do not create content manually every day. Use scheduling tools to batch create content in 2-3 hours per month.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                                        <li><strong>Canva:</strong> Create graphics in minutes with templates</li>
                                        <li><strong>Buffer or Later:</strong> Schedule posts across platforms</li>
                                        <li><strong>Loom:</strong> Quick video content without production</li>
                                        <li><strong>ChatGPT:</strong> Draft captions and content ideas fast</li>
                                    </ul>
                                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-8 rounded-r-lg">
                                        <p className="text-indigo-900 font-bold mb-2">The Bottom Line</p>
                                        <p className="text-indigo-800">Social media does not have to be a time drain. Post consistently, provide value, and use tools to automate the process. Your future customers are looking for you—make sure you are there.</p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            </article>

            <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-white mb-6">Ready to Get Results?</h2>
                    <p className="text-indigo-100 text-xl mb-8 max-w-2xl mx-auto">
                        Let us help you implement AI-powered marketing that actually works.
                    </p>
                    <Link href="/contact" className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                        Book a Free Call
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}

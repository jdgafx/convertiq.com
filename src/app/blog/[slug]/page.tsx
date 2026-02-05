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
            excerpt: "We've put together what we actually know about using AI in marketing. What works, what doesn't, and what we think you should try first.",
            category: 'Marketing',
            date: '2025-01-15',
            readTime: '8 min read',
            author: 'Amp AI Team'
        },
        'chatbot-best-practices-2025': {
            title: 'Chatbot Best Practices for 2025: What Actually Converts',
            excerpt: "Most chatbots just annoy people. We've looked at what makes the difference between one that helps and one that drives visitors away.",
            category: 'Technology',
            date: '2025-01-10',
            readTime: '6 min read',
            author: 'Amp AI Team'
        },
        'roi-ai-voice-receptionist': {
            title: 'Calculate the ROI of AI Voice Receptionists',
            excerpt: "We've done the math on what missed calls actually cost. The numbers might surprise you.",
            category: 'Business',
            date: '2025-01-05',
            readTime: '7 min read',
            author: 'Amp AI Team'
        },
        'google-business-optimization-guide': {
            title: 'The Ultimate Google Business Optimization Guide',
            excerpt: "Your Google listing matters more than you think. Here's how to make it work for you.",
            category: 'Local SEO',
            date: '2024-12-28',
            readTime: '10 min read',
            author: 'Amp AI Team'
        },
        'email-automation-strategies': {
            title: 'Email Automation Strategies That Actually Get Results',
            excerpt: "Newsletters are easy to ignore. Automated sequences aren't. The difference matters.",
            category: 'Email Marketing',
            date: '2024-12-20',
            readTime: '9 min read',
            author: 'Amp AI Team'
        },
        'social-media-content-strategy': {
            title: 'Social Media Content Strategy for Service Businesses',
            excerpt: "You don't need to post all day. Here's a simple system that takes a couple hours a month.",
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
                                        Look, AI in marketing isn't going away. But let's be honest—there's way too much noise out there. We wanted to cut through the hype and show you what's actually working on the ground right now.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What the data is actually showing us</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Businesses that have already jumped on the AI train aren't just seeing "neat" features. They're seeing real, measurable growth. We're talking about results that actually hit the bottom line:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                                        <li>50% higher conversion rates—without spending more on traffic</li>
                                        <li>40% drop in what it costs to acquire a new customer</li>
                                        <li>3x better lead quality (less time wasted on tire-kickers)</li>
                                        <li>Getting campaigns live in days, not weeks</li>
                                    </ul>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        But here's the thing: not all AI tools are built the same. A lot of companies are just slapping an "AI" label on basic automation and calling it a day. We're talking about actual machine learning that gets smarter the more you use it, not just a script that repeats the same mistake over and over.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">How AI actually moves the needle</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Think of AI as your most reliable employee. It never calls in sick, doesn't need a vacation, and actually likes doing the boring, repetitive tasks that usually drain your team's energy.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Capturing leads while you're offline</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Think about the last time you saw 200 visitors on your site but nobody filled out a form. It's frustrating, right? Modern AI chatbots have moved past those annoying pop-ups. They understand what people are looking for, qualify them on the spot, and can even book meetings directly on your calendar while you're asleep or out for dinner.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Content that actually sounds human</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Here's a secret: the best AI-assisted content doesn't just come out of a machine and go live. It starts with AI for the heavy lifting and gets polished by a human for that final 10%. You get the speed of automation with the nuance of a real expert. It's how you scale your blog and emails without losing your voice.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Handling phones without the overhead</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Every missed call is money left on the table. An AI voice receptionist can handle your calls 24/7, answer common questions, and book appointments. It's so smooth that most callers won't even realize they aren't talking to a person—they'll just be happy they didn't get sent to voicemail.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Where people usually mess this up</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        <strong>Trying to replace humans entirely:</strong> AI isn't going to replace your team, but your team *will* be replaced by teams that know how to use AI. The magic happens when your people use AI to handle the routine stuff so they can focus on high-level strategy and relationships.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        <strong>Losing the personal touch:</strong> Your customers aren't robots. They still want to feel like they're dealing with a real business that cares. Don't let the tech get in the way of the relationship.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        <strong>Going too big, too fast:</strong> Don't try to automate everything at once. Pick the one area where you're losing the most time or money—maybe it's missed calls or slow lead follow-up—and fix that first.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to get the ball rolling</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Start where the pain is. Look at your stats: where are you bleeding money? Are you missing calls? Are leads going cold because you're too busy to call them back? Pick that one problem, plug in an AI solution, and watch the numbers. Once it's working, move to the next thing.
                                    </p>
                                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-8 rounded-r-lg">
                                        <p className="text-indigo-900 font-bold mb-2">Here's the thing</p>
                                        <p className="text-indigo-800">AI in marketing isn't a "future" thing anymore—it's the standard. The question isn't whether you should use it, it's how much more time you're willing to waste before you do.</p>
                                    </div>
                                </>
                            )}
                             {params.slug === 'chatbot-best-practices-2025' && (
                                <>
                                    <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                                        Let's be straight: most chatbots are terrible. They're either too basic to be helpful or so annoying that visitors bounce the second they see the bubble. But a bot that's built right? That's a sales machine that works while you sleep. Here's how to build one people actually like using.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why most bots just don't work</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Most companies build bots to answer questions, not to drive business. They set up a system that just sits there and waits. But that's not how you get customers.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        A bot that actually converts is proactive. It doesn't just wait for a question; it engages the visitor, figures out if they're a fit, and pushes them toward the next step—whether that's booking a call or buying a product.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What's actually getting results</h2>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Knowing who's on the other side</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Your bot should know who it's talking to. If it's a returning customer, it shouldn't treat them like a stranger. Connect it to your data so it can greet them by name and remember what they were looking at last time. It's not just a "nice to have"—personalization is what makes people stay engaged.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Engaging at the right moment</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        The best bots aren't passive. They look for signals. If someone's been staring at your pricing page for three minutes, they probably have a question. Don't wait for them to find your contact page—have the bot reach out and offer help right then and there.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Qualifying as you go</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Stop just asking for an email address. Use the conversation to figure out their budget, their timeline, and what they actually need. By the time your sales team sees the lead, they'll know exactly how to handle it.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Giving value before asking for info</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Nobody wants to give up their contact info for nothing. Give them a reason to talk. Offer a quick guide, a discount, or a useful tip first. When people feel like they're getting value, they're much more likely to give you their details.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Avoid these traps</h2>
                                    <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                                        <li><strong>Sounding like a machine:</strong> If your bot is dry and robotic, people will ignore it. Give it some personality that matches your brand.</li>
                                        <li><strong>Hiding the humans:</strong> Some people just want to talk to a person. Don't hide the "talk to human" option—make it easy to find.</li>
                                        <li><strong>Ignoring the data:</strong> If people are dropping off halfway through a chat, there's a reason. Look at the transcripts and fix the friction points.</li>
                                        <li><strong>Setting it and forgetting it:</strong> You need to keep testing. Change your openers, tweak your questions, and see what converts better.</li>
                                    </ul>
                                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-8 rounded-r-lg">
                                        <p className="text-indigo-900 font-bold mb-2">The reality is</p>
                                        <p className="text-indigo-800">A great bot isn't just "customer support"—it's a 24/7 sales rep that never gets tired. If you aren't using one, you're leaving money on the table.</p>
                                    </div>
                                </>
                            )}
                             {params.slug === 'roi-ai-voice-receptionist' && (
                                <>
                                    <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                                        Missed calls aren't just an annoyance—they're missed revenue. For most businesses, every time you miss a call, you're losing anywhere from $100 to $500 in potential business. If you're still relying on voicemail or missed-call text-backs, you're leaving money on the table.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What those missed calls are costing you</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Before we talk about what an AI receptionist costs, we have to look at what you're already paying just by letting calls go to voicemail.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Doing the math on your leads</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Take your average deal value and multiply it by your close rate. That's what a lead is actually worth to you.
                                    </p>
                                    <div className="bg-gray-100 p-6 rounded-xl mb-8">
                                        <p className="font-mono text-gray-700">Example: $3,000 average deal × 25% close rate = $750 per lead</p>
                                        <p className="text-gray-600 mt-2">If you're missing just 10 calls a week from new prospects, that's $7,500 in potential revenue walking away every single week. It adds up fast.</p>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The hidden price you're paying</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                                        <li><strong>Damage to your reputation:</strong> 80% of callers won't call back or leave a message. They'll just call the next guy on the Google list.</li>
                                        <li><strong>Team burnout:</strong> Your staff's time is wasted playing phone tag and checking old voicemails instead of closing deals.</li>
                                        <li><strong>Marketing dollars down the drain:</strong> Every dollar you spend on ads is wasted if nobody answers the phone when the ads work.</li>
                                    </ul>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What it actually costs</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Most AI voice receptionists will run you between $149 and $399 a month. For that, you get 24/7 coverage, custom greetings, appointment booking, and instant lead qualification. When you compare that to the cost of one missed lead, it's a no-brainer.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Real-world scenarios</h2>
                                    <div className="space-y-6 mb-8">
                                        <div className="bg-gray-50 p-6 rounded-xl">
                                            <h4 className="font-bold text-gray-900 mb-2">Local Service Business</h4>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                <li>Average deal value: $2,000</li>
                                                <li>Missed calls per week: 15</li>
                                                <li>Close rate: 20%</li>
                                                <li><strong>Monthly lost revenue: $21,600</strong></li>
                                                <li><strong>Monthly ROI: $21,351 (That's a massive return)</strong></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-xl">
                                            <h4 className="font-bold text-gray-900 mb-2">Professional Services Firm</h4>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                <li>Average deal value: $5,000</li>
                                                <li>Missed calls per week: 8</li>
                                                <li>Close rate: 30%</li>
                                                <li><strong>Monthly lost revenue: $24,000</strong></li>
                                                <li><strong>Monthly ROI: $23,651 (Almost 100x return)</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What people usually ask</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        <strong>"Don't customers hate talking to robots?"</strong> — Here's the truth: they hate voicemail way more. Modern AI sounds so natural that most people don't even realize they aren't talking to a live person until the call is over.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        <strong>"I'd rather talk to them myself."</strong> — Great! AI lets you do that. It screens out the spam and simple questions so you only pick up when it's a hot lead ready to buy.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        <strong>"It seems expensive."</strong> — Look at the math again. If one lead is worth $750, and the system costs $300 a month, it pays for itself with just one answered call that you would've otherwise missed.
                                    </p>
                                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-8 rounded-r-lg">
                                        <p className="text-indigo-900 font-bold mb-2">What it comes down to</p>
                                        <p className="text-indigo-800">Every missed call is an opportunity you'll never get back. An AI receptionist is probably the highest-ROI investment you can make in your business right now.</p>
                                    </div>
                                </>
                            )}
                            {params.slug === 'google-business-optimization-guide' && (
                                <>
                                    <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                                        Your Google Business profile is the most powerful tool in your marketing arsenal—and I'd bet you're barely using it. If you want more local customers finding you, this is the first thing you need to fix.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why your listing beats your website</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        When someone searches for a service "near me," they don't look at the websites first. They look at the map. If you aren't in that top three, you don't exist to 80% of your potential customers.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Your website is important, but your Google listing is where the actual clicks and calls happen. It's free, it's powerful, and it's what your competitors are neglecting.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to win with Google Business</h2>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Fill out everything—literally everything</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Google loves data. If there's a field for it, fill it in. Business name, address, hours, services, products—every detail matters. The more info you give Google, the more they trust you enough to show you to customers.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Get reviews like your business depends on it</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Reviews are the #1 thing that moves you up the rankings. But don't just wait for them to happen. You need an automated system that asks for a review the second a job is done. Your goal should be at least 50 solid reviews in your first 90 days.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Post once a week (don't skip this)</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Google Posts are like social media for your map listing. Post a tip, a photo of a job, or a quick update once a week. It tells Google you're still active and open for business.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Photos are your best friend</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Profiles with fresh photos get way more clicks. Show your team, your office, and your actual work. It builds trust before they even call you.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Use your keywords in the description</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Write your description for humans, but don't forget to mention what you actually do and where you do it. If you're a plumber in Boston, make sure those words are in there.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What's holding you back</h2>
                                    <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                                        <li><strong>Keyword stuffing:</strong> Don't try to cheat the system by putting keywords in your business name. Google will just ban you.</li>
                                        <li><strong>Ignoring bad reviews:</strong> Everyone gets a bad one eventually. The key is how you respond. It shows you're a real business that cares.</li>
                                        <li><strong>Picking the wrong category:</strong> Be specific. Don't just pick "Contractor" if you're actually a "Roofing Contractor."</li>
                                    </ul>
                                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-8 rounded-r-lg">
                                        <p className="text-indigo-900 font-bold mb-2">Here's the play</p>
                                        <p className="text-indigo-800">Optimizing your Google listing is the fastest way to get more calls without spending a dime on ads. If you do this right, you'll beat the competition every time.</p>
                                    </div>
                                </>
                            )}
                             {params.slug === 'email-automation-strategies' && (
                                <>
                                    <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                                        You've probably heard that email marketing has the highest ROI of any channel—about $42 for every $1 spent. But if you're just sending out a monthly newsletter that nobody reads, you aren't seeing those results. Here's how to actually make email work for you.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why your newsletter isn't working</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        The average newsletter has an open rate of about 22%. That means 78% of your list is just deleting your emails without even looking at them. It's usually because newsletters are:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                                        <li>Sent too rarely for people to remember who you're</li>
                                        <li>Focused on your business updates instead of the customer's problems</li>
                                        <li>Generic and boring</li>
                                        <li>Purely focused on selling instead of providing value</li>
                                    </ul>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The better way to handle email</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Instead of trying to come up with a new newsletter every month, build automated sequences that do the work for you. These are emails that trigger based on what a customer does, and they're designed to build trust over time.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Welcome Sequence</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        When someone first joins your list, that's when they're most interested. Don't waste that momentum. Send a 5-7 email sequence over the first two weeks:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                                        <li>Email 1: Give them whatever you promised (like a guide or discount) and say hi.</li>
                                        <li>Email 2: Tell them your story—why do you do what you do?</li>
                                        <li>Email 3: Show them you're the real deal with some client results.</li>
                                        <li>Email 4: Teach them something useful related to your service.</li>
                                        <li>Email 5: Invite them to a consultation or a call.</li>
                                        <li>Email 6: Answer the questions they're probably already thinking.</li>
                                        <li>Email 7: Give them a clear next step to work with you.</li>
                                    </ul>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Nurture Sequence</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        For the people who aren't ready to buy yet, stay on their radar with monthly value emails. Share a quick tip or a case study. Keep it simple and helpful, so when they *are* ready, you're the first person they think of.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What you should actually track</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Stop obsessing over open rates. They don't tell the whole story. Focus on these instead:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                                        <li><strong>Click-through rate:</strong> Are people actually clicking your links?</li>
                                        <li><strong>Conversion rate:</strong> Are those clicks turning into leads or sales?</li>
                                        <li><strong>Revenue per email:</strong> How much money is each email actually making you?</li>
                                    </ul>
                                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-8 rounded-r-lg">
                                        <p className="text-indigo-900 font-bold mb-2">The main takeaway</p>
                                        <p className="text-indigo-800">Email automation isn't about spamming people. It's about sending the right message at the right time. Build these systems once, and they'll generate leads for you for years.</p>
                                    </div>
                                </>
                            )}
                            {params.slug === 'social-media-content-strategy' && (
                                <>
                                    <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                                        Social media for your business isn't about going viral or being an "influencer." It's about showing up consistently so that when someone needs your service, you're the first name they remember. Here's how to do it without losing your mind.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why most business socials are a waste of time</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Most business owners treat social media like a chore. They post randomly, chase trends that don't matter, and get frustrated when it doesn't lead to sales. That's a recipe for burnout.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        If you're a service business, your social strategy should be dead simple: show you know your stuff, show you're a real person, and show that you get results for your clients.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What people actually want to see</h2>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Helpful tips and expertise</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Share what you know. Answer the questions your customers ask you every day. This is how you prove you're the expert. If you're an HVAC guy, tell them three signs their system is about to die. If you're a dentist, explain why their teeth are sensitive. Simple stuff works best.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. The "Real" you</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        People buy from people. Show your team, show your office, show a "day in the life" of a project. It humanizes your brand and makes you feel more approachable than some faceless corporation.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Proof that you win</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Let your happy customers do the talking. Post screenshots of reviews, before-and-after photos, or a quick summary of a successful project. Social proof is the strongest sales tool you have.
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">How often you should really post</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Aim for five times a week to keep your visibility up. Try this mix:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                                        <li>2 educational/tip posts</li>
                                        <li>1 behind-the-scenes post</li>
                                        <li>1 social proof/review post</li>
                                        <li>1 direct offer or promotion</li>
                                    </ul>
                                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to get your time back</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Don't try to think of what to post every single morning. Spend 2-3 hours once a month to plan and schedule everything. Use tools like Canva for your graphics and Buffer to schedule them. It makes social media a "once a month" task instead of a "every day" headache.
                                    </p>
                                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-8 rounded-r-lg">
                                        <p className="text-indigo-900 font-bold mb-2">What we've learned</p>
                                        <p className="text-indigo-800">Social media isn't a silver bullet, but it's a powerful way to stay top-of-mind. Keep it simple, keep it helpful, and keep it consistent. Your future customers are watching.</p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            </article>

            <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-white mb-6">Ready to get results?</h2>
                    <p className="text-indigo-100 text-xl mb-8 max-w-2xl mx-auto">
                        Let's help you implement AI-powered marketing that actually works.
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

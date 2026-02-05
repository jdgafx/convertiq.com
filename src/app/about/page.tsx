import { Navbar, Footer } from '@/components/Layout';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white font-poppins">
            <Navbar />

            <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">About Amp AI</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        We help businesses find more leads and close more sales using technology that actually delivers.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🎯</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Results-First</h3>
                            <p className="text-gray-600">Honestly? We're obsessed with outcomes, not activity. Every dollar you spend should bring you more back.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No-Nonsense</h3>
                            <p className="text-gray-600">Straight talk, clear pricing, honest timelines. We don't do corporate speak or hidden fees. Period.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Fast & Flexible</h3>
                            <p className="text-gray-600">We move fast and adapt to your needs. Seriously, no bureaucracy, no endless approvals.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Amp AI was built by the same dedicated team behind <a href="https://www.primemarketingexperts.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Prime Marketing Experts</a>. 
                            Led by Michael Krieger, our mission remains the same: helping businesses grow through smart, results-driven strategies.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Michael Krieger started Prime Marketing Experts back in 2017. He's from Boston, went to UMass Lowell, and spent years helping hundreds of small businesses figure out how to grow. 
                            Along the way, he noticed something: AI was getting good enough to make marketing faster and way more affordable for regular businesses.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Amp AI is what came next. We took everything we learned at Prime and mixed it with AI tools that actually work—the kind that get you qualified leads in days, not months. 
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            We now work with over 500 businesses across the country. Doesn't matter if you're a plumber or a law firm—you get the same attention to detail and focus on results that Michael's been about since day one.
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">The Amp AI Difference</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {[
                                { icon: "💸", title: "Fair Pricing", desc: "You see exactly what you're paying. No surprise fees, and you can walk away whenever." },
                                { icon: "📈", title: "Measurable Results", desc: "We track every single lead. You'll always know if your money's actually working." },
                                { icon: "🚀", title: "Fast Setup", desc: "Most of our stuff goes live in about a week. No months of waiting around." },
                                { icon: "💬", title: "Real Support", desc: "Got a question? Just reach out. You talk to actual people who know your account." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <span className="text-2xl">{item.icon}</span>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10">
                            <Link href="/contact" className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-colors">
                                Let us Get to Work →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { quote: "Amp AI finally fixed our lead generation problem. We went from 10 leads a month to over 100 in just 8 weeks. The chatbot alone captures dozens of leads while we sleep.", author: "Mike R.", company: "HVAC Company Owner" },
                            { quote: "We've worked with plenty of agencies, but none delivered results this fast. We saw more patient inquiries in the first month than we did all last year.", author: "Sarah L.", company: "Dental Practice" },
                            { quote: "We went from being invisible on Google to dominating the local map pack. Our phone hasn't stopped ringing with reservation inquiries.", author: "James T.", company: "Local Restaurant Owner" },
                            { quote: "The AI voice receptionist pays for itself every single month. We used to miss 20% of our calls. Now every single one gets answered professionally, 24/7.", author: "Amanda K.", company: "Law Firm" },
                            { quote: "Email automation changed our business. We were spending hours every week on manual follow-ups. Now it happens automatically, and our close rate has increased by 40%.", author: "David M.", company: "Real Estate Agency" },
                            { quote: "The landing page they built for us generated $47,000 in its first month. Nope, not a typo. Best marketing investment we've ever made, period.", author: "Jennifer P.", company: "E-commerce Business" }
                        ].map((testimonial, idx) => (
                            <div key={idx} className="bg-gray-800 rounded-2xl p-8 text-left">
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span key={star} className="text-amber-400 text-xl">★</span>
                                    ))}
                                </div>
                                <p className="text-lg text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                                <div className="border-t border-gray-700 pt-4">
                                    <p className="text-white font-bold">{testimonial.author}</p>
                                    <p className="text-indigo-400 text-sm">{testimonial.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm">Success Stories</span>
                        <h2 className="text-4xl font-black text-gray-900 mt-4 mb-6">Case Studies</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Actual numbers from businesses we've worked with. No fluff.</p>
                    </div>
                    <div className="space-y-16">
                        {[
                            {
                                client: "HVAC Company",
                                story: "This HVAC company was getting maybe 15 leads a month from their website. Pretty much lived off referrals and word of mouth.",
                                solution: "We set up an AI chatbot that catches leads around the clock, fixed up their Google Business profile, and built landing pages for the specific areas they serve.",
                                result: "Eight weeks later? Over 100 leads a month. That's a 567% jump. Their cost per lead dropped 62%, and people now book appointments straight through the bot.",
                                testimonial: "I was skeptical at first, but these guys delivered. Our phone has not stopped ringing since day one."
                            },
                            {
                                client: "Dental Practice",
                                story: "Brand new dental practice. They needed patients fast, kept dealing with no-shows, and had zero systems for getting reviews.",
                                solution: "We put in an AI phone system that handles scheduling, plus automated emails to follow up with new patients and ask for reviews.",
                                result: "First month: 47 new patient appointments. No-shows dropped 73%. And they hit 4.8 stars with 120+ reviews.",
                                testimonial: "The automation alone saves us 10+ hours per week. And the new patient flow is incredible."
                            }
                        ].map((study, idx) => (
                            <div key={idx} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-10 text-white">
                                        <div className="text-indigo-300 text-sm font-bold uppercase tracking-widest mb-4">Success Story</div>
                                        <h3 className="text-3xl font-black mb-6">{study.client}</h3>
                                        <div className="space-y-6">
                                            <p className="text-indigo-100 text-sm leading-relaxed">{study.story}</p>
                                            <div className="pt-4 border-t border-indigo-500/30">
                                                <h4 className="font-bold text-indigo-200 mb-2">The Solution</h4>
                                                <p className="text-indigo-100 text-sm">{study.solution}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-10">
                                        <h4 className="font-bold text-gray-900 mb-4">The Results</h4>
                                        <p className="text-gray-700 mb-8 leading-relaxed">{study.result}</p>
                                        <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-indigo-500">
                                            <p className="text-gray-700 italic mb-3">"{study.testimonial}"</p>
                                            <p className="text-indigo-600 font-bold text-sm">— {study.client}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

import { Navbar, Footer } from '@/components/Layout';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white font-poppins">
            <Navbar />

            <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">About ConvertIQ</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        We help businesses get more leads and make more sales. Simple as that.
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
                            <p className="text-gray-600">We are obsessed with outcomes, not activity. Every dollar you spend should bring you more back.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No-Nonsense</h3>
                            <p className="text-gray-600">Straight talk, clear pricing, honest timelines. We do not do corporate speak or hidden fees.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Fast & Flexible</h3>
                            <p className="text-gray-600">We move quickly and adapt to your needs. No bureaucracy, no endless approvals.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            ConvertIQ started in 2023 with a simple idea: marketing should not be complicated, expensive, or slow. 
                            The founders had spent years working at traditional agencies and seeing the same problems over and over—clients 
                            paying thousands for generic strategies that took months to implement.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            We believed there was a better way. By combining AI technology with proven marketing principles, 
                            we could deliver real results in days instead of months, at a fraction of the cost.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            Today, we work with over 500 businesses across the country. From HVAC companies to law firms 
                            to local restaurants—we have helped them all get more leads and make more sales. And we are 
                            just getting started.
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">The ConvertIQ Difference</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {[
                                { icon: "💸", title: "Fair Pricing", desc: "Transparent rates. No surprise fees. Cancel anytime." },
                                { icon: "📈", title: "Real Results", desc: "We measure everything. You will always know what is working." },
                                { icon: "🚀", title: "Fast Delivery", desc: "Most projects completed in 7 days or less." },
                                { icon: "💬", title: "Actual Support", desc: "Real people answer your calls and emails. Promise." }
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
                            { quote: "ConvertIQ completely transformed our lead generation. We went from 10 leads a month to over 100 in just 8 weeks. The AI chatbot alone captures dozens of leads while we sleep.", author: "Mike R.", company: "HVAC Company Owner" },
                            { quote: "Finally, a marketing company that actually delivers. We have worked with agencies before, but none of them got results this fast. The team is responsive, professional, and actually cares about our success.", author: "Sarah L.", company: "Dental Practice" },
                            { quote: "Our Google Business profile was basically invisible before ConvertIQ took it over. Now we show up in the map pack for all our target keywords. Phone has not stopped ringing.", author: "James T.", company: "Local Restaurant Owner" },
                            { quote: "The AI voice receptionist pays for itself every single month. We used to miss 20% of our calls. Now every single one gets answered professionally, 24/7.", author: "Amanda K.", company: "Law Firm" },
                            { quote: "Email automation changed our business. We were spending hours every week on manual follow-ups. Now it happens automatically, and our close rate has increased by 40%.", author: "David M.", company: "Real Estate Agency" },
                            { quote: "The landing page they built for us generated $47,000 in its first month. That is not a typo. Best marketing investment we have ever made.", author: "Jennifer P.", company: "E-commerce Business" }
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
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real results from real clients. See how we have helped businesses grow.</p>
                    </div>
                    <div className="space-y-16">
                        {[
                            {
                                client: "HVAC Company",
                                challenge: "Struggling to generate leads online, relying mostly on referrals. Only getting about 10-15 leads per month from their website.",
                                solution: "Implemented AI chatbot for 24/7 lead capture, optimized Google Business profile, created targeted landing pages for each service area.",
                                results: ["Increased leads by 567% (from 15 to 100+ per month)", "Reduced cost per lead by 62%", "Booked appointments directly through chatbot"],
                                timeframe: "8 weeks",
                                testimonial: "I was skeptical at first, but these guys delivered. Our phone has not stopped ringing since day one."
                            },
                            {
                                client: "Dental Practice",
                                challenge: "New practice trying to build patient base. High no-show rate, poor online review management, and zero automation.",
                                solution: "AI voice receptionist for appointment scheduling, automated review requests, email nurture sequence for new patients.",
                                results: ["Booked 47 new patient appointments in first month", "Reduced no-show rate by 73%", "Achieved 4.8 star average rating with 127 reviews"],
                                timeframe: "6 weeks",
                                testimonial: "The automation alone saves us 10+ hours per week. And the new patient flow is incredible."
                            },
                            {
                                client: "Local Restaurant",
                                challenge: "Invisible in local search, negative reviews going unanswered, declining foot traffic.",
                                solution: "Google Business optimization, AI review response system, social media content strategy, local SEO campaign.",
                                results: ["Doubled online reservations in 30 days", "Response rate to all reviews at 100%", "Ranked #1 for 12 local keywords"],
                                timeframe: "4 weeks",
                                testimonial: "We finally show up when people search for restaurants near us. Best investment we have made."
                            }
                        ].map((study, idx) => (
                            <div key={idx} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-10 text-white">
                                        <div className="text-indigo-300 text-sm font-bold uppercase tracking-widest mb-4">Case Study</div>
                                        <h3 className="text-3xl font-black mb-6">{study.client}</h3>
                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="font-bold text-indigo-200 mb-2">The Challenge</h4>
                                                <p className="text-indigo-100 text-sm">{study.challenge}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-indigo-200 mb-2">Our Solution</h4>
                                                <p className="text-indigo-100 text-sm">{study.solution}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-indigo-200 mb-2">Timeframe</h4>
                                                <p className="text-indigo-100 text-sm">{study.timeframe}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-10">
                                        <h4 className="font-bold text-gray-900 mb-4">Results</h4>
                                        <ul className="space-y-3 mb-8">
                                            {study.results.map((result, rIdx) => (
                                                <li key={rIdx} className="flex items-center gap-3 text-gray-700">
                                                    <span className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <span className="text-emerald-600 text-sm">✓</span>
                                                    </span>
                                                    {result}
                                                </li>
                                            ))}
                                        </ul>
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

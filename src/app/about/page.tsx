import { Navbar, Footer } from '@/components/Layout';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AI-Driven Growth for 500+ Businesses",
  description: "Founded by Michael Krieger, AMP Marketing combines Prime Marketing Experts' decade of experience with AI technology to deliver faster, more affordable lead generation for businesses nationwide.",
  keywords: ["about AMP Marketing", "Michael Krieger marketing", "Prime Marketing Experts", "AI marketing company", "marketing agency Nashua NH", "small business lead generation agency", "AI-powered business growth", "digital marketing agency New Hampshire", "AI marketing firm Boston area", "Nashua NH digital marketing", "results-driven marketing agency", "marketing automation company"],
  openGraph: {
    title: "About AMP Marketing | Smart Marketing, Real Results",
    description: "From Prime Marketing Experts to AMP Marketing — we've helped 500+ businesses grow with AI-powered lead generation, chatbots, and sales automation.",
    url: "https://melodic-travesseiro-f5ef27.netlify.app/about",
  },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white font-poppins">
            <Navbar />

            <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">About AMP Marketing</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        We help businesses find more leads and close more sales with technology that actually delivers.
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
                            <p className="text-gray-600">We measure success by outcomes, not activity. Every dollar you invest should bring back more in return.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No-Nonsense</h3>
                            <p className="text-gray-600">Clear communication, upfront prices, realistic timelines. No corporate jargon, no hidden fees.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Fast & Flexible</h3>
                            <p className="text-gray-600">We move fast and scale with your business. No bureaucracy, no endless approval chains.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            AMP Marketing was built by the same team behind <a href="https://www.primemarketingexperts.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Prime Marketing Experts</a>. With Michael Krieger at the helm, our core mission hasn't changed: help businesses grow through smart, results-driven marketing.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Michael founded Prime Marketing Experts back in 2017. He grew up in Boston, graduated from UMass Lowell, and has spent the better part of his career helping businesses scale. Along the way, he saw something clearly: AI had reached a point where it could make marketing faster and far more affordable for everyday businesses.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            AMP Marketing is the result of that realization. We took everything we learned at Prime and combined it with AI tools that deliver qualified leads in days, not months.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            Today we serve over 500 businesses nationwide. Whether you're a plumber or a law firm, you get the same attention to detail and focus on results that Michael has brought to every project since day one.
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">The AMP Marketing Difference</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {[
                                { icon: "💸", title: "Fair Pricing", desc: "You know exactly what you're paying for. No surprise fees, and you can cancel whenever you want." },
                                { icon: "📈", title: "Measurable Results", desc: "We track every lead so you always know whether your investment is paying off." },
                                { icon: "🚀", title: "Fast Setup", desc: "Most projects launch within a week. No waiting months to see results." },
                                { icon: "💬", title: "Real Support", desc: "Questions? Send us an email. Real people manage your account and respond quickly." }
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
                            { quote: "We scaled from 10 leads a month to over 100 in just 8 weeks. The chatbot generates leads around the clock while we focus on running the business.", author: "Mike R.", company: "HVAC Company Owner" },
                            { quote: "We've worked with several agencies before, but none delivered this fast. More patients showed interest in month one than we saw all of last year.", author: "Sarah L.", company: "Dental Practice" },
                            { quote: "We went from invisible on Google to the top of the local map pack. The phone rings nonstop with people wanting to book reservations.", author: "James T.", company: "Local Restaurant Owner" },
                            { quote: "The AI voice receptionist keeps paying for itself every month. We used to lose 20% of calls because nobody could pick up.", author: "Amanda K.", company: "Law Firm" },
                            { quote: "Email automation transformed our business. We used to spend hours every week on manual follow-ups. Now it runs itself, and our close rate is up 40%.", author: "David M.", company: "Real Estate Agency" },
                            { quote: "Our landing page generated $47,000 in revenue during its first month. Not a typo. Best marketing investment we've ever made.", author: "Jennifer P.", company: "E-commerce Business" }
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
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real numbers from real clients. No marketing fluff.</p>
                    </div>
                    <div className="space-y-16">
                        {[
                            {
                                client: "HVAC Company",
                                story: "This HVAC company was pulling about 15 leads a month from their website. The business relied almost entirely on referrals and word of mouth.",
                                solution: "We installed a 24/7 AI chatbot for lead capture, optimized their Google Business profile, and built landing pages targeting the areas they serve.",
                                result: "Eight weeks later: over 100 leads in a single month. That's a 567% increase. Their cost per lead dropped 62%, and the chatbot now books appointments automatically.",
                                testimonial: "I wasn't sure at first, but they delivered. Our phone hasn't stopped ringing since."
                            },
                            {
                                client: "Dental Practice",
                                story: "A new dental clinic struggling to fill chairs. Too many no-shows, and their online reviews were a mess.",
                                solution: "We set up an AI-powered phone scheduler plus automated follow-up emails to confirm appointments and request patient feedback.",
                                result: "Month one: 47 new patient appointments. No-shows dropped 73%. They hit a 4.8-star rating with over 120 reviews.",
                                testimonial: "Our staff saves 10+ hours every week with the automation, and patient flow has been incredible."
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

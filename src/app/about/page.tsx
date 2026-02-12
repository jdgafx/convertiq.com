import { Navbar, Footer } from '@/components/Layout';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white font-poppins">
            <Navbar />

            <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">About AMP Marketing</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        We help find more leads for businesses and help them close more sales through technologies that really work.
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
                            <p className="text-gray-600">Honestly? We care only about results and not the activity. An ideal situation is that every dollar you invest would return you more money.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No-Nonsense</h3>
                            <p className="text-gray-600">Clear communication, upfront prices, realistic schedules. We Are not big on corporate jargon or hidden fee fluff.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Fast & Flexible</h3>
                            <p className="text-gray-600">We break the mold and scale the heck out of your business. Trust me, no bureaucracy, no endless approvals.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            AMP Marketing was created by the very same hardworking team that <a href="https://www.primemarketingexperts.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Prime Marketing Experts</a>With Michael Krieger at the helm, our core mission remains unchanged: through smart, results-driven marketing strategies to help businesses grow.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Back in 2017 Michael Krieger founded Prime Marketing Experts. He grew up in Boston, graduated from UMass Lowell, and has spent the better part of his career assisting businesses to achieve growth. 

 Throughout the journey, he saw one thing clearly: AI was getting to the point where it could make marketing not only faster but also significantly more affordable for regular businesses.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            AMP Marketing is the result of that decision. We combined the knowledge and experience obtained at Prime with AI technology that actually works—the one you're able to get qualified leads in days rather than months. 
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            We have grown to serve more than 500 businesses nationwide. Whether you are a plumber or a law firm, you will get the same level of attention to detail and the focus on results that Michael has had from the very beginning.
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">The AMP Marketing Difference</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {[
                                { icon: "💸", title: "Fair Pricing", desc: "It is crystal clear to you, what you are paying for. You are sure, that there would be no extra fees and that you can leave whenever you want to." },
                                { icon: "📈", title: "Measurable Results", desc: "Tracking all leads is one of the main priorities for us. You'll be aware all the time if the money you've put into the campaign is actually working." },
                                { icon: "🚀", title: "Fast Setup", desc: "Most of the time, our projects get to the launch stage in approximately a week. No waiting for months to see the results." },
                                { icon: "💬", title: "Real Support", desc: "Have some questions? Simply send us an email. You will be assisted by real persons who can also manage your account." }
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
                            { quote: "AMP Marketing is the one that really put an end to our lead generation dilemma. We managed to scale from 10 leads a month to more than 100, only in 8 weeks. Apart from the chatbot, it is now working as a lead generator while we are asleep.", author: "Mike R.", company: "HVAC Company Owner" },
                            { quote: "We have done a lot of work with different agencies, but none of them has been able to deliver their results so fast. We got to see more patients interested in the first month than the whole last year put together.", author: "Sarah L.", company: "Dental Practice" },
                            { quote: "We have jumped from being the invisible ones on Google to being the leaders in the local map pack. Our phone keeps ringing with people who want to make reservations.", author: "James T.", company: "Local Restaurant Owner" },
                            { quote: "The AI voice receptionist is a great investment that keeps on giving every single month. We used to lose 20% of our calls due to the unavailability of people.", author: "Amanda K.", company: "Law Firm" },
                            { quote: "Our whole business has been transformed by email automation. We would spend hours on end every week doing follow-ups by hand. Now it is done automatically, and our close rate has gone up by 40%.", author: "David M.", company: "Real Estate Agency" },
                            { quote: "The landing page that I got was able to generate revenue of $47,000 in its first month. No, I am not kidding. That has been the best marketing investment that we have ever done, without a doubt.", author: "Jennifer P.", company: "E-commerce Business" }
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
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real-life data of the companies we've been working with. No marketing jargon.</p>
                    </div>
                    <div className="space-y-16">
                        {[
                            {
                                client: "HVAC Company",
                                story: "This HVAC company was collecting approximately 15 leads a month from their website. The business was almost entirely dependent on referrals and word of mouth.",
                                solution: "Round-the-clock lead capture AI chatbot was installed, Google's business profile was fixed up and landing pages were created for the different areas they served.",
                                result: "Eight weeks thereafter? Over 100 leads in a month. That's a 567% increase. Their lead cost fell by 62%, and the automated assistant is now booking appointments.",
                                testimonial: "At first, I was not entirely convinced by them but in the end, they delivered. To be honest, our phone has not stopped ringing ever since."
                            },
                            {
                                client: "Dental Practice",
                                story: "The dental clinic is new. The dentists were in a hurry to get patients, there was a frequent occurrence of no-shows, and the whole review process was a mess.",
                                solution: "An AI-powered phone scheduler plus automated emails to follow-up new patients and ask for their feedback, were set up by us.",
                                result: "Month one: 47 new patient appointments. Number of no-shows dropped by 73%. In addition, they had managed to get 4.8 stars with more than 120 reviews.",
                                testimonial: "Besides automation, our staff gets to save 10+ hours every week and the patient flow is simply amazing."
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

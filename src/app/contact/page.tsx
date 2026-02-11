import { Navbar, Footer } from '@/components/Layout';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white font-poppins">
            <Navbar />

            <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Got questions? Want to chat about your project? Drop us a line 
                        and we'll get back to you fast—usually the same day.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white rounded-3xl p-10 shadow-xl">
                                                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Drop Us a Line</h2>
                            <form className="space-y-6" action="https://formsubmit.co/michael@primemarketingexperts.com" method="POST">
                                <input type="hidden" name="_subject" value="New Contact Form Submission - AMP Marketing" />
                                <input type="hidden" name="_next" value="https://convertiq.com/contact?success=true" />
                                <input type="hidden" name="_honeypot" value="" />
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                                    <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="John Smith" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                    <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="john@company.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                    <input type="tel" name="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="(555) 123-4567" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Company Name</label>
                                    <input type="text" name="company" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="Your Company LLC" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">What are you looking for?</label>
                                    <select name="service_interest" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all">
                                        <option value="">Select a service...</option>
                                        <option value="ai-chatbot">AI Chatbot Setup</option>
                                        <option value="ai-voice">AI Voice Receptionist</option>
                                        <option value="google-business">Google Business Optimization</option>
                                        <option value="review-response">AI Review Response</option>
                                        <option value="email-automation">Email Automation</option>
                                        <option value="social-media">Social Media Content</option>
                                        <option value="ad-copy">AI Ad Copy</option>
                                        <option value="seo-content">SEO Content Writing</option>
                                        <option value="landing-pages">Landing Page Creation</option>
                                        <option value="lead-funnel">Lead Magnet & Funnel</option>
                                        <option value="multiple">Multiple Services</option>
                                        <option value="other">Something Else</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">What's on your mind?</label>
                                    <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none" placeholder="What are you hoping to fix or improve? What's getting in the way?"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5">
                                    Send Message
                                </button>
                                                                 <p className="text-xs text-gray-500 text-center">We usually reply within a day.</p>
                            </form>
                        </div>
                        <div className="space-y-8">
                            <div className="bg-white rounded-3xl p-10 shadow-xl">
                                                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Reach Us</h2>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <span className="text-3xl">📍</span>
                                        <div>
                                                                                        <p className="font-bold text-gray-900">Stop by</p>
                                            <p className="text-gray-600">74 Northeastern Blvd #12a Ste 101<br />Nashua, NH 03062</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-3xl">📧</span>
                                        <div>
                                            <p className="font-bold text-gray-900">Email us</p>
                                            <p className="text-gray-600">hello@convertiq.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-3xl">📞</span>
                                        <div>
                                            <p className="font-bold text-gray-900">Call us</p>
                                            <p className="text-gray-600">617-651-1457</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-indigo-50 rounded-3xl p-10">
                                                                <h3 className="text-2xl font-bold text-indigo-900 mb-4">Let's Talk</h3>
                                <p className="text-indigo-700 mb-6">
                                    Free 15-minute chat. Tell us what's bugging you. No pitch, no pressure—just a real conversation about whether we can help.
                                </p>
                                <a href="mailto:michael@primemarketingexperts.com" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                                    Email Us
                                </a>
                            </div>
                            <div className="bg-gray-900 rounded-3xl p-10 text-white">
                                                                <h3 className="text-xl font-bold mb-4">When We're Around</h3>
                                <div className="space-y-2 text-gray-300">
                                    <p className="flex justify-between"><span>Monday - Friday</span><span>9:00 AM - 6:00 PM EST</span></p>
                                    <p className="flex justify-between"><span>Saturday</span><span>10:00 AM - 2:00 PM EST</span></p>
                                    <p className="flex justify-between"><span>Sunday</span><span>Closed</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

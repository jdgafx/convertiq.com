'use client';

import { Navbar, Footer } from '@/components/Layout';
import Link from 'next/link';
import { useState } from 'react';

export default function PricingPage() {
    const [isAnnual, setIsAnnual] = useState(true);

    const platformTiers = [
        {
            name: 'Starter',
            description: 'For small businesses that want AI marketing tools without the complexity. You get a working chatbot, better local visibility, review automation, and basic analytics to track what is working.',
            monthlyPrice: 297,
            annualPrice: 247,
            features: [
                'AI Chatbot Setup',
                'Google Business Optimization',
                'AI Review Response System',
                'Email support (48hr response)',
                'Basic analytics dashboard',
                '7-day free trial'
            ],
            cta: 'Start Free Trial',
            popular: false
        },
        {
            name: 'Professional',
            description: 'For businesses that are growing and need more firepower. This plan adds voice reception, email sequences that actually get read, social media content, and ad copy that converts better.',
            monthlyPrice: 597,
            annualPrice: 497,
            features: [
                'Everything in Starter, plus:',
                'AI Voice Receptionist',
                'Email Automation Sequences',
                'Social Media Content (20 posts/mo)',
                'AI Ad Copy Optimization',
                'Priority support (24hr response)',
                'Weekly performance calls',
                'Custom integrations'
            ],
            cta: 'Start Free Trial',
            popular: true
        },
        {
            name: 'Enterprise',
            description: 'For businesses that want everything done for them. This includes content marketing, landing pages, funnel setup, custom AI training, and a dedicated manager who knows your business.',
            monthlyPrice: 1297,
            annualPrice: 1097,
            features: [
                'Everything in Professional, plus:',
                'SEO Content Writing (4 articles/mo)',
                'Landing Page Creation (2/mo)',
                'Lead Magnet & Funnel Setup',
                'Custom AI model training',
                'Same-day priority support',
                'Bi-weekly strategy sessions',
                'White-glove onboarding',
                'Dedicated account manager'
            ],
            cta: 'Schedule Consultation',
            popular: false
        }
    ];

    const alaCarteServices = [
        { name: 'AI Chatbot Setup', price: '$149/mo', oneTime: false, setup: '$497', description: 'Lead capture chatbot that works 24/7' },
        { name: 'AI Voice Receptionist', price: '$249/mo', oneTime: false, setup: '$0', description: 'Never miss calls. Pay per call handled.' },
        { name: 'Google Business Optimization', price: '$399', oneTime: true, setup: null, description: 'Show up on Maps in 3-7 days' },
        { name: 'AI Review Response', price: '$99/mo', oneTime: false, setup: '$0', description: 'Auto-respond to every review' },
        { name: 'Email Automation', price: '$49/mo', oneTime: false, setup: '$199', description: 'Follow-up sequences that work' },
        { name: 'Social Media Content', price: '$299/mo', oneTime: false, setup: '$0', description: '20 posts/month across all platforms' },
        { name: 'AI Ad Copy', price: '$199/mo', oneTime: false, setup: '$0', description: 'Better copy, more conversions' },
        { name: 'SEO Content Writing', price: '$149', oneTime: true, setup: null, description: '2,000+ word articles that rank' },
        { name: 'Landing Page Creation', price: '$799', oneTime: true, setup: null, description: 'High-converting page design' },
        { name: 'Lead Funnel Setup', price: '$1,499', oneTime: true, setup: null, description: 'Complete automated funnel system' }
    ];

    const faqs = [
        {
            question: "What is included in the 7-day free trial?",
            answer: "So what do you get with the 7-day free trial? Full access to everything in your chosen plan for a full week. Seriously, no credit card needed to start. And hey, if you're not seeing results, just cancel. No hassle, no questions asked. Simple as that. You can even try individual services à la carte with the same free trial setup."
        },
        {
            question: "Can I customize any service?",
            answer: "Absolutely. Every single service is fully customizable. Want a chatbot trained on your specific products? Done. Need email sequences tailored to your industry? No problem. Our team works hand-in-hand with you to make sure everything fits your business like a glove. And here's the best part—all that customization is included, no extra fees whatsoever."
        },
        {
            question: "Can I switch plans later?",
            answer: "Yep, upgrade or downgrade whenever you need to. We'll just prorate the difference so you only pay for what you actually use. Oh, and you can mix and match too—use the platform for some services and throw in specific à la carte items as your needs change."
        },
        {
            question: "Do you offer custom packages?",
            answer: "Curious about custom packages? Yeah, we've totally got you. Need something one-of-a-kind? We'll build it from the ground up. Our Enterprise plan is a solid starting point for custom work, but honestly, we can work with just about any budget. Just tell us what you need and we'll put together a proposal for you."
        },
        {
            question: "How quickly will I see results?",
            answer: "So how fast will you see results? Most clients notice improvements within the first week. AI chatbots and voice receptionists get to work immediately. SEO and content marketing? That's a bit different—usually takes about 60 to 90 days to see real movement in your rankings. Worth the wait though, promise."
        },
        {
            question: "Is there a long-term contract?",
            answer: "Long-term contracts? Nope. Everything is month-to-month. We figure we should earn your business every single month, not lock you into something. Cancel anytime with 30 days notice. Simple as that."
        },
        {
            question: "What if I need help with customization?",
            answer: "What if you need help customizing things? That's what we're here for, honestly. All plans include customization support. Enterprise customers get a dedicated account manager, and Professional plans get priority support. We'll work with you until everything is exactly how you want it—no rush, no stress."
        }
    ];

    return (
        <main className="min-h-screen bg-white font-poppins">
            <Navbar />

            <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <span className="inline-block bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
                        Transparent Pricing
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black mb-6">
                        Simple Pricing. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Real Results.</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        No hidden fees. No long-term contracts. Full customization on everything—that&apos;s just how we roll.
                    </p>
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <span className={`text-lg ${!isAnnual ? 'text-white font-bold' : 'text-gray-400'}`}>Monthly</span>
                        <button onClick={() => setIsAnnual(!isAnnual)} className={`relative w-14 h-8 rounded-full transition-colors ${isAnnual ? 'bg-emerald-500' : 'bg-gray-600'}`}>
                            <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-1'}`}></div>
                        </button>
                        <span className={`text-lg ${isAnnual ? 'text-white font-bold' : 'text-gray-400'}`}>Annual</span>
                        {isAnnual && <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full font-bold">Save 17%</span>}
                    </div>
                </div>
            </section>

            <section className="py-20 -mt-10 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {platformTiers.map((tier, idx) => (
                            <div key={idx} className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 transition-all hover:shadow-2xl ${tier.popular ? 'border-indigo-500 scale-105' : 'border-gray-100'}`}>
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                                <p className="text-gray-600 text-sm mb-6">{tier.description}</p>
                                <div className="mb-6">
                                    <span className="text-5xl font-black text-gray-900">${isAnnual ? tier.annualPrice : tier.monthlyPrice}</span>
                                    <span className="text-gray-500">/month</span>
                                    {isAnnual && <p className="text-emerald-600 text-sm font-semibold mt-1">Billed annually (${tier.annualPrice * 12}/yr)</p>}
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {tier.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${tier.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/30' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                                    {tier.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">À La Carte Services</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Need just one or two services? Pick exactly what you need. All services are fully customizable.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {alaCarteServices.map((service, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all group">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                        {service.name}
                                    </h3>
                                    {service.oneTime && (
                                        <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full font-semibold">One-time</span>
                                    )}
                                </div>
                                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-black text-indigo-600">{service.price}</span>
                                    {service.oneTime ? (
                                        <span className="text-gray-500 text-sm">one-time</span>
                                    ) : (
                                        <span className="text-gray-500 text-sm">/mo</span>
                                    )}
                                </div>
                                {service.setup && service.setup !== '$0' && (
                                    <p className="text-gray-400 text-xs mt-1">Setup: {service.setup}</p>
                                )}
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <p className="text-xs text-indigo-600 font-medium">✓ Fully customizable</p>
                                    <p className="text-xs text-indigo-600 font-medium">✓ Integration support included</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/contact" className="inline-block bg-white border-2 border-indigo-500 text-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 transition-all">
                            Get Custom Quote
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Compare Plans</h2>
                        <p className="text-gray-600">See exactly what is included in each plan</p>
                    </div>
                    <div className="max-w-5xl mx-auto overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-gray-200">
                                    <th className="text-left py-4 px-4 font-bold text-gray-900">Feature</th>
                                    <th className="text-center py-4 px-4 font-bold text-gray-900">Starter</th>
                                    <th className="text-center py-4 px-4 font-bold text-indigo-600 bg-indigo-50 rounded-t-xl">Professional</th>
                                    <th className="text-center py-4 px-4 font-bold text-gray-900">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { feature: 'AI Chatbot', starter: true, pro: true, enterprise: true },
                                    { feature: 'AI Voice Receptionist', starter: false, pro: true, enterprise: true },
                                    { feature: 'Google Business Optimization', starter: true, pro: true, enterprise: true },
                                    { feature: 'AI Review Response', starter: true, pro: true, enterprise: true },
                                    { feature: 'Email Automation', starter: false, pro: true, enterprise: true },
                                    { feature: 'Social Media Content', starter: false, pro: true, enterprise: true },
                                    { feature: 'AI Ad Copy', starter: false, pro: true, enterprise: true },
                                    { feature: 'SEO Content Writing', starter: false, pro: false, enterprise: '4/mo' },
                                    { feature: 'Landing Pages', starter: false, pro: false, enterprise: '2/mo' },
                                    { feature: 'Lead Funnel Setup', starter: false, pro: false, enterprise: true },
                                    { feature: 'Custom Integrations', starter: false, pro: true, enterprise: true },
                                    { feature: 'Support Response Time', starter: '48hr', pro: '24hr', enterprise: 'Same day' },
                                    { feature: 'Strategy Calls', starter: false, pro: 'Weekly', enterprise: '2x/week' },
                                    { feature: 'Dedicated Manager', starter: false, pro: false, enterprise: true },
                                    { feature: 'Customization', starter: 'Standard', pro: 'Full', enterprise: 'Unlimited' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-b border-gray-100">
                                        <td className="py-4 px-4 text-gray-700">{row.feature}</td>
                                        <td className="text-center py-4 px-4">
                                            {typeof row.starter === 'boolean' ? (
                                                row.starter ? <CheckIcon /> : <XIcon />
                                            ) : <span className="text-gray-700 font-medium">{row.starter}</span>}
                                        </td>
                                        <td className="text-center py-4 px-4 bg-indigo-50">
                                            {typeof row.pro === 'boolean' ? (
                                                row.pro ? <CheckIcon /> : <XIcon />
                                            ) : <span className="text-indigo-600 font-medium">{row.pro}</span>}
                                        </td>
                                        <td className="text-center py-4 px-4">
                                            {typeof row.enterprise === 'boolean' ? (
                                                row.enterprise ? <CheckIcon /> : <XIcon />
                                            ) : <span className="text-gray-700 font-medium">{row.enterprise}</span>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600">Got questions? We have got answers.</p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                        Ready to Transform Your Marketing?
                    </h2>
                    <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
                        Start your 7-day free trial today. No credit card required. Cancel anytime.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                            Start 7-Day Free Trial
                        </Link>
                        <Link href="/contact" className="bg-indigo-500/30 backdrop-blur text-white px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-indigo-500/50 transition-all">
                            Schedule Free Consultation
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function CheckIcon() {
    return (
        <svg className="w-6 h-6 text-emerald-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
    );
}

function XIcon() {
    return (
        <svg className="w-6 h-6 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}

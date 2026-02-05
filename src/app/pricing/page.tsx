'use client';

import { Navbar, Footer } from '@/components/Layout';
import Link from 'next/link';
import { useState } from 'react';

export default function PricingPage() {
    const [isAnnual, setIsAnnual] = useState(true);

    const platformTiers = [
        {
            name: 'Starter',
            description: "Look, if you're just testing the waters—this is your starting point. You get a chatbot that books appointments while you sleep, we'll fix up your Google listing so locals can actually find you, and reviews get answered on autopilot. Pretty simple stuff.",
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
            description: "Here's the thing—most of our clients land here. You get everything from Starter plus a phone bot that picks up when you can't, email sequences that don't feel spammy, regular social posts, and ad copy that people actually click on.",
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
            description: "This is the full package. We handle your content, build landing pages, set up complete funnels, train custom AI on your business, and you get a dedicated person who knows your stuff inside and out.",
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
        { name: 'AI Chatbot', price: 'Starting at $149/mo', oneTime: false, setup: '$497 one-time setup', description: 'A bot that grabs leads while you sleep' },
        { name: 'AI Voice', price: 'Starting at $249/mo', oneTime: false, setup: '$497 one-time setup', description: 'Picks up so you never miss a call again' },
        { name: 'Google Business', price: 'Starting at $399 one-time', oneTime: true, setup: null, description: 'Get found on Maps—usually takes 3-7 days' },
        { name: 'Review Response', price: 'Starting at $99/mo', oneTime: false, setup: null, description: 'Replies to reviews without you lifting a finger' },
        { name: 'Email Automation', price: 'Starting at $49/mo', oneTime: false, setup: '$199 one-time setup', description: 'Follow-ups that actually get opened' },
        { name: 'Social Media', price: 'Starting at $299/mo', oneTime: false, setup: null, description: '20 posts a month so you stay visible' },
        { name: 'Ad Copy', price: 'Starting at $199/mo', oneTime: false, setup: '$299 one-time setup', description: 'Words that make people click' },
        { name: 'SEO Content', price: 'Starting at $149 per article', oneTime: true, setup: null, description: 'Long-form stuff that ranks on Google' },
        { name: 'Landing Pages', price: 'Starting at $799 one-time', oneTime: true, setup: null, description: 'Pages built to turn visitors into leads' },
        { name: 'Automated Sales Funnels', price: 'Starting at $299/mo', oneTime: false, setup: '$1,499 one-time setup', description: 'The whole funnel—soup to nuts' }
    ];

    const faqs = [
        {
            question: "What do I get in the free trial?",
            answer: "The whole thing. All of it. 7 days, no credit card needed, no weird catches. Try it out. If it's not for you, no big deal—just don't continue. Zero hassle."
        },
        {
            question: "Can you make it fit my business?",
            answer: "That's the whole point. We don't copy-paste the same stuff for everyone. Your chatbot scripts, emails, ads—all of it gets written for YOUR business. We keep tweaking until it sounds like you."
        },
        {
            question: "What if I want to change plans?",
            answer: "Go for it. Upgrade when you're ready to grow, downgrade if things slow down. We adjust your bill to match. No fees, no guilt trips."
        },
        {
            question: "What if none of these plans work for me?",
            answer: "Then we'll make one that does. Just tell us what you're looking for and we'll put something together that fits your situation."
        },
        {
            question: "How fast will this actually work?",
            answer: "Depends on what you're using. Chatbots? Day one. Could see leads that same afternoon. SEO takes a bit—usually a couple months to really kick in. But most people notice changes in the first week or two."
        },
        {
            question: "Do I have to sign a long contract?",
            answer: "Nope. Month to month. Want to cancel? Just let us know 30 days ahead. We're not into trapping people."
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
                        Straightforward Prices. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">No BS.</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        No sneaky fees. No contracts locking you in. Everything&apos;s customizable—because that&apos;s how we do things.
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
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Just Need One Thing?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Not everyone needs the full package. Grab what makes sense for you. We can tweak any of these to fit.
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
                                    {service.setup && (
                                        <p className="text-gray-500 text-xs mt-2 font-medium">+ {service.setup}</p>
                                    )}
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <p className="text-xs text-indigo-600 font-medium">✓ We'll tailor it to you</p>
                                    <p className="text-xs text-indigo-600 font-medium">✓ Help with setup included</p>
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
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">What's in Each Plan?</h2>
                        <p className="text-gray-600">Here's the breakdown so you know what you're getting</p>
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
                                    { feature: 'AI Voice', starter: false, pro: true, enterprise: true },
                                    { feature: 'Google Business', starter: true, pro: true, enterprise: true },
                                    { feature: 'Review Response', starter: true, pro: true, enterprise: true },
                                    { feature: 'Email Automation', starter: false, pro: true, enterprise: true },
                                    { feature: 'Social Media', starter: false, pro: true, enterprise: true },
                                    { feature: 'Ad Copy', starter: false, pro: true, enterprise: true },
                                    { feature: 'SEO Content', starter: false, pro: false, enterprise: '4/mo' },
                                    { feature: 'Landing Pages', starter: false, pro: false, enterprise: '2/mo' },
                                    { feature: 'Automated Sales Funnels', starter: false, pro: false, enterprise: true },
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
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Questions People Usually Ask</h2>
                        <p className="text-gray-600">Stuff we get asked all the time</p>
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
                        Want to See If This Actually Works?
                    </h2>
                    <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
                        7 days free. No card required. Walk away anytime if it's not your thing.
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

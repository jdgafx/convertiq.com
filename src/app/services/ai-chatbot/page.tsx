import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "AI Chatbot Setup | ConvertIQ",
  description: "Capture leads 24/7 with an intelligent AI chatbot. Never miss a website visitor again.",
};

export default function AiChatbotPage() {
  return (
    <main className="min-h-screen bg-white font-poppins">
      <Navbar />

      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🤖</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">AI Chatbot Setup</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Picture this: you&apos;re catching some Z&apos;s while leads are rolling in. Your website doesn&apos;t punch a clock, so why should your lead capture, right?
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why It Works</h2>
              <p className="text-gray-600 mb-6">
                Here&apos;s the thing about this chatbot—it&apos;s basically soaked up everything about your business. It knows your products, your pricing, and exactly how to talk to your customers.
              </p>
              <ul className="space-y-4">
            {[
              "We train it on your actual site. It doesn't guess. It knows your business.",
              "It qualifies leads automatically. You stop talking to people who aren't buying.",
              "It books appointments on your actual calendar. You just show up.",
              "It handles hours, pricing, and services instantly.",
              "It connects to your CRM so you never lose a lead.",
              "And yeah, it learns. The more it chats, the smarter it gets.",
            ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pricing</h3>
              <div className="text-5xl font-black text-indigo-600 mb-2">$149<span className="text-xl text-gray-500">/mo</span></div>
              <p className="text-gray-600 mb-6">Plus one-time setup fee of $497</p>
              <Link href="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Start 7-Day Free Trial
              </Link>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Try it on your site. If it doesn&apos;t work, you don&apos;t pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Questions You Might Have</h2>
          {[
            { 
              q: "Okay, let's talk about the free trial.", 
              a: "You get full access to everything, no credit card required. Seriously, just sign up, test it out on your site, watch those leads start rolling in, and see if it's a fit. Not into it? Cancel anytime. Super simple." 
            },
            { 
              q: "So how does this thing actually learn?", 
              a: "We train it on your website, your docs, any FAQs you've got sitting around. Oh, and you can manually add your own Q&A pairs too. The best part? It gets smarter over time as it chats with your visitors. Pretty cool, right?" 
            },
            { 
              q: "Can it actually book appointments?", 
              a: "Yep, absolutely. It syncs up with your calendar and lets people book slots right then and there. No more endless back-and-forth emails trying to figure out when someone's available. Trust me, once you use it, you'll wonder how you ever lived without it." 
            },
            { 
              q: "What happens when it can't answer something?", 
              a: "No stress—it can shoot you a message through email or Slack, or seamlessly hand things off to live chat. You're always in the driver's seat, so nothing falls through the cracks." 
            },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 mb-4 shadow">
              <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Capture More Leads?</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Give it a week. Seriously. If you don't see more qualified leads coming in, just walk away.
          </p>
          <Link href="/contact" className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all">
            Start Free Trial
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

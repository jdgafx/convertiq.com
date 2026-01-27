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
            Capture leads while you sleep. Your website works 24/7, so should your lead capture.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-4">Here is what you actually get with our chatbot setup:</p>
              <ul className="space-y-4">
                {[
                  "A chatbot trained on your website, products, and common questions",
                  "Auto-qualification so you only talk to serious prospects",
                  "Calendar booking built in—no back-and-forth scheduling emails",
                  "Instant answers to common questions (hours, pricing, services)",
                  "Connects to your CRM and email tools",
                  "Trains on your content and gets smarter over time",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
          {[
            { q: "What is included in the 7-day free trial?", a: "Full access to everything—no credit card required. Test the chatbot on your site, see leads come in, and decide if it works for you. If you are not happy, just cancel—no questions asked." },
            { q: "How does the chatbot actually learn?", a: "We train it on your website, documents, and any FAQs you provide. You can also manually add Q&A pairs. It gets smarter over time as it interacts with visitors." },
            { q: "Can it really book appointments?", a: "Yes. It connects to your calendar and lets visitors book slots directly. No more 'when are you available?' emails." },
            { q: "What if it cannot answer something?", a: "It can silently notify you via email or Slack, or hand off to live chat. You are in complete control." },
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
            Start your free trial today. See the difference an AI chatbot makes in just 7 days.
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

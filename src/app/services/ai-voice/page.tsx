import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "AI Voice Receptionist | ConvertIQ",
  description: "Never miss a call again. AI-powered phone answering that works 24/7.",
};

export default function AiVoicePage() {
  return (
    <main className="min-h-screen bg-white font-poppins">
      <Navbar />
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">📞</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">AI Voice Receptionist</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your phone never sleeps. Neither does our AI. Every call answered, every lead captured.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-4">Most businesses miss 20-30% of calls. Here is what our voice receptionist does:</p>
              <ul className="space-y-4">
                {[
                  "Answers instantly—24/7, no voicemail jail",
                  "Qualifies callers and books appointments on the spot",
                  "Can transfer to the right person when needed",
                  "Works with your existing phone number (no new line needed)",
                  "Trained on your business FAQs in just minutes",
                  "Connects to Calendly, HubSpot, Salesforce—your tools",
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
              <div className="text-5xl font-black text-indigo-600 mb-2">$249<span className="text-xl text-gray-500">/mo</span></div>
              <p className="text-gray-600 mb-6">Pay only for calls handled. No setup fees.</p>
              <Link href="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Start 7-Day Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Questions</h2>
          {[
            { q: "How fast can I get set up?", a: "Most businesses are up and running within 24-48 hours. We train the AI on your business info and connect to your phone system." },
            { q: "What if the AI cannot handle a call?", a: "It can warm-transfer to you, take a message, or schedule a callback. You set the rules for how it handles different situations." },
            { q: "Do I have to change my phone number?", a: "No. You keep your number. We just route calls through our AI layer first." },
            { q: "How much does it cost per call?", a: "First 500 minutes included each month. Overage is $0.15/min—very affordable compared to hiring reception staff." },
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
          <h2 className="text-3xl font-bold text-white mb-6">Never Miss Another Call</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Start your free trial today. See results in less than a week.
          </p>
          <Link href="/contact" className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl">
            Start Free Trial
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

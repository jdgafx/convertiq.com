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
          <h1 className="text-4xl md:text-6xl font-black mb-6">Virtual Front Desk</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stop missing opportunities because you were too busy to pick up the phone. Our AI-powered voice receptionists answer instantly, qualify every caller, and book appointments directly on your calendar.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">24/7 Phone Answering</h2>
              <p className="text-gray-600 mb-6">Most businesses miss roughly one-third of their incoming calls. Our AI system ensures every potential client gets a response the moment they call, regardless of the time or day.</p>
              <ul className="space-y-4">
                {[
                  "Calls are answered on the first ring to prevent leads from calling your competitors.",
                  "The AI naturally qualifies callers and books appointments based on your criteria.",
                  "If a complex situation arises, the system can seamlessly transfer the call to your team.",
                  "Keep your existing business phone number while adding intelligent automation.",
                  "We can train the system on your specific service details in less than an hour.",
                  "Direct integration with your calendar ensures no double-bookings occur.",
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          {[
            { q: "How quickly can I go live?", a: "Most businesses are set up and receiving calls within 24 to 48 hours. We just need your basic business details and appointment preferences." },
            { q: "What if the AI cannot handle a specific request?", a: "You define the rules. The system can take a detailed message, transfer the call to your mobile, or schedule a callback for your team." },
            { q: "Do I need a new phone number?", a: "No. You keep your current number. We simply route your calls through our intelligent system so they can be handled automatically." },
            { q: "How are the minutes tracked?", a: "Your plan includes a set number of minutes each month. We provide a transparent dashboard so you can see exactly how many calls were handled." },
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

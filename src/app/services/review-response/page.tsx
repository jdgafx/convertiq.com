import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "Reputation Management System | ConvertIQ",
  description: "Build trust automatically. Respond to every review professionally and instantly.",
};

export default function ReviewResponsePage() {
  return (
    <main className="min-h-screen bg-white font-poppins">
      <Navbar />
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">⭐</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Reputation Management</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Leaving a review unanswered is like ignoring someone who just walked up to shake your hand. We make sure you never leave anyone hanging.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-4">Here&apos;s how we keep your reputation spotless while you sleep:</p>
              <ul className="space-y-4">
                {[
                  "It says &apos;thanks&apos; to the good stuff in a way that feels real, not canned.",
                  "It handles the haters professionally—defusing the situation so you don&apos;t have to stress about it.",
                  "We teach it to sound like you, not a corporate press release.",
                  "Google, Yelp, Facebook—if someone&apos;s talking about you online, we catch it.",
                  "If things get heated, it pings you instantly so you can step in.",
                  "It responds in minutes, not &apos;whenever I get around to it&apos;.",
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
              <div className="text-5xl font-black text-indigo-600 mb-2">$99<span className="text-xl text-gray-500">/mo</span></div>
              <p className="text-gray-600 mb-6">Unlimited responses. No per-review fees.</p>
              <Link href="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Start 7-Day Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Some Common Questions</h2>
          {[
            { q: "Can I customize the responses?", a: "Totally. You can tweak the voice, approve templates, or just let it run. It's your reputation, you're in charge." },
            { q: "What platforms do you monitor?", a: "Pretty much everywhere people complain or compliment. Google, Yelp, TripAdvisor—we got 'em covered." },
            { q: "What about angry customers?", a: "We don't let the AI freelance on angry rants. Those get flagged straight to you unless you tell us otherwise." },
            { q: "Does it sound robotic?", a: "Not a chance. We specifically train it to avoid that 'Thank you valued customer' vibe. It sounds like a human being." },
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
          <h2 className="text-3xl font-bold text-white mb-6">Build Trust Automatically</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Respond to every review. Show customers you care. Start today.
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

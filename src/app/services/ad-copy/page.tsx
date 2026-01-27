import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "AI Ad Copy Optimization | ConvertIQ",
  description: "Better copy, more clicks, lower costs. Ads that actually convert.",
};

export default function AdCopyPage() {
  return (
    <main className="min-h-screen bg-white font-poppins">
      <Navbar />
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">📝</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">AI Ad Copy Optimization</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stop wasting ad spend on copy that does not work. AI-optimized headlines and descriptions that get clicks.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-4">Here is a number that keeps us up at night: most businesses waste 30-50% of their ad budget on copy that does not work. Here is what we do differently:</p>
              <ul className="space-y-4">
                {[
                  "We write 4-8 headline variations per ad set and let the platform is A/B test find the winner",
                  "Calls-to-action that actually drive clicks—not generic 'Learn More'",
                  "Google, Meta, and LinkedIn—we know what works on each platform",
                  "Different messages for different audiences (because a homeowner thinks differently than a contractor)",
                  "Ad extension recommendations that most people miss",
                  "Weekly optimization based on real data, not guesses",
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
              <div className="text-5xl font-black text-indigo-600 mb-2">$199<span className="text-xl text-gray-500">/mo</span></div>
              <p className="text-gray-600 mb-6">Includes unlimited copy revisions.</p>
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
            { q: "Which platforms do you handle?", a: "Google Ads, Meta (Facebook and Instagram), LinkedIn Ads, and Microsoft Ads. Each has different best practices." },
            { q: "How many variations do you actually write?", a: "Typically 4-8 per ad set. Enough to test but not so many that it gets confusing." },
            { q: "What if I already have ads running?", a: "We look at what is not working and create alternatives. Sometimes the fix is simple—other times we need to start fresh." },
            { q: "How do you know if it is working?", a: "We track clicks, conversions, and cost per acquisition. We optimize for whatever metric matters to your business." },
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Stop Burning Ad Budget?</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            A dentist we work with cut their cost per lead by 40% in one month. Better copy. Less waste.
          </p>
          <Link href="/contact" className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl">
            Get Better Copy
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

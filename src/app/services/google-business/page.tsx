import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "Google Business Profile Optimization | Amp AI",
  description: "Dominate local search. Show up when nearby customers are looking for you.",
};

export default function GoogleBusinessPage() {
  return (
    <main className="min-h-screen bg-white font-poppins">
      <Navbar />
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">📍</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Local Search Mastery</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Look, if you aren't in the top 3 of Google's map pack, you're basically invisible. Honestly, most profiles are a mess. We fix yours up so local customers actually find you and call you.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Found by Local Customers</h2>
              <p className="text-gray-600 mb-6">Honestly, most Google Business profiles are half-baked. That's just money you're leaving for your competitors. We optimize every inch of your profile so you dominate the local search results.</p>
              <ul className="space-y-4">
                {[
                  "We dig into what people actually type when looking for businesses like yours.",
                  "Your photos get fixed up—no more blurry pics from 2015.",
                  "We make sure your categories are right so Google knows what you do.",
                  "Q&A section gets populated with answers to common questions.",
                  "Every review gets a response. Good ones get thanked, bad ones get handled.",
                  "You see exactly how many calls and clicks you're getting. Real numbers.",
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
              <div className="text-4xl font-black text-indigo-600 mb-2">$399 one-time</div>
              <p className="text-gray-600 mb-6">Full optimization and 30 days of ranking tweaks.</p>
              <Link href="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
          {[
            { q: "How long until I show up in searches?", a: "Most businesses start seeing movement in 3-7 days. The real growth happens when you hit that map pack—usually within a month." },
            { q: "Do I need to give you new photos?", a: "Not necessarily. We use what you have and tell you what would help. If you've got decent pics already, we work with those." },
            { q: "What if my profile already exists?", a: "That's perfect, actually. Most profiles we see are like 60% done. We take them to 100% and optimize what's there." },
            { q: "Is this a monthly thing?", a: "Nope, one-time fix. We set it up, optimize it, and you're good. If you want us to manage it ongoing, we can talk about that, but no pressure." },
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
          <h2 className="text-3xl font-bold text-white mb-6">Show Up When It Matters</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Get found by customers in your neighborhood. Start today.
          </p>
          <Link href="/contact" className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl">
            Get Started
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

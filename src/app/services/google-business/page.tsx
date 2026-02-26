import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "Google Business Profile Optimization | AMP Marketing",
  description: "Get found in Google's local map pack. We optimize your Business Profile so nearby customers call you first.",
  keywords: ["Google Business Profile optimization", "local SEO services", "Google Maps ranking", "local map pack", "Google Business listing", "local search optimization", "GMB optimization", "local business marketing"],
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
            If you&apos;re not in the top 3 of Google&apos;s map pack, your competitors are getting those calls. Most business profiles are incomplete or poorly optimized. We fix that so local customers find you and pick up the phone.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Make yourself visible to local customers</h2>
              <p className="text-gray-600 mb-6">Most Google Business profiles are only half-finished. That&apos;s money going straight to your competitors. We optimize every detail of your profile so you rank higher in local search results.</p>
              <ul className="space-y-4">
                {[
                  "Keyword research to find the exact terms your local customers are searching for.",
                  "Updated, high-quality photos that make a strong first impression.",
                  "Accurate categories so Google shows your business for the right searches.",
                  "Q&A section filled with the questions customers ask most, along with clear answers.",
                  "Professional responses to every review\u2014positive and negative.",
                  "Tracking setup so you can see exactly how many calls and website visits your profile drives.",
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
              <p className="text-gray-600 mb-6">Complete optimization and 30 days of ranking tweaking.</p>
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
            { q: "How long until I show up in searches?", a: "Most businesses see initial improvements within 3-7 days. The bigger gains come when you start appearing in the map pack, which typically happens within a month." },
            { q: "Do I need to give you new photos?", a: "Not unless your current ones need replacing. We work with what you have and advise on what would help. If your photos are solid, we use them." },
            { q: "What if my profile already exists?", a: "That\u2019s ideal. Most existing profiles are only about 60% complete. We fill in the gaps and optimize everything that\u2019s already there." },
            { q: "Is this a monthly thing?", a: "One-time setup. We optimize it, hand it back, and you\u2019re done. If you want ongoing management later, we can discuss that\u2014but there\u2019s no pressure." },
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
            Get found by customers in your area. Start showing up where it matters.
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

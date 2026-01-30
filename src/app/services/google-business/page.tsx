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
            When someone in your neighborhood searches for the services you provide, your business needs to be the first name they see. We ensure your profile is fully optimized to capture that local demand.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Optimizing for Visibility</h2>
              <p className="text-gray-600 mb-6">Most local profiles are only partially complete, leaving significant traffic on the table. We perform a deep-dive optimization to ensure you show up in the local '3-pack' when it matters most.</p>
              <ul className="space-y-4">
                {[
                  "We perform extensive keyword research to match how your local customers actually search.",
                  "We select and optimize high-quality images that showcase your best work to potential clients.",
                  "We verify every category and attribute to ensure you appear for the correct service searches.",
                  "We populate your profile with relevant Q&A to answer customer concerns before they even call.",
                  "We implement a reliable system to ensure every customer review receives a professional response.",
                  "We track phone calls, website clicks, and direction requests so you can measure your return.",
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
              <div className="text-5xl font-black text-indigo-600 mb-2">$399<span className="text-xl text-gray-500">/one-time</span></div>
              <p className="text-gray-600 mb-6">Includes setup and 30-day optimization guarantee.</p>
              <Link href="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          {[
            { q: "How long until we see movement?", a: "Most businesses see an increase in visibility within 3 to 7 days. Google rewards active and complete profiles, and the real growth happens once you secure a spot in the local map pack." },
            { q: "Do I need to provide new content?", a: "Not necessarily. Our team will review your existing website and assets to build out your profile. We simply need your approval before any major updates go live." },
            { q: "What if I already have an existing profile?", a: "We specialize in taking existing profiles and making them high-performers. Most profiles we audit are only 60% optimized—we take them to 100%." },
            { q: "Is this a recurring monthly fee?", a: "This is a one-time optimization service. We fix your profile and set the foundation. If you want ongoing management later, we can discuss that, but there's no obligation." },
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
            Get found by customers nearby. Start dominating local search today.
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

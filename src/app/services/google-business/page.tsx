import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "Google Business Profile Optimization | ConvertIQ",
  description: "Dominate local search. Show up when nearby customers are looking for you.",
};

export default function GoogleBusinessPage() {
  return (
    <main className="min-h-screen bg-white font-poppins">
      <Navbar />
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">📍</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Google Business Profile</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Show up in the local map pack. Be found by customers nearby searching for what you offer.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-4">Most businesses have incomplete Google profiles. Here is what we optimize:</p>
              <ul className="space-y-4">
                {[
                  "Complete profile optimization with strategic keywords",
                  "Strategic photo placement that shows what you actually do",
                  "Category and attribute optimization so you show up for the right searches",
                  "Q&A seeding with your expertise (before customers ask)",
                  "Review response automation set up",
                  "Monthly reporting so you see what is working",
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Some Things Clients Ask</h2>
          {[
            { q: "How long until I see results?", a: "Most clients see improved rankings within 3-7 days. The biggest impact comes from showing up in the local 3-pack when people search nearby." },
            { q: "Do I need to provide content?", a: "We use your existing information and optimize it. You just approve the changes before we publish." },
            { q: "What if I already have a profile?", a: "Perfect. We optimize what is there and fill in gaps. Most businesses have incomplete profiles they never finished." },
            { q: "Is this really a one-time fee?", a: "Yes. The optimization is done once. You can add monthly management for $99/mo if you want ongoing updates and posting." },
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

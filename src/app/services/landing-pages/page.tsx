import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "Landing Page Creation | ConvertIQ",
  description: "Pages designed to convert. Trackable, optimized, and built to sell.",
};

export default function LandingPagesPage() {
  return (
    <main className="min-h-screen bg-white font-poppins">
      <Navbar />
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🎯</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Landing Page Creation</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Look, we build pages that actually sell. No fluff—just clean design and a straight path for customers to hit "Buy". Honestly, it's not rocket science.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-4">Here's the honest difference between a pretty page and one that makes money:</p>
              <ul className="space-y-4">
                {[
                  "It looks perfect on mobile—let's be real, that's where 70% of your traffic comes from.",
                  "It loads fast, like under 3 seconds. Any slower, and people bounce.",
                  "Headlines that actually make you stop scrolling.",
                  "We mix in your best reviews and logos so trust is built instantly—people buy from people they trust, right?",
                  "Big, clear buttons. We don't hide checkout.",
                  "We set up tracking that actually works so you know what's bringing in money.",
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
              <div className="text-5xl font-black text-indigo-600 mb-2">$799<span className="text-xl text-gray-500">/page</span></div>
              <p className="text-gray-600 mb-6">Includes 2 rounds of revisions.</p>
              <Link href="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Order Landing Page
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Some Things You Might Wonder</h2>
          {[
            { q: "Where do the pages actually live?", a: "We can host it on your site, or set up something new. Whatever works with your tech stack." },
            { q: "Can you connect to my CRM?", a: "Yep. It pipes leads straight into HubSpot, Salesforce, Mailchimp—whatever you're using. No headaches." },
            { q: "What if I want changes down the road?", a: "First 30 days of tweaks are on us. After that, we're here if you need us. Fair enough?" },
            { q: "How many conversions should I expect?", a: "Honestly? It depends on your offer and traffic. We build the engine, but you gotta put gas in it." },
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
          <h2 className="text-3xl font-bold text-white mb-6">That Landing Page You&apos;ve Been Putting Off</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            A client in e-commerce told us their landing page generated $47,000 in its first month. Seriously, they'd been "meaning to get around to it" for two years.
          </p>
          <Link href="/contact" className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl">
            Build My Page
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

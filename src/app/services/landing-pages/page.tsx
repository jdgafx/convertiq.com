import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "High-Converting Pages",
  description: "Pages designed to convert visitors into paying customers. Simple, quick, and user-friendly.",
  keywords: ["landing page design service", "high-converting landing pages", "lead capture page design", "landing page agency", "conversion rate optimization", "mobile-optimized landing pages", "custom landing page builder", "landing page for lead generation", "fast loading landing pages", "A/B tested landing pages", "landing page copywriting", "best landing page agency 2025", "PPC landing page design", "Bing Ads landing pages"],
  openGraph: {
    title: "High-Converting Pages",
    description: "Pages designed to convert visitors into paying customers. Simple, quick, and user-friendly.",
    url: "https://melodic-travesseiro-f5ef27.netlify.app/services/landing-pages",
  },
};

export default function LandingPagesPage() {
  return (
    <main className="min-h-screen bg-white font-poppins">
      <Navbar />
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🎯</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">High-Converting Pages</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            One page is all it takes to turn visitors into leads. We write the copy, design the layout, and make sure every button works. You get a clean page that loads fast and actually makes you money.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-4">Here's what separates a good-looking page from one that actually makes sales:</p>
              <ul className="space-y-4">
                {[
                  "Flawless on mobile—where over 70% of your visitors are browsing.",
                  "Lightning-fast load times under 3 seconds. Anything slower and visitors leave.",
                  "Headlines that stop the scroll.",
                  "Your testimonials and client logos front and center — because people buy from brands they trust.",
                  "Clear, prominent buttons. We make it easy to take action.",
                  "We set up proper analytics so you always know where the money is coming from.",
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
              <div className="text-5xl font-black text-indigo-600 mb-2">Starting at $799<span className="text-xl text-gray-500">/page</span></div>
              <p className="text-sm text-gray-500 mb-2">One-time fee per page</p>
              <p className="text-gray-600 mb-6">Includes two rounds of revisions.</p>
              <Link href="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Order Landing Page
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
          {[
            { q: "Where does the page live?", a: "We can add it to your existing website or set up a standalone page. Either way works." },
            { q: "Can you integrate with my CRM?", a: "Yes. We connect directly to HubSpot, Salesforce, Mailchimp, or whatever you're using. No hassle." },
            { q: "What if I need changes later?", a: "The first 30 days of tweaks are included. After that, we're always available if you need updates." },
            { q: "How many conversions should I expect?", a: "That depends on your product and traffic. We build the page to convert — you bring the visitors." },
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
          <h2 className="text-3xl font-bold text-white mb-6">The landing page you&apos;ve been procrastinating about.</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            One e-commerce brand made $47,000 from a single landing page in its first month. They'd been putting it off for two years.
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

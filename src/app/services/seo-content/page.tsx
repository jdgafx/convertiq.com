import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "SEO Content Writing | ConvertIQ",
  description: "2,000+ word articles that rank. Real SEO, not keyword stuffing.",
};

export default function SeoContentPage() {
  return (
    <main className="min-h-screen bg-white font-poppins">
      <Navbar />
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🔍</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">SEO Content Writing</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Content that Google loves and humans actually read. Keywords that rank, copy that converts.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-4">Here is what separates content that ranks from content that disappears:</p>
              <ul className="space-y-4">
                {[
                  "2,000+ words that actually answer search queries (no fluff, no padding)",
                  "We research keywords with actual search volume—not made-up opportunities",
                  "Internal linking that makes sense for your site structure",
                  "Meta titles and descriptions that get people to click",
                  "Headers that make sense to readers and Google",
                  "Content ready to paste into WordPress, Wix, Squarespace—whatever you use",
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
              <div className="text-5xl font-black text-indigo-600 mb-2">$149<span className="text-xl text-gray-500">/article</span></div>
              <p className="text-gray-600 mb-6">Or $499/mo for 4 articles delivered monthly.</p>
              <Link href="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Order Article
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Before You Ask</h2>
          {[
            { q: "How do you pick what to write about?", a: "We look at what your competitors rank for, what questions your customers ask, and what search terms actually have traffic. You approve topics before we write." },
            { q: "Do you guarantee first page rankings?", a: "No honest person can. We guarantee well-written, properly optimized content. Rankings depend on competition, domain authority, and many other factors." },
            { q: "Can you publish directly to my site?", a: "Yes. WordPress, Wix, Squarespace—we can log in and publish, or just give you the content to upload yourself." },
            { q: "What kind of articles work best?", a: "How-to guides, industry explainers, comparisons, and answers to frequently asked questions. Things people actually search for." },
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
          <h2 className="text-3xl font-bold text-white mb-6">Organic Traffic That Actually Converts</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            A client in the home services space went from 300 monthly visitors to 3,000 in 4 months. The right content, optimized the right way.
          </p>
          <Link href="/contact" className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl">
            Write My First Article
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

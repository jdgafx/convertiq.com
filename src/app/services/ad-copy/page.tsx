import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "High-Performance Ads Optimization | AMP Marketing",
  description: "Ad copy that grabs attention and gets clicks. Lower your costs and sell more.",
};

export default function AdCopyPage() {
  return (
    <main className="min-h-screen bg-white font-poppins">
      <Navbar />
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">📝</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">High-Performance Ads Optimization</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stop wasting money on ads people ignore. We write short, sharp headlines that grab attention and make people click. We test different versions every month to keep your costs low and your sales high.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-4">Here&apos;s something that keeps us up at night: most businesses waste a massive chunk of their ad budget—sometimes 30-50%—on copy that totally misses the mark. That&apos;s crazy, right? So here&apos;s how we tackle things:</p>
              <ul className="space-y-4">
                {[
                   "We create 4-8 headline variations for each ad set and let the testing do its thing.",
                  "We do calls-to-action that actually make people click—not those boring 'Learn More' buttons we all scroll right past.",
                  "Google, Meta, LinkedIn—we know what works on each platform.",
                  "Different messages for different audiences because, let&apos;s be honest, a homeowner thinks way differently than a contractor.",
                  "Oh, and most folks completely overlook extra details that make your ad stand out and actually make a real difference.",
                  "We do weekly updates to improve results based on real data, not guesses. It's really not that complicated when you break it down.",
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
              <div className="text-4xl font-black text-indigo-600 mb-2">Starting at $299 setup + $199/mo</div>
              <p className="text-gray-600 mb-6">Unlimited copy revisions included.</p>
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
            { q: "Which platforms do you handle?", a: "Google Ads, Meta (that's Facebook and Instagram), LinkedIn Ads, and Microsoft Ads. Each one's got its own quirks and best practices—so what works on LinkedIn won't necessarily fly on Instagram, you know?" },
            { q: "How many variations do you actually write?", a: "Usually somewhere between 4-8 per ad set. It's enough to test things out without drowning in a million options." },
            { q: "What if I already have ads running?", a: "No worries. We'll take a hard look at what's not working and come up with some fresh alternatives. Sometimes the fix is dead simple—just a tweak here and there. Other times? Yeah, we probably need to start from scratch." },
            { q: "How do you know if it's working?", a: "We track clicks, conversions, and cost per lead. If the numbers go up and costs go down, it's working. We don't chase vanity metrics." },
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

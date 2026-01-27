import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "Social Media Content Package | ConvertIQ",
  description: "20 posts per month across all platforms. Stay visible without the hassle.",
};

export default function SocialMediaPage() {
  return (
    <main className="min-h-screen bg-white font-poppins">
      <Navbar />
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">📱</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Social Media Content</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Consistent posting across all platforms. Content that actually gets engagement—not crickets.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-4">Here is the thing about social media: you have to show up consistently or disappear. But nobody wants to spend their whole day on it. Here is what we do:</p>
              <ul className="space-y-4">
                {[
                  "20 posts that actually feel like you—not generic stock photos",
                  "We post to LinkedIn, Facebook, Instagram, and X",
                  "Custom graphics (no more boring stock photos of people shaking hands)",
                  "Hashtags that get you found—not random keywords",
                  "We engage with comments and build community",
                  "Monthly report that tells you what is working, not just vanity metrics",
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
              <div className="text-5xl font-black text-indigo-600 mb-2">$299<span className="text-xl text-gray-500">/mo</span></div>
              <p className="text-gray-600 mb-6">Includes content calendar and scheduling.</p>
              <Link href="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Start 7-Day Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What You Might Be Wondering</h2>
          {[
            { q: "Which platforms should I even be on?", a: "It depends on your business. A local restaurant needs Instagram and Google Business more than LinkedIn. We help you focus where your customers actually are." },
            { q: "Do I get to see posts before they go live?", a: "Yes. You get a content calendar every month. Review, approve, request changes. We do not post without your okay." },
            { q: "Can you actually post from my account?", a: "We can if you want to give us access. Or we just hand you the content and you post it yourself. Whatever you are comfortable with." },
            { q: "What if I hate the content you create?", a: "We adjust. Sometimes it takes a round or two to get the voice right. We work with you until it feels like your brand." },
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
          <h2 className="text-3xl font-bold text-white mb-6">Your Competitors Are Posting. Are You?</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            One restaurant client told us: "I kept meaning to post. Then I never did. Now my Instagram actually looks alive."
          </p>
          <Link href="/contact" className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl">
            Get a Content Calendar
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

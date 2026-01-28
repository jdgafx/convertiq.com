import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "Consistent Social Presence Package | ConvertIQ",
  description: "20 posts per month across all platforms. Stay visible without the hassle.",
};

export default function SocialMediaPage() {
  return (
    <main className="min-h-screen bg-white font-poppins">
      <Navbar />
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">📱</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Consistent Social Presence</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Look, social media can feel like a full-time job—and honestly, nobody&apos;s got time for that. But if you&apos;re not showing up consistently, you&apos;re basically invisible.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-4">We get it. You want results without living on your phone. So here&apos;s what we do for you:</p>
              <ul className="space-y-4">
                {[
                  "20 posts a month that actually sound like you. None of that stiff corporate nonsense.",
                  "We handle LinkedIn, Facebook, Instagram, and X. All of them.",
                  "Custom graphics—and yes, no more cringe stock photos of people shaking hands in meeting rooms.",
                  "Hashtags that are actually chosen to help people find you, not just random words thrown together.",
                  "We also jump into the comments, reply to people, and build a real community around your brand.",
                  "At the end of each month, you get a report that breaks down what&apos;s working. Just the data that actually matters.",
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
            { q: "So, which platforms should you actually be on?", a: "Honestly, it depends on what you do. A local restaurant? Yeah, you're way better off on Instagram and Google Business than LinkedIn—that's just common sense, right? We help you zero in on where your customers actually spend their time." },
            { q: "Do I get to see posts before they go live?", a: "Absolutely. You'll get a content calendar every month. Review it, give it the thumbs up, tell us what needs changing—we're not hitting publish without your say-so, promise." },
            { q: "Can you post from my account?", a: "Yeah, we can if you want to hand over access. Or we can just send you the content and you post it yourself. Honestly, whatever you're comfortable with—no pressure here at all." },
            { q: "What if I need changes to the content?", a: "No worries, we'll tweak it. Sometimes it takes a round or two to really nail your voice, so we'll keep working with you until it actually feels like your brand." },
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
            One restaurant client told us: &quot;I kept meaning to post. Then I never did. Now my Instagram actually looks alive.&quot;
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

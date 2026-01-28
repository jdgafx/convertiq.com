import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "Email Automation Sequences | ConvertIQ",
  description: "Turn subscribers into customers with smart email sequences that actually get read.",
};

export default function EmailAutomationPage() {
  return (
    <main className="min-h-screen bg-white font-poppins">
      <Navbar />
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">✉️</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Email Automation</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Look, automated emails usually sound like... automated emails. We fix that. We build sequences that actually sound like you, running in the background 24/7.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Most Clients See Results in About a Week</h2>
              <p className="text-gray-600 mb-4">We&apos;ve built dozens of email systems for HVAC companies, law firms, dentists, and more. Here&apos;s what you actually get:</p>
              <ul className="space-y-4">
                {[
                  "A welcome series that actually feels personal—like a real person sat down to write it.",
                  "Cart recovery emails that bring people back (honestly, we usually see 15-30% recovery rates).",
                  "Follow-ups that don&apos;t feel spammy or annoying.",
                  "Campaigns to wake up those quiet subscribers who haven&apos;t opened anything in months.",
                  "Smart triggers based on what people actually *do* on your site.",
                  "We test everything. We don&apos;t just guess and hope.",
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
              <div className="text-5xl font-black text-indigo-600 mb-2">$199<span className="text-xl text-gray-500">setup</span></div>
              <p className="text-gray-600 mb-2">Plus $49/mo for sending</p>
              <p className="text-gray-500 text-sm mb-6">First 2,500 subscribers included</p>
              <Link href="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Start 7-Day Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
          {[
            { q: "How long does this take?", a: "Give us about a week. We need a few days to really get your voice down, set up the tech, and test it all. Rushing just leads to mistakes." },
            { q: "What platforms do you work with?", a: "Pretty much all of them—Mailchimp, ConvertKit, Klaviyo, ActiveCampaign. If you're on something weird, we'll figure it out." },
            { q: "Can I write my own copy?", a: "Absolutely. It's your business. We can write it, you can write it, or we can mix and match. Whatever works best for you." },
            { q: "What about spam filters?", a: "We handle all the technical stuff—DKIM, SPF, list hygiene—to keep you out of the spam folder. Most of our clients see 95%+ inbox rates." },
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
          <h2 className="text-3xl font-bold text-white mb-6">Tired of Chasing Leads Manually?</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            One of our clients put it best: &quot;I used to spend 3 hours a day on follow-ups. Now it all happens while I sleep.&quot;
          </p>
          <Link href="/contact" className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl">
            Let us Build Your Sequence
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

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
            Automated email sequences that nurture leads and drive sales—running 24/7 while you focus on other things.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Most Clients See Results in About a Week</h2>
              <p className="text-gray-600 mb-4">We have built dozens of email systems for HVAC companies, law firms, dentists, and more. Here is what you get:</p>
              <ul className="space-y-4">
                {[
                  "Welcome sequence that actually feels personal—not like a robot wrote it",
                  "Cart recovery emails that bring people back (we have seen 15-30% recovery rates)",
                  "Follow-up emails that do not feel spammy",
                  "Re-engagement campaigns for the people who went quiet",
                  "Smart triggers based on what people actually do",
                  "Testing built in—we do not just guess",
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
            { q: "How long does the whole process take?", a: "Usually about a week. We need a few days to understand your business, write the copy, set up the automation, and test everything. Rushing usually means mistakes." },
            { q: "What platforms work with this?", a: "Most of them—Mailchimp, ConvertKit, Klaviyo, ActiveCampaign. If you are on something else, we will figure it out." },
            { q: "Can I write my own copy?", a: "Absolutely. Some clients have very specific voices. We can use your words, our words, or a mix. Your choice." },
            { q: "What happens if emails go to spam?", a: "We design everything to avoid spam filters—proper authentication, list hygiene, and actually useful content. Most clients see 95%+ inbox rates." },
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
            One of our clients put it best: "I used to spend 3 hours a day on follow-ups. Now it all happens while I sleep."
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

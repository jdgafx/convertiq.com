import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "Lead Magnet & Funnel Setup | ConvertIQ",
  description: "Complete lead generation system. From opt-in to sale, automated.",
};

export default function LeadFunnelPage() {
  return (
    <main className="min-h-screen bg-white font-poppins">
      <Navbar />
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🧲</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Lead Magnet & Funnel Setup</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A complete lead generation machine. Capture leads, nurture them, and convert them into customers—automatically.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-4">A funnel is not complicated—it is just a series of logical steps. Here is what we build:</p>
              <ul className="space-y-4">
                {[
                  "A lead magnet worth downloading (checklist, template, guide—something useful)",
                  "An opt-in page that actually converts visitors into subscribers",
                  "A thank-you page that delivers the lead magnet smoothly",
                  "5-7 email sequence that nurtures and builds trust",
                  "Integration with your CRM so leads are scored and routed properly",
                  "Dashboard so you can watch leads come in real-time",
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
              <div className="text-5xl font-black text-indigo-600 mb-2">$1,499<span className="text-xl text-gray-500">/one-time</span></div>
              <p className="text-gray-600 mb-6">Complete funnel. No monthly fees for setup.</p>
              <Link href="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Get Your Funnel
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Things Clients Usually Ask</h2>
          {[
            { q: "What makes a good lead magnet?", a: "Quick wins. Checklists, templates, cheat sheets—things people can use immediately. A 50-page ebook nobody will read? Skip it." },
            { q: "Can you work with my existing email platform?", a: "Yes. Whatever you are already using—MAilchimp, Klaviyo, HubSpot—we integrate with it." },
            { q: "What if I need edits after launch?", a: "First 30 days are free for changes. After that, reasonable hourly rates. We do not disappear after launch." },
            { q: "How long does the email sequence run?", a: "Usually 5-7 emails over 2-3 weeks. We adjust based on your data and how people engage." },
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
          <h2 className="text-3xl font-bold text-white mb-6">Lead Generation on Autopilot</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            A local gym owner told us: "I used to manually follow up with every lead. Now I wake up to new appointments booked while I slept."
          </p>
          <Link href="/contact" className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl">
            Build My Funnel
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

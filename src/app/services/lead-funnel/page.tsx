import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "AI Assisted LeadGen | ConvertIQ",
  description: "Turn visitors into customers 24/7. AI-powered lead capture, qualification, and nurturing across all channels.",
};

export default function LeadGenerationPage() {
  return (
    <main className="min-h-screen bg-white font-poppins">
      <Navbar />

      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🧲</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">AI Assisted LeadGen</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The future of lead generation is here. Your AI agent works 24/7, capturing leads, asking the right questions, and booking appointments while you sleep.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why AI Lead Generation Works Better</h2>
              <p className="text-gray-600 mb-6">
                Companies using AI for lead generation see conversion rates improve by up to 50%. Here's what we set up for you:
              </p>
              <ul className="space-y-4">
                {[
                  "24/7 lead capture across your website, Facebook Messenger, and Instagram",
                  "Smart qualification that asks the right questions and scores leads automatically",
                  "Instant response—never let a hot lead go cold while you are sleeping",
                  "Integration with your CRM so leads land exactly where your team needs them",
                  "LinkedIn lead generation setup that finds and engages prospects on autopilot",
                  "Automated follow-up sequences that nurture leads until they are ready to buy",
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
              <div className="text-5xl font-black text-indigo-600 mb-2">$1,499<span className="text-xl text-gray-500">/one-time</span></div>
              <p className="text-gray-600 mb-6">Complete AI lead gen system. No monthly fees for setup.</p>
              <Link href="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works Across All Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: "💬", title: "Website Chatbot", desc: "Pop up at the right moment, ask qualifying questions, book appointments" },
              { icon: "📱", title: "Facebook Messenger", desc: "Catch leads where they already spend time—1.3 billion users on Messenger" },
              { icon: "💼", title: "LinkedIn Automation", desc: "Find prospects, engage them, and nurture until they want to talk sales" },
            ].map((channel, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <div className="text-4xl mb-3">{channel.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{channel.title}</h3>
                <p className="text-gray-600 text-sm">{channel.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Questions People Ask</h2>
          {[
            { q: "How is this different from a regular chatbot?", a: "Regular chatbots just answer questions. Our AI actually sells—it qualifies leads, asks for contact info, and books appointments. It knows when to push and when to back off." },
            { q: "Does it work with my existing CRM?", a: "Yep. HubSpot, Salesforce, Pipedrive, Zoho—whatever you use, the leads flow right in with all their conversation history attached." },
            { q: "What about Facebook Messenger specifically?", a: "We set up a bot on your Facebook page that catches messages 24/7. Someone messages at 2am asking about pricing? Your AI responds instantly, collects their info, and tags them as a hot lead." },
            { q: "LinkedIn sounds complicated. Is it?", a: "We handle the complexity. You tell us who your ideal customer is, and our system finds them, engages with their content, and starts conversations that turn into leads." },
            { q: "When will I start seeing results?", a: "Most clients see qualified leads within the first week. The system gets smarter as it learns what questions convert best for your business." },
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
          <h2 className="text-3xl font-bold text-white mb-6">Stop Letting Leads Slip Away</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            One local business owner told us: "I used to lose 5-10 leads a week because I couldn't respond fast enough. Now my AI catches every single one."
          </p>
          <Link href="/contact" className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl">
            Get Your Lead Gen System
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

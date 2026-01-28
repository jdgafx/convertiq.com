import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "AI Assisted LeadGen | ConvertIQ",
  description: "Turn visitors into customers 24/7. AI-powered lead capture across website, Facebook, and LinkedIn.",
};

export default function LeadGenPage() {
  return (
    <main className="min-h-screen bg-white font-poppins">
      <Navbar />

      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🧲</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">AI Assisted LeadGen</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Most lead funnels are broken. They either ask for too much info too soon, or they just drop leads into a black hole. We build funnels that actually convert strangers into booked appointments.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why AI Lead Generation Works Better</h2>
              <p className="text-gray-600 mb-6">
                We build funnels that actually work—you know, the kind that turn strangers into booked appointments on your calendar. Here&apos;s how we roll:
              </p>
              <ul className="space-y-4">
                {[
                  "First, we create a killer lead magnet—something your ideal customer actually wants, whether that&apos;s a checklist, guide, or calculator.",
                  "Then we build a landing page that converts at 20% or higher (yeah, that high).",
                  "After that, we set up automated email follow-ups that nurture leads until they&apos;re ready to buy.",
                  "We hook it up to your calendar so they can book directly.",
                  "And we track everything so you know exactly what&apos;s working.",
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Investment</h3>
              <div className="text-5xl font-black text-indigo-600 mb-2">$1,499</div>
              <p className="text-gray-500 mb-2">one-time setup fee</p>
              <p className="text-gray-600 mb-6">
                No monthly retainers. No hidden costs. You pay once, we build the system, and it keeps working.
              </p>
              <Link href="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Get Started
              </Link>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Typical clients see their first qualified lead within 7 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Three Channels, One System</h2>
          <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
            Most businesses ignore at least one of these channels. We connect all three so you never miss a lead, no matter where they find you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "💬",
                title: "Website Chatbot",
                desc: "Pops up at the right moment. Asks qualifying questions. Books appointments. Works 24/7.",
                stat: "Never sleep on a lead again"
              },
              {
                icon: "📱",
                title: "Facebook Messenger",
                desc: "1.3 billion people use Messenger every month. We catch them on a platform they already trust.",
                stat: "Instant response, any time of day"
              },
              {
                icon: "💼",
                title: "LinkedIn Automation",
                desc: "Finds prospects who match your criteria. Engages with their content. Starts conversations that convert.",
                stat: "Warm introductions at scale"
              },
            ].map((channel, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{channel.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{channel.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{channel.desc}</p>
                <p className="text-indigo-600 font-medium text-sm">{channel.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Clients Actually Ask</h2>
          <div className="space-y-4">
            {[
              {
                q: "How is this different from the chatbot I already have?",
                a: "Most chatbots are glorified FAQs—they answer questions but do not sell. Our AI actually has sales conversations. It qualifies leads, pushes for contact info, and books appointments. It knows when to be friendly and when to close. One client told us their old chatbot felt like a digital vending machine. This feels like having their best salesperson working night shifts."
              },
              {
                q: "What happens if I already use a CRM?",
                a: "Good question—we integrate with most of them. HubSpot, Salesforce, Pipedrive, Zoho, you name it. Every conversation, every piece of data, flows straight into your existing system. Your sales team sees the full conversation history, so leads never have to repeat themselves."
              },
              {
                q: "Facebook Messenger sounds complicated. Is it?",
                a: "Not at all. We handle the setup. Here is what happens: someone messages your Facebook page at 3am with questions about your service. Your AI responds immediately—yes, immediately—asks a couple qualifying questions, and if they are a good fit, offers to book a call. They click a link, pick a time, done. You wake up to a booked appointment."
              },
              {
                q: "I have tried LinkedIn automation before and it felt spammy.",
                a: "We hear you. Those tools that blast connection requests with generic messages? They do not work anymore and honestly, they give LinkedIn automation a bad name. Our approach is different. We find people who actually match your ideal customer profile, engage with their content in a genuine way (commenting thoughtfully, not just liking), and start conversations that feel natural. The goal is introductions, not spam."
              },
              {
                q: "How long until I see results?",
                a: "It depends on your traffic and offer, but most clients see their first qualified lead within the first week. The system gets smarter as it learns what questions convert best for your business. By week three or four, you typically see a steady stream coming in without you doing anything."
              },
              {
                q: "What if I need changes after launch?",
                a: "First 30 days are free for any tweaks you want. After that, we charge reasonable hourly rates for edits. We are not the kind of shop that disappears after deployment—if you need changes, you get them. Most clients stick around because the system works, not because they are locked in."
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">The Number One Reason Leads Get Lost</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto text-lg">
            Response time. A lead that does not get a reply within 5 minutes is 10x less likely to convert. That is just how people work—they move on, forget, find a competitor. 
          </p>
          <p className="text-indigo-100 mb-10 max-w-2xl mx-auto text-lg">
            One gym owner we worked with put it simply: "I used to lose 5 to 10 leads a week because I could not respond fast enough. Now I wake up to appointments already booked on my calendar."
          </p>
          <Link href="/contact" className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            Book Your Discovery Call
          </Link>
          <p className="text-indigo-200 text-sm mt-6">
            Takes 15 minutes. No pressure. We will just talk about what you need.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

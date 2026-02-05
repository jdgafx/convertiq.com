import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "Smart Lead Capture | Amp AI",
  description: "Turn visitors into customers 24/7. AI-powered lead capture across website, Facebook, and LinkedIn.",
};

export default function LeadGenPage() {
  return (
    <main className="min-h-screen bg-white font-poppins">
      <Navbar />

      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🧲</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Smart Lead Capture</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Most lead funnels are broken. They either ask for too much info too soon, or they just drop leads into a black hole. We build funnels that actually convert strangers into booked appointments.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Smart Lead Capture Works Better</h2>
              <p className="text-gray-600 mb-6">
                We build funnels that actually work—you know, the kind that turn strangers into booked appointments on your calendar. Here&apos;s how we roll:
              </p>
              <ul className="space-y-4">
                {[
                  "We start by creating something your ideal customers actually want—maybe it's a checklist, a guide, or a calculator. Something they can't resist downloading.",
                  "Then we build you a landing page that actually converts. We're talking 20% or better. Most agencies get excited about 5%—we shoot way higher.",
                  "Next, we set up email sequences that don't feel robotic. These emails warm up your leads automatically until they're ready to talk.",
                  "We connect everything to your calendar so qualified prospects can book time with you directly—no back-and-forth email chains.",
                  "And yeah, we track all of it. You'll know exactly which pieces are working and which ones we need to tweak.",
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
              <div className="text-5xl font-black text-indigo-600 mb-2">$1,499 setup + $299/mo</div>
              <p className="text-sm text-gray-500 mb-2">Complete lead generation system</p>
              <p className="text-gray-600 mb-6">
                Simple, transparent pricing. We build the system, keep it running, and ensure your leads keep flowing.
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
                a: "Look, most chatbots just answer basic questions and stop there. Ours actually sells. It figures out if someone's a good fit, gets their contact info, and books them on your calendar—all automatically. One of our clients said their old bot felt like talking to a vending machine. Ours? Like having their best sales rep pulling night shifts."
              },
              {
                q: "What happens if I already use a CRM?",
                a: "Good question—we plug into pretty much everything. HubSpot, Salesforce, Pipedrive, Zoho, you name it. Every chat, every detail, drops right into your existing setup. Your team sees the full conversation so leads never have to repeat themselves."
              },
              {
                q: "Facebook Messenger sounds complicated. Is it?",
                a: "Not at all—that's our job. Here's what actually happens: someone DMs your Facebook page at 3am. Your bot replies instantly (yes, instantly), asks a few quick questions to qualify them, and if they're a fit, offers to book a call. They pick a time from your calendar, done. You wake up to a booked meeting. Pretty sweet."
              },
              {
                q: "I have tried LinkedIn automation before and it felt spammy.",
                a: "Yeah, we get that. Those tools spamming everyone with the same generic message? Total garbage—and they ruin LinkedIn for everyone. We do it differently. We find people who actually fit your ideal profile, engage with their posts like real humans (actual thoughtful comments, not just 'great post!'), and start real conversations. Think warm intros, not cold spam."
              },
              {
                q: "How long until I see results?",
                a: "Depends on your traffic, honestly. Most folks see their first solid lead within the first week though. The cool part? The system learns what works best for your specific business and gets better over time. By week three or four, you'll usually have a steady flow coming in without lifting a finger."
              },
              {
                q: "What if I need changes after launch?",
                a: "First 30 days? Totally free for whatever tweaks you need. After that, we bill hourly at reasonable rates. We're not those guys who vanish after launch—if you need something changed, you get it. Truth is, most clients stay because this stuff actually works, not because they're stuck in some contract."
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
            Response time. A lead that doesn't get a reply within 5 minutes is 10x less likely to convert. That's just how people work—they move on, forget, find a competitor. 
          </p>
          <p className="text-indigo-100 mb-10 max-w-2xl mx-auto text-lg">
            One gym owner we worked with put it simply: "I used to lose 5 to 10 leads a week because I couldn't respond fast enough. Now I wake up to appointments already booked on my calendar."
          </p>
          <Link href="/contact" className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            Book Your Discovery Call
          </Link>
          <p className="text-indigo-200 text-sm mt-6">
            Takes 15 minutes. No pressure. We'll just talk about what you need.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

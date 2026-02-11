import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "AI Voice Receptionist | AMP Marketing",
  description: "Never miss a call again. AI-powered phone answering that works 24/7.",
};

export default function AiVoicePage() {
  return (
    <main className="min-h-screen bg-white font-poppins">
      <Navbar />
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">📞</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Virtual Front Desk</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Look, missed calls aren't just annoying—they're missed money. Honestly, if you aren't picking up on the first ring, your customers are just calling the next guy on Google. Our AI phone system handles everything 24/7 so you don't have to. It books appointments, answers questions, and basically runs your front desk while you're actually doing the work.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Phone Works 24/7 Now</h2>
              <p className="text-gray-600 mb-6">Here's the deal—most businesses miss about a third of their calls. That's a lot of cash left on the table. We make sure every single caller gets a real conversation and a chance to book, even if it's 2 AM on a Sunday.</p>
              <ul className="space-y-4">
                {[
                  "First ring. Every time. No more voicemail, no more missed opportunities.",
                  "It chats with callers, figures out if they're a good fit, then books them automatically.",
                  "Something weird come up? It can send the call to your cell or take a message.",
                  "Keep your number. Seriously, you don't need to change anything.",
                  "We train it on your services in like an hour. No tech degree required.",
                  "Plugs into whatever calendar you use. No double-bookings, ever.",
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
              <div className="text-4xl font-black text-indigo-600 mb-2">Starting at $497 setup + $249/mo</div>
              <p className="text-gray-600 mb-6">Professional setup and ongoing 24/7 service.</p>
              <Link href="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Start 7-Day Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Questions? We've Got Answers</h2>
          {[
            { q: "How fast can I get this running?", a: "Most folks are up and getting calls within a day or two. We just need to know what you do, when you're free, and how you want calls handled." },
            { q: "What if it can't help someone?", a: "You set the rules. It can grab their info, send them to your cell, or schedule a callback. Whatever works for you." },
            { q: "Do I need a new phone number?", a: "Nope. You keep your number. We just route calls through our system so they get answered. Simple." },
            { q: "How do I know how many calls you handled?", a: "Dashboard shows you everything—how many calls, how long they lasted, what happened. No guessing." },
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
          <h2 className="text-3xl font-bold text-white mb-6">Stop Losing Calls to Voicemail</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Try it free for a week. See how many appointments you wake up to.
          </p>
          <Link href="/contact" className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl">
            Start Free Trial
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

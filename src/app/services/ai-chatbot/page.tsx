import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "AI Chatbot Setup | AMP Marketing",
  description: "Capture leads 24/7 with an intelligent AI chatbot. Never miss a website visitor again.",
};

export default function AiChatbotPage() {
  return (
    <main className="min-h-screen bg-white font-poppins">
      <Navbar />

      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🤖</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Smart Website Chat</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Look, your website should be doing more than just sitting there. Honestly, if it's not starting conversations and booking leads while you're asleep, you're losing money. We build custom-trained AI chatbots that actually talk to your visitors and get them on your calendar.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Helps Your Business</h2>
              <p className="text-gray-600 mb-6">
                Honestly, most chatbots are trash. We do it differently. We train your bot on your actual business docs and PDFs so it sounds like you, not some generic script. It's like having your best salesperson working 24/7 without the coffee breaks.
              </p>
              <ul className="space-y-4">
            {[
              "We feed it your actual website, docs, and any PDFs you have—so it really knows your business inside and out.",
              "It asks the right questions to figure out if someone's actually worth your time before booking anything.",
              "Plugs straight into whatever calendar you use—Google, Outlook, doesn't matter. Books only when you're free.",
              "Visitors get instant answers at 2am. You don't have to be there.",
              "Every conversation automatically flows into your CRM. No manual data entry.",
              "And yeah, it gets smarter the more it chats with people. Learns what works.",
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
              <div className="text-4xl font-black text-indigo-600 mb-2">Starting at $497 setup + $149/mo</div>
              <p className="text-gray-600 mb-6">Custom training and monthly AI management.</p>
              <Link href="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Start 7-Day Free Trial
              </Link>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Try it on your site. If it doesn&apos;t work, you don&apos;t pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          {[
            { 
              q: "How does the free trial work?", 
              a: "You get the full thing for 7 days—no credit card needed. Just see how many leads it actually pulls in. If it doesn't work for you, walk away. No harm done." 
            },
            { 
              q: "How is the AI trained?", 
              a: "We upload your website, any PDFs you have, docs, whatever you've got. The bot learns it all so it gives answers that actually make sense for your business—not generic fluff." 
            },
            { 
              q: "Does it work with my calendar?", 
              a: "Yup—works with Google, Outlook, whatever you use. Only books during times you actually have free. We set all that up for you." 
            },
            { 
              q: "What if it doesn't know an answer?", 
              a: "It tells them something like 'Let me get someone who knows more about that'—then immediately pings your team via email or text. You follow up and close the deal. Easy." 
            },
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Capture More Leads?</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Give it a week. Seriously. If you don't see more qualified leads coming in, just walk away.
          </p>
          <Link href="/contact" className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all">
            Start Free Trial
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

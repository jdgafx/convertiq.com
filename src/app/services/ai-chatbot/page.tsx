import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "AI Chatbot Setup | AMP Marketing",
  description: "An AI chatbot that captures leads around the clock. Never lose another website visitor.",
  keywords: ["AI chatbot for business", "website chatbot", "lead capture chatbot", "automated appointment booking", "24/7 chatbot", "AI lead qualification", "chatbot for small business"],
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
            Your website should do more than sit there looking pretty. If it's not engaging visitors, qualifying leads, and booking appointments while you sleep, it's costing you money. Our AI chatbots are trained on your business and guide visitors from casual browsing to a booked appointment.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ways Your Business Benefits</h2>
              <p className="text-gray-600 mb-6">
                Most chatbots on the market are worthless. We do things differently. We train yours on your business files, docs, and PDFs so it sounds like you, not some generic script. This AI doesn't need breaks. It works your schedule, which is 24/7.
              </p>
              <ul className="space-y-4">
            {[
              "Trained on your website, docs, and PDFs so it understands your business inside and out.",
              "Qualifies every lead before booking, so you only meet with people who are ready to buy.",
              "Syncs with your calendar to prevent double-bookings. Works with Google, Outlook, and more.",
              "Responds instantly at 2 AM, on weekends, and on holidays. Your leads never wait.",
              "Conversations feel natural and personal, tailored to each visitor's questions and needs.",
              "Gets smarter over time by learning from every interaction.",
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
                Try it on your site. Only pay if you see results.
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
              a: "You get full access for 7 days, no credit card required. See how many leads the chatbot captures for you. If it's not a fit, walk away. Zero risk." 
            },
            { 
              q: "How is the AI trained?", 
              a: "We feed it your website content, PDFs, and documents. The bot absorbs all of it and gives answers specific to your business, not generic filler." 
            },
            { 
              q: "Does it work with my calendar?", 
              a: "Yes. Google Calendar, Outlook, and most other platforms. It checks your availability in real time and only books open slots. We handle the entire setup for you." 
            },
            { 
              q: "What if it doesn't know an answer?", 
              a: "It lets the visitor know someone will follow up, then immediately alerts your team via email or text. You take it from there and close the deal." 
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
          <h2 className="text-3xl font-bold text-white mb-6">Your next customer is on your website right now.</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Give it 7 days. If you're not getting more qualified leads, cancel and pay nothing.
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

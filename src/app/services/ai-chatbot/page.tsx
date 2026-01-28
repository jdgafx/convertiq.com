import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "AI Chatbot Setup | ConvertIQ",
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
            Your website should be your best salesperson. We set up custom-trained AI chatbots that engage every visitor, answer their questions, and book qualified appointments on your calendar.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Helps Your Business</h2>
              <p className="text-gray-600 mb-6">
                Our AI agents are trained specifically on your business. They understand your products, services, and pricing, allowing them to provide accurate information to your visitors 24/7.
              </p>
              <ul className="space-y-4">
            {[
              "The bot is trained on your actual website content and documentation.",
              "It qualifies every lead before booking an appointment.",
              "The system syncs directly with your existing calendar.",
              "It provides instant answers to common customer questions.",
              "All lead data is automatically pushed to your CRM.",
              "The AI continuously improves based on visitor interactions.",
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
              <div className="text-5xl font-black text-indigo-600 mb-2">$149<span className="text-xl text-gray-500">/mo</span></div>
              <p className="text-gray-600 mb-6">Plus one-time setup fee of $497</p>
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
              a: "You get full access to the platform for 7 days with no credit card required. This allows you to see exactly how many qualified leads the system generates before committing." 
            },
            { 
              q: "How is the AI trained?", 
              a: "We use your website content, PDFs, and existing documentation to build a custom knowledge base for your bot. This ensures it only provides accurate, business-specific information." 
            },
            { 
              q: "Does it work with my calendar?", 
              a: "Yes. It integrates with major calendar platforms like Google and Outlook, allowing visitors to book meetings only during your available hours." 
            },
            { 
              q: "What if it doesn't know an answer?", 
              a: "The system will politely inform the visitor and instantly notify your team via email or SMS so a real person can follow up and close the lead." 
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

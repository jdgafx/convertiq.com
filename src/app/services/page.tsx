import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "AI Marketing Services | ConvertIQ",
  description: "10 AI-powered marketing services that actually get results. From chatbots to content to full funnels.",
};

const services = [
  { 
    icon: "🧲", 
    title: "AI Assisted LeadGen", 
    desc: "Your AI agent works 24/7 across website, Facebook Messenger, and LinkedIn—capturing leads, qualifying them, and booking appointments.", 
    price: "$1,499 one-time",
    href: "/services/lead-funnel"
  },
  { 
    icon: "🤖", 
    title: "AI Chatbot Setup", 
    desc: "Turn your website into a 24/7 lead capture machine. The bot handles questions, books appointments, and hands off warm leads.", 
    price: "$149/mo",
    href: "/services/ai-chatbot"
  },
  { 
    icon: "📞", 
    title: "AI Voice Receptionist", 
    desc: "Never miss a call again. Your virtual receptionist answers instantly, qualifies callers, and books appointments.", 
    price: "$249/mo",
    href: "/services/ai-voice"
  },
  { 
    icon: "📍", 
    title: "Google Business Optimization", 
    desc: "Show up in local searches when people look for what you do. More visibility = more calls.", 
    price: "$399 one-time",
    href: "/services/google-business"
  },
  { 
    icon: "⭐", 
    title: "AI Review Response", 
    desc: "Every review gets a thoughtful response. Build trust automatically without spending hours typing.", 
    price: "$99/mo",
    href: "/services/review-response"
  },
  { 
    icon: "✉️", 
    title: "Email Automation", 
    desc: "Follow up with every lead automatically. Nurture sequences that actually get read and convert.", 
    price: "$49/mo + $199 setup",
    href: "/services/email-automation"
  },
  { 
    icon: "📱", 
    title: "Social Media Content", 
    desc: "Fresh content every month across all platforms. Stay visible without becoming a social media manager.", 
    price: "$299/mo",
    href: "/services/social-media"
  },
  { 
    icon: "📝", 
    title: "AI Ad Copy", 
    desc: "Better copy = more clicks = lower costs. Ads that actually perform, optimized constantly.", 
    price: "$199/mo",
    href: "/services/ad-copy"
  },
  { 
    icon: "🔍", 
    title: "SEO Content Writing", 
    desc: "Articles that rank on Google. Real content, not keyword stuffing. Traffic that turns into customers.", 
    price: "$149/article",
    href: "/services/seo-content"
  },
  { 
    icon: "🎯", 
    title: "Landing Page Creation", 
    desc: "Pages designed to convert. Every element optimized for action. Track everything.", 
    price: "$799/page",
    href: "/services/landing-pages"
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#0F0F23] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm">Our Services</span>
          <h1 className="text-4xl md:text-6xl font-black mt-4 mb-6">
            AI-Powered Marketing That <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Actually Works</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            10 services designed to get you more leads and make more sales. No fluff, no vague promises—just real results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Link 
                key={idx} 
                href={service.href}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 group hover:-translate-y-1 block"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>
                <div className="text-indigo-600 font-bold text-lg">{service.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Not Sure Where to Start?</h2>
          <p className="text-indigo-100 text-xl mb-8 max-w-2xl mx-auto">
            Book a free 15-minute call and we will recommend the right services for your business.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

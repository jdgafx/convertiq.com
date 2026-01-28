import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "AI Marketing Services | ConvertIQ",
  description: "10 AI-powered marketing services that actually get results. From chatbots to content to full funnels.",
};

const services = [
  { 
    icon: "🧲", 
    title: "Automated Lead Capture", 
    desc: "Think of this as a team that never sleeps. Our AI finds potential customers on social media and your site, starts a conversation, and gets them on your calendar automatically. You wake up to a list of qualified appointments without the 'back and forth' emails.", 
    price: "$1,499 one-time",
    href: "/services/lead-funnel"
  },
  { 
    icon: "🤖", 
    title: "Smart Website Chat", 
    desc: "Most chatbots are frustrating. Ours actually answers questions like a real person would—then books the call when someone's ready. We've seen clients significantly increase their qualified leads within a week of putting this on their site.", 
    price: "$149/mo",
    href: "/services/ai-chatbot"
  },
  { 
    icon: "📞", 
    title: "Virtual Front Desk", 
    desc: "Every missed call is a missed opportunity. This virtual receptionist answers instantly, qualifies the caller, and books the appointment. It never calls in sick and handles your phone lines 24/7 so you can focus on the work.", 
    price: "$249/mo",
    href: "/services/ai-voice"
  },
  { 
    icon: "📍", 
    title: "Local Search Mastery", 
    desc: "If you're not showing up on Maps when people nearby search for what you do, you're losing business. We refine your profile so people in your neighborhood actually find you. More visibility leads to more phone calls.", 
    price: "$399 one-time",
    href: "/services/google-business"
  },
  { 
    icon: "⭐", 
    title: "Reputation Management", 
    desc: "Reviews matter, but responding to every single one is a full-time job. Our system reads each review and writes a thoughtful response automatically. Good reviews are celebrated, and concerns are handled professionally.", 
    price: "$99/mo",
    href: "/services/review-response"
  },
  { 
    icon: "✉️", 
    title: "Natural Follow-Ups", 
    desc: "Most email follow-ups feel cold and generic. Our sequences read like you wrote them yourself. With personal touches and a natural flow, we move leads through your pipeline instead of letting them sit and collect dust.", 
    price: "$49/mo + $199 setup",
    href: "/services/email-automation"
  },
  { 
    icon: "📱", 
    title: "Consistent Social Presence", 
    desc: "Staying active on social media works, but it takes a lot of time. We manage your monthly posts across all platforms so you stay visible and relevant without ever having to touch your phone.", 
    price: "$299/mo",
    href: "/services/social-media"
  },
  { 
    icon: "📝", 
    title: "High-Performance Ads", 
    desc: "Bad ad copy is a waste of money. We write headlines and descriptions that actually get clicks—and we keep testing them until your cost per lead drops. You watch the numbers improve while we handle the data.", 
    price: "$199/mo",
    href: "/services/ad-copy"
  },
  { 
    icon: "🔍", 
    title: "Content That Ranks", 
    desc: "SEO isn't about stuffing keywords; it's about providing value. We write articles people actually want to read—the kind that ranks on Google because it's genuinely useful to your audience.", 
    price: "$149/article",
    href: "/services/seo-content"
  },
  { 
    icon: "🎯", 
    title: "Conversion-First Pages", 
    desc: "Some pages just sit there. Ours are built to drive action—getting people to click, call, or buy. Every headline and button placement is tested to make sure you get the best return on your investment.", 
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
              Grow Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Proven AI Strategies</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We provide specific, results-oriented tools to help you find more leads and book more appointments automatically. 
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
            Book a free 15-minute call. We'll tell you what you need (and what you don't).
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

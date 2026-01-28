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
    desc: "Here's the thing—your website works while you sleep. Actually. Whether someone's browsing at 2am or chatting on Facebook during lunch, this agent grabs them, asks the right questions, and books appointments on your calendar. No more 'we'll get back to you within 24 hours' emails that go nowhere.", 
    price: "$1,499 one-time",
    href: "/services/lead-funnel"
  },
  { 
    icon: "🤖", 
    title: "AI Chatbot Setup", 
    desc: "Most chatbots are useless. They frustrate visitors and make you look amateur. Ours? It actually answers questions like a real person would—then books the call when someone's ready. We've seen clients triple their qualified leads within a week of putting this on their site.", 
    price: "$149/mo",
    href: "/services/ai-chatbot"
  },
  { 
    icon: "📞", 
    title: "AI Voice Receptionist", 
    desc: "Look, nobody likes missing calls. Especially when they're from people ready to spend money with you. This virtual receptionist picks up—yes, actually picks up—filters out the spammers, and books appointments. The best part? It never calls in sick.", 
    price: "$249/mo",
    href: "/services/ai-voice"
  },
  { 
    icon: "📍", 
    title: "Google Business Optimization", 
    desc: "If you're not showing up on Maps when locals search for what you do, you might as well not exist. We've helped hundreds of businesses go from 'who?' to 'oh, they're right down the street' in weeks. More visibility. More phone calls. Pretty simple math, honestly.", 
    price: "$399 one-time",
    href: "/services/google-business"
  },
  { 
    icon: "⭐", 
    title: "AI Review Response", 
    desc: "Reviews matter. A lot. But responding to every single one takes forever—until you don't have to. Our system reads each review and writes responses that actually sound thoughtful. Good reviews get celebrated. Bad ones? We turn them into opportunities. Without you typing a thing.", 
    price: "$99/mo",
    href: "/services/review-response"
  },
  { 
    icon: "✉️", 
    title: "Email Automation", 
    desc: "Let's be real—most email follow-ups are garbage. They feel cold, generic, and nobody reads them. Our sequences? They read like you wrote them. Personal touches, natural flow, actually useful information. Leads move through your pipeline instead of just sitting there collecting dust.", 
    price: "$49/mo + $199 setup",
    href: "/services/email-automation"
  },
  { 
    icon: "📱", 
    title: "Social Media Content", 
    desc: "Honestly, social media takes way too much time for something that feels optional. But here's the thing—it works. We've got you covered with fresh posts every month across all platforms. You stay visible, we stay busy. Everyone wins.", 
    price: "$299/mo",
    href: "/services/social-media"
  },
  { 
    icon: "📝", 
    title: "AI Ad Copy", 
    desc: "Bad ad copy is just burning money. Good ad copy? That's your best employee. We write headlines and descriptions that actually get clicks—and we keep tweaking them until your cost per lead drops. You watch the numbers improve.", 
    price: "$199/mo",
    href: "/services/ad-copy"
  },
  { 
    icon: "🔍", 
    title: "SEO Content Writing", 
    desc: "SEO used to be about cramming keywords until your content sounded like a robot wrote it. (Spoiler: it usually did.) We write articles people actually want to read—the kind that ranks on Google because it's genuinely useful. Wild concept, we know.", 
    price: "$149/article",
    href: "/services/seo-content"
  },
  { 
    icon: "🎯", 
    title: "Landing Page Creation", 
    desc: "Some pages just sit there. Ours are built to do something—get people to click, call, or buy. Every headline, button, and image placement gets tested. We track everything so you can see exactly what works and what doesn't.", 
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
              Marketing Stuff That <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Actually Works</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We built 10 specific tools to help you get leads. That's it. That's the pitch.
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

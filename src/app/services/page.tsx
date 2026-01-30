import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "AI Solutions & Services | Amp AI Experts",
  description: "AI solutions that scale. From lead generation to custom applications, we build systems that automate and grow your business.",
};

const services = [
  { 
    icon: "🚀", 
    title: "AI Lead Generation", 
    desc: "We build AI systems that find your ideal customers across social media, search, and 100+ ad platforms. Our programmatic approach means your pipeline stays full while you focus on closing deals.", 
    price: "$2,499/mo",
    href: "/services/lead-generation",
    featured: true
  },
  { 
    icon: "💡", 
    title: "AI Consulting", 
    desc: "Not sure where AI fits in your business? We'll audit your operations and build a roadmap. From automation opportunities to custom implementations, we help you cut costs and scale faster.", 
    price: "$500/hr or $3,999/mo",
    href: "/services/ai-consulting",
    featured: true
  },
  { 
    icon: "📞", 
    title: "AI Voice Solutions", 
    desc: "AI Phone Receptionist and Cold Calling powered by VoiceIQ. Every call gets answered, qualified, and booked. Whether it's inbound leads or outbound prospecting, your phone becomes a revenue machine.", 
    price: "$349/mo",
    href: "/services/ai-voice",
    featured: true
  },
  { 
    icon: "⚙️", 
    title: "Custom AI Applications", 
    desc: "Need something built specifically for your workflow? We create bespoke AI applications that integrate with your existing tools. From internal automation to customer-facing features.", 
    price: "Custom quote",
    href: "/services/custom-apps",
    featured: true
  },
  { 
    icon: "🤖", 
    title: "Smart Website Chat", 
    desc: "Most chatbots are frustrating. Ours actually answers questions like a real person would—then books the call when someone's ready. We've seen clients significantly increase their qualified leads within a week.", 
    price: "$149/mo",
    href: "/services/ai-chatbot"
  },
  { 
    icon: "📱", 
    title: "AI Social Media", 
    desc: "Staying active on social media works, but it takes a lot of time. We manage your monthly posts across all platforms so you stay visible and relevant without ever having to touch your phone.", 
    price: "$299/mo",
    href: "/services/social-media"
  },
  { 
    icon: "📝", 
    title: "Programmatic Advertising", 
    desc: "Bad ad copy is a waste of money. We write headlines and descriptions that actually get clicks—and we keep testing them until your cost per lead drops. AI-managed campaigns across 100+ platforms.", 
    price: "$599/mo",
    href: "/services/ad-copy"
  },
  { 
    icon: "✉️", 
    title: "Natural Follow-Ups", 
    desc: "Most email follow-ups feel cold and generic. Our sequences read like you wrote them yourself. With personal touches and a natural flow, we move leads through your pipeline.", 
    price: "$49/mo + $199 setup",
    href: "/services/email-automation"
  },
  { 
    icon: "📍", 
    title: "Local Search Mastery", 
    desc: "If you're not showing up on Maps when people nearby search for what you do, you're losing business. We refine your profile so people in your neighborhood actually find you.", 
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
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      <section className="bg-[#0F0F23] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm">Our Services</span>
            <h1 className="text-4xl md:text-6xl font-black mt-4 mb-6">
              AI Solutions That <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Actually Scale</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From lead generation to custom applications. We build AI systems that automate your business and drive real growth.
            </p>
        </div>
      </section>

      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm">Featured</span>
            <h2 className="text-3xl font-black text-gray-900 mt-2">Our Core AI Solutions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.filter(s => s.featured).map((service, idx) => (
              <Link 
                key={idx} 
                href={service.href}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-indigo-100 group hover:-translate-y-1 block"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>
                <div className="text-indigo-600 font-bold text-lg">{service.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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

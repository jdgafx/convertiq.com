import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export const metadata = {
  title: "AI Solutions & Services | AMP Marketing",
  description: "We help businesses get more leads and save time with AI. From finding customers to handling calls, we build tools that actually work.",
};

const services = [
  { 
    icon: "🚀", 
    title: "AI Assisted Leadgen", 
    desc: "We use smart AI to find your perfect customers across social media and 100+ ad platforms. The system fills your funnel automatically so you just focus on closing deals.", 
    price: "Starting at $1,499 Setup + $299/mo",
    href: "/services/lead-funnel",
    featured: true
  },
  { 
    icon: "💡", 
    title: "SEO Content", 
    desc: "We use AI to research and write high-quality articles that actually rank on Google. You get fresh content that brings in organic traffic without the high cost of a writing agency.", 
    price: "Starting at $149 per article",
    href: "/contact",
    featured: true
  },
  { 
    icon: "📞", 
    title: "AI Voice", 
    desc: "Never miss a call again. Our AI answers, qualifies leads, and books appointments—day or night. Works for incoming calls and outbound too.", 
    price: "Starting at $497 Setup + $249/mo",
    href: "/services/ai-voice",
    featured: true
  },
  { 
    icon: "⚙️", 
    title: "Landing Pages", 
    desc: "You've got about 3 seconds to grab someone's attention. We build pages that load fast and get people to take action. Tested. Proven.", 
    price: "Starting at $799 one-time",
    href: "/services/landing-pages",
    featured: true
  },
  { 
    icon: "🤖", 
    title: "AI Chatbot", 
    desc: "Most chatbots stink. Ours talks like a real person and books calls when people are ready. Clients often see more qualified leads in the first week.", 
    price: "Starting at $497 Setup + $149/mo",
    href: "/services/ai-chatbot"
  },
  { 
    icon: "📱", 
    title: "Social Media", 
    desc: "Posting regularly works. It's also a time suck. We handle your posts across all platforms so you stay visible without the hassle.", 
    price: "Starting at $299/mo",
    href: "/services/social-media"
  },
  { 
    icon: "📝", 
    title: "Ad Copy", 
    desc: "Bad ads waste money. We write headlines that get clicks and keep testing until your cost per lead goes down. Runs on 100+ platforms.", 
    price: "Starting at $299 Setup + $199/mo",
    href: "/services/ad-copy"
  },
  { 
    icon: "✉️", 
    title: "Email Automation", 
    desc: "Generic emails get ignored. We write follow-ups that sound like you—personal, friendly, and they actually get replies.", 
    price: "Starting at $199 Setup + $49/mo",
    href: "/services/email-automation"
  },
  { 
    icon: "📍", 
    title: "Google Business", 
    desc: "If people can't find you on Google Maps, they're finding your competition. We fix your profile so locals actually see you.", 
    price: "Starting at $399 one-time",
    href: "/services/google-business"
  },
  { 
    icon: "⭐", 
    title: "Review Response", 
    desc: "Replying to every review takes forever. Our AI reads each one and writes a thoughtful response. Good ones get thanked. Bad ones get handled.", 
    price: "Starting at $99/mo",
    href: "/services/review-response"
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm">Our Services</span>
            <h1 className="text-4xl md:text-6xl font-black mt-4 mb-6">
               Marketing That <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Gets Results</span>
             </h1>
             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
               More leads. Less busywork. We build AI tools that save you time and bring in customers.
             </p>
        </div>
      </section>

      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm">Featured</span>
            <h2 className="text-3xl font-black text-gray-900 mt-2">What We Do Best</h2>
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Not Sure What You Need?</h2>
          <p className="text-indigo-100 text-xl mb-8 max-w-2xl mx-auto">
            Let's talk for 15 minutes. No pitch—we'll just figure out what makes sense for you.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            Book a Free Call
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

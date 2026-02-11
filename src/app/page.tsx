import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  const services = [
    { icon: "🚀", title: "Automated Sales Funnels", href: "/services/lead-funnel", desc: "We set up AI that hunts down your perfect customers on social media, Google, and a bunch of ad platforms. Your pipeline stays packed so you can focus on closing deals. Think of it like having a sales team that works around the clock without needing coffee breaks.", price: "Starting at $1,499 Setup + $299/mo" },
    { icon: "💡", title: "SEO Content", href: "/contact", desc: "We use AI to research and write high-quality articles that actually rank on Google. You get fresh content that brings in organic traffic without the high cost of a writing agency. It's the smartest way to grow your authority.", price: "Starting at $149 per article" },
    { icon: "📞", title: "AI Voice", href: "/services/ai-voice", desc: "Our AI answers your phone, asks the right questions, and books appointments. Inbound or outbound calls—doesn't matter. Your phone turns into a money-making machine that never takes a break. Your phone becomes a 24/7 booking machine.", price: "Starting at $497 Setup + $249/mo" },
    { icon: "⚙️", title: "Landing Pages", href: "/services/landing-pages", desc: "You've got maybe 3 seconds before someone bounces. We build pages that load quick, look sharp, and turn visitors into leads. We test different versions until we find what works best for you.", price: "Starting at $799 one-time" },
    { icon: "🤖", title: "AI Chatbot", href: "/services/ai-chatbot", desc: "A chat widget that doesn't sound like a robot. It talks to your visitors, answers their questions, and books meetings for you. One of our clients tripled their leads in a week after we set this up. It was a big deal for them.", price: "Starting at $497 Setup + $149/mo" },
    { icon: "📱", title: "Social Media", href: "/services/social-media", desc: "Social media feels like a second job, right? We take care of it. We post for you every month across all your platforms so people remember you exist. You stay visible without lifting a finger.", price: "Starting at $299/mo" },
    { icon: "📝", title: "Ad Copy", href: "/services/ad-copy", desc: "Tired of throwing money at ads and hoping something sticks? We write headlines that grab people and keep testing until your cost per lead drops. You get to watch the numbers go up while we handle the details.", price: "Starting at $299 Setup + $199/mo" },
    { icon: "✉️", title: "Email Automation", href: "/services/email-automation", desc: "Emails that don't feel like spam. We write follow-up sequences that sound like a real person wrote them. Leads move through your pipeline on autopilot. No more \"just checking in\" messages you have to send yourself.", price: "Starting at $199 Setup + $49/mo" },
    { icon: "📍", title: "Google Business", href: "/services/google-business", desc: "If people can't find you on Google Maps, you're losing customers. We fix your profile so locals actually see you when they search. More visibility means more calls. Pretty straightforward.", price: "Starting at $399 one-time" },
    { icon: "⭐", title: "Review Response", href: "/services/review-response", desc: "Responding to reviews matters, but who has time? Our system writes thoughtful replies for you. Good reviews get a thank you, bad ones get handled professionally. You don't type a thing.", price: "Starting at $99/mo" },
  ];

  const stats = [
    { value: "7 Days", label: "To First Results" },
    { value: "500+", label: "Businesses Helped" },
    { value: "3x", label: "Average Lead Growth" },
    { value: "95%", label: "Client Retention" },
  ];

  return (
    <main className="min-h-screen bg-white font-poppins">
      <Navbar />

      <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 25% 25%, rgba(79,70,229,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(99,102,241,0.2) 0%, transparent 50%)" }}></div>

        <div className="container mx-auto px-4 relative z-10">
        {/* Logo Section */}
          <div className="flex justify-center mb-8">
            <img src="/logo.svg" alt="AMP Marketing" className="h-16 w-auto drop-shadow-[0_10px_rgba(0,0,0,0.3)]" />
          </div>

        {/* Hero Tagline */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            More Leads, Less Busywork
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Smart marketing tools that grow your business without adding to your workload. We handle the heavy lifting so you can focus on closing deals.
          </p>
        </div>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-semibold mb-8 animate-pulse-glow">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              See real results in a week
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              AI That Works <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">for Your Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We build AI tools that bring in leads, answer your phones, and handle the boring stuff while you sleep. No complicated tech talk. No empty promises. Just things that actually work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-1">
                See If We're a Good Fit
              </Link>
              <Link href="/pricing" className="bg-white/10 backdrop-blur text-white px-10 py-5 rounded-full font-bold text-lg border-2 border-white/20 hover:bg-white/20 transition-all">
                See Our Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-indigo-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm">All Services</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6">Everything We Can Do for You</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              If AI can help you get more customers or save time, we've probably built it. Here's what we offer.
            </p>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {services.map((service, idx) => (
                <Link key={idx} href={service.href} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 group hover:-translate-y-1 block">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{service.desc}</p>
                  <div className="flex justify-between items-center">
                  <span className="text-indigo-600 font-bold text-sm">{service.price}</span>
                  <span className="text-indigo-500 font-semibold text-sm group-hover:text-indigo-700">Learn More →</span>
                </div>
                </Link>
              ))}
            </div>

        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Why People Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "⚡", title: "Fast Implementation", desc: "Most folks see their stuff live and working within a week. We move fast." },
              { icon: "💰", title: "Month-to-Month", desc: "No contracts. Cancel whenever. We'd rather earn your business every month." },
              { icon: "📊", title: "Transparent Reporting", desc: "We track every lead and booking. You'll always know what's working and what's not." },
              { icon: "👋", title: "Direct Support", desc: "Real humans pick up the phone. Got a question? You'll talk to someone who can actually help." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm">Testimonials</span>
            <h2 className="text-4xl font-black mt-4 mb-6">What Our Clients Say</h2>
            <p className="text-gray-400 text-xl">Don't take our word for it. Here's what real clients told us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { quote: "AMP Marketing honestly changed everything for us. We went from like 10 leads to over 100 in eight weeks. That AI chatbot? It grabs leads while I'm sleeping.", author: "Mike R.", company: "HVAC Company Owner" },
              { quote: "Finally found an AI team that does what they say. We've burned through agencies before, but these guys are fast. They actually care.", author: "Sarah L.", company: "Dental Practice" },
              { quote: "Our lead generation was basically nonexistent before AMP Marketing took it over. Now our pipeline is full of qualified prospects. Phone has not stopped ringing.", author: "James T.", company: "Local Restaurant Owner" },
              { quote: "The AI voice receptionist pays for itself every single month. We used to miss 20% of our calls. Now every single one gets answered professionally, 24/7.", author: "Amanda K.", company: "Law Firm" },
              { quote: "Email automation changed our business. We were spending hours every week on manual follow-ups. Now it happens automatically, and our close rate has increased by 40%.", author: "David M.", company: "Real Estate Agency" },
              { quote: "The custom AI application they built for us saved us 30 hours a week. That is not a typo. Best investment we have ever made.", author: "Jennifer P.", company: "E-commerce Business" }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-800 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-amber-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-white font-bold">{testimonial.author}</p>
                  <p className="text-indigo-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Want More Customers?</h2>
          <p className="text-indigo-100 text-xl mb-10 max-w-2xl mx-auto">
            We've done this for hundreds of businesses. Let's hop on a quick call and see if we can help you too. No pressure. No sales pitch.
          </p>
          <Link href="/contact" className="inline-block bg-white text-indigo-600 px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            Book a Free Call
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

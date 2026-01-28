import { Navbar, Footer } from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  const services = [
    { icon: "🧲", title: "AI Assisted LeadGen", href: "/services/lead-funnel", desc: "Your website works while you sleep. It captures leads from Facebook, LinkedIn, and your site—then books appointments on your calendar. Simple as that.", price: "$1,499 one-time" },
    { icon: "🤖", title: "AI Chatbot Setup", href: "/services/ai-chatbot", desc: "A chatbot that actually answers questions like a real person would. It books appointments and hands you warm leads. One client tripled their leads in a week.", price: "$149/mo" },
    { icon: "📞", title: "AI Voice Receptionist", href: "/services/ai-voice", desc: "Never miss another call. The receptionist answers instantly, filters spam, and books appointments. 24/7. No sick days.", price: "$249/mo" },
    { icon: "📍", title: "Google Business Optimization", href: "/services/google-business", desc: "Show up on Maps when locals search for what you do. We helped hundreds of businesses get found online.", price: "$399 one-time" },
    { icon: "⭐", title: "AI Review Response", href: "/services/review-response", desc: "Every review gets a thoughtful response automatically. Good reviews get celebrated. Bad ones get handled professionally.", price: "$99/mo" },
    { icon: "✉️", title: "Email Automation", href: "/services/email-automation", desc: "Follow-up sequences that sound like you wrote them. Nurture leads until they're ready to buy.", price: "$49/mo + $199 setup" },
    { icon: "📱", title: "Social Media Content", href: "/services/social-media", desc: "Fresh content every month across all platforms. Stay visible without doing the work yourself.", price: "$299/mo" },
    { icon: "📝", title: "AI Ad Copy", href: "/services/ad-copy", desc: "Ad copy that actually converts. Better headlines, better descriptions, lower costs per lead.", price: "$199/mo" },
    { icon: "🔍", title: "SEO Content Writing", href: "/services/seo-content", desc: "Articles that rank on Google because they're genuinely useful. No keyword stuffing, just good content.", price: "$149/article" },
    { icon: "🎯", title: "Landing Page Creation", href: "/services/landing-pages", desc: "Pages built to convert. Every element optimized for action. We track everything so you see what works.", price: "$799/page" },
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
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 25% 25%, rgba(79,70,229,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(99,102,241,0.2) 0%, transparent 50%)" }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-semibold mb-8 animate-pulse-glow">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Results in 7 days or less
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Marketing That <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Actually Works</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Most agencies promise the world and deliver nothing. We use proven strategies and smart tech to get you real results fast.
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
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6">10 AI-Powered Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We do chatbots. We do content. We build funnels. Basically, if it gets you leads, we build it.
            </p>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {services.map((service, idx) => (
                <Link key={idx} href={service.href} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 group hover:-translate-y-1 block">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{service.desc}</p>
                  <div className="text-indigo-600 font-bold text-sm">{service.price}</div>
                </Link>
              ))}
            </div>
          <div className="text-center mt-12">
            <Link href="/pricing" className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-colors">
              View Pricing Details
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Why Businesses Choose ConvertIQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "⚡", title: "Fast Results", desc: "Honestly? Most of our clients see numbers move in about a week." },
              { icon: "💰", title: "No Long Contracts", desc: "We do month-to-month. If you want to leave, you can. No handcuffs." },
              { icon: "📊", title: "Real Reporting", desc: "We track everything. You'll never hear vague excuses from us." },
              { icon: "👋", title: "Real Humans", desc: "Call us. We actually answer. Crazy concept, I know." },
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
            <p className="text-gray-400 text-xl">Do not just take our word for it. Here is what actual clients have to say.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { quote: "ConvertIQ honestly changed everything for us. We went from like 10 leads to over 100 in eight weeks. That AI chatbot? It grabs leads while I'm sleeping.", author: "Mike R.", company: "HVAC Company Owner" },
              { quote: "Finally found a marketing team that does what they say. We've burned through agencies before, but these guys are fast. They actually care.", author: "Sarah L.", company: "Dental Practice" },
              { quote: "Our Google Business profile was basically invisible before ConvertIQ took it over. Now we show up in the map pack for all our target keywords. Phone has not stopped ringing.", author: "James T.", company: "Local Restaurant Owner" },
              { quote: "The AI voice receptionist pays for itself every single month. We used to miss 20% of our calls. Now every single one gets answered professionally, 24/7.", author: "Amanda K.", company: "Law Firm" },
              { quote: "Email automation changed our business. We were spending hours every week on manual follow-ups. Now it happens automatically, and our close rate has increased by 40%.", author: "David M.", company: "Real Estate Agency" },
              { quote: "The landing page they built for us generated $47,000 in its first month. That is not a typo. Best marketing investment we have ever made.", author: "Jennifer P.", company: "E-commerce Business" }
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
          <h2 className="text-4xl font-black text-white mb-6">Ready to Grow?</h2>
          <p className="text-indigo-100 text-xl mb-10 max-w-2xl mx-auto">
            We've helped hundreds of businesses grow. Seriously. 
            Let's chat—no pressure, just seeing if it makes sense.
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

"use client"

import { useState, useEffect } from "react"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  ChevronRight,
  ShieldCheck,
  Star
} from "lucide-react"
import { Button } from "@/components/ui/button"
import BookingForm from "@/components/BookingForm" // Assuming the file is in components

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const contactDetails = [
    {
      title: "Call Us 24/7",
      value: "+91 90032 08702",
      sub: "Instant Booking & Support",
      icon: Phone,
      action: "tel:+919003208702"
    },
    {
      title: "Email Us",
      value: "info@rathnacabs.com",
      sub: "Corporate & Event Inquiries",
      icon: Mail,
      action: "mailto:info@rathnacabs.com"
    },
    {
      title: "Headquarters",
      value: "Adars 5/130, Saveryar Puram",
      sub: "Thoothukudi, TN - 628005",
      icon: MapPin,
      action: "https://maps.google.com"
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-12 pb-20 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h1 className="text-white text-5xl md:text-7xl font-black mb-6">
              Contact <span className="text-yellow-400">Us.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Have a question or ready to book? Our team is available 24/7 to ensure 
              your journey with Rathna Cabs is perfect.
            </p>
          </div>
        </div>
      </section>

      {/* --- CONTACT INFO CARDS --- */}
      <section className="py-12 -mt-16 relative z-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactDetails.map((item, idx) => (
              <a 
                href={item.action} 
                key={idx}
                className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-50 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-yellow-400 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-yellow-400/20 group-hover:rotate-12 transition-transform">
                  <item.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-zinc-900 font-black text-xl mb-1">{item.title}</h3>
                <p className="text-zinc-800 font-bold mb-1">{item.value}</p>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{item.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- MAIN BOOKING SECTION (INTEGRATED) --- */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-yellow-400 h-1 w-12 rounded-full"></span>
              <span className="text-gray-500 font-bold tracking-widest text-xs uppercase">Reservation Hub</span>
              <span className="bg-yellow-400 h-1 w-12 rounded-full"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
              Instant Online <span className="text-yellow-500 ">Booking.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl">
              Fill in your trip details below to get an instant quote and book your 
              sanitized premium ride via WhatsApp.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Reusing the Redesigned Booking Form Component */}
            <div className="relative group">
               <div className="absolute -inset-1 bg-yellow-400/10 blur-2xl rounded-3xl"></div>
               <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* --- SPLIT INQUIRY SECTION --- */}
      <section className="py-24 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left side: Support details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-black text-zinc-900 mb-6">Get Support In <br/> Under <span className="text-yellow-500">5 Minutes.</span></h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our customer service team at the <strong>Thoothukudi Taxi Hub</strong> is always 
                  on standby. Whether it's a last-minute flight change or a custom wedding 
                  fleet requirement, we're here to help.
                </p>
              </div>

              <div className="space-y-4">
                 {[
                   "24/7 Live Customer Support",
                   "Professional Chauffeur Coordination",
                   "Corporate Billing Inquiries",
                   "Fleet Management Services"
                 ].map((text, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <ShieldCheck className="w-5 h-5 text-yellow-500" />
                     <span className="text-zinc-800 font-bold text-sm">{text}</span>
                   </div>
                 ))}
              </div>

              <div className="p-8 bg-zinc-900 rounded-[2.5rem] relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-yellow-400 font-black text-2xl mb-2">Emergency?</p>
                  <p className="text-white text-sm mb-6 opacity-70">For immediate assistance with an ongoing trip, please call our hotline.</p>
                  <Button className="bg-white text-black font-black px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all">
                    <Phone className="w-4 h-4 mr-2" /> +91 90032 08702
                  </Button>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full translate-x-10 -translate-y-10"></div>
              </div>
            </div>

            {/* Right side: General Inquiry Form */}
            <div className="bg-white rounded-[3rem] p-10 shadow-[0_30px_70px_rgba(0,0,0,0.06)] border border-gray-50">
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="w-6 h-6 text-yellow-500" />
                <h3 className="text-2xl font-black text-zinc-900">General Inquiry</h3>
              </div>
              
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Full Name</label>
                    <input className="w-full bg-gray-50 border border-gray-100 h-14 rounded-2xl px-6 outline-none focus:border-yellow-400 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Mobile Number</label>
                    <input className="w-full bg-gray-50 border border-gray-100 h-14 rounded-2xl px-6 outline-none focus:border-yellow-400 transition-all" placeholder="+91 00000 00000" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Subject</label>
                  <select className="w-full bg-gray-50 border border-gray-100 h-14 rounded-2xl px-6 outline-none focus:border-yellow-400 appearance-none">
                    <option>Corporate Tie-up</option>
                    <option>General Support</option>
                    <option>Feedback</option>
                    <option>Lost & Found</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Your Message</label>
                  <textarea rows={4} className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-6 outline-none focus:border-yellow-400 transition-all" placeholder="Tell us how we can help..."></textarea>
                </div>

                <Button className="w-full bg-zinc-900 hover:bg-yellow-500 hover:text-black text-white font-black h-16 rounded-2xl text-xs uppercase tracking-widest shadow-xl shadow-zinc-200 group">
                  Send Message <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAP PLACEHOLDER / DECORATION --- */}
      <section className="h-[400px] bg-gray-200 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 text-center">
                <MapPin className="w-10 h-10 text-yellow-500 mx-auto mb-2" />
                <p className="text-zinc-900 font-black">Rathna Cabs HQ</p>
                <p className="text-gray-500 text-xs font-bold uppercase">Thoothukudi, Tamil Nadu</p>
            </div>
        </div>
      </section>
    </div>
  )
}
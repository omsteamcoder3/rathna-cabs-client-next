"use client"

import { useState, useEffect } from "react"
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  FileText, 
  UserCheck, 
  Smartphone,
  CheckCircle2,
  Mail,
  MapPin
} from "lucide-react"

export default function PrivacyPolicy() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const sections = [
    {
      title: "Information We Collect",
      icon: Eye,
      content: "When you use Rathna Cabs (Thoothukudi Taxi Hub) to book a ride, we collect personal details such as your name, contact number, pickup location, and destination. This information is primarily used to facilitate your booking via our WhatsApp integration."
    },
    {
      title: "How We Use Your Data",
      icon: UserCheck,
      content: "Your data is used solely for service delivery. This includes identifying your booking, communicating trip details, sending driver information, and ensuring your safety throughout the journey. We do not use your personal information for unrelated marketing purposes without your consent."
    },
    {
      title: "Data Security",
      icon: Lock,
      content: "We implement a variety of security measures to maintain the safety of your personal information. Since our primary booking method is via WhatsApp, your initial communication is protected by WhatsApp's end-to-end encryption."
    },
    {
      title: "Third-Party Sharing",
      icon: ShieldCheck,
      content: "We only share necessary details (like your name, pickup point, and contact number) with the assigned professional chauffeur to complete your trip. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties."
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-12 pb-20 bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex justify-center mb-6">
                <div className="bg-yellow-400/20 p-4 rounded-2xl border border-yellow-400/20">
                    <ShieldCheck className="w-8 h-8 text-yellow-400" />
                </div>
            </div>
            <h1 className="text-white text-5xl md:text-6xl font-black mb-6">
              Privacy <span className="text-yellow-400">Policy.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
              Your trust is our most valuable asset. Learn how we protect your 
              personal information and maintain your privacy at Rathna Cabs.
            </p>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            
            {/* Introductory Text */}
            <div className="mb-16">
                <h2 className="text-3xl font-black text-zinc-900 mb-6 flex items-center gap-3">
                    <FileText className="text-yellow-500 w-8 h-8" />
                    General Overview
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    At <strong>Rathna Cabs (Thoothukudi Taxi Hub)</strong>, we are committed to protecting the privacy and security of our customers' personal data. This Privacy Policy describes how we collect, use, and protect your information when you visit our website and use our taxi booking services.
                </p>
                <p className="text-gray-600 leading-relaxed italic">
                    Last Updated: June 2024
                </p>
            </div>

            {/* Policy Grid */}
            <div className="grid gap-12 mb-20">
                {sections.map((section, idx) => (
                    <div key={idx} className="group flex flex-col md:flex-row gap-8 items-start p-8 rounded-3xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                        <div className="bg-zinc-900 p-4 rounded-2xl transition-transform group-hover:rotate-12">
                            <section.icon className="w-6 h-6 text-yellow-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-zinc-900 mb-4 uppercase tracking-tight">{section.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {section.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Detailed Points */}
            <div className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
                
                <h3 className="text-2xl md:text-3xl font-black mb-10 relative z-10">Additional <span className="text-yellow-400">Disclosures.</span></h3>
                
                <div className="space-y-6 relative z-10">
                    <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                        <p className="text-gray-400 text-sm leading-relaxed">
                            <strong className="text-white">Cookies:</strong> Our website may use cookies to enhance your browsing experience. These are small files stored on your computer that help us understand website traffic and usage patterns.
                        </p>
                    </div>
                    <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                        <p className="text-gray-400 text-sm leading-relaxed">
                            <strong className="text-white">Consent:</strong> By using our website and booking services, you hereby consent to our Privacy Policy and agree to its terms.
                        </p>
                    </div>
                    <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                        <p className="text-gray-400 text-sm leading-relaxed">
                            <strong className="text-white">WhatsApp Integration:</strong> Since our booking process redirects to WhatsApp, your use of that platform is also governed by WhatsApp's own Privacy Policy and Terms of Service.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Backlinks */}
            <div className="mt-20 text-center border-t border-gray-100 pt-12">
                <h4 className="text-zinc-900 font-black text-xl mb-4">Questions about our policy?</h4>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <div className="flex items-center gap-2 text-gray-500 font-bold">
                        <Mail className="w-4 h-4 text-yellow-500" /> info@rathnacabs.com
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 font-bold">
                        <MapPin className="w-4 h-4 text-yellow-500" /> Thoothukudi, Tamil Nadu
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
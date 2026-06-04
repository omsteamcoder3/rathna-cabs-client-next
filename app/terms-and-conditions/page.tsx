"use client"

import { useState, useEffect } from "react"
import { 
  FileText, 
  Scale, 
  ShieldAlert, 
  Clock, 
  Banknote, 
  Car, 
  AlertCircle,
  Gavel,
  CheckCircle2
} from "lucide-react"

export default function TermsAndConditions() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const terms = [
    {
      title: "1. Service Overview",
      icon: Car,
      content: "Rathna Cabs (Thoothukudi Taxi Hub) acts as a premium transportation service provider. By booking with us, you agree to engage our chauffeur-driven vehicles for the specified route and duration as confirmed via WhatsApp or our official channels."
    },
    {
      title: "2. Booking & Confirmation",
      icon: CheckCircle2,
      content: "All bookings are subject to vehicle availability. A booking is considered 'Confirmed' only after our team sends a confirmation message via WhatsApp. We reserve the right to provide an alternative vehicle of a similar category if the original choice is unavailable."
    },
    {
      title: "3. Pricing & Extra Charges",
      icon: Banknote,
      content: "Our quotes include fuel and driver allowance. However, Toll fees, Parking charges, State Permit fees (for inter-state travel), and Hill Station charges are to be paid by the customer unless explicitly stated as 'Inclusive' in the quote."
    },
    {
      title: "4. Cancellation Policy",
      icon: Clock,
      content: "Cancellations made 24 hours before the pickup time incur no charges. Cancellations made within 12-24 hours may incur a small processing fee. Last-minute cancellations (less than 6 hours) may require a minimum trip base fare payment."
    },
    {
      title: "5. User Responsibilities",
      icon: ShieldAlert,
      content: "Passengers are expected to maintain the cleanliness of the vehicle. Smoking, consumption of alcohol, or any illegal substances inside the vehicle is strictly prohibited. Any damage caused to the vehicle interior by the passenger will be charged at actual repair costs."
    },
    {
      title: "6. Limitation of Liability",
      icon: Scale,
      content: "While we strive for 100% punctuality, Rathna Cabs is not liable for delays caused by extreme traffic conditions, road accidents, vehicle breakdowns, or force majeure events. In case of a breakdown, we will provide a replacement vehicle as soon as possible."
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
                    <Gavel className="w-8 h-8 text-yellow-400" />
                </div>
            </div>
            <h1 className="text-white text-5xl md:text-6xl font-black mb-6">
              Terms & <span className="text-yellow-400">Conditions.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
              Please read these terms carefully before booking. They outline our 
              commitment to you and your responsibilities as a valued passenger.
            </p>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            
            {/* Introductory Text */}
            <div className="mb-16 border-l-4 border-yellow-400 pl-8">
                <h2 className="text-3xl font-black text-zinc-900 mb-6 flex items-center gap-3">
                    <FileText className="text-yellow-500 w-8 h-8" />
                    Agreement of Service
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                    These Terms and Conditions govern the use of <strong>Rathna Cabs (Thoothukudi Taxi Hub)</strong> services. By accessing our website or booking a ride, you agree to be bound by these rules and regulations.
                </p>
                <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">
                    Effective Date: January 2024
                </p>
            </div>

            {/* Terms List */}
            <div className="space-y-12 mb-20">
                {terms.map((term, idx) => (
                    <div key={idx} className="group p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:border-yellow-400/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-300">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="bg-gray-50 p-4 rounded-2xl w-fit h-fit group-hover:bg-yellow-400 transition-colors">
                                <term.icon className="w-6 h-6 text-zinc-900" />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-zinc-900 mb-3 uppercase tracking-tight">
                                    {term.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {term.content}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Important Notice Box */}
            <div className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
                
                <div className="flex items-center gap-4 mb-8 relative z-10">
                    <AlertCircle className="w-10 h-10 text-yellow-400" />
                    <h3 className="text-2xl md:text-3xl font-black">Important <span className="text-yellow-400">Notice.</span></h3>
                </div>
                
                <div className="space-y-6 relative z-10">
                    <p className="text-gray-400 leading-relaxed">
                        Rathna Cabs reserves the right to refuse service to any passenger who is found to be in an intoxicated state, shows abusive behavior towards the chauffeur, or poses a safety risk to the vehicle and its occupants.
                    </p>
                    <div className="h-px w-full bg-white/10"></div>
                    <p className="text-gray-400 leading-relaxed">
                        <strong className="text-white">Governing Law:</strong> Any disputes arising out of the use of our services are subject to the exclusive jurisdiction of the courts in <strong className="text-yellow-400">Thoothukudi, Tamil Nadu</strong>.
                    </p>
                </div>
            </div>

            {/* Footer Contact Backlinks */}
            <div className="mt-20 text-center pt-12 border-t border-gray-100">
                <p className="text-gray-400 font-bold uppercase text-xs tracking-[0.3em] mb-4">Need Clarification?</p>
                <p className="text-zinc-900 font-black text-lg">
                    Contact us at <span className="text-yellow-500">info@rathnacabs.com</span> or call <span className="text-yellow-500">+91 90032 08702</span>
                </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
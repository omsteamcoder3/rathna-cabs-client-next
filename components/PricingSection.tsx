"use client"

import { useState, useEffect, useRef } from "react"
import { IndianRupee, Clock, MapPin, Send, Zap } from "lucide-react"

export default function PricingSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  
  // WhatsApp Configuration
  const WHATSAPP_NUMBER = "919003208702" // Format without '+'

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const routes = [
    { from: "Thoothukudi", to: "Chennai", fare: "₹5,500", time: "7-8 Hours", popular: true },
    { from: "Thoothukudi", to: "Madurai", fare: "₹1,800", time: "3-4 Hours", popular: true },
    { from: "Thoothukudi", to: "Tirunelveli", fare: "₹800", time: "1-2 Hours", popular: false },
    { from: "Thoothukudi", to: "Trichy", fare: "₹2,200", time: "4-5 Hours", popular: false },
    { from: "Thoothukudi", to: "Coimbatore", fare: "₹3,200", time: "5-6 Hours", popular: true },
    { from: "Thoothukudi", to: "Kanyakumari", fare: "₹1,200", time: "2-3 Hours", popular: false },
    { from: "Thoothukudi", to: "Salem", fare: "₹3,000", time: "5-6 Hours", popular: false },
    { from: "Thoothukudi", to: "Vellore", fare: "₹3,800", time: "6-7 Hours", popular: false },
  ]

  // Function to handle WhatsApp redirection
  const handleBookNow = (route: typeof routes[0]) => {
    const message = `*🚖 NEW BOOKING ENQUIRY*%0A%0A` +
                    `*Route:* ${route.from} to ${route.to}%0A` +
                    `*Estimated Fare:* ${route.fare}%0A` +
                    `*Travel Time:* ${route.time}%0A%0A` +
                    `Please check availability for this trip.`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 px-3 sm:px-4 bg-black relative overflow-hidden"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] -z-0"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] -z-0"></div>

      <div className="container mx-auto relative z-10">
        
        {/* Centered Heading Style */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <div className={`flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <span className="bg-yellow-400 h-1 w-6 sm:w-8 md:w-12 rounded-full"></span>
            <span className="text-yellow-400 font-bold tracking-widest text-[9px] sm:text-[10px] md:text-xs uppercase italic">Our Top Routes</span>
            <span className="bg-yellow-400 h-1 w-6 sm:w-8 md:w-12 rounded-full"></span>
          </div>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-3 sm:mb-4 md:mb-6 transform transition-all duration-1000 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            Transparent <span className="text-yellow-400 italic">Pricing.</span>
          </h2>
          <p className={`text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl px-2 transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            No hidden charges. No surge pricing. Get premium taxi services at the most affordable rates across Tamil Nadu.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {routes.map((route, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-yellow-400/30 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-yellow-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              } ${route.popular ? "ring-2 ring-yellow-400 ring-opacity-50" : ""}`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
            >
              {route.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] md:text-xs font-bold whitespace-nowrap">
                    🔥 POPULAR
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400" />
                  <span className="text-white font-semibold text-[11px] sm:text-xs md:text-sm truncate max-w-[60px] sm:max-w-[80px]">{route.from}</span>
                </div>
                <div className="text-yellow-400 text-base sm:text-lg md:text-xl">→</div>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <span className="text-white font-semibold text-[11px] sm:text-xs md:text-sm truncate max-w-[60px] sm:max-w-[80px]">{route.to}</span>
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-400" />
                </div>
              </div>

              <div className="text-center mb-3 sm:mb-4">
                <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-1 sm:mb-2">
                  <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-400" />
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{route.fare.replace("₹", "")}</span>
                </div>
                <div className="flex items-center justify-center space-x-1 sm:space-x-2 text-gray-400">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                  <span className="text-[10px] sm:text-xs md:text-sm">{route.time}</span>
                </div>
              </div>

              {/* Book Now Button */}
              <button 
                onClick={() => handleBookNow(route)}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-2.5 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 border border-white/10 group-hover:border-yellow-400 group-hover:scale-[1.02] text-[11px] sm:text-xs md:text-sm"
              >
                <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                BOOK NOW
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-12 sm:mt-16 md:mt-20 text-center transform transition-all duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="inline-flex flex-col md:flex-row items-center gap-4 sm:gap-5 md:gap-6 bg-zinc-900/50 border border-white/5 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl">
            <p className="text-gray-300 font-medium text-sm sm:text-base">
               Traveling somewhere else? Get a <span className="text-yellow-400 font-bold">Custom Quote</span> instantly.
            </p>
            <button 
              onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want a quote for a different route.`, "_blank")}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-black px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-full text-[10px] sm:text-xs md:text-sm uppercase tracking-wider sm:tracking-widest transition-all shadow-xl shadow-yellow-400/20 whitespace-nowrap"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
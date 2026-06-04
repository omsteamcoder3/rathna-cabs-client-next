"use client"

import { useState, useEffect, useRef } from "react"
import { MapPin, Users, IndianRupee, Clock, CheckCircle2 } from "lucide-react"

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  const features = [
    {
      icon: MapPin,
      number: "100+",
      label: "Cities Covered",
      description: "Extensive network across Tamil Nadu's major hubs.",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: Users,
      number: "5000+",
      label: "Happy Clients",
      description: "Trusted by thousands of regular commuters & tourists.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: IndianRupee,
      number: "Best",
      label: "Price Match",
      description: "Premium service at the most competitive market rates.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Expert Support",
      description: "Dedicated assistance for bookings and trip tracking.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-24 px-3 sm:px-4 bg-zinc-950 relative overflow-hidden">
      {/* Background decoration to prevent it from looking "flat" black */}
      <div className="absolute top-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50"></div>
      
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20">
          <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-6 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
            <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">Our Advantage</span>
          </div>
          
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-3 sm:mb-6 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Why Choose <span className="text-yellow-400">Rathna Taxi Hub?</span>
          </h2>
          <p className={`text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl px-2 transform transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
            Experience the gold standard in premium car rentals. We combine safety, 
            luxury, and affordability for every mile you travel.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              className={`group relative transform transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
            >
              {/* The Card - WHITE Background to pop against Black section */}
              <div className="bg-white rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] p-5 sm:p-6 md:p-8 lg:p-10 h-full shadow-2xl relative z-10 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 sm:group-hover:-translate-y-3 md:group-hover:-translate-y-4">
                
                {/* Icon Circle */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${feature.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 ${feature.color}`} />
                </div>

                {/* Content */}
                <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-950 tracking-tight">
                    {feature.number}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-lg font-bold text-zinc-800 flex items-center gap-2">
                    {feature.label}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 p-2 sm:p-3 md:p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-t-2 sm:border-t-4 md:border-t-4 border-r-2 sm:border-r-4 md:border-r-4 border-yellow-400 rounded-tr-lg sm:rounded-tr-xl md:rounded-tr-xl"></div>
                </div>
              </div>

              {/* Card Shadow/Glow behind the white card */}
              <div className="absolute -inset-1 sm:-inset-2 bg-yellow-400/20 blur-lg sm:blur-xl rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className={`mt-12 sm:mt-16 md:mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <p className="text-zinc-500 font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] mb-2 sm:mb-3 md:mb-4">Ready to start your journey?</p>
            <div className="h-0.5 sm:h-1 w-16 sm:w-20 md:w-24 bg-yellow-400 mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
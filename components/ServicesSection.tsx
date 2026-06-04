"use client"

import { useState, useEffect, useRef } from "react"
import { MapPin, ChevronRight, Star, ArrowUpRight, IndianRupee, Clock, Phone, Shield } from "lucide-react"

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
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

  const cities = [
    {
      name: "THOOTHUKUDI",
      subtitle: "Pearl City",
      image:
        "/images/tuti.webp",
      gradient: "from-yellow-400 to-orange-500",
      serviceDetails: {
        location: "THOOTHUKUDI PORT - Industrial Hub",
        description: "24/7 Port taxi services",
        features: ["AC & Non-AC cab options", "Fixed fare to city center", "Multi-language speaking drivers"],
        pricing: { hatchback: "₹14/km", suv: "₹18/km" }
      }
    },
    {
      name: "TIRUNELVELI",
      subtitle: "Temple City",
      image:
        "/images/thiru.webp",
      gradient: "from-blue-500 to-blue-700",
      serviceDetails: {
        location: "TUTICORIN AIRPORT - Gateway to South",
        description: "Flight delay waiting policy",
        features: ["Prepaid taxi counter available", "Luggage-friendly vehicles", "Meet & greet service"],
        pricing: { hatchback: "₹14/km", suv: "₹18/km" }
      }
    },
    {
      name: "MADURAI",
      subtitle: "Temple City",
      image:
        "/images/mad.webp",
      gradient: "from-green-500 to-green-700",
      serviceDetails: {
        location: "PEARL CITY CENTER - Downtown Area",
        description: "Hourly rental packages",
        features: ["Local sightseeing tours", "24/7 city taxi service", "Women-driver option available"],
        pricing: { hatchback: "₹14/km", suv: "₹18/km" }
      }
    },
    {
      name: "CHENNAI",
      subtitle: "Metro City",
      image:
        "/images/chen.webp",
      gradient: "from-purple-500 to-purple-700",
      serviceDetails: {
        location: "SPIC NAGAR - Corporate Zone",
        description: "Corporate account discounts",
        features: ["Monthly commute packages", "Executive sedan & SUV fleet", "Receipt generation facility"],
        pricing: { hatchback: "₹14/km", suv: "₹18/km" }
      }
    },
  ]

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-24 px-3 sm:px-4 bg-white overflow-hidden">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 md:mb-16 gap-4 sm:gap-6">
          <div className="max-w-2xl text-left">
            <div className={`flex items-center gap-2 mb-3 sm:mb-4 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <span className="bg-yellow-400 h-1 w-8 sm:w-12 rounded-full"></span>
              <span className="text-gray-500 font-bold tracking-widest text-[10px] sm:text-xs uppercase">Our Destinations</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-zinc-900 mb-3 sm:mb-6 transform transition-all duration-1000 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              OUR TAXI SERVICES IN <br className="hidden sm:block" />
              <span className="text-yellow-500">THOOTHUKUDI'S MAJOR CITIES</span>
            </h2>
            <p className={`text-gray-600 text-sm sm:text-base md:text-lg max-w-xl transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              Premium, reliable, and comfortable taxi services across Tamil Nadu's most important destinations
            </p>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {cities.map((city, index) => (
            <div
              key={city.name}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative bg-white rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] p-2 sm:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] transition-all duration-500 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
            >
              {/* Image Container */}
              <div className="relative h-[240px] sm:h-[280px] md:h-[320px] rounded-xl sm:rounded-2xl md:rounded-[2rem] overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Subtle overlay for text legibility at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                {/* Rating */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 flex items-center gap-1 bg-white px-1.5 py-1 sm:px-2 sm:py-1 rounded-lg text-[8px] sm:text-[10px] font-bold text-zinc-900 shadow-sm z-20">
                  <Star className="w-2 h-2 sm:w-3 sm:h-3 fill-yellow-400 text-yellow-400" /> 4.9
                </div>

                {/* Bottom Content within Image */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-5 sm:right-5 md:bottom-6 md:left-6 md:right-6 z-20">
                  <div className="flex items-center gap-1 sm:gap-2 text-yellow-400 mb-0.5 sm:mb-1">
                    <MapPin className="w-2 h-2 sm:w-3 sm:h-3" />
                    <span className="text-[8px] sm:text-[10px] font-bold tracking-[0.1em] sm:tracking-[0.2em] uppercase">Tamil Nadu</span>
                  </div>
                  <h3 className="text-white text-base sm:text-xl md:text-2xl font-black">{city.name}</h3>
                </div>

                {/* Hover Overlay with Service Details */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60 flex flex-col justify-end p-4 sm:p-5 md:p-6 transition-all duration-500 z-30 ${
                  hoveredCard === index ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}>
                  <div className="transform transition-transform duration-500 delay-100">
                    <h4 className="text-yellow-400 font-black text-xs sm:text-sm md:text-base uppercase tracking-wide mb-1 sm:mb-2">
                      {city.serviceDetails.location}
                    </h4>
                    <p className="text-white font-bold text-xs sm:text-sm mb-2 sm:mb-3">
                      {city.serviceDetails.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-4">
                      {city.serviceDetails.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 sm:gap-2">
                          <Shield className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400" />
                          <span className="text-gray-200 text-[9px] sm:text-[10px] md:text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Pricing */}
                    <div className="bg-yellow-400/20 rounded-lg p-1.5 sm:p-2 mb-2 sm:mb-3">
                      <div className="flex items-center justify-between">
                        <span className="text-yellow-400 font-bold text-[9px] sm:text-[10px] uppercase">Hatchbacks:</span>
                        <span className="text-white font-bold text-[10px] sm:text-xs">{city.serviceDetails.pricing.hatchback}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-yellow-400 font-bold text-[9px] sm:text-[10px] uppercase">SUVs:</span>
                        <span className="text-white font-bold text-[10px] sm:text-xs">{city.serviceDetails.pricing.suv}</span>
                      </div>
                    </div>
                    
                    <div className="text-[9px] sm:text-[10px] text-gray-300 italic">
                      Transparent Pricing: Compact cars (1-3 passengers) | Spacious SUVs (4-7 passengers)
                    </div>
                  </div>
                </div>
              </div>

              {/* Text area below image (Still inside the card) */}
              <div className="p-3 sm:p-4 md:p-5 flex justify-between items-center">
                <div className="overflow-hidden">
                  <p className="text-gray-400 text-[9px] sm:text-[11px] font-medium uppercase tracking-tight mb-0.5 sm:mb-1">Service Hub</p>
                  <p className="text-zinc-800 font-bold text-xs sm:text-sm truncate">{city.serviceDetails.location.split(' - ')[0]}</p>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Cities Button */}
        <div className="mt-12 sm:mt-16 md:mt-20 flex justify-center">
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-xs sm:text-sm uppercase tracking-wider transition-all hover:scale-105 shadow-lg shadow-yellow-400/30 flex items-center gap-2">
            Explore All Cities <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Decorative background element (Optional) */}
        <div className="mt-12 sm:mt-16 md:mt-20 flex justify-center overflow-hidden">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-8 px-2">
            <span className="text-gray-800 font-black text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl select-none opacity-50">TRAVEL</span>
            <span className="text-yellow-400 font-black text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl select-none opacity-50">TAMILNADU</span>
          </div>
        </div>
      </div>
    </section>
  )
}
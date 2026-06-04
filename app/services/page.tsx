"use client"

import { useState, useEffect } from "react"
import { 
  Car, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Star, 
  ArrowRight, 
  Plane, 
  Navigation, 
  Calendar,
  Gem,
  CheckCircle2,
  PhoneCall
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const mainServices = [
    {
      title: "Local Rental",
      icon: Clock,
      description: "Perfect for city travel, shopping, or business meetings. Flexible hourly packages tailored to your schedule.",
      features: ["4, 8, & 12 Hour Packages", "Professional Chauffeurs", "Unlimited Stops", "Sanitized Cars"],
      image: "/images/i2.webp",
      accent: "border-yellow-400"
    },
    {
      title: "Outstation Trips",
      icon: Navigation,
      description: "Safe and comfortable long-distance travel across Tamil Nadu. Choice of one-way or round-trip journeys.",
      features: ["Intercity One-Way Drops", "Multi-day Round Trips", "Fixed Transparent Fares", "24/7 Roadside Support"],
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
      accent: "border-blue-500"
    },
    {
      title: "Airport Transfers",
      icon: Plane,
      description: "Reliable airport pickups and drops. We track your flight to ensure our driver is there exactly when you land.",
      features: ["Flight Tracking", "Luggage Assistance", "Wait-free Pickup", "Fixed Terminal Pricing"],
      image: "/images/i1.webp",
      accent: "border-emerald-500"
    },
    {
      title: "Wedding & Events",
      icon: Gem,
      description: "Make your special day more memorable with our premium luxury fleet for weddings and corporate events.",
      features: ["Luxury Car Options", "Coordinated Fleet", "On-site Supervisors", "VIP Decorations Support"],
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
      accent: "border-purple-500"
    }
  ]

  const fleet = [
    { name: "Executive Sedan", types: "Swift Dzire, Toyota Etios", capacity: "4+1", icon: Car },
    { name: "Premium SUV", types: "Innova Crysta, Marazzo", capacity: "6+1 / 7+1", icon: Car },
    { name: "Luxury Segment", types: "BMW, Audi, Mercedes", capacity: "4+1", icon: Gem },
    { name: "Group Travel", types: "Tempo Traveller, Urbania", capacity: "12 - 26", icon: Navigation },
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-10 sm:pt-12 pb-14 sm:pb-20 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950"></div>
        
        <div className="container mx-auto px-3 sm:px-4 relative z-10 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 sm:mb-4 md:mb-6">
              Our <span className="text-yellow-400">Services.</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-medium px-2">
              Comprehensive transportation solutions tailored for every traveler, 
              from local city commutes to luxury event coordination.
            </p>
          </div>
        </div>
      </section>

      {/* --- CORE SERVICES SECTION --- */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4">
        <div className="container mx-auto">
          {/* Centered Heading Style */}
          <div className="flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <span className="bg-yellow-400 h-1 w-6 sm:w-8 md:w-12 rounded-full"></span>
              <span className="text-gray-500 font-bold tracking-widest text-[9px] sm:text-[10px] md:text-xs uppercase">What We Offer</span>
              <span className="bg-yellow-400 h-1 w-6 sm:w-8 md:w-12 rounded-full"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-zinc-900 mb-3 sm:mb-4 md:mb-6 px-2">
              Expert Solutions For <br className="hidden sm:block" />
              <span className="text-yellow-500">Seamless Travel.</span>
            </h2>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {mainServices.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl sm:rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 hover:shadow-2xl transition-all duration-500 flex flex-col lg:flex-row"
              >
                {/* Image Section */}
                <div className="lg:w-1/2 h-56 sm:h-64 md:h-72 lg:h-auto overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6">
                     <div className="bg-white/90 backdrop-blur p-2 sm:p-2.5 md:p-3 rounded-xl sm:rounded-2xl shadow-xl">
                        <service.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-zinc-900" />
                     </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-zinc-900 mb-2 sm:mb-3 md:mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-5 sm:mb-6 md:mb-8 leading-relaxed font-medium">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-6 md:mb-8">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs md:text-sm font-bold text-zinc-700">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-yellow-500 flex-shrink-0" />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="flex items-center gap-2 text-zinc-900 font-black text-[10px] sm:text-xs md:text-sm uppercase tracking-widest hover:text-yellow-500 transition-colors group/btn">
                    Book This Service <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE FLEET SHOWCASE --- */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-yellow-400/5 rounded-full blur-[80px] sm:blur-[100px]"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                <span className="bg-yellow-400 h-1 w-6 sm:w-8 md:w-12 rounded-full"></span>
                <span className="text-yellow-400 font-bold tracking-widest text-[9px] sm:text-[10px] md:text-xs uppercase">Vehicle Categories</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight">
                Our Fleet <br />
                Is Your <span className="text-yellow-400">Sanctuary.</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 md:mb-12">
                We maintain a diverse fleet of latest-model vehicles, ensuring we have 
                the right car for your group size, luggage requirements, and budget.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {fleet.map((item, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-colors">
                     <item.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-400 mb-3 sm:mb-4" />
                     <h4 className="font-black text-base sm:text-lg md:text-lg mb-0.5">{item.name}</h4>
                     <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase mb-1.5 sm:mb-2">{item.types}</p>
                     <div className="inline-block bg-yellow-400/10 text-yellow-400 text-[8px] sm:text-[9px] md:text-[10px] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded font-black">
                       CAPACITY: {item.capacity}
                     </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
                <img 
                  src="/images/i3.webp" 
                  alt="Luxury Cars" 
                  className="rounded-2xl sm:rounded-3xl lg:rounded-[3rem] shadow-2xl border-2 sm:border-4 border-white/5 w-full"
                />
                <div className="absolute -bottom-4 -left-3 sm:-bottom-6 sm:-left-6 md:-bottom-8 md:-left-8 lg:-bottom-10 lg:-left-10 bg-yellow-400 p-3 sm:p-4 md:p-5 lg:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl hidden xs:block">
                    <p className="text-black font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl">100%</p>
                    <p className="text-black/70 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs font-bold uppercase tracking-wider">Sanitized Fleet</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 bg-white">
        <div className="container mx-auto">
          <div className="bg-zinc-900 rounded-2xl sm:rounded-3xl md:rounded-4xl lg:rounded-[4rem] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-20 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.2)]">
             <div className="relative z-10">
                <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
                   <div className="bg-yellow-400/20 p-2.5 sm:p-3 md:p-4 rounded-full">
                     <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-yellow-400 animate-pulse" />
                   </div>
                </div>
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 sm:mb-4 md:mb-6 px-2">Ready to travel with us?</h2>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto px-2">
                  Booking is simple and takes less than a minute. Get in touch with our team for instant confirmation.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 px-2">
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-black h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 lg:px-12 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs md:text-sm uppercase tracking-widest transition-all hover:scale-105 shadow-xl shadow-yellow-400/20">
                       Book On WhatsApp
                    </Button>
                    <Button variant="outline" className="border-2 border-white/10 bg-transparent text-white hover:bg-white hover:text-black font-black h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 lg:px-12 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs md:text-sm uppercase tracking-widest transition-all">
                       <PhoneCall className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 mr-1.5 sm:mr-2" /> Call Now
                    </Button>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  )
}
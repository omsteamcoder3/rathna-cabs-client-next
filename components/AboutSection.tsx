"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Star, Award, Zap, PhoneCall, CheckCircle } from "lucide-react"

export default function AboutSection() {
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

  const highlights = [
    { icon: ShieldCheck, text: "100% Safe", color: "text-emerald-600" },
    { icon: Star, text: "5-Star Rated", color: "text-yellow-500" },
    { icon: Award, text: "Top Agency", color: "text-blue-600" },
    { icon: Zap, text: "Instant Fix", color: "text-orange-500" },
  ]

  return (
    <section ref={sectionRef} className="py-10 sm:py-16 md:py-24 px-3 sm:px-4 bg-white relative overflow-x-hidden">
      <div className="container mx-auto">
        
        {/* Centered Heading */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-16">
          <div className={`flex items-center gap-1.5 mb-2 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <span className="bg-yellow-400 h-1 w-6 sm:w-12 rounded-full"></span>
            <span className="text-gray-500 font-bold tracking-widest text-[10px] sm:text-xs uppercase">About Our Hub</span>
            <span className="bg-yellow-400 h-1 w-6 sm:w-12 rounded-full"></span>
          </div>
          <h2 className={`text-xl min-[400px]:text-3xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-3 transform transition-all duration-1000 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            Premium Travel For <br className="hidden xs:block" />
            <span className="text-yellow-500">Every Journey.</span>
          </h2>
          <p className={`text-gray-600 text-xs sm:text-base md:text-lg max-w-2xl px-2 transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            Rathna Taxi Hub is redefined by reliability. We provide seamless door-to-door transportation across Tamil Nadu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side: Image Layout */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative group p-1 sm:p-4">
              {/* Background shadow decoration - Hidden on very small screens to prevent overflow */}
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-72 sm:h-72 bg-yellow-400/10 rounded-full blur-2xl -z-10 translate-x-4 -translate-y-4"></div>
              
              <div className="relative overflow-hidden rounded-xl sm:rounded-[2.5rem] shadow-2xl border-2 sm:border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200"
                  alt="Premium Professional Taxi Service"
                  className="w-full h-[200px] min-[400px]:h-[300px] md:h-[450px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Stats Badge - Desktop Layout Maintained on Mobile */}
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-8 sm:left-8 sm:right-8 bg-white/95 backdrop-blur-md p-2 sm:p-6 rounded-lg sm:rounded-2xl shadow-xl border border-gray-100">
                    <div className="flex justify-around items-center gap-1 sm:gap-4">
                        <div className="text-center">
                            <p className="text-sm sm:text-2xl font-black text-zinc-900">10k+</p>
                            <p className="text-[7px] sm:text-[10px] text-gray-500 uppercase font-bold tracking-tighter sm:tracking-widest">Rides</p>
                        </div>
                        <div className="h-5 sm:h-10 w-px bg-gray-200"></div>
                        <div className="text-center">
                            <p className="text-sm sm:text-2xl font-black text-zinc-900">100%</p>
                            <p className="text-[7px] sm:text-[10px] text-gray-500 uppercase font-bold tracking-tighter sm:tracking-widest">Safety</p>
                        </div>
                        <div className="h-5 sm:h-10 w-px bg-gray-200"></div>
                        <div className="text-center">
                            <p className="text-sm sm:text-2xl font-black text-zinc-900">24/7</p>
                            <p className="text-[7px] sm:text-[10px] text-gray-500 uppercase font-bold tracking-tighter sm:tracking-widest">Support</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Professional Content */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-4 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-3xl font-bold text-black mb-2 sm:mb-6 leading-tight">Tamil Nadu's Most Trusted Taxi Service</h3>
                <p className="text-xs sm:text-lg text-gray-700 mb-2 sm:mb-6 leading-relaxed">
                  Welcome to <strong className="text-yellow-600">Rathna Taxi Hub</strong>, Tamil Nadu's fastest growing
                  <strong className="text-blue-600"> premium cab booking</strong> service.
                </p>

                <p className="text-xs sm:text-lg text-gray-700 mb-4 sm:mb-8 leading-relaxed">
                  With our affordable <strong className="text-green-600">competitive pricing</strong>, we make quality transportation accessible to everyone.
                </p>
              </div>

              {/* Highlights Checklist - 2 Columns Maintained on Mobile */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 sm:gap-3 p-1.5 sm:p-4 rounded-lg bg-gray-50 border border-gray-100 hover:border-yellow-400 transition-colors group">
                    <div className={`p-1 sm:p-2 rounded-md bg-white shadow-sm ${item.color} group-hover:bg-yellow-400 group-hover:text-black transition-all shrink-0`}>
                        <item.icon className="w-3 h-3 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-zinc-800 font-bold text-[9px] min-[400px]:text-xs md:text-sm truncate">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button className="w-full sm:w-auto bg-zinc-900 hover:bg-yellow-500 hover:text-black text-white font-bold h-10 sm:h-14 px-6 sm:px-10 rounded-full transition-all shadow-lg text-xs sm:text-base">
                  Get Best Rates <CheckCircle className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-gray-200 text-zinc-800 hover:bg-gray-50 h-10 sm:h-14 px-6 sm:px-10 rounded-full font-bold transition-all flex items-center justify-center gap-2 text-xs sm:text-base"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-yellow-500" /> +91 90032 08702
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
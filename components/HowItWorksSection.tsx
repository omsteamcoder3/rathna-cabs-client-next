"use client"

import { useState, useEffect, useRef } from "react"
import { Search, Car, MapPin, CreditCard, Sparkles, ArrowRight } from "lucide-react"

export default function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const steps = [
    { icon: Search, title: "Search", desc: "Pick point", bg: "bg-yellow-400" },
    { icon: Car, title: "Select", desc: "Choose car", bg: "bg-orange-400" },
    { icon: CreditCard, title: "Secure", desc: "Upfront pay", bg: "bg-emerald-400" },
    { icon: MapPin, title: "Enjoy", desc: "Safe ride", bg: "bg-blue-400" },
  ]

  return (
    <section ref={sectionRef} className="py-12 md:py-24 px-2 sm:px-4 bg-white relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-20">
          <div className={`flex items-center gap-1.5 mb-2 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>
            <span className="bg-yellow-400 h-0.5 w-6 md:w-12 rounded-full"></span>
            <span className="text-gray-500 font-bold tracking-widest text-[8px] sm:text-xs uppercase">Process</span>
            <span className="bg-yellow-400 h-0.5 w-6 md:w-12 rounded-full"></span>
          </div>
          <h2 className={`text-xl min-[400px]:text-3xl md:text-6xl font-black text-zinc-900 mb-2 transform transition-all duration-1000 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>
            How It <span className="text-yellow-500">Works.</span>
          </h2>
        </div>

        {/* Horizontal Flowchart - No Scroll, just scaling */}
        <div className="relative max-w-5xl mx-auto px-1">
          
          {/* Continuous Connector Line */}
          <div className="absolute top-5 sm:top-12 left-[12%] right-[12%] h-px border-t border-dashed border-gray-300 -z-0"></div>

          <div className="grid grid-cols-4 gap-0 sm:gap-4 items-start">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center text-center transform transition-all duration-1000 ${
                  isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Icon Circle - Scales from 40px to 96px */}
                <div className="relative z-10 mb-2 sm:mb-6">
                  <div className={`${step.bg} border-2 sm:border-4 border-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:rotate-12 w-10 h-10 sm:w-16 md:w-24 sm:h-16 md:h-24`}>
                    <step.icon className="w-4 h-4 sm:w-8 md:w-10 text-zinc-900" />
                  </div>
                  {/* Small Step Number for mobile */}
                  <div className="absolute -top-1 -right-1 bg-zinc-900 text-white text-[7px] sm:text-[10px] w-3 h-3 sm:w-6 sm:h-6 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full">
                  <h3 className="text-[9px] sm:text-base md:text-xl font-black text-zinc-900 truncate px-0.5">
                    {step.title}
                  </h3>
                  {/* Description - Hidden on narrowest screens to keep it neat */}
                  <p className="hidden min-[450px]:block text-gray-500 text-[10px] md:text-sm leading-tight mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section - Compact for Mobile */}
        <div className={`mt-12 md:mt-32 transform transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="max-w-3xl mx-auto bg-zinc-950 rounded-2xl md:rounded-[3rem] p-5 sm:p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
            {/* Ambient light effect */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
               <div className="flex justify-center mb-4 sm:mb-8">
                  <div className="bg-yellow-400/10 p-2 sm:p-4 rounded-lg border border-yellow-400/20">
                    <Sparkles className="w-4 h-4 sm:w-8 sm:h-8 text-yellow-400" />
                  </div>
               </div>
               <h3 className="text-base sm:text-3xl md:text-5xl font-black text-white mb-2 sm:mb-6">The Gold Standard</h3>
               <p className="text-gray-400 text-[9px] sm:text-lg mb-4 sm:mb-10 max-w-md mx-auto">
                 Experience premium comfort in every journey.
               </p>
               <button className="group bg-yellow-400 hover:bg-yellow-500 active:scale-95 text-black font-black px-4 sm:px-10 py-2.5 sm:py-5 rounded-lg sm:rounded-2xl text-[9px] sm:text-xs uppercase tracking-tighter sm:tracking-[0.2em] transition-all flex items-center gap-2 mx-auto shadow-lg shadow-yellow-400/10">
                 Book Now <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
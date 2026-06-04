"use client"

import { useState, useEffect } from "react"
import BookingForm from "./BookingForm"
import { ShieldCheck, Star } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const backgroundImage = "/images/hero.jpg"

  return (
    <section className="relative h-[1100px] sm:h-[700px] w-full flex items-center overflow-hidden bg-zinc-950 py-12 lg:py-0">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 lg:bg-gradient-to-r lg:from-black/70 lg:via-black/40 lg:to-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-10 lg:pt-0">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Headline Content */}
          <div className="w-full lg:col-span-5 xl:col-span-4 text-left">
            <div 
              className={`inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-1 rounded-full mb-3 sm:mb-4 transform transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <span className="text-yellow-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest">Top Rated Car Rental</span>
            </div>

            <h1
              className={`text-white text-2xl min-[350px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 sm:mb-6 transform transition-all duration-1000 delay-100 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              Travel Safe, <br />
              <span className="text-yellow-400">Travel Premium.</span>
            </h1>
            
            <p className={`text-gray-200 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-md transform transition-all duration-1000 delay-200 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}>
              Sanitized cars and professional drivers for your local and outstation journeys.
            </p>

            <div className={`space-y-2.5 sm:space-y-3 transform transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}>
              <div className="flex items-center gap-2.5 sm:gap-3 text-white">
                <div className="bg-yellow-400/20 p-1 rounded-full shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                </div>
                <span className="text-xs sm:text-sm font-medium">100% Sanitized Fleet</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 text-white">
                <div className="bg-yellow-400/20 p-1 rounded-full shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                </div>
                <span className="text-xs sm:text-sm font-medium">Verified Professional Drivers</span>
              </div>
            </div>
          </div>

          {/* Right Side: Booking Form */}
          <div
            className={`w-full lg:col-span-7 xl:col-span-8 mt-4 lg:mt-0 transform transition-all duration-1000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="w-full">
               <BookingForm />
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
    </section>
  )
}
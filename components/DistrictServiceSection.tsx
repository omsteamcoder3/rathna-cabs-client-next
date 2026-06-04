"use client"

import { useState, useEffect, useRef } from "react"

export default function DistrictServiceSection() {
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

  const districts = [
    { name: "Chennai", fare: "₹2,500", time: "4-5 Hours" },
    { name: "Madurai", fare: "₹1,800", time: "3-4 Hours" },
    { name: "Trichy", fare: "₹2,200", time: "4-5 Hours" },
    { name: "Salem", fare: "₹3,000", time: "5-6 Hours" },
    { name: "Erode", fare: "₹2,800", time: "5-6 Hours" },
    { name: "Tiruppur", fare: "₹2,600", time: "4-5 Hours" },
    { name: "Ooty", fare: "₹3,500", time: "6-7 Hours" },
    { name: "Kodaikanal", fare: "₹2,000", time: "3-4 Hours" },
    { name: "Thanjavur", fare: "₹2,400", time: "4-5 Hours" },
    { name: "Kanyakumari", fare: "₹1,200", time: "2-3 Hours" },
    { name: "Vellore", fare: "₹3,200", time: "6-7 Hours" },
    { name: "Tirunelveli", fare: "₹800", time: "1-2 Hours" },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-gray-50 via-blue-50 to-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-4000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            TAMIL NADU DISTRICT SERVICE AREAS
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto transform transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Our one-way drop taxi service covers all major districts across Tamil Nadu. Travel comfortably with our
            professional drivers and well-maintained vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {districts.map((district, index) => (
            <div
              key={index}
              className={`group bg-white border border-gray-200 rounded-xl p-6 hover:bg-blue-50 hover:border-blue-300 transition-all duration-500 hover:scale-105 hover:shadow-xl transform shadow-lg ${
                isVisible ? `translate-y-0 opacity-100 delay-${(index + 1) * 50}` : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-900 font-bold text-lg group-hover:text-blue-600 transition-colors duration-300">
                  {district.name}
                </h3>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-white text-xs font-bold">📍</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Taxi Fare:</span>
                  <span className="text-blue-600 font-semibold">{district.fare}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Travel Time:</span>
                  <span className="text-gray-700">{district.time}</span>
                </div>
              </div>

              <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-md">
                Book Now
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">Looking for service to other destinations in Tamil Nadu?</p>
          <button className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
            View All Routes
          </button>
        </div>
      </div>
    </section>
  )
}

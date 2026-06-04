"use client"

import { useState, useEffect, useRef } from "react"

export default function PointToPointSection() {
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

  const routes = [
    { from: "Chennai", to: "Coimbatore", fare: "₹4,500" },
    { from: "Chennai", to: "Madurai", fare: "₹4,200" },
    { from: "Chennai", to: "Trichy", fare: "₹3,800" },
    { from: "Chennai", to: "Salem", fare: "₹3,500" },
    { from: "Chennai", to: "Vellore", fare: "₹2,200" },
    { from: "Chennai", to: "Kanchipuram", fare: "₹1,500" },
    { from: "Coimbatore", to: "Erode", fare: "₹1,200" },
    { from: "Coimbatore", to: "Tiruppur", fare: "₹800" },
    { from: "Coimbatore", to: "Ooty", fare: "₹2,000" },
    { from: "Coimbatore", to: "Kodaikanal", fare: "₹3,500" },
    { from: "Coimbatore", to: "Madurai", fare: "₹3,200" },
    { from: "Coimbatore", to: "Chennai", fare: "₹4,500" },
    { from: "Madurai", to: "Theni", fare: "₹1,500" },
    { from: "Madurai", to: "Dindigul", fare: "₹1,200" },
    { from: "Madurai", to: "Rameswaram", fare: "₹3,000" },
    { from: "Madurai", to: "Kanyakumari", fare: "₹4,200" },
    { from: "Trichy", to: "Thanjavur", fare: "₹1,800" },
    { from: "Trichy", to: "Kumbakonam", fare: "₹2,200" },
    { from: "Trichy", to: "Chidambaram", fare: "₹3,500" },
    { from: "Trichy", to: "Pondicherry", fare: "₹4,000" },
    { from: "Salem", to: "Namakkal", fare: "₹1,000" },
    { from: "Salem", to: "Dharmapuri", fare: "₹1,500" },
    { from: "Salem", to: "Krishnagiri", fare: "₹2,000" },
    { from: "Salem", to: "Bangalore", fare: "₹4,500" },
    { from: "Thoothukudi", to: "Tirunelveli", fare: "₹800" },
    { from: "Thoothukudi", to: "Kanyakumari", fare: "₹1,200" },
    { from: "Thoothukudi", to: "Madurai", fare: "₹1,800" },
    { from: "Thoothukudi", to: "Chennai", fare: "₹5,500" },
    { from: "Vellore", to: "Tiruvannamalai", fare: "₹1,800" },
    { from: "Vellore", to: "Kanchipuram", fare: "₹2,500" },
    { from: "Erode", to: "Namakkal", fare: "₹1,200" },
    { from: "Erode", to: "Karur", fare: "₹1,500" },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-br from-white via-orange-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-200/20 to-orange-200/20 animate-gradient-x"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            POINT TO POINT TAXI SERVICE IN TAMIL NADU
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-4xl mx-auto transform transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Our taxi service covers all districts in Tamil Nadu. We're one of the popular travel for point-to-point taxi
            service that provides seamless mobility, comfort and convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {routes.map((route, index) => (
            <div
              key={index}
              className={`group bg-white border border-gray-200 rounded-lg p-4 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-105 hover:shadow-lg transform shadow-sm ${
                isVisible ? `translate-y-0 opacity-100 delay-${(index + 1) * 20}` : "translate-y-5 opacity-0"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-900 font-medium">{route.from}</span>
                    <span className="text-blue-500">→</span>
                    <span className="text-gray-900 font-medium">{route.to}</span>
                  </div>
                </div>
                <div className="text-blue-600 font-bold">{route.fare}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">Don't see your route listed? Contact us for custom pricing!</p>
          <button className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  )
}

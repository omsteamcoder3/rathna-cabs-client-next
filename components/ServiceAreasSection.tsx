"use client"

import { useState, useEffect, useRef } from "react"

export default function ServiceAreasSection() {
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

  const services = [
    "Mathura Taxi Service",
    "Taxi Service in Bhopal",
    "Delhi Taxi Service",
    "Taxi Service in Goa",
    "Cab Service in Indore",
    "Taxi Service in Kolkata",
    "Cab Service in Mangalore",
    "Mumbai Taxi Service",
    "Cab Service in Pune",
    "Cab Service in Ranchi",
    "Taxi Service in Ahmedabad",
    "Cab Service in Ludhiana",
    "Madurai Taxi Service",
    "Cab Service in Coimbatore",
    "Cab Service in Patna",
    "Cab Service in Chennai",
  ]

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <button
              key={index}
              className={`bg-gray-100 hover:bg-purple-50 text-gray-700 hover:text-purple-600 font-medium py-3 px-4 rounded-lg transition-all duration-300 text-sm transform ${
                isVisible ? `translate-y-0 opacity-100 delay-${(index + 1) * 50}` : "translate-y-5 opacity-0"
              }`}
            >
              {service}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

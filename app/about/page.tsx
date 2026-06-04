"use client"

import { useState, useEffect } from "react"
import { 
  ShieldCheck, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  Clock, 
  Heart,
  ChevronRight,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { label: "Happy Customers", value: "10,000+", icon: Users },
    { label: "Cities Covered", value: "15+", icon: MapPin },
    { label: "Verified Drivers", value: "100+", icon: ShieldCheck },
    { label: "Years Experience", value: "8+", icon: Award },
  ]

  const values = [
    {
      title: "Safety First",
      description: "Every vehicle is sanitized before and after every ride, and our drivers follow strict health protocols.",
      icon: ShieldCheck,
    },
    {
      title: "Punctuality",
      description: "We value your time. Our advanced dispatch system ensures your driver arrives 10 minutes before pickup.",
      icon: Clock,
    },
    {
      title: "Professionalism",
      description: "Our chauffeurs are professionally trained, background-verified, and committed to polite service.",
      icon: Heart,
    }
  ]

  return (
    <div className="bg-white min-h-screen">
  
    <section className="relative pt-12 pb-20 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h1 className="text-white text-5xl md:text-7xl font-black mb-8 leading-[1.1]">
                Excellence In <br />
                <span className="text-yellow-400">Every Journey.</span>
              </h1>
        <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
                Rathna Cabs (Thoothukudi Taxi Hub) is Tamil Nadu's premier transportation provider, 
                dedicated to setting new standards in safety, comfort, and reliability.
              </p>
          </div>
        </div>
      </section>
      {/* --- OUR IDENTITY SECTION --- */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
               <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80" 
                    alt="Professional Driver" 
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 text-white">
                      <p className="text-4xl font-black mb-1">Rathna Cabs</p>
                      <p className="text-yellow-400 font-bold tracking-widest text-xs uppercase">Thoothukudi Taxi Hub</p>
                  </div>
               </div>
            </div>

            <div className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
               <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-8">
                 Tamil Nadu's Most <br />
                 <span className="text-yellow-500 ">Trusted Premium Service.</span>
               </h2>
               <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                 At Rathna Cabs, we believe that travel is more than just getting from point A to point B. 
                 It's about the peace of mind that comes with a clean car, a professional driver, and the 
                 knowledge that you'll reach your destination on time.
               </p>
               <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                 Headquartered in the Pearl City of Thoothukudi, we have expanded our "Taxi Hub" model 
                 across major Tamil Nadu cities to ensure that quality transportation is accessible 
                 to families, business travelers, and tourists alike.
               </p>

               <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, idx) => (
                    <div key={idx}>
                       <p className="text-4xl font-black text-zinc-900 mb-1">{stat.value}</p>
                       <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR VALUES (GRID) --- */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
             <div className="flex items-center gap-2 mb-4">
                <span className="bg-yellow-400 h-1 w-12 rounded-full"></span>
                <span className="text-gray-500 font-bold tracking-widest text-xs uppercase">The Rathna Promise</span>
                <span className="bg-yellow-400 h-1 w-12 rounded-full"></span>
             </div>
             <h2 className="text-4xl md:text-5xl font-black text-zinc-900">What Drives Us.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-2 transition-all duration-300">
                <div className="bg-yellow-400/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                  <val.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-black text-zinc-900 mb-4">{val.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* --- FOOTER CTA --- */}
      <section className="py-20 text-center">
         <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em] mb-6">Experience Rathna Cabs Premium</p>
         <Button className="bg-zinc-900 hover:bg-yellow-500 hover:text-black text-white font-black h-16 px-12 rounded-2xl transition-all hover:scale-105 shadow-xl group">
            Start Your Booking <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
         </Button>
      </section>
    </div>
  )
}
"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"  
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="bg-black shadow-lg py-3 sm:py-4 px-3 sm:px-4 border-b-2 border-yellow-400 sticky top-0 z-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-90 transition-opacity flex-shrink-0">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center overflow-hidden">
   <Image 
    src="/logo.png" 
    alt="Rathna Cabs Logo" 
    width={40} 
    height={40} 
    className="w-full h-full object-cover"
  /> 
</div>
              <div>
                <h1 className="text-yellow-400 font-bold text-base sm:text-xl md:text-2xl tracking-wide whitespace-nowrap">Rathna Cabs</h1>
                <div className="flex items-center space-x-0.5 sm:space-x-1">
                  <MapPin className="w-2 h-2 sm:w-3 sm:h-3 text-yellow-300" />
                  <p className="text-yellow-300 text-[8px] sm:text-[10px] md:text-xs font-medium truncate max-w-[120px] sm:max-w-none">THOOTHUKUDI, TAMIL NADU</p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation & Contact */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <nav className="flex items-center space-x-4 xl:space-x-6">
                <Link href="/" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium text-sm xl:text-base">
                  Home
                </Link>
                <Link href="/services" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium text-sm xl:text-base">
                  Services
                </Link>
                <Link href="/about" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium text-sm xl:text-base">
                  About
                </Link>
                <Link href="/contact" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium text-sm xl:text-base">
                  Contact
                </Link>
              </nav>

              <div className="flex items-center space-x-2 text-yellow-400 bg-gray-900 px-3 py-1.5 xl:px-4 xl:py-2 rounded-full">
                <Phone className="w-3 h-3 xl:w-4 xl:h-4" />
                <span className="text-xs xl:text-sm font-semibold whitespace-nowrap">+91-9003208702</span>
              </div>

              <Link href="/contact">
                <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-4 py-1.5 xl:px-6 xl:py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm xl:text-base">
                  Book Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-yellow-400 p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Doesn't push content down */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Sidebar Menu */}
          <div className="fixed top-0 right-0 h-full w-64 sm:w-80 bg-black border-l-2 border-yellow-400 shadow-2xl z-50 lg:hidden animate-in slide-in-from-right duration-300">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-800">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center overflow-hidden">
   <Image 
    src="/logo.png" 
    alt="Rathna Cabs Logo" 
    width={40} 
    height={40} 
    className="w-full h-full object-cover"
  /> 
</div>
                  <span className="text-yellow-400 font-bold text-sm sm:text-base">Rathna Cabs</span>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="text-yellow-400 p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col space-y-1 p-4 sm:p-5">
                <Link
                  href="/"
                  className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium py-3 px-4 rounded-lg hover:bg-gray-900 text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium py-3 px-4 rounded-lg hover:bg-gray-900 text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium py-3 px-4 rounded-lg hover:bg-gray-900 text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium py-3 px-4 rounded-lg hover:bg-gray-900 text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>

              {/* Bottom Section */}
              <div className="p-4 sm:p-5 border-t border-gray-800 space-y-4">
                <div className="flex items-center space-x-2 text-yellow-400 bg-gray-900 px-3 py-2 rounded-full">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-semibold">+91-9003208702</span>
                </div>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold w-full rounded-full text-sm sm:text-base py-2 sm:py-2.5">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
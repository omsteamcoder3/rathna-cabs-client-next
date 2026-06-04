"use client"

import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, IndianRupee } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white py-16 px-4 border-t-4 border-yellow-400">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-2xl">🚕</span>
              </div>
              <div>
                <h3 className="text-yellow-400 font-bold text-2xl">Rathna Cabs</h3>
                <p className="text-yellow-300 text-sm font-medium">THOOTHUKUDI TAXI HUB</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Tamil Nadu's most trusted premium taxi service. We provide sanitized vehicles, professional drivers, and
              24/7 support for all your transportation needs.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-yellow-400">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+91-9003208702</span>
              </div>
              <div className="flex items-center space-x-3 text-yellow-400">
                <Mail className="w-5 h-5" />
                <span>info@rathnacabs.com</span>
              </div>
              <div className="flex items-start space-x-3 text-yellow-400">
                <MapPin className="w-5 h-5 mt-1" />
                <span>
                  Adars 5/130, Saveryar Puram,
                  <br />
                  Pudukkottai Post, Thoothukudi
                  <br />
                  Tamil Nadu, India - 628005
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow-400 font-bold text-xl mb-6">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/home"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                >
                  <span className="text-yellow-400 transform group-hover:translate-x-1 transition-transform duration-300">▶</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/about"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                >
                  <span className="text-yellow-400 transform group-hover:translate-x-1 transition-transform duration-300">▶</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                >
                  <span className="text-yellow-400 transform group-hover:translate-x-1 transition-transform duration-300">▶</span>
                  <span>Our Services</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                >
                  <span className="text-yellow-400 transform group-hover:translate-x-1 transition-transform duration-300">▶</span>
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacypolicy"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                >
                  <span className="text-yellow-400 transform group-hover:translate-x-1 transition-transform duration-300">▶</span>
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms-and-conditions"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                >
                  <span className="text-yellow-400 transform group-hover:translate-x-1 transition-transform duration-300">▶</span>
                  <span>Terms of Service</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-yellow-400 font-bold text-xl mb-6">OUR SERVICES</h3>
            <ul className="space-y-3">
              {[
                "Local Rental",
                "One Way Drop",
                "Round Trip",
                "Airport Transfer",
                "Wedding Service",
                "Corporate Travel",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="text-yellow-400 transform group-hover:translate-x-1 transition-transform duration-300">🚗</span>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment & Social */}
          <div>
            <h3 className="text-yellow-400 font-bold text-xl mb-6">PAYMENT & CONNECT</h3>

            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
                <IndianRupee className="w-5 h-5 text-green-400" />
                <span>Secure Payment</span>
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                💳 All payments are encrypted and secure. We accept cash, UPI, cards, and digital wallets.
              </p>
            </div>

   

            <div className="mt-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-4 rounded-xl">
              <h4 className="font-bold mb-2">🎯 Ready to Book?</h4>
              <Link 
                href="/contact"
                className="inline-block bg-black text-yellow-400 font-bold px-4 py-2 rounded-full text-sm hover:scale-105 transition-transform"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Rathna Taxi Hub Thoothukudi. All Rights Reserved. | Designed with ❤️ for Tamil Nadu
            </p>
            <div className="flex space-x-6">
              <span className="text-yellow-400 text-sm font-semibold">🌟 24/7 Support Available</span>
              <span className="text-green-400 text-sm font-semibold">💰 Best Price Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
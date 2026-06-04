import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rathna Cabs - Premium Cab Booking Service",
  description: "Book premium cabs for rental, one way, round trip, road trip and transfer services",
  icons: {
    icon: [
      {
        url: "/logo.png",
        href: "/logo.png",
      },
      {
        url: "/logo.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: ["/logo.png"],
  },
  manifest: "/site.webmanifest", // Optional: if you have a manifest file
  openGraph: {
    title: "Rathna Cabs - Premium Cab Booking Service",
    description: "Book premium cabs for rental, one way, round trip, road trip and transfer services",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Rathna Cabs Logo",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
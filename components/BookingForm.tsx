"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Car, Route, Repeat, Mountain, Plane, Send, Clock } from "lucide-react"

type BookingCategory = "rental" | "oneway" | "roundtrip" | "roadtrip" | "transfer"

const WHATSAPP_NUMBER = "919003208702"

export default function BookingForm() {
  const [activeCategory, setActiveCategory] = useState<BookingCategory>("rental")
  const [formData, setFormData] = useState({
    sourceCity: "",
    destinationCity: "",
    tripType: "",
    dropLocation: "",
    numberOfDays: "",
    pickupDate: "",
    pickupTime: "",
    dropDate: "",
    dropTime: "",
    packageType: "outstation",
  })

  const categories = [
    { id: "rental", label: "Local Rental", icon: Car },
    { id: "oneway", label: "One Way", icon: Route },
    { id: "roundtrip", label: "Round Trip", icon: Repeat },
    { id: "roadtrip", label: "Road Trip", icon: Mountain },
    { id: "transfer", label: "Airport Transfer", icon: Plane },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const generateWhatsAppMessage = () => {
    let message = `*🚖 NEW BOOKING REQUEST*%0A`
    message += `*Category:* ${categories.find(c => c.id === activeCategory)?.label}%0A`
    message += `%0A`

    switch (activeCategory) {
      case "oneway":
        message += `*📍 Source:* ${formData.sourceCity || "Not specified"}%0A`
        message += `*📍 Destination:* ${formData.destinationCity || "Not specified"}%0A`
        message += `*📅 Pickup:* ${formData.pickupDate || "Not specified"} @ ${formData.pickupTime || "Not specified"}%0A`
        message += `*📦 Package:* ${formData.packageType || "Not specified"}%0A`
        break
      case "rental":
        message += `*📍 City:* ${formData.sourceCity || "Not specified"}%0A`
        message += `*🚗 Duration:* ${formData.tripType || "Not specified"}%0A`
        message += `*📅 Pickup:* ${formData.pickupDate || "Not specified"} @ ${formData.pickupTime || "Not specified"}%0A`
        message += `*📦 Package:* ${formData.packageType || "Not specified"}%0A`
        break
      case "roundtrip":
        message += `*📍 From:* ${formData.sourceCity || "Not specified"}%0A`
        message += `*📍 To:* ${formData.destinationCity || "Not specified"}%0A`
        message += `*📅 Pickup:* ${formData.pickupDate || "Not specified"} @ ${formData.pickupTime || "Not specified"}%0A`
        message += `*📅 Return:* ${formData.dropDate || "Not specified"} @ ${formData.dropTime || "Not specified"}%0A`
        message += `*📦 Package:* ${formData.packageType || "Not specified"}%0A`
        break
      case "roadtrip":
        message += `*📍 Start City:* ${formData.sourceCity || "Not specified"}%0A`
        message += `*📆 Days:* ${formData.numberOfDays ? `${formData.numberOfDays} Day(s)` : "Not specified"}%0A`
        message += `*📅 Pickup:* ${formData.pickupDate || "Not specified"} @ ${formData.pickupTime || "Not specified"}%0A`
        message += `*📦 Package:* ${formData.packageType || "Not specified"}%0A`
        break
      case "transfer":
        message += `*📍 Source:* ${formData.sourceCity || "Not specified"}%0A`
        message += `*🚕 Type:* ${formData.tripType || "Not specified"}%0A`
        message += `*📍 Drop:* ${formData.dropLocation || "Not specified"}%0A`
        message += `*📅 Pickup:* ${formData.pickupDate || "Not specified"} @ ${formData.pickupTime || "Not specified"}%0A`
        break
    }

    message += `%0A*🚀 Sent via Website Booking Form*`
    return message
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const missingFields: string[] = []

    if (!formData.sourceCity) missingFields.push("Source City")
    if (!formData.pickupDate) missingFields.push("Pickup Date")
    if (!formData.pickupTime) missingFields.push("Pickup Time")

    if (activeCategory === "oneway" && !formData.destinationCity) missingFields.push("Destination City")
    if (activeCategory === "roundtrip" && (!formData.destinationCity || !formData.dropDate)) missingFields.push("Return Details")
    if (activeCategory === "transfer" && !formData.dropLocation) missingFields.push("Drop Location")

    if (missingFields.length > 0) {
      alert(`Please fill in all required fields.`)
      return
    }

    const message = generateWhatsAppMessage()
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank")
  }

  const renderFields = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Field 1: Source */}
        <div className="space-y-1.5">
          <Label className="text-yellow-400 flex items-center gap-2 font-semibold text-xs">
            <MapPin className="w-3.5 h-3.5" /> {activeCategory === "roundtrip" ? "From City" : "Source City"}
          </Label>
          <Input
            placeholder="e.g. Thoothukudi"
            value={formData.sourceCity}
            onChange={(e) => handleInputChange("sourceCity", e.target.value)}
            className="bg-white/10 border-white/20 text-white h-11 focus:border-yellow-400 text-sm w-full"
          />
        </div>

        {/* Field 2: Destination Variants */}
        {(activeCategory === "oneway" || activeCategory === "roundtrip") && (
          <div className="space-y-1.5">
            <Label className="text-yellow-400 flex items-center gap-2 font-semibold text-xs">
              <MapPin className="w-3.5 h-3.5" /> Destination City
            </Label>
            <Input
              placeholder="e.g. Madurai"
              value={formData.destinationCity}
              onChange={(e) => handleInputChange("destinationCity", e.target.value)}
              className="bg-white/10 border-white/20 text-white h-11 text-sm w-full"
            />
          </div>
        )}

        {activeCategory === "rental" && (
          <div className="space-y-1.5">
            <Label className="text-yellow-400 font-semibold text-xs">Duration</Label>
            <Select onValueChange={(v) => handleInputChange("tripType", v)}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white h-11 text-sm w-full">
                <SelectValue placeholder="Select Plan" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-yellow-400 text-white">
                <SelectItem value="4hrs-40kms">4 Hrs / 40 Kms</SelectItem>
                <SelectItem value="8hrs-80kms">8 Hrs / 80 Kms</SelectItem>
                <SelectItem value="12hrs-120kms">12 Hrs / 120 Kms</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {activeCategory === "roadtrip" && (
          <div className="space-y-1.5">
            <Label className="text-yellow-400 font-semibold text-xs">Number of Days</Label>
            <Select onValueChange={(v) => handleInputChange("numberOfDays", v)}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white h-11 text-sm w-full">
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-yellow-400 text-white">
                {[1, 2, 3, 4, 5, 7, 10, 14].map(d => (
                  <SelectItem key={d} value={d.toString()}>{d} {d === 1 ? 'Day' : 'Days'}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {activeCategory === "transfer" && (
          <div className="space-y-1.5">
            <Label className="text-yellow-400 font-semibold text-xs">Transfer Type</Label>
            <Select onValueChange={(v) => handleInputChange("tripType", v)}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white h-11 text-sm w-full">
                <SelectValue placeholder="Airport/Railway/Hotel" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-yellow-400 text-white">
                <SelectItem value="airport">Airport Transfer</SelectItem>
                <SelectItem value="railway">Railway Station</SelectItem>
                <SelectItem value="hotel">Hotel Transfer</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Field 3: Package Type */}
        <div className="space-y-1.5">
          <Label className="text-yellow-400 font-semibold text-xs">Service Package</Label>
          <Select onValueChange={(v) => handleInputChange("packageType", v)} defaultValue="outstation">
            <SelectTrigger className="bg-white/10 border-white/20 text-white h-11 text-sm w-full">
              <SelectValue placeholder="Select Package" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border-yellow-400 text-white">
              <SelectItem value="local">Local Service</SelectItem>
              <SelectItem value="outstation">Outstation</SelectItem>
              <SelectItem value="airport">Airport Transfer</SelectItem>
              <SelectItem value="wedding">Wedding / Event</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Field 4: Pickup Details */}
        <div className="space-y-1.5">
          <Label className="text-yellow-400 flex items-center gap-2 font-semibold text-xs">
            <Calendar className="w-3.5 h-3.5" /> Pickup Date & Time
          </Label>
          <div className="grid grid-cols-2 gap-2">
            <Input
              type="date"
              value={formData.pickupDate}
              onChange={(e) => handleInputChange("pickupDate", e.target.value)}
              className="bg-white/10 border-white/20 text-white h-11 text-[11px] sm:text-xs"
            />
            <Input
              type="time"
              value={formData.pickupTime}
              onChange={(e) => handleInputChange("pickupTime", e.target.value)}
              className="bg-white/10 border-white/20 text-white h-11 text-[11px] sm:text-xs"
            />
          </div>
        </div>

        {/* Field 5: Drop/Return Details */}
        {activeCategory === "roundtrip" && (
          <div className="space-y-1.5">
            <Label className="text-yellow-400 flex items-center gap-2 font-semibold text-xs">
              <Repeat className="w-3.5 h-3.5" /> Return Date & Time
            </Label>
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="date"
                value={formData.dropDate}
                onChange={(e) => handleInputChange("dropDate", e.target.value)}
                className="bg-white/10 border-white/20 text-white h-11 text-[11px] sm:text-xs"
              />
              <Input
                type="time"
                value={formData.dropTime}
                onChange={(e) => handleInputChange("dropTime", e.target.value)}
                className="bg-white/10 border-white/20 text-white h-11 text-[11px] sm:text-xs"
              />
            </div>
          </div>
        )}

        {activeCategory === "transfer" && (
          <div className="space-y-1.5">
            <Label className="text-yellow-400 flex items-center gap-2 font-semibold text-xs">
              <MapPin className="w-3.5 h-3.5" /> Drop Location
            </Label>
            <Input
              placeholder="Terminal/Address"
              value={formData.dropLocation}
              onChange={(e) => handleInputChange("dropLocation", e.target.value)}
              className="bg-white/10 border-white/20 text-white h-11 text-sm w-full"
            />
          </div>
        )}

        {/* Submit Button */}
        <div className="flex items-end pt-2">
          <Button 
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold h-11 rounded-lg transition-all active:scale-95 shadow-lg flex items-center justify-center gap-2 text-sm"
          >
            <Send className="w-4 h-4" />
            BOOK NOW
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 py-2 sm:py-6 overflow-x-hidden">
      {/* Scrollable Tabs */}
      <div className="flex flex-nowrap overflow-x-auto pb-4 gap-2 no-scrollbar mb-2">
        {categories.map((category) => {
          const Icon = category.icon
          const isActive = activeCategory === category.id
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as BookingCategory)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-[11px] font-bold transition-all duration-300 ${
                isActive 
                ? "bg-yellow-400 text-black shadow-lg" 
                : "bg-zinc-900/80 text-gray-400 border border-white/10"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="whitespace-nowrap uppercase tracking-tighter">{category.label}</span>
            </button>
          )
        })}
      </div>

      <Card className="bg-zinc-900/90 backdrop-blur-xl border border-yellow-400/30 shadow-2xl overflow-hidden rounded-xl w-full">
        <div className="bg-yellow-400 h-1 w-full" />
        <CardContent className="p-4 sm:p-8">
          <div className="mb-6">
            <h2 className="text-lg sm:text-2xl font-bold text-white flex flex-wrap items-center gap-2">
              {categories.find(c => c.id === activeCategory)?.label}
              <span className="text-[10px] bg-yellow-400/10 text-yellow-400 px-2 py-0.5 rounded uppercase tracking-tighter">Instant Quote</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="w-full">
            {renderFields()}
          </form>

          <div className="mt-8 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-gray-400 text-[10px]">
                <Clock className="w-3 h-3 text-yellow-400" /> 24/7 Support
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 text-[10px]">
                <Car className="w-3 h-3 text-yellow-400" /> Verified Fleet
              </div>
            </div>
            <p className="text-[9px] text-gray-500 italic shrink-0">
              * WhatsApp for final pricing.
            </p>
          </div>
        </CardContent>
      </Card>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  )
}
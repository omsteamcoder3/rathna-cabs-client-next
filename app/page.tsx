
import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import FeaturesSection from "@/components/FeaturesSection"
import AboutSection from "@/components/AboutSection"
import PricingSection from "@/components/PricingSection"
import HowItWorksSection from "@/components/HowItWorksSection"


export default function Home() {
  return (
    <main className="min-h-screen">
  
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <AboutSection />
      <PricingSection />
      <HowItWorksSection />
   
    </main>
  )
}

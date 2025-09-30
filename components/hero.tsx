"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function Hero() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-pink-black animate-gradient" />

      {/* Subtle sparkle texture */}
      <div className="absolute inset-0 sparkle-overlay" />

      {/* Hero image overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="glass-dark rounded-3xl p-12 md:p-16">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance">
            Glam Hard
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-4 font-light">Acrylic Nails That Make a Statement</p>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Premium acrylic nail designs in Abbotsford & Lower Mainland
          </p>
          <Button
            size="lg"
            onClick={scrollToBooking}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Book Your Appointment
          </Button>
        </div>
      </div>
    </section>
  )
}

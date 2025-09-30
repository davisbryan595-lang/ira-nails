import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Palette, Gem, Hand, Calendar } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Acrylic Nail Extensions",
    description: "Long-lasting, durable acrylic extensions that enhance your natural beauty with flawless application.",
  },
  {
    icon: Palette,
    title: "Nail Art & Custom Designs",
    description: "Unique, personalized nail art tailored to your style. From minimalist to bold statement designs.",
  },
  {
    icon: Gem,
    title: "Gel Nails & Refills",
    description: "High-shine gel manicures and professional refills to keep your nails looking fresh and glamorous.",
  },
  {
    icon: Hand,
    title: "Manicures & Pedicures",
    description: "Complete nail care services including shaping, buffing, cuticle care, and luxurious treatments.",
  },
  {
    icon: Calendar,
    title: "Bookings & Appointments",
    description: "Flexible scheduling to fit your lifestyle. Book online or call us for same-day appointments.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium nail care services designed to make you feel confident and glamorous
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

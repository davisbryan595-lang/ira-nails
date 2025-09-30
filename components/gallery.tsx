"use client"

import { useState } from "react"

const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/24653480/pexels-photo-24653480.jpeg",
    alt: "Beautician mixing nail polish in a modern nail studio",
    title: "Studio Mix",
    description: "Precision color blending for flawless finishes",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/10828767/pexels-photo-10828767.jpeg",
    alt: "Hand with chic manicure and gold rings on denim",
    title: "Chic Accent",
    description: "Minimalist glam with luxe accessories",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/10420563/pexels-photo-10420563.jpeg",
    alt: "Long blue acrylic manicure with silver rings",
    title: "Bold Blue",
    description: "Statement shapes with glossy chrome",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/10792977/pexels-photo-10792977.jpeg",
    alt: "Elegant hand with diamond flower ring and fresh manicure",
    title: "Diamond Detail",
    description: "Delicate sparkle accents for special days",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/6045539/pexels-photo-6045539.jpeg",
    alt: "Applying acrylic nails at the salon",
    title: "Fresh Application",
    description: "Expert application for long-lasting wear",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/24653480/pexels-photo-24653480.jpeg",
    alt: "Mixing polish for a manicure service",
    title: "Color Lab",
    description: "Custom shades mixed to your taste",
  },
]

export function Gallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">Our Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of stunning nail designs and transformations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <figure
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group"
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  hoveredId === image.id ? "scale-110" : "scale-100"
                }`}
              />

              <figcaption className="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white transition-transform duration-300 transform-gpu">
                <h3 className={`text-lg font-semibold ${hoveredId === image.id ? "translate-y-0" : "translate-y-1"}`}>
                  {image.title}
                </h3>
                <p className={`text-sm mt-1 opacity-90 ${hoveredId === image.id ? "opacity-100" : "opacity-90"}`}>
                  {image.description}
                </p>
              </figcaption>

              <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                  hoveredId === image.id ? "opacity-0" : "opacity-0"
                }`}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

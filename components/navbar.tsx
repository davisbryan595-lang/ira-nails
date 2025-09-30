"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-navbar fixed inset-x-0 top-4 z-50 pointer-events-auto">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between glass p-2 rounded-3xl">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <a href="/" className="logo-link flex items-center gap-3 no-underline">
            <span className="logo-mark w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">GH</span>
            <span className="logo-text font-serif text-lg text-foreground">Glam Hard</span>
          </a>
        </div>

        {/* Desktop links */}
        <ul className="nav-links hidden md:flex items-center gap-6">
          <li>
            <a href="#services" className="nav-link text-black hover:text-primary transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#gallery" className="nav-link text-black hover:text-primary transition-colors">
              Gallery
            </a>
          </li>
          <li>
            <a href="#booking" className="nav-link text-black hover:text-primary transition-colors">
              Bookings
            </a>
          </li>
          <li>
            <a href="/blog" className="nav-link text-black hover:text-primary transition-colors">
              Blog
            </a>
          </li>
          <li>
            <a href="#footer" className="nav-link text-black hover:text-primary transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Action / mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#booking"
            className="hidden md:inline-block bg-primary hover:bg-primary/90 text-primary-foreground text-sm px-4 py-2 rounded-full shadow-sm"
          >
            Book
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="md:hidden p-2 rounded-full bg-secondary-foreground/5 hover:bg-secondary-foreground/10 transition-all"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu mt-3 max-w-7xl mx-auto px-6 ${open ? "block" : "hidden"}`}>
        <div className="glass rounded-2xl p-4 flex flex-col gap-3">
          <a href="#services" className="block text-black font-medium py-2" onClick={() => setOpen(false)}>
            Services
          </a>
          <a href="#gallery" className="block text-black font-medium py-2" onClick={() => setOpen(false)}>
            Gallery
          </a>
          <a href="#booking" className="block text-black font-medium py-2" onClick={() => setOpen(false)}>
            Bookings
          </a>
          <a href="/blog" className="block text-black font-medium py-2" onClick={() => setOpen(false)}>
            Blog
          </a>
          <a href="#footer" className="block text-black font-medium py-2" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}

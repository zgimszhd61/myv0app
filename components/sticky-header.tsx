'use client'

import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function StickyHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <div className="min-h-screen bg-gray-100">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? 'bg-white/70 backdrop-blur-md shadow-md h-16'
            : 'bg-white h-20'
        }`}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className={`font-bold text-primary transition-all duration-300 ease-in-out ${
              scrolled ? 'text-xl' : 'text-2xl'
            }`}>
              Logo
            </span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-primary hover:text-primary/80">Home</a>
            <a href="#" className="text-primary hover:text-primary/80">About</a>
            <a href="#" className="text-primary hover:text-primary/80">Services</a>
            <a href="#" className="text-primary hover:text-primary/80">Contact</a>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </header>
      <main className="pt-24 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Welcome to Our Website</h1>
        {[...Array(20)].map((_, i) => (
          <section key={i} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Section {i + 1}</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
        ))}
      </main>
    </div>
  )
}
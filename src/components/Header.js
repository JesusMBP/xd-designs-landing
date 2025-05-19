"use client";
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header className="bg-white shadow-sm fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">XD Designs</span>
        </div>
        
        {/* Desktop Navigation - Hidden on mobile, visible on medium screens and up */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-800 hover:text-blue-600 transition duration-300">
            Home
          </Link>
          <Link href="#services" className="text-gray-800 hover:text-blue-600 transition duration-300">
            Services
          </Link>
          <Link href="#portfolio" className="text-gray-800 hover:text-blue-600 transition duration-300">
            Portfolio
          </Link>
          <Link href="#about" className="text-gray-800 hover:text-blue-600 transition duration-300">
            About
          </Link>
          <Link href="#contact" className="text-gray-800 hover:text-blue-600 transition duration-300">
            Contact
          </Link>
        </nav>
        
        {/* CTA Button - Hidden on mobile, visible on medium screens and up */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Get a Quote
          </button>
        </div>
        
        {/* Mobile Menu Button - Visible on mobile, hidden on medium screens and up */}
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* This is a simple hamburger menu icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation - Shown only when isMenuOpen is true and only on mobile */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <Link href="/" className="block px-3 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-md transition duration-300">
              Home
            </Link>
            <Link href="#services" className="block px-3 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-md transition duration-300">
              Services
            </Link>
            <Link href="#portfolio" className="block px-3 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-md transition duration-300">
              Portfolio
            </Link>
            <Link href="#about" className="block px-3 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-md transition duration-300">
              About
            </Link>
            <Link href="#contact" className="block px-3 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-md transition duration-300">
              Contact
            </Link>
            {/* CTA in mobile menu */}
            <div className="px-3 py-2">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
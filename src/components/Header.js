"use client";
import Link from 'next/link'
import { useState, useEffect } from 'react'
import QuoteModal from './QuoteModal'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle initial animation
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Handle smooth scrolling
  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      
      // Close mobile menu if open
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <header 
        className={`fixed w-full z-10 transition-all duration-500 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled ? 'bg-slate-900/98 backdrop-blur-md shadow-lg' : 'bg-slate-900'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-orange-400 transition-transform duration-300 hover:scale-105">
              XD Designs
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-slate-200 hover:text-orange-400 transition-all duration-300 hover:scale-105">
              Home
            </a>
            <a href="#services" onClick={(e) => handleScrollToSection(e, 'services')} className="text-slate-200 hover:text-orange-400 transition-all duration-300 hover:scale-105">
              Services
            </a>
            <a href="#about" onClick={(e) => handleScrollToSection(e, 'about')} className="text-slate-200 hover:text-orange-400 transition-all duration-300 hover:scale-105">
              About
            </a>
            <a href="#contact" onClick={(e) => handleScrollToSection(e, 'contact')} className="text-slate-200 hover:text-orange-400 transition-all duration-300 hover:scale-105">
              Contact
            </a>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-orange-400 text-slate-900 px-4 py-2 rounded-lg hover:bg-orange-500 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg"
            >
              Get a Quote
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-200 hover:text-orange-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900 border-t border-slate-800">
            <a href="/" className="block px-3 py-2 text-slate-200 hover:text-orange-400 hover:bg-slate-800 rounded-md transition-all duration-300">
              Home
            </a>
            <a href="#services" onClick={(e) => handleScrollToSection(e, 'services')} className="block px-3 py-2 text-slate-200 hover:text-orange-400 hover:bg-slate-800 rounded-md transition-all duration-300">
              Services
            </a>
            <a href="#about" onClick={(e) => handleScrollToSection(e, 'about')} className="block px-3 py-2 text-slate-200 hover:text-orange-400 hover:bg-slate-800 rounded-md transition-all duration-300">
              About
            </a>
            <a href="#contact" onClick={(e) => handleScrollToSection(e, 'contact')} className="block px-3 py-2 text-slate-200 hover:text-orange-400 hover:bg-slate-800 rounded-md transition-all duration-300">
              Contact
            </a>
            {/* CTA in mobile menu */}
            <div className="px-3 py-2">
              <button 
                onClick={() => {
                  setIsQuoteModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full bg-orange-400 text-slate-900 px-4 py-2 rounded-lg hover:bg-orange-500 transition-all duration-300 font-medium hover:scale-105"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </>
  )
}
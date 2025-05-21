"use client";
import { useCallback } from 'react';
import Image from 'next/image';

export default function Hero() {
  const handleScrollToServices = useCallback((e) => {
    e.preventDefault();
    const element = document.getElementById('services');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleOpenQuoteModal = useCallback(() => {
    // Dispatch a custom event that the Header component will listen for
    const event = new CustomEvent('openQuoteModal');
    window.dispatchEvent(event);
  }, []);

  return (
    <section className="pt-20 pb-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Bringing Your Digital Ideas to Life
          </h1>
          <p className="text-xl mb-8 text-slate-200">
            XD Designs creates powerful software applications and stunning websites that help businesses grow.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={handleScrollToServices}
              className="px-6 py-3 bg-orange-400 text-slate-900 font-medium rounded-lg hover:bg-orange-500 transition duration-300"
            >
              Our Services
            </button>
            <button 
              onClick={handleOpenQuoteModal}
              className="px-6 py-3 border-2 border-orange-400 text-orange-400 font-medium rounded-lg hover:bg-orange-400 hover:text-slate-900 transition duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative h-[400px]">
          <Image
            src="/images/hero-illustration.svg"
            alt="Software development illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}
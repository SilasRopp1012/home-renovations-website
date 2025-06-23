'use client'

import { useState } from 'react'
import { pages } from '@/content/content'
import QuoteModal from '@/components/QuoteModal'

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleQuoteClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Ready to Start Your Project - Moved to top */}
      <section className="py-16 lg:py-20 bg-specials-bg">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-['Zodiak'] text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-6">
              Ready to Start Your Project?
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Whether you're planning a complete home renovation, custom cabinetry, or building your dream home, 
              we're here to bring your vision to life with quality craftsmanship and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleQuoteClick}
                className="bg-dark-brown-green hover:bg-brown-green text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform cursor-pointer"
              >
                Get Free Quote
              </button>
              <a
                href="/services"
                className="border-2 border-dark-brown-green hover:border-brown-green text-dark-brown-green hover:text-brown-green px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-dark-brown-green/5 cursor-pointer"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information - Now below the CTA */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Details */}
            <div className="space-y-8">
              {/* Main heading */}
              <div>
                <h2 className="font-['Zodiak'] text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-8">
                  Get In Touch
                </h2>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-dark-brown-green mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-1">Phone</h3>
                  <a 
                    href={`tel:${pages.contact.phone}`}
                    className="text-dark-brown-green hover:text-brown-green font-medium transition-colors cursor-pointer"
                  >
                    {pages.contact.phone}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-dark-brown-green mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-1">Showroom Location</h3>
                  <p className="text-gray-700">
                    {pages.contact.address}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-dark-brown-green mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-1">Business Hours</h3>
                  <div className="text-gray-700 whitespace-pre-line">
                    {pages.contact.businessHours}
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://maps.google.com/maps?q=44+Hillsboro+St+Ste+B,Pittsboro,NC+27312&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Horizon Renovations Showroom Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}

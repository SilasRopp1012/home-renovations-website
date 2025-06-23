'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { aboutPage } from '@/content/content'
import QuoteModal from '@/components/QuoteModal'

// Custom hook for intersection observer
function useInView(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isInView] as const
}

export default function About() {
  const [introRef, introInView] = useInView(0.4)
  const [whyChooseUsRef, whyChooseUsInView] = useInView(0.2)
  const [showroomRef, showroomInView] = useInView(0.1)
  const [finalCtaRef, finalCtaInView] = useInView(0.2)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleQuoteClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen">
      {/* Introduction Section - New Combined Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div 
              ref={introRef}
              className={`transition-all duration-1000 ease-out ${
                introInView 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-12'
              }`}
            >
              <h1 className="font-['Zodiak'] text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-6">
                {aboutPage.introduction.title}
              </h1>
              <div className="space-y-6">
                {aboutPage.introduction.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div 
              className={`relative transition-all duration-1000 ease-out delay-300 ${
                introInView 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-12'
              }`}
            >
              <Image
                src={aboutPage.introduction.image}
                alt={aboutPage.introduction.imageAlt}
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full h-[300px] md:h-[400px] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-20 bg-specials-bg">
        <div className="container mx-auto px-4">
          <div 
            ref={whyChooseUsRef}
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              whyChooseUsInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="font-['Zodiak'] text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-6">
              {aboutPage.whyChooseUs.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {aboutPage.whyChooseUs.reasons.map((reason, index) => {
              // Icon component function
              const getIcon = (iconName: string) => {
                switch (iconName) {
                  case 'shield':
                    return (
                      <svg className="w-12 h-12 mx-auto mb-4 text-dark-brown-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )
                  case 'hammer':
                    return (
                      <svg className="w-12 h-12 mx-auto mb-4 text-dark-brown-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd" />
                      </svg>
                    )
                  case 'home':
                    return (
                      <svg className="w-12 h-12 mx-auto mb-4 text-dark-brown-green" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    )
                  default:
                    return null
                }
              }

              return (
                <div 
                  key={index}
                  className={`text-center transition-all duration-1000 ease-out ${
                    whyChooseUsInView 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 300}ms` }}
                >
                  {getIcon(reason.icon)}
                  <h3 className="font-['Zodiak'] text-xl md:text-2xl font-bold text-charcoal mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {reason.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Showroom Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div 
              ref={showroomRef}
              className={`transition-all duration-1000 ease-out ${
                showroomInView 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-12'
              }`}
            >
              <h2 className="font-['Zodiak'] text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-6">
                {aboutPage.showroom.title}
              </h2>
              <div className="space-y-6">
                {aboutPage.showroom.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8 p-6 bg-specials-bg rounded-lg shadow-lg">
                <h3 className="font-semibold text-charcoal mb-2">Showroom Hours</h3>
                <p className="text-gray-700 mb-2">
                  Monday – Friday 9:00 AM – 5:00 PM<br />
                  After Hours by Appointment Only
                </p>
                <p className="text-gray-700 text-sm">{aboutPage.showroom.address}</p>
              </div>
            </div>
            <div 
              className={`relative transition-all duration-1000 ease-out delay-300 ${
                showroomInView 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-12'
              }`}
            >
              <Image
                src={aboutPage.showroom.image}
                alt={aboutPage.showroom.imageAlt}
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full h-[300px] md:h-[400px] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-24 bg-dark-brown-green text-cream">
        <div className="container mx-auto px-4">
          <div 
            ref={finalCtaRef}
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ease-out ${
              finalCtaInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="font-['Zodiak'] text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {aboutPage.finalCta.title}
            </h2>
            <p className="text-xl md:text-2xl text-cream/90 mb-8">
              {aboutPage.finalCta.subtitle}
            </p>
            <p className="text-lg text-cream/80 mb-12 max-w-2xl mx-auto">
              {aboutPage.finalCta.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={handleQuoteClick}
                className="w-full sm:w-auto bg-cream hover:bg-white text-dark-brown-green px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform cursor-pointer"
              >
                {aboutPage.finalCta.ctaButtons.primary}
              </button>
              <a
                href="/services"
                className="w-full sm:w-auto border-2 border-cream/30 hover:border-cream/60 text-cream px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-cream/10 cursor-pointer"
              >
                {aboutPage.finalCta.ctaButtons.secondary}
              </a>
            </div>
            
            <div className="text-cream/70">
              <p className="text-lg font-semibold">
                Call us today: <a href="tel:919-542-4442" className="text-cream hover:text-white transition-colors cursor-pointer">{aboutPage.finalCta.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}

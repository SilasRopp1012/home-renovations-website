'use client'

import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { pages, siteContent, servicesPage } from '@/content/content'
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

// Scroll Animation Component
function ScrollAnimatedDiv({ children, className = "", delay = 0, id }: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
  id?: string;
}) {
  const [ref, isInView] = useInView(0.2)

  return (
    <div 
      ref={ref} 
      id={id}
      className={`animate-fade-in-up-on-scroll ${isInView ? 'in-view' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function Services() {
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [heroLoaded, setHeroLoaded] = useState(false)
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  
  // Check if we have a hash on initial load
  const [hasInitialHash] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash !== ''
    }
    return false
  })

  // Refs for scroll animations  
  const [heroRef, heroInView] = useInView(0.1)
  const [processRef, processInView] = useInView(0.1)

  // Handle initial hash positioning - BEFORE any animations
  useLayoutEffect(() => {
    if (hasInitialHash) {
      // Disable scroll restoration
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual'
      }

      const hash = window.location.hash.substring(1)
      
      // Multiple attempts to find and scroll to element
      const attemptScroll = (attempt = 0) => {
        const element = document.getElementById(hash)
        if (element && attempt < 10) {
          const headerOffset = 100
          const rect = element.getBoundingClientRect()
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop
          const targetPosition = Math.max(0, rect.top + scrollTop - headerOffset)
          
          window.scrollTo({
            top: targetPosition,
            left: 0,
            behavior: 'instant'
          })
        } else if (attempt < 10) {
          // Element not ready yet, try again
          requestAnimationFrame(() => attemptScroll(attempt + 1))
        }
      }

      // Start attempting immediately
      attemptScroll()
    }
  }, [hasInitialHash])

  // Hero animation with delay for hash navigation
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroLoaded(true)
    }, hasInitialHash ? 100 : 500) // Shorter delay if we have hash

    return () => clearTimeout(timer)
  }, [hasInitialHash])

  // Process animation - skip initial delay if we have hash
  useEffect(() => {
    if (processInView) {
      setVisibleSteps([])
      setVisibleLines([])
      
      const timeouts: NodeJS.Timeout[] = []
      const baseDelay = hasInitialHash ? 300 : 1200 // Much shorter if hash navigation
      
      siteContent.process.steps.forEach((_, index) => {
        const stepTimeout = setTimeout(() => {
          setVisibleSteps(prev => [...prev, index])
        }, baseDelay + (index * 800))
        
        const lineTimeout = setTimeout(() => {
          setVisibleLines(prev => [...prev, index])
        }, baseDelay + (index * 800) + 400)
        
        timeouts.push(stepTimeout, lineTimeout)
      })

      return () => timeouts.forEach(clearTimeout)
    }
  }, [processInView, hasInitialHash])

  // Final positioning check after everything loads
  useEffect(() => {
    if (hasInitialHash && heroLoaded) {
      const timer = setTimeout(() => {
        const hash = window.location.hash.substring(1)
        const element = document.getElementById(hash)
        if (element) {
          const headerOffset = 100
          const rect = element.getBoundingClientRect()
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop
          const targetPosition = Math.max(0, rect.top + scrollTop - headerOffset)
          
          window.scrollTo({
            top: targetPosition,
            left: 0,
            behavior: 'instant'
          })
        }
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [hasInitialHash, heroLoaded])

  const handleGetQuote = () => {
    setShowQuoteModal(true)
  }

  // Additional services data
  const additionalServices = [
    {
      name: "Flooring Installation",
      description: "Hardwood, tile, carpet, laminate, and vinyl plank flooring with professional installation"
    },
    {
      name: "Exterior Remodeling", 
      description: "Siding replacement, window installation, roofing services, and deck construction"
    },
    {
      name: "Whole House Renovations",
      description: "Complete home transformations from concept to completion with project management"
    },
    {
      name: "Basement Finishing",
      description: "Transform your basement into functional living space with proper insulation and finishing"
    },
    {
      name: "Sunroom Installations",
      description: "Expand your living space with beautiful sunrooms that bring the outdoors in"
    },
    {
      name: "Garage Conversions",
      description: "Convert unused garage space into functional rooms, offices, or living areas"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-12 lg:py-16 min-h-[40vh] lg:min-h-[45vh] flex items-center"
        style={{ backgroundImage: `url(${servicesPage.hero.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className={`font-['Zodiak'] text-4xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ease-out ${
            heroLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            {servicesPage.hero.title}
          </h1>
          <p className={`text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-300 ${
            heroLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            {servicesPage.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Our Process - Centered */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div 
            ref={processRef}
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              processInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="font-['Zodiak'] text-3xl lg:text-5xl font-bold text-dark-brown-green mb-6">
              {siteContent.process.title}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our proven 4-step process ensures your project runs smoothly from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {siteContent.process.steps.map((step, index) => (
              <div 
                key={index}
                className={`text-center relative transition-all duration-800 ease-out transform ${
                  visibleSteps.includes(index)
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-12 scale-90'
                }`}
              >
                <div className="relative mb-8">
                  {/* Circle - Higher z-index to appear above lines */}
                  <div className={`relative z-10 w-20 h-20 bg-brown-green text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold font-['Zodiak'] transition-all duration-700 transform ${
                    visibleSteps.includes(index) 
                      ? 'animate-circle-grow shadow-lg scale-100' 
                      : 'scale-0'
                  }`}>
                    {step.number}
                  </div>
                  
                  {/* Connecting Line - Goes all the way through, behind circles */}
                  {index < siteContent.process.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0">
                      <div 
                        className={`h-full bg-brown-green transition-all duration-1000 ease-out origin-left ${
                          visibleLines.includes(index) 
                            ? 'scale-x-100' 
                            : 'scale-x-0'
                        }`}
                      ></div>
                    </div>
                  )}
                </div>
                
                {/* Text Content */}
                <div className={`transition-all duration-600 delay-300 ${
                  visibleSteps.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}>
                  <h3 className="font-['Zodiak'] text-xl font-bold text-dark-brown-green mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-700">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services - Left Aligned, No Subtitle */}
      <section className="py-16 lg:py-20 bg-specials-bg">
        <div className="container mx-auto px-4">
          <ScrollAnimatedDiv className="text-left mb-16">
            <h2 className="font-['Zodiak'] text-3xl lg:text-5xl font-bold text-dark-brown-green mb-6">
              {siteContent.services.title}
            </h2>
          </ScrollAnimatedDiv>

          <div className="grid gap-12 lg:gap-16">
            {servicesPage.mainServices.map((service, index) => (
              <ScrollAnimatedDiv 
                key={service.id}
                delay={index * 200}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                id={service.id}
              >
                {/* Service Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Service Content */}
                <div className="w-full lg:w-1/2">
                  <h3 className="font-['Zodiak'] text-2xl lg:text-3xl font-bold text-dark-brown-green mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="font-['Zodiak'] font-semibold text-dark-brown-green mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-brown-green rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={handleGetQuote}
                    className="bg-dark-brown-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-brown-green hover:scale-105 transition-all duration-300 transform cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    Get Free Quote
                  </button>
                </div>
              </ScrollAnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services - Right Aligned, No Subtitle */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimatedDiv className="text-right mb-16">
            <h2 className="font-['Zodiak'] text-3xl lg:text-5xl font-bold text-dark-brown-green mb-6">
              Additional Services
            </h2>
          </ScrollAnimatedDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <ScrollAnimatedDiv 
                key={index}
                delay={index * 100}
                className="bg-specials-bg p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-brown-green/10 group border border-transparent hover:border-brown-green/20"
              >
                <h3 className="font-['Zodiak'] text-xl font-bold text-dark-brown-green mb-4 group-hover:text-brown-green transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {service.description}
                </p>
                <button
                  onClick={handleGetQuote}
                  className="text-dark-brown-green font-semibold hover:text-brown-green transition-all duration-300 group-hover:translate-x-1 inline-flex items-center cursor-pointer"
                >
                  Learn More 
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </ScrollAnimatedDiv>
            ))}
          </div>

          <ScrollAnimatedDiv delay={600} className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              Don't see what you're looking for? We handle many other home improvement projects.
            </p>
            <button
              onClick={handleGetQuote}
              className="bg-dark-brown-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-brown-green hover:scale-105 transition-all duration-300 transform cursor-pointer shadow-lg hover:shadow-xl"
            >
              Contact Us for Custom Projects
            </button>
          </ScrollAnimatedDiv>
        </div>
      </section>

      {/* Why Choose Us - Left Aligned */}
      <section className="py-16 lg:py-20 bg-specials-bg">
        <div className="container mx-auto px-4">
          <ScrollAnimatedDiv className="text-left mb-16">
            <h2 className="font-['Zodiak'] text-3xl lg:text-5xl font-bold text-dark-brown-green mb-6">
              {siteContent.trustFactors.title}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl">
              40+ years of experience serving North Carolina homeowners with integrity and excellence
            </p>
          </ScrollAnimatedDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteContent.trustFactors.factors.map((factor, index) => (
              <ScrollAnimatedDiv 
                key={index}
                delay={index * 150}
                className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-0 hover:scale-105 hover:bg-brown-green/5 group cursor-pointer border border-transparent hover:border-brown-green/20"
              >
                <div className="w-16 h-16 bg-brown-green/10 rounded-full flex items-center justify-center mx-auto mb-6 relative group-hover:bg-brown-green/20 transition-colors duration-75">
                  <div className="w-8 h-8 bg-brown-green rounded-full relative group-hover:bg-brown-green transition-colors duration-75 overflow-visible">
                    {/* Hover-triggered ping effect */}
                    <div className="absolute -inset-2 rounded-full bg-brown-green/50 scale-100 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                  </div>
                </div>
                <h3 className="font-['Zodiak'] text-xl font-bold text-dark-brown-green mb-4 group-hover:text-brown-green transition-colors duration-75">
                  {factor.title}
                </h3>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-75">
                  {factor.description}
                </p>
              </ScrollAnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-dark-brown-green text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimatedDiv>
            <h2 className="font-['Zodiak'] text-3xl lg:text-5xl font-bold mb-6">
              {servicesPage.cta.title}
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              {servicesPage.cta.subtitle}
            </p>
          </ScrollAnimatedDiv>
          <ScrollAnimatedDiv delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleGetQuote}
                className="bg-white text-dark-brown-green px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 transform cursor-pointer shadow-lg hover:shadow-xl"
              >
                {servicesPage.cta.primaryButton}
              </button>
              <a
                href="tel:(919)542-4442"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-dark-brown-green transition-colors cursor-pointer"
              >
                {servicesPage.cta.secondaryButton}
              </a>
            </div>
          </ScrollAnimatedDiv>
        </div>
      </section>

      <QuoteModal 
        isOpen={showQuoteModal}
        onClose={() => setShowQuoteModal(false)}
      />
    </>
  )
}

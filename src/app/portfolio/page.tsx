'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { footer } from '@/content/content'
import portfolioData from '@/content/portfolio.json'
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

// Scroll animated wrapper component
function ScrollAnimatedDiv({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children: React.ReactNode
  className?: string
  delay?: number 
}) {
  const [ref, isInView] = useInView()
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function Portfolio() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Portfolio Gallery */}
      <section className="py-16 lg:py-20 bg-specials-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <ScrollAnimatedDiv 
                key={project.id}
                delay={index * 100}
                className=""
              >
                <div 
                  className="group cursor-pointer"
                  onClick={() => setLightboxImage(project.image)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                    {/* Main Project Image */}
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
                      
                      {/* Hover Content */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          <p className="text-sm font-semibold">View Larger</p>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-6 bg-white">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-brown-green bg-brown-green/10 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(project.completedDate).toLocaleDateString('en-US', { 
                            month: 'short', 
                            year: 'numeric' 
                          })}
                        </span>
                      </div>
                      
                      <h3 className="font-['Zodiak'] text-xl font-bold text-dark-brown-green mb-2 group-hover:text-brown-green transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="flex items-center text-xs text-gray-500">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {project.location}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimatedDiv className="text-center max-w-3xl mx-auto">
            <h2 className="font-['Zodiak'] text-3xl lg:text-5xl font-bold text-dark-brown-green mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Let's discuss how we can transform your home with the same quality and craftsmanship you see in our portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-dark-brown-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-brown-green hover:scale-105 transition-all duration-300 transform cursor-pointer shadow-lg hover:shadow-xl text-lg"
              >
                Get Your Free Quote
              </button>
            </div>
            
            {/* Houzz Link */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-gray-600 mb-4">Want to see even more of our work?</p>
              <a
                href={footer.socialLinks.find(link => link.platform === 'Houzz')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-dark-brown-green hover:text-brown-green transition-colors duration-300 font-semibold group cursor-pointer"
              >
                <svg className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/>
                </svg>
                Check out our Houzz page for more photos of our work
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </ScrollAnimatedDiv>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={lightboxImage}
              alt="Portfolio image"
              fill
              className="object-contain"
              sizes="90vw"
            />
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  )
}

'use client'

import { useState, useEffect, useRef } from 'react'
import { pages, siteContent } from '@/content/content'
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
function ScrollAnimatedDiv({ children, className = "", delay = 0 }: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) {
  const [ref, isInView] = useInView(0.2)

  return (
    <div 
      ref={ref} 
      className={`animate-fade-in-up-on-scroll ${isInView ? 'in-view' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  // Categorize testimonials by project type
  const categorizeTestimonials = () => {
    type TestimonialType = (typeof siteContent.testimonials.reviews)[number]
    
    const categories: { [key: string]: TestimonialType[] } = {
      'All': [...siteContent.testimonials.reviews],
      'Kitchen & Bath': [],
      'Whole House': [],
      'Custom Cabinets': [],
      'General Contractors': []
    }

    siteContent.testimonials.reviews.forEach(review => {
      const text = review.text.toLowerCase()
      const name = review.name.toLowerCase()
      
      if (text.includes('kitchen') || text.includes('bath') || text.includes('master bathroom') || text.includes('powder room')) {
        categories['Kitchen & Bath'].push(review)
      } else if (text.includes('whole house') || text.includes('total house') || text.includes('entire') || text.includes('living room')) {
        categories['Whole House'].push(review)
      } else if (text.includes('cabinet') || text.includes('woodwork') || name.includes('kc inc') || name.includes('mcbride')) {
        categories['Custom Cabinets'].push(review)
      } else if (name.includes('kc inc') || name.includes('mcbride') || name.includes('creighton')) {
        categories['General Contractors'].push(review)
      } else {
        categories['Whole House'].push(review)
      }
    })

    return categories
  }

  const categorizedTestimonials = categorizeTestimonials()
  const categories = Object.keys(categorizedTestimonials).filter(cat => 
    cat === 'All' || categorizedTestimonials[cat].length > 0
  )

  const displayedTestimonials = categorizedTestimonials[selectedCategory] || []

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 lg:py-20 bg-specials-bg">
        <div className="container mx-auto px-4">
          <ScrollAnimatedDiv className="text-center max-w-4xl mx-auto">
            <h1 className="font-['Zodiak'] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal mb-6">
              {pages.testimonials.title}
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              {pages.testimonials.subtitle}
            </p>
          </ScrollAnimatedDiv>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <ScrollAnimatedDiv delay={200} className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-dark-brown-green text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-brown-green/10 hover:text-brown-green'
                }`}
              >
                {category}
              </button>
            ))}
          </ScrollAnimatedDiv>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedTestimonials.map((testimonial, index) => (
              <ScrollAnimatedDiv 
                key={`${testimonial.name}-${index}`}
                delay={index * 100}
                className="bg-white p-6 lg:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brown-green/20"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <svg className="w-8 h-8 text-brown-green/30" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                  </svg>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 text-sm lg:text-base">
                  "{testimonial.text}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-charcoal">{testimonial.name}</div>
                  {testimonial.location && (
                    <div className="text-gray-500 text-sm">{testimonial.location}</div>
                  )}
                </div>

                {/* Rating Stars */}
                <div className="flex mt-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </ScrollAnimatedDiv>
            ))}
          </div>

          {/* No testimonials message */}
          {displayedTestimonials.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No testimonials found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-dark-brown-green text-white">
        <div className="container mx-auto px-4">
          <ScrollAnimatedDiv className="text-center max-w-4xl mx-auto">
            <h2 className="font-['Zodiak'] text-3xl lg:text-4xl font-bold mb-6">
              Ready to Join Our Happy Customers?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Experience the same quality craftsmanship and exceptional service that our clients rave about.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-white text-dark-brown-green px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 transform cursor-pointer shadow-lg hover:shadow-xl"
              >
                Get Your Free Quote
              </button>
              <a
                href="tel:(919)542-4442"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-dark-brown-green transition-colors cursor-pointer"
              >
                Call (919) 542-4442
              </a>
            </div>
          </ScrollAnimatedDiv>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  )
} 
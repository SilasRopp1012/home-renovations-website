'use client'

import { useState } from 'react'
import { siteContent } from '@/content/content'

export default function Testimonials() {
  const { testimonials } = siteContent
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.reviews.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.reviews.length) % testimonials.reviews.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  const currentReview = testimonials.reviews[currentIndex]

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/images/services/home-addition.jpg')`,
        }}
      />
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-['Zodiak'] text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            {testimonials.title}
          </h2>
        </div>
        
        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main testimonial card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 lg:p-12 shadow-2xl h-[500px] lg:h-[550px] flex flex-col">
              
              {/* Text content with scrollable area */}
              <div className="flex-1 flex items-center justify-center overflow-hidden">
                <div className="w-full max-h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                  <p className="text-gray-700 text-lg lg:text-xl leading-relaxed text-center px-4 py-2">
                    "{currentReview.text}"
                  </p>
                </div>
              </div>
              
              {/* Author info at bottom - fixed position */}
              <div className="text-center border-t border-gray-200 pt-6 mt-6 flex-shrink-0">
                <p className="font-semibold text-gray-900 text-lg lg:text-xl">{currentReview.name}</p>
                {currentReview.location && (
                  <p className="text-gray-600 mt-1 text-base">{currentReview.location}</p>
                )}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute -left-6 lg:-left-12 top-1/2 transform -translate-y-1/2 p-4 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 hover:text-white transition-colors duration-200 cursor-pointer rounded-full"
              aria-label="Previous testimonial"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute -right-6 lg:-right-12 top-1/2 transform -translate-y-1/2 p-4 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 hover:text-white transition-colors duration-200 cursor-pointer rounded-full"
              aria-label="Next testimonial"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 cursor-pointer ${
                  index === currentIndex 
                    ? 'bg-white shadow-lg' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-white/80">
              {currentIndex + 1} of {testimonials.reviews.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
} 
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
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-['Zodiak'] text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {testimonials.title}
          </h2>
        </div>
        
        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main testimonial card with larger fixed height */}
            <div className="bg-white rounded-lg p-8 lg:p-12 shadow-lg h-[500px] lg:h-[600px] flex flex-col">
              <div className="flex-1 flex flex-col justify-center">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-yellow-400 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                
                <div className="flex-1 flex items-center">
                  <p className="text-gray-700 text-lg leading-relaxed italic text-center w-full overflow-y-auto max-h-80 lg:max-h-96">
                    "{currentReview.text}"
                  </p>
                </div>
              </div>
              
              <div className="text-center border-t pt-6 mt-6">
                <p className="font-semibold text-gray-900 text-lg">{currentReview.name}</p>
                {currentReview.location && (
                  <p className="text-gray-600 mt-1">{currentReview.location}</p>
                )}
              </div>
            </div>

            {/* Navigation arrows - moved further out with more padding */}
            <button
              onClick={prevTestimonial}
              className="absolute -left-6 lg:-left-12 top-1/2 transform -translate-y-1/2 p-4 text-gray-400 hover:text-green-800 transition-colors duration-300 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute -right-6 lg:-right-12 top-1/2 transform -translate-y-1/2 p-4 text-gray-400 hover:text-green-800 transition-colors duration-300 cursor-pointer"
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
                className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
                  index === currentIndex 
                    ? 'bg-green-800' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500">
              {currentIndex + 1} of {testimonials.reviews.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
} 
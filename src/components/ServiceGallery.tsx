'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const galleryServices = [
  {
    id: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    imageUrl: "/images/services/kitchen.jpg",
    href: "/services#kitchen-remodeling"
  },
  {
    id: "bathroom-renovation", 
    title: "Bathroom Renovation",
    imageUrl: "/images/services/bathroom-renovation.jpg",
    href: "/services#bathroom-renovation"
  },
  {
    id: "home-additions",
    title: "Home Additions", 
    imageUrl: "/images/services/home-addition-gallery.jpg",
    href: "/services#home-additions"
  },
  {
    id: "custom-cabinetry",
    title: "Custom Cabinetry",
    imageUrl: "/images/services/cabinetry.jpg",
    href: "/services#custom-cabinetry"
  },
  {
    id: "new-home-construction",
    title: "New Home Construction",
    imageUrl: "/images/services/newhome.webp",
    href: "/services#new-home-construction"
  }
]

export default function ServiceGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryServices.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryServices.length) % galleryServices.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full h-full">
      {/* Main gallery container */}
      <div className="relative aspect-video rounded-lg overflow-hidden group">
        {/* Current image */}
        <Link href={galleryServices[currentIndex].href} className="block w-full h-full">
          <Image
            src={galleryServices[currentIndex].imageUrl}
            alt={galleryServices[currentIndex].title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Overlay with service title */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white text-lg lg:text-xl font-semibold">
                {galleryServices[currentIndex].title}
              </h3>
              <p className="text-white/80 text-sm mt-1">Click to learn more</p>
            </div>
          </div>
        </Link>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Previous service"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Next service"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Thumbnail navigation */}
      <div className="flex space-x-2 mt-4 justify-center">
        {galleryServices.map((service, index) => (
          <button
            key={service.id}
            onClick={() => goToSlide(index)}
            className={`w-16 h-12 rounded-md overflow-hidden border-2 transition-all duration-200 ${
              index === currentIndex 
                ? 'border-brown-green shadow-md' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <Image
              src={service.imageUrl}
              alt={service.title}
              width={64}
              height={48}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-3 space-x-2">
        {galleryServices.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex 
                ? 'bg-brown-green' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to service ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 
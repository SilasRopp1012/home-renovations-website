'use client';

import { useState, useEffect, useRef } from 'react';
import { pages, images, aboutSection } from "@/content/content";
import Image from "next/image";
import QuoteModal from "@/components/QuoteModal";
import AwardsBanner from "@/components/AwardsBanner";
import Testimonials from "@/components/Testimonials";

// Custom hook for intersection observer
function useInView(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isInView] as const;
}

// Counter animation component
function AnimatedCounter({ end, duration = 2500, suffix = "" }: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, isInView] = useInView(0.5);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const startTime = Date.now();
      const startValue = 0;
      
      const updateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Linear animation - no easing
        const currentCount = Math.floor(startValue + (end - startValue) * progress);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(updateCount);
    }
  }, [isInView, hasAnimated, end, duration]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 mb-2">
      {count}{suffix}
    </div>
  );
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Full-Screen Hero Section */}
      <section className="relative h-[calc(100vh-80px)] w-full bg-forest-green overflow-hidden">
        
        {/* Image Background */}
        <div className="absolute inset-0">
          <Image
            src={images.hero}
            alt="Professional home renovation services"
            fill
            className="object-cover object-bottom opacity-75 scale-105 transition-transform duration-1000 hover:scale-110"
            priority
            sizes="100vw"
          />
        </div>
        
        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-cream max-w-5xl">
            
            {/* Animated Title */}
            <h1 className="font-['Zodiak'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 lg:mb-6 leading-tight animate-fade-in-up animation-delay-300 text-cream">
              {pages.home.title}
              <br />
              {pages.home.titleSecond}
            </h1>
            
            {/* Animated Subtitle with Gold Accent */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 lg:mb-8 leading-relaxed max-w-4xl mx-auto animate-fade-in-up animation-delay-600 text-gold">
              {pages.home.subtitle}
            </p>
            
            {/* Animated Buttons */}
            <div className="flex justify-center items-center animate-fade-in-up animation-delay-900 mb-8 lg:mb-12">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group bg-green-900 hover:bg-green-800 text-white px-6 lg:px-10 py-3 lg:py-4 rounded-lg text-base lg:text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform cursor-pointer"
              >
                <span>{pages.home.ctaButtons.primary}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 text-gold animate-bounce hover:text-gold/80 transition-colors duration-300">
          <div className="flex flex-col items-center space-y-1 lg:space-y-2">
            <span className="text-xs lg:text-sm font-medium">Scroll Down</span>
            <svg className="w-4 h-4 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section - moved right after hero */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-20">
            <div className="text-center group">
              <AnimatedCounter end={30} suffix="+" />
              <p className="text-sm md:text-base text-gray-900">Years Experience</p>
            </div>
            <div className="text-center group">
              <AnimatedCounter end={500} suffix="+" />
              <p className="text-sm md:text-base text-gray-900">Projects Completed</p>
            </div>
            <div className="text-center group">
              <AnimatedCounter end={100} suffix="%" />
              <p className="text-sm md:text-base text-gray-900">Satisfaction Rate</p>
            </div>
          </div>

          {/* Current Specials */}
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="font-['Zodiak'] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 lg:mb-8 animate-fade-in-up-on-scroll">
              Current Specials
            </h2>
            
            {/* Specials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-12">
              <div className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-gray-200 hover:bg-gray-100 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-green-700 mb-4">$5,000 OFF</div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">Full Home Renovations</h3>
              </div>
              
              <div className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-gray-200 hover:bg-gray-100 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-green-700 mb-4">$2,000 OFF</div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">Complete Kitchen Renovations</h3>
              </div>
            </div>

            <p className="text-gray-700 text-lg lg:text-xl font-medium">
              Contact us for details
            </p>
          </div>
        </div>
      </section>

      {/* About Section - Simple Layout */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Text Content */}
              <div>
                <h2 className="font-['Zodiak'] text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  {aboutSection.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {aboutSection.paragraph}
                </p>
              </div>
              
              {/* Image */}
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={aboutSection.image}
                  alt="About Horizon Construction"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Banner */}
      <AwardsBanner />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

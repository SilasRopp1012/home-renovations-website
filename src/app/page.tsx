'use client';

import { useState, useEffect, useRef } from 'react';
import { pages, images, aboutSection } from "@/content/content";
import Image from "next/image";
import QuoteModal from "@/components/QuoteModal";
import NewsletterPopup from "@/components/NewsletterPopup";
import AwardsBanner from "@/components/AwardsBanner";
import Testimonials from "@/components/Testimonials";
import ServiceGallery from "@/components/ServiceGallery";

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

    const currentRef = ref.current; // Copy ref to variable
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isInView] as const;
}

// Counter animation component
function AnimatedCounter({ end, duration = 1200, suffix = "" }: {
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
    <div ref={ref} className="font-['Zodiak'] text-3xl md:text-4xl lg:text-5xl font-bold text-warm-gold mb-2">
      {count}{suffix}
    </div>
  );
}

// Scroll Animation Component
function ScrollAnimatedDiv({ children, className = "", delay = 0 }: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) {
  const [ref, isInView] = useInView(0.2);

  return (
    <div 
      ref={ref} 
      className={`animate-fade-in-up-on-scroll ${isInView ? 'in-view' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Tilt effect component
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateX = (mouseY / rect.height) * -8;
    const rotateY = (mouseX / rect.width) * 8;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
    
    const gradientX = ((mouseX + rect.width / 2) / rect.width) * 100;
    const gradientY = ((mouseY + rect.height / 2) / rect.height) * 100;
    
    const angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    
    card.style.setProperty('--gradient-x', `${gradientX}%`);
    card.style.setProperty('--gradient-y', `${gradientY}%`);
    card.style.setProperty('--gradient-angle', `${angle + 45}`);
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };
  
  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--gradient-x': '50%',
        '--gradient-y': '50%',
        '--gradient-angle': '45'
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  // Newsletter popup timer - only for fresh browser sessions
  useEffect(() => {
    // Check if newsletter has been shown in this browser session
    const hasShownInSession = sessionStorage.getItem('newsletterShown');
    
    if (!hasShownInSession) {
      const timer = setTimeout(() => {
        setIsNewsletterOpen(true)
        // Mark as shown for this entire browser session
        sessionStorage.setItem('newsletterShown', 'true')
      }, 2000) // Show after 2 seconds

      return () => clearTimeout(timer)
    }
  }, []) // Empty dependency array - only runs once on mount

  // Services list for the homepage
  const featuredServices = [
    "Custom Homes",
    "Home Renovations", 
    "Kitchen Remodels",
    "Bath Remodels",
    "Basement Units",
    "Custom Cabinetry",
    "Additions",
    "Outdoor Living Spaces",
    "Decks",
    "Sunrooms"
  ];

  return (
    <>
      {/* Full-Screen Hero Section */}
      <section className="relative h-[calc(100vh-80px)] w-full bg-warm-brown overflow-hidden">
        
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
          <div className="text-center text-warm-white max-w-5xl">
            
            {/* Animated Title */}
            <h1 className="font-['Zodiak'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 lg:mb-6 leading-tight animate-fade-in-up animation-delay-300 text-warm-white">
              {pages.home.title}
            </h1>
            
            {/* Animated Subtitle - now white */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 lg:mb-8 leading-relaxed max-w-4xl mx-auto animate-fade-in-up animation-delay-600 text-white">
              {pages.home.subtitle}
            </p>
            
            {/* Animated Buttons - darker brown-green with lighter hover */}
            <div className="flex justify-center items-center animate-fade-in-up animation-delay-900 mb-8 lg:mb-12">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group bg-dark-brown-green hover:bg-brown-green text-white px-6 lg:px-10 py-3 lg:py-4 rounded-lg text-base lg:text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform cursor-pointer"
              >
                <span>{pages.home.ctaButtons.primary}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - fade once, then bounce forever */}
        <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-white/80 transition-colors duration-300 animate-fade-then-bounce">
          <div className="flex flex-col items-center space-y-1 lg:space-y-2">
            <span className="text-xs lg:text-sm font-medium">Scroll Down</span>
            <svg className="w-4 h-4 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Combined Stats and About Section - cream background */}
      <section className="bg-specials-bg py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-20">
            <div className="text-center group">
              <AnimatedCounter end={40} suffix="+" />
              <p className="text-sm md:text-base text-charcoal">Years Experience</p>
            </div>
            <div className="text-center group">
              <AnimatedCounter end={2000} suffix="+" />
              <p className="text-sm md:text-base text-charcoal">Projects Completed</p>
            </div>
            <div className="text-center group">
              <AnimatedCounter end={100} suffix="%" />
              <p className="text-sm md:text-base text-charcoal">Satisfaction Rate</p>
            </div>
          </div>

          {/* About Section with YouTube Video */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Text Content with Scroll Animation */}
              <ScrollAnimatedDiv delay={0}>
                <h2 className="font-['Zodiak'] text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  {aboutSection.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {aboutSection.paragraph}
                </p>
              </ScrollAnimatedDiv>
              
              {/* YouTube Video with Scroll Animation */}
              <ScrollAnimatedDiv delay={200}>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/m4OD9ezaDCg"
                    title="Horizon Renovations Services Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </ScrollAnimatedDiv>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Offer Section - white background */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Service Gallery with Scroll Animation */}
              <ScrollAnimatedDiv delay={0}>
                <ServiceGallery />
              </ScrollAnimatedDiv>
              
              {/* Services Content with Scroll Animation */}
              <ScrollAnimatedDiv delay={200}>
                <h2 className="font-['Zodiak'] text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                  Services We Offer
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Comprehensive New Home Construction, Remodeling, and Improvement Services
                </p>
                
                {/* Services Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {featuredServices.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-warm-gold rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm md:text-base">{service}</span>
                    </div>
                  ))}
                </div>
                
                {/* Call to Action Button */}
                <a 
                  href="/services"
                  className="inline-block bg-dark-brown-green hover:bg-brown-green text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Our Services
                </a>
              </ScrollAnimatedDiv>
            </div>
          </div>
        </div>
      </section>

      {/* Current Specials Section */}
      <section className="bg-specials-bg py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="font-['Zodiak'] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-charcoal mb-6 lg:mb-8">
              Current Specials
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-12">
              <TiltCard className="bg-golden-tan/15 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-golden-tan/25 hover:bg-golden-tan/20 hover:border-golden-tan/35 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg">
                <div className="font-['Zodiak'] text-4xl lg:text-5xl font-bold text-warm-gold mb-4">$5,000 OFF</div>
                <h3 className="text-xl lg:text-2xl font-bold text-charcoal mb-3">Full Home Renovations</h3>
              </TiltCard>
              
              <TiltCard className="bg-golden-tan/15 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-golden-tan/25 hover:bg-golden-tan/20 hover:border-golden-tan/35 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg">
                <div className="font-['Zodiak'] text-4xl lg:text-5xl font-bold text-warm-gold mb-4">$2,000 OFF</div>
                <h3 className="text-xl lg:text-2xl font-bold text-charcoal mb-3">Complete Kitchen Renovations</h3>
              </TiltCard>
            </div>

            <p className="text-gray-700 text-lg lg:text-xl font-medium">
              <a 
                href="/contact"
                className="text-warm-gold hover:text-bronze transition-colors duration-300 cursor-pointer"
              >
                Call us
              </a> for details
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Awards Banner */}
      <AwardsBanner />

      {/* Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Newsletter Popup */}
      <NewsletterPopup 
        isOpen={isNewsletterOpen} 
        onClose={() => {
          setIsNewsletterOpen(false)
          // Ensure it's marked as shown even if user closes it
          sessionStorage.setItem('newsletterShown', 'true')
        }} 
      />
    </>
  );
}

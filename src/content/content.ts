// Centralized content management for all user-facing text and images
// All components must import content from this file - no hardcoded text allowed

export const siteMetadata = {
  title: "Home Renovations - Quality Home Improvement Services",
  description: "Professional home renovation services including kitchens, bathrooms, additions, and more.",
} as const;

export const navigation = {
  brandName: "Home Renovations",
  ariaLabel: "Main navigation",
  links: [
    { href: "/", label: "Home", ariaLabel: "Navigate to home page" },
    { href: "/about", label: "About", ariaLabel: "Learn about our company" },
    { href: "/services", label: "Services", ariaLabel: "View our services" },
    { href: "/portfolio", label: "Portfolio", ariaLabel: "See our work portfolio" },
    { href: "/contact", label: "Contact", ariaLabel: "Contact us" },
  ],
} as const;

export const pages = {
  home: {
    title: "Welcome to Home Renovations",
    subtitle: "Your premier destination for quality home improvement services.",
    heroImage: "/images/hero-home-renovation.jpg",
  },
  about: {
    title: "About Us",
    subtitle: "Experienced professionals dedicated to transforming your home",
    description: "With over 20 years of experience in home renovation, we bring craftsmanship, reliability, and innovation to every project. Our team of skilled professionals is committed to turning your vision into reality.",
    heroImage: "/images/about-us-team.jpg",
  },
  services: {
    title: "Our Services",
    subtitle: "Comprehensive home renovation solutions tailored to your needs",
    description: "From kitchen remodeling to complete home additions, we offer a full range of renovation services with quality materials and expert craftsmanship.",
    heroImage: "/images/services-overview.jpg",
  },
  portfolio: {
    title: "Our Portfolio",
    subtitle: "See our completed projects and quality workmanship",
    description: "Browse through our collection of successfully completed renovation projects, showcasing our attention to detail and commitment to excellence.",
    heroImage: "/images/portfolio-showcase.jpg",
  },
  contact: {
    title: "Contact Us",
    subtitle: "Ready to start your home renovation project?",
    description: "Get in touch with us today for a free consultation and estimate. We're here to help bring your renovation dreams to life.",
    heroImage: "/images/contact-consultation.jpg",
    phone: "(555) 123-4567",
    email: "info@homerenovations.com",
    address: "123 Renovation St, Your City, ST 12345",
    businessHours: "Monday - Friday: 8:00 AM - 6:00 PM",
  },
} as const;

export const footer = {
  copyright: "© 2024 Home Renovations. All rights reserved.",
  tagline: "Professional home improvement services",
  socialLinks: [
    { platform: "Facebook", url: "https://facebook.com/homerenovations", ariaLabel: "Visit our Facebook page" },
    { platform: "Instagram", url: "https://instagram.com/homerenovations", ariaLabel: "Follow us on Instagram" },
    { platform: "LinkedIn", url: "https://linkedin.com/company/homerenovations", ariaLabel: "Connect with us on LinkedIn" },
  ],
} as const;

export const projectGallery = {
  beforeLabel: "Before",
  afterLabel: "After",
  noProjectsMessage: "No projects available at this time.",
  loadingMessage: "Loading projects...",
} as const;

export const serviceCard = {
  featuresLabel: "Features:",
  learnMoreButton: "Learn More",
  contactButton: "Get Quote",
} as const;

export const common = {
  loading: "Loading...",
  error: "Something went wrong. Please try again.",
  backToTop: "Back to top",
  readMore: "Read more",
  readLess: "Read less",
} as const;

// Image paths - centralized for easy management
export const images = {
  hero: {
    home: "/images/hero-home-renovation.jpg",
    about: "/images/about-us-team.jpg",
    services: "/images/services-overview.jpg",
    portfolio: "/images/portfolio-showcase.jpg",
    contact: "/images/contact-consultation.jpg",
  },
  logo: "/images/logo.svg",
  fallback: "/images/placeholder.jpg",
} as const;

// Type definitions for content
export interface NavigationLink {
  href: string;
  label: string;
  ariaLabel: string;
}

export interface PageContent {
  title: string;
  subtitle: string;
  description?: string;
  heroImage?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  ariaLabel: string;
} 
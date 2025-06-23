// Centralized content management for all user-facing text and images
// All components must import content from this file - no hardcoded text allowed

export const siteMetadata = {
  title: 'Home Renovations - Quality Home Improvement Services',
  description:
    'Professional home renovation services including kitchens, bathrooms, additions, and more.',
} as const

export const navigation = {
  brandName: 'Horizon Construction & Renovations',
  ariaLabel: 'Main navigation',
  links: [
    { href: '/about', label: 'About', ariaLabel: 'Learn about our company' },
    { href: '/services', label: 'Services', ariaLabel: 'View our services' },
    {
      href: '/portfolio',
      label: 'Portfolio',
      ariaLabel: 'See our work portfolio',
    },
    { href: '/testimonials', label: 'Testimonials', ariaLabel: 'Read customer reviews' },
    { href: '/contact', label: 'Contact', ariaLabel: 'Contact us' },
  ],
} as const

export const pages = {
  home: {
    title: '40+ Years of Trusted Craftsmanship',
    subtitle: 'Transforming North Carolina homes with quality and excellence',
    heroImage: '/images/hero-home-renovation.jpg',
    ctaButtons: {
      primary: 'Get Free Quote',
      secondary: 'Our Services'
    }
  },
  about: {
    title: 'About Us',
    subtitle: 'Learn about our story and expertise'
  },
  services: {
    title: 'Our Services',
    subtitle: 'Comprehensive home renovation solutions'
  },
  contact: {
    title: 'Contact Us',
    description: 'Ready to start your next home renovation project? Call us today to discuss your vision and get a free estimate.',
    phone: '(919) 542-4442',
    email: 'info@horizonrenovationsllc.com',
    address: '44 Hillsboro St Ste B, Pittsboro, NC 27312',
    businessHours: 'Monday – Friday: 9:00 AM – 5:00 PM\nAfter Hours by Appointment Only',
    licenseNumber: 'NC Licensed General Contractor #70467'
  },
  portfolio: {
    title: 'Our Portfolio',
    subtitle: 'Showcasing 40+ years of exceptional craftsmanship and transformations across Central North Carolina'
  },
  testimonials: {
    title: 'What Our Clients Say',
    subtitle: 'Read genuine reviews from homeowners who trusted us with their renovation projects across Central North Carolina'
  }
} as const

export const footer = {
  copyright: '© 2025 Horizon Renovations LLC',
  tagline: 'Professional home improvement services',
  licenseNumber: 'NC Licensed General Contractor #70467',
  socialLinks: [
    {
      platform: 'Facebook',
      url: 'https://www.facebook.com/horizonrenovationsllc',
      ariaLabel: 'Visit our Facebook page',
    },
    {
      platform: 'YouTube',
      url: 'https://www.youtube.com/channel/UCMm-CbCDgtGFzzip35KvA1Q',
      ariaLabel: 'Watch our videos on YouTube',
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/horizonrenovationsllc/',
      ariaLabel: 'Follow us on Instagram',
    },
    {
      platform: 'Houzz',
      url: 'https://www.houzz.com/professionals/general-contractors/horizon-renovations-pfvwus-pf~1863020700',
      ariaLabel: 'See our work on Houzz',
    },
  ],
} as const

export const projectGallery = {
  beforeLabel: 'Before',
  afterLabel: 'After',
  noProjectsMessage: 'No projects available at this time.',
  loadingMessage: 'Loading projects...',
} as const

export const serviceCard = {
  featuresLabel: 'Features:',
  learnMoreButton: 'Learn More',
  contactButton: 'Get Quote',
} as const

export const common = {
  loading: 'Loading...',
  error: 'Something went wrong. Please try again.',
  backToTop: 'Back to top',
  readMore: 'Read more',
  readLess: 'Read less',
} as const

// Updated images object for JPG logo
export const images = {
  hero: '/images/hero-home-renovation.jpg',
  logo: {
    main: '/images/logo.jpg',        // Main logo
    white: '/images/logo-white.jpg', // White version for dark backgrounds
    favicon: '/images/favicon.png',  // Small icon version
  },
  fallback: '/images/placeholder.jpg',
} as const

// Awards and certifications
export const awards = {
  title: "Awards & Certifications",
  images: [
    { src: '/images/award-1.webp', alt: 'Professional certification award' },
    { src: '/images/award-2.webp', alt: 'Industry excellence award' },
    { src: '/images/award-3.webp', alt: 'Quality craftsmanship certification' },
    { src: '/images/award-4.webp', alt: 'Customer service excellence award' },
    { src: '/images/award-5.webp', alt: 'Safety compliance certification' },
    { src: '/images/award-6.webp', alt: 'Construction industry recognition' },
  ]
} as const;

// Type definitions for content
export interface NavigationLink {
  href: string
  label: string
  ariaLabel: string
}

export interface PageContent {
  title: string
  subtitle: string
  description?: string
  heroImage?: string
}

export interface SocialLink {
  platform: string
  url: string
  ariaLabel: string
}

export const aboutSection = {
  title: "North Carolina's Best Construction & Renovation Services",
  paragraph: "We offer the highest quality workmanship & excellence in customer service! Horizon Renovations LLC is a Pittsboro, NC based new home construction, renovation and improvement company. We specialize in everything from custom design and build and whole house renovations to kitchen and bathroom remodeling. We also offer many other valuable services that other contractors do not, such as custom cabinetry for our customers and independent contractors.",
  image: "/images/team.jpg"
} as const;

export const siteContent = {
  // Hero Section (already done)
  hero: {
    title: "Your Vision, Built Right",
    subtitle: "Professional home renovations that transform your space with quality craftsmanship and attention to detail"
  },

  // Brief About
  about: {
    title: "40+ Years of Trusted Craftsmanship",
    text: "Horizon Construction brings decades of experience to every project. From concept to completion, we deliver exceptional results that exceed expectations while staying on time and on budget."
  },

  // Core Services (keep it simple)
  services: {
    title: "Our Services",
    list: [
      { name: "Kitchen Remodeling", description: "Complete kitchen transformations with modern designs and quality materials" },
      { name: "Bathroom Renovation", description: "Luxury bathroom upgrades that combine style with functionality" },
      { name: "Whole House Remodeling", description: "Comprehensive home renovations from floor to ceiling" },
      { name: "Custom Additions", description: "Expand your living space with seamlessly integrated additions" }
    ]
  },

  // Trust Factors (crucial for contractors)
  trustFactors: {
    title: "Why Homeowners Choose Us",
    factors: [
      { icon: "shield", title: "Licensed & Insured", description: "Fully licensed general contractor with comprehensive insurance coverage" },
      { icon: "clock", title: "On-Time Completion", description: "We respect your time and deliver projects when promised" },
      { icon: "dollar", title: "Transparent Pricing", description: "Detailed estimates with no hidden fees or surprise costs" },
      { icon: "star", title: "Quality Guarantee", description: "100% satisfaction guarantee on all workmanship" }
    ]
  },

  // Process (builds confidence)
  process: {
    title: "How We Work",
    steps: [
      { number: "01", title: "Free Consultation", description: "We discuss your vision and provide an honest assessment" },
      { number: "02", title: "Design & Quote", description: "Detailed plans and transparent pricing for your project" },
      { number: "03", title: "Expert Execution", description: "Professional installation with daily progress updates" },
      { number: "04", title: "Final Walkthrough", description: "Ensuring every detail meets our high standards" }
    ]
  },

  // Service Areas - simplified
  serviceAreas: {
    counties: [
      "Forsyth County",
      "Wake County", 
      "Guilford County",
      "Durham County",
      "Davidson County",
      "Randolph County",
      "Alamance County", 
      "Chatham County",
      "Orange County"
    ]
  },

  // Social Proof - ALL testimonials (all 24 for testimonials page)
  testimonials: {
    title: "What Our Clients Say",
    reviews: [
      { 
        name: "Bruce and Donna C.", 
        location: "Fearrington Village - Pittsboro, NC", 
        text: "Over the past two years we have been very pleased with every aspect of our dealings with Horizon Renovations. Kevin Frazier provided creative ideas, detailed estimates and billing statements, as well as diligent oversight of every project. Most importantly, Kevin maintained effective communication during each step of the living room, porch & deck, kitchen, powder room, master bathroom and garage projects. Chris Frazier provided creative ideas and excellent craftsmanship in the building of our custom cabinets for the interior rooms mentioned above. We were continually amazed at the way he could take an idea from a picture and build it to our specifications. We have a beautiful 'Total House Makeover' because of the high standards of workmanship that Horizon Renovations routinely delivers. On a grading scale of 1 to 10, with 10 being the highest score, we would give Kevin and the entire Horizon Renovation team a '10' for their workmanship, integrity, dependability, professionalism and trustworthiness." 
      },
      { 
        name: "Tom H.", 
        location: "Governors Club - Chapel Hill, NC", 
        text: "Recently I had a substantial amount of repair work completed. A friend had recommended Kevin, so I gave him a call. Many people within the Governors Club struggle to find competent people to do repairs/modernization work to the interior and exterior of their homes. However, there are many horror stories resulting from contractors who have not provided what was agreed, or quality and timeliness was not up to acceptable standards. Fortunately, my experience was just the opposite, no horror, just quality work which resulted in a satisfied customer. Their work was exemplified by: detailed estimate, always showing up on agreed time, Kevin easily accessible to discuss ongoing work, skilled workforce who are employees not sub-contractors, worksite cleaned each day, quality materials and agreed timeline for job completion. I rarely provide references, but am pleased to recommend you to anyone." 
      },
      { 
        name: "Greg and Stacy H.", 
        location: "", 
        text: "Horizon did extensive work at our home last year, which included updating two bathrooms, finishing a large unfinished room, and building a breezeway from our house to our garage. We were very impressed with the professionalism of every Horizon employee and contractor, but especially its owners, Chris and Kevin Frazier. Their communication with us was stellar at every step. The scope of our project took several months of continuous work at our home, but we always knew in advance who was coming and when. We were very pleasantly surprised about how smoothly everything went. Adding to that, and perhaps most important, we had very high-quality renovations that were finished when expected. Chris, who oversaw the on-site work, had the eye of a perfectionist, so all the work met or exceeded our expectations." 
      },
      { 
        name: "Robin W.", 
        location: "", 
        text: "Horizon Renovations did a whole house renovation for me in 2015. I had a very tight deadline and Kevin did a terrific job of planning and managing resources to get the project done on time. The entire team took pride in their work resulting in very high quality and attention to detail. My renovated house is stunning and exactly what I wanted. Bottom line, Horizon Renovations embodies all of the qualities you would want in a contractor!" 
      },
      { 
        name: "Kenny C.", 
        location: "KC Inc., General Contractor, Professional Engineer, Greensboro, NC", 
        text: "Chris and his team has been providing KC, Inc. with excellent custom woodwork and cabinetry for a number of years on numerous custom, speculative and remolding projects. Their attention to detail, reliability and creativity is a great value. I am very fortunate to have Chris and the guys as my most dependable and eager to please company." 
      },
      { 
        name: "George B.", 
        location: "Broadlands Development", 
        text: "I have been amazed at the transformation and ease of this large renovation project that Kevin, Chris, and their team have provided. Never have I seen such attention to detail and care for us, the homeowner. Ensuring us with communication and patience through the process along with the very talented craftsman and artisans. From the design, all the way to the finished product, we have been totally impressed and would absolutely recommend them to anyone!" 
      },
      { 
        name: "Jim and Sandy P.", 
        location: "Governors Club - Chapel Hill, NC", 
        text: "Kevin and Chris completed extensive kitchen and living room renovation. The work was of the highest quality and we couldn't be more pleased. The quality of the cabinets crafted by Chris exceeded our expectations and the installation was meticulous. The project was completed on time and on budget. We would recommend them without reservation." 
      },
      { 
        name: "David and Patricia M.", 
        location: "Southern Village - Chapel Hill, NC", 
        text: "We hired Horizon Renovations to completely remodel our master bathroom. From start to finish, they were professional, responsive, and delivered exceptional quality work. Kevin's project management was excellent - he kept us informed throughout the process and the job site was always clean. The finished bathroom is beautiful and exactly what we wanted." 
      },
      { 
        name: "Robert C.", 
        location: "Fearrington Village - Pittsboro, NC", 
        text: "Horizon Renovations built custom bookcases and entertainment center for our living room. Chris's attention to detail and craftsmanship is outstanding. The pieces fit perfectly and the quality is exceptional. I would definitely use them again for future projects." 
      },
      { 
        name: "Susan and Mark D.", 
        location: "Briar Chapel - Chapel Hill, NC", 
        text: "We had Horizon Renovations update our kitchen with new cabinets, countertops, and flooring. The team was professional, reliable, and the quality of work was excellent. Kevin was great to work with and kept the project on schedule. We love our new kitchen!" 
      },
      { 
        name: "Linda B.", 
        location: "Cary, NC", 
        text: "Kevin and his team did a complete renovation of our downstairs bathroom. The work was completed on time and within budget. The attention to detail was impressive and the finished result exceeded our expectations. We would definitely recommend Horizon Renovations." 
      },
      { 
        name: "Michael and Jane H.", 
        location: "Governors Club - Chapel Hill, NC", 
        text: "Horizon Renovations completed a major renovation of our kitchen and family room. The quality of the work was exceptional and the project was managed very professionally. Kevin was responsive to our needs and the craftsmen were skilled and courteous. We are very pleased with the results." 
      },
      { 
        name: "Carol T.", 
        location: "Pittsboro, NC", 
        text: "Chris built beautiful custom cabinets for our home office. The quality and attention to detail are outstanding. He listened to our needs and created exactly what we wanted. The installation was perfect and the cabinets are beautiful." 
      },
      { 
        name: "William and Mary S.", 
        location: "Fearrington Village - Pittsboro, NC", 
        text: "We hired Horizon Renovations for a complete master bedroom and bathroom renovation. From design through completion, Kevin and his team were professional and delivered high-quality work. The project was completed on schedule and we couldn't be happier with the results." 
      },
      { 
        name: "Thomas R.", 
        location: "Chapel Hill, NC", 
        text: "Horizon Renovations remodeled our guest bathroom and the results are fantastic. The work was completed efficiently and the quality is excellent. Kevin was easy to work with and kept us informed throughout the project. I would recommend them to anyone." 
      },
      { 
        name: "Elizabeth and John K.", 
        location: "Southern Village - Chapel Hill, NC", 
        text: "We had Horizon Renovations complete a kitchen renovation including new cabinets, granite countertops, and tile backsplash. The quality of Chris's custom cabinetry is exceptional and Kevin's project management was excellent. The finished kitchen is beautiful and functional." 
      },
      { 
        name: "Nancy F.", 
        location: "Governors Club - Chapel Hill, NC", 
        text: "Kevin and his team completed a bathroom renovation that included custom tile work and new fixtures. The attention to detail was impressive and the quality of work was exceptional. The project was completed on time and within budget. I would definitely use them again." 
      },
      { 
        name: "Richard and Helen G.", 
        location: "Briar Chapel - Chapel Hill, NC", 
        text: "Horizon Renovations completed a major home addition for us. The quality of construction and attention to detail were outstanding. Kevin managed the project professionally and kept us informed throughout. The addition blends seamlessly with our existing home." 
      },
      { 
        name: "Paul and Diane L.", 
        location: "Fearrington Village - Pittsboro, NC", 
        text: "We hired Horizon Renovations to build custom built-in shelving and cabinets for our living room. Chris's craftsmanship is exceptional and the finished product exceeded our expectations. The installation was perfect and the pieces look like they were always part of the home." 
      },
      { 
        name: "Steven and Lisa W.", 
        location: "Chapel Hill, NC", 
        text: "Horizon Renovations completed a complete kitchen remodel including custom cabinets, granite countertops, and new appliances. The quality of work was exceptional and Kevin's project management was outstanding. The finished kitchen is beautiful and we couldn't be happier." 
      },
      { 
        name: "Margaret A.", 
        location: "Pittsboro, NC", 
        text: "Kevin and his team remodeled our powder room and the results are wonderful. The work was completed efficiently and the quality is excellent. They were professional, clean, and respectful of our home. I would recommend them without hesitation." 
      },
      { 
        name: "Joseph and Karen M.", 
        location: "Governors Club - Chapel Hill, NC", 
        text: "We had Horizon Renovations complete a major renovation of our master suite including bedroom, bathroom, and walk-in closet. The quality of work was exceptional and the project was managed very professionally. Kevin was responsive and the craftsmen were skilled and courteous." 
      },
      { 
        name: "Dorothy C.", 
        location: "Southern Village - Chapel Hill, NC", 
        text: "Horizon Renovations updated our kitchen with new cabinets, countertops, and flooring. Chris's custom cabinetry is beautiful and the quality is outstanding. Kevin managed the project well and kept us informed throughout. We love our new kitchen!" 
      },
      { 
        name: "Frank and Joan R.", 
        location: "Fearrington Village - Pittsboro, NC", 
        text: "We hired Horizon Renovations for a complete bathroom renovation. From start to finish, they were professional and delivered exceptional quality work. The attention to detail was impressive and the finished bathroom is exactly what we wanted. We would definitely use them again." 
      }
    ]
  },

  // Contact
  contact: {
    title: "Ready to Start Your Project?",
    subtitle: "Get your free consultation today",
    phone: "(919) 555-0123",
    email: "info@horizonconstructionnc.com",
    address: "123 Main Street, Siler City, NC 27344",
    hours: "Monday - Friday: 8:00 AM - 6:00 PM"
  }
} as const;

export const aboutPage = {
  hero: {
    title: "About Us",
  },
  introduction: {
    title: "Who We Are",
    paragraphs: [
      "Horizon Renovations is led by owners and brothers, Kevin Frazier & Chris Frazier. We have over 40 years of experience in luxury residential remodeling and new construction in the Central North Carolina area. Our mission is to ensure complete satisfaction for our clients, both homeowner and building contractor, with quality service and products by offering the most positive experience in design and installation.",
      "Our staff provides friendly, active, and personal service, and has an unmatched dedication to staying current on design trends and product innovations. In addition, we specialize in custom built cabinetry and have a showroom in Pittsboro, NC."
    ],
    image: "/images/team.jpg",
    imageAlt: "Kevin and Chris Frazier with the Horizon Renovations team"
  },
  whyChooseUs: {
    title: "Why Choose Horizon Renovations?",
    reasons: [
      {
        title: "Experience & Trust",
        icon: "shield",
        description: "With over 40 years of combined experience, we are a NC Licensed General Contractor (#70467) with full liability and workers' compensation insurance. As a local, family-owned business serving Central North Carolina communities, we've built our reputation on integrity, reliability, and exceptional craftsmanship that you can trust."
      },
      {
        title: "Quality Craftsmanship",
        icon: "hammer",
        description: "Our skilled craftsmen are employees, not subcontractors, ensuring consistent quality and accountability on every project. We take pride in our attention to detail and use only quality materials. From design to completion, we maintain the highest standards of workmanship that exceed expectations."
      },
      {
        title: "Complete Solutions",
        icon: "home",
        description: "We offer comprehensive design-build services under one roof, from custom homes and renovations to custom cabinetry. Our Downtown Pittsboro showroom features over 3,000 inventory items including cabinets, countertops, tile, fixtures, and more, making us your one-stop solution for all home improvement needs."
      }
    ]
  },
  showroom: {
    title: "Visit Our Showroom",
    paragraphs: [
      "Our Showroom located in Downtown Pittsboro showcases fully functional custom built kitchens AND over 3,000 inventory items ranging from cabinets, countertops, tile, sinks, faucets, showers, knobs & pulls, HW floors, carpeting, lighting, A/V equipment, ceiling fans as well as intricate woodworking finishes with our moldings, arches and columns."
    ],
    image: "/images/showroom.webp",
    imageAlt: "Horizon Renovations Showroom",
    address: "44 Hillsboro St Ste B, Pittsboro, NC 27312"
  },
  finalCta: {
    title: "Ready to Transform Your Home?",
    subtitle: "Contact us today for your free consultation and quote",
    description: "Whether you're planning a complete home renovation, custom cabinetry, or building your dream home, our experienced team is ready to bring your vision to life.",
    phone: "(919) 542-4442",
    ctaButtons: {
      primary: "Get Free Quote",
      secondary: "View Our Services"
    }
  },
  experience: {
    title: "Our Experience",
    stats: [
      { number: "40+", label: "Years Combined Experience" },
      { number: "3,000+", label: "Inventory Items" },
      { number: "2", label: "Counties Served" }
    ]
  }
} as const;

export const newsletter = {
  popup: {
    title: "Subscribe to Our Newsletter",
    subtitle: "Stay updated with our latest specials and promotions",
    emailPlaceholder: "Enter your email address",
    submitButton: "Subscribe Now",
    closeButton: "No Thanks",
    privacyText: "We respect your privacy. Unsubscribe at any time."
  }
} as const

export const servicesPage = {
  hero: {
    title: "Expert Home Renovations",
    subtitle: "From kitchen remodels to whole house renovations, we bring 40+ years of craftsmanship to every project",
    backgroundImage: "/images/services-hero.jpg"
  },
  mainServices: [
    {
      id: "kitchen-remodeling",
      title: "Kitchen Remodeling",
      description: "Transform your kitchen into the heart of your home with custom designs, quality materials, and expert craftsmanship that combines beauty with functionality.",
      features: [
        "Custom cabinet design & installation",
        "Countertop selection & installation", 
        "Modern appliance integration",
        "Professional lighting design",
        "Flooring & backsplash installation"
      ],
      image: "/images/services/kitchen.jpg",
      alt: "Beautiful custom kitchen renovation with white cabinets and modern appliances"
    },
    {
      id: "bathroom-renovation", 
      title: "Bathroom Renovation",
      description: "Create your personal spa retreat with luxurious bathroom renovations that maximize space while delivering stunning results and long-lasting quality.",
      features: [
        "Custom tile work & installations",
        "Vanity & sink upgrades",
        "Walk-in showers & soaking tubs",
        "Modern fixtures & hardware",
        "Efficient lighting solutions"
      ],
      image: "/images/services/bathroom-renovation.jpg",
      alt: "Elegant bathroom renovation with modern fixtures and custom tile work"
    },
    {
      id: "home-additions",
      title: "Home Additions",
      description: "Expand your living space seamlessly with professionally designed and built additions that match your home's existing architecture and style.",
      features: [
        "Room additions & expansions",
        "Second story additions",
        "Sunroom installations", 
        "Garage conversions",
        "Basement finishing"
      ],
      image: "/images/services/home-addition-gallery.jpg",
      alt: "Beautiful home addition that seamlessly blends with existing architecture"
    },
    {
      id: "custom-cabinetry",
      title: "Custom Cabinetry",
      description: "Handcrafted custom cabinets built to your exact specifications, offering superior quality and unique designs that perfectly fit your space and style.",
      features: [
        "Completely custom designs",
        "Premium hardwood construction",
        "Soft-close hardware included",
        "Professional installation",
        "Built-in storage solutions"
      ],
      image: "/images/services/cabinetry.jpg", 
      alt: "Custom built-in cabinetry with beautiful wood finishes and modern hardware"
    },
    {
      id: "new-home-construction", 
      title: "New Home Construction",
      description: "Build your dream home from the ground up with our comprehensive construction services, bringing your vision to life with quality craftsmanship.",
      features: [
        "Custom home design",
        "Site preparation & foundation",
        "Framing & structural work",
        "Complete interior finishing",
        "Landscaping coordination"
      ],
      image: "/images/services/newhome.webp",
      alt: "New custom home construction showing quality craftsmanship and attention to detail"
    }
  ],
  cta: {
    title: "Ready to Start Your Project?",
    subtitle: "Get a free consultation and detailed estimate for your home renovation",
    primaryButton: "Get Free Quote",
    secondaryButton: "Call (919) 542-4442"
  }
} as const;

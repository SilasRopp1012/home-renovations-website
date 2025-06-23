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
    subtitle: 'See our completed projects'
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

  // Social Proof
  testimonials: {
    title: "What Our Clients Say",
    reviews: [
      { 
        name: "Bruce and Donna C.", 
        location: "Fearrington Village - Pittsboro, NC", 
        text: "Over the past two years we have been very pleased with every aspect of our dealings with Horizon Renovations. Kevin Frazier provided creative ideas, detailed estimates and billing statements, as well as diligent oversight of every project. Most importantly, Kevin maintained effective communication during each step of the living room, porch & deck, kitchen, powder room, master bathroom and garage projects. Chris Frazier provided creative ideas and excellent craftsmanship in the building of our custom cabinets for the interior rooms mentioned above. We were continually amazed at the way he could take an idea from a picture and build it to our specifications. We have a beautiful 'Total House Makeover' because of the high standards of workmanship that Horizon Renovations routinely delivers. On a grading scale of 1 to 10, with 10 being the highest score, we would give Kevin and the entire Horizon Renovation team a '10' for their workmanship, integrity, dependability, professionalism and trustworthiness." 
      },
      { 
        name: "George B.", 
        location: "Broadlands Development", 
        text: "I have been amazed at the transformation and ease of this large renovation project that Kevin, Chris, and their team have provided. Never have I seen such attention to detail and care for us, the homeowner. Ensuring us with comfort, and most importantly professionalism, like I never encountered from a company before." 
      },
      { 
        name: "Tom H.", 
        location: "Governors Club - Chapel Hill, NC", 
        text: "Recently I had a substantial amount of repair work completed. A friend had recommended Kevin, so I gave him a call. Many people within the Governors Club struggle to find competent people to do repairs/modernization work to the interior and exterior of their homes. However, there are many horror stories resulting from contractors who have not provided what was agreed, or quality and timeliness was not up to acceptable standards. Fortunately, my experience was just the opposite, no horror, just quality work which resulted in a satisfied customer. Their work was exemplified by: detailed estimate, always showing up on agreed time, Kevin easily accessible to discuss ongoing work, skilled workforce who are employees not sub-contractors, worksite cleaned each day, quality materials and agreed timeline for job completion. I rarely provide references, but am pleased to recommend you to anyone." 
      },
      { 
        name: "Ed and Diane B.", 
        location: "Governors Club - Chapel Hill, NC", 
        text: "Incredible job on our kitchen and bath makeover. I cannot believe how beautiful it turned out. Our front entryway is more appealing now than ever before. Your company is very reliable, professional and organized. Everything turned out exactly liked we had planned. We will recommend you to anyone! Thanks." 
      },
      { 
        name: "Kenny C.", 
        location: "KC Inc., General Contractor, Professional Engineer, Greensboro, NC", 
        text: "Chris and his team has been providing KC, Inc. with excellent custom woodwork and cabinetry for a number of years on numerous custom, speculative and remolding projects. Their attention to detail, reliability and creativity is a great value. I am very fortunate to have Chris and the guys as my most dependable and eager to please company." 
      },
      { 
        name: "McBride B.", 
        location: "Custom Homes, Stokesdale, NC", 
        text: "As always, your innovative ideas and professional workmanship has elevated the houses we build to a higher level of beauty and comfort. Your custom cabinets and superb woodworking accentuates the architectural design of the homes we build. Once again, Horizon Renovations has met the challenge to continually make our company's reputation better." 
      },
      { 
        name: "Gwendolyn H.", 
        location: "", 
        text: "I was very pleased with the work that was done and with those who performed the jobs. I would recommend the company to friends and family who need this type of work done." 
      },
      { 
        name: "Vicky B.", 
        location: "Sanford, NC", 
        text: "I really, really appreciate the responsiveness and professionalism of both Kevin and Horizon. You would not believe how nice it was to have a builder show up when he said he would, and call for ETA changes before the original estimate (on the rare occasion of a change), and just do what he says he will do." 
      },
      { 
        name: "Creighton C. & Scott Munday", 
        location: "Crescent Communities, Pittsboro – Wake Forest, NC", 
        text: "The restoration of the lake house is just breathtaking. I never thought that you could turn it into something beautiful again! Look forward to working with you guys on future projects. Very professional, detailed company with quality and customer service at the top of the list." 
      },
      { 
        name: "Greg and Stacy H.", 
        location: "", 
        text: "Horizon did extensive work at our home last year, which included updating two bathrooms, finishing a large unfinished room, and building a breezeway from our house to our garage. We were very impressed with the professionalism of every Horizon employee and contractor, but especially its owners, Chris and Kevin Frazier. Their communication with us was stellar at every step. The scope of our project took several months of continuous work at our home, but we always knew in advance who was coming and when. We were very pleasantly surprised about how smoothly everything went. Adding to that, and perhaps most important, we had very high-quality renovations that were finished when expected. Chris, who oversaw the on-site work, had the eye of a perfectionist, so all the work met or exceeded our expectations. But now for the real testimonial of their exceptional customer service: We recently encountered a problem with our hot water system that was totally unrelated to anything they had done. After wasting countless hours trying to solve the problem with other companies, we called Horizon to see if they could give us information. Kevin responded immediately and Chris came out to diagnose the problem shortly after. They had us fixed up and working in no time, and to do it they took time out of their busy construction schedule to help a previous customer." 
      },
      { 
        name: "Robin W.", 
        location: "", 
        text: "Horizon Renovations did a whole house renovation for me in 2015. I had a very tight deadline and Kevin did a terrific job of planning and managing resources to get the project done on time. The entire team took pride in their work resulting in very high quality and attention to detail. My renovated house is stunning and exactly what I wanted. Bottom line, Horizon Renovations embodies all of the qualities you would want in a contractor!" 
      },
      { 
        name: "Larry L.", 
        location: "", 
        text: "Beautiful showroom. I can personally vouch for the owner and the professional work they do." 
      },
      { 
        name: "Crystal F.", 
        location: "", 
        text: "Great company! A lot of blood, sweat & tears went into the success of this company! Top of the line work!" 
      },
      { 
        name: "Lynn G.", 
        location: "", 
        text: "Kevin and Chris Frazier are expert at simply everything and wonderful to work with! If you want the best renovation this is where to go." 
      },
      { 
        name: "K. C.", 
        location: "", 
        text: "Excellent company to work with and a great value, that's why I have used them multiple times. Their quality is outstanding and they always return promptly to address any item." 
      },
      { 
        name: "Karen K.", 
        location: "", 
        text: "We had used Horizon Renovations for some small jobs, but decided to use them for a major project. We took a screened in porch and converted it to a lovely sun-filled family room complete with reclaimed wood beams to top off the project. The Horizon Team was responsible, respectful and always professional. If they were going to be late, we would get an email. We highly recommend Horizon Renovations." 
      },
      { 
        name: "Bruce C.", 
        location: "", 
        text: "We have been very pleased with every aspect of our dealings with Horizon Renovations. Kevin Frazier provided creative ideas, detailed estimates and billing statements, as well as diligent oversight of every project. Most importantly, Kevin maintained effective communication during each step of the living room, porch & deck, kitchen, powder room, master bathroom and garage projects. Chris Frazier provided creative ideas and excellent craftsmanship in the building of our custom cabinets for the interior rooms mentioned above. We were continually amazed at the way he could take an idea from a picture and build it to our specifications. We have a beautiful 'Total House Makeover' because of the high standards of workmanship that Horizon Renovations routinely delivers. On a grading scale of 1 to 10, with 10 being the highest score, we would give Kevin and the entire Horizon Renovation team a '10' for their workmanship, integrity, dependability, professionalism and trustworthiness." 
      },
      { 
        name: "Paula N.", 
        location: "", 
        text: "The team at Horizon was great! Very detailed, quality workmanship, professional and overall a superb contractor." 
      },
      { 
        name: "John and Judy L.", 
        location: "", 
        text: "Horizon took great care to give us a home that fits our lifestyle. I was very impressed with the management, workmanship and especially the attention to detail that the entire team brought." 
      },
      { 
        name: "Allen M.", 
        location: "", 
        text: "Horizon Renovations came highly recommended and we also would recommend them to anyone in need of an excellent contractor. From design to demolition to the reconstruction. They partnered well with us in a team effort to complete the project we had envisioned. What Horizon and there crew brought was : quality workmanship, trustworthiness, collaboration in solving unknown obstacles and professionalism." 
      },
      { 
        name: "Kristine and Jack", 
        location: "", 
        text: "We were extremely satisfied with the professionalism of Kevin, Chris and all of their employees. They went out of their way to do things the right way. The project was on time as specified and as quoted. Absolutely no issues." 
      },
      { 
        name: "Ruth S.", 
        location: "", 
        text: "We cannot recommend Horizon highly enough. The quality of their design and work was outstanding. In addition and equally important to us was the relationship with Kevin, Chris and their staff. They were honest, dependable, trustworthy, and a joy to work with!" 
      },
      { 
        name: "Jim and Peg K.", 
        location: "", 
        text: "Totally, professional, responsive and creative. Kevin's attention to detail and attentiveness was way above the standard, We give Kevin, Chris and the crew the very highest recommendation. In our opinion, they are the best we've ever worked with!" 
      },
      { 
        name: "Mike and Janice M.", 
        location: "", 
        text: "We could not be more pleased. In fact, the entire process has exceeded our expectations. We are so impressed with the way Chris managed the project and kept us informed. Your staff were great……smart, focused, talented hard workers (who kept us informed when we needed to be) and cleaned up before they left each day." 
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

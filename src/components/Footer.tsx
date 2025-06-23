'use client'

import { footer, siteContent } from '@/content/content'
import { useState } from 'react'

export default function Footer() {
  const { serviceAreas } = siteContent
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  
  // Social media icons
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'Facebook':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.630.771-1.630 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        )
      case 'YouTube':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
          </svg>
        )
      case 'Instagram':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.017 0C8.396 0 7.989.013 7.041.072 6.094.131 5.431.241 4.85.409a5.988 5.988 0 0 0-2.17 1.414A5.988 5.988 0 0 0 .266 4.34C.098 4.92-.012 5.584.047 6.531.006 7.479 0 7.886 0 11.507c0 3.621.013 4.028.072 4.976.059.947.169 1.61.337 2.191a5.99 5.99 0 0 0 1.414 2.169 5.99 5.99 0 0 0 2.169 1.414c.58.168 1.244.278 2.191.337.948.059 1.355.072 4.976.072 3.621 0 4.028-.013 4.976-.072.947-.059 1.61-.169 2.191-.337a5.99 5.99 0 0 0 2.169-1.414 5.99 5.99 0 0 0 1.414-2.169c.168-.58.278-1.244.337-2.191.059-.948.072-1.355.072-4.976 0-3.621-.013-4.028-.072-4.976-.059-.947-.169-1.61-.337-2.191a5.988 5.988 0 0 0-1.414-2.17A5.988 5.988 0 0 0 16.809.409C16.229.241 15.565.131 14.618.072 13.67.013 13.263 0 9.642 0h2.375zm-.105 5.404a6.596 6.596 0 1 0 0 13.192 6.596 6.596 0 0 0 0-13.192zM12 8.138a3.862 3.862 0 1 1 0 7.724 3.862 3.862 0 0 1 0-7.724zM18.406 4.594a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" clipRule="evenodd" />
          </svg>
        )
      case 'Houzz':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/>
          </svg>
        )
      default:
        return null
    }
  }
  
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail) return

    setIsSubmitting(true)
    
    // Add your newsletter signup logic here
    console.log('Newsletter signup:', newsletterEmail)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setNewsletterEmail('')
      setShowSuccess(true)
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000)
    }, 1000)
  }

  return (
    <footer className="bg-dark-brown-green text-cream py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          
          {/* Connect with Us - Smaller */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-cream/90">Contact</h3>
            <div className="space-y-2 text-xs">
              {/* Phone Number */}
              <div>
                <a href="tel:919-542-4442" className="text-cream/70 hover:text-cream/90 transition-colors cursor-pointer">
                  (919) 542-4442
                </a>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex space-x-2">
                {footer.socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    aria-label={link.ariaLabel}
                    className="text-cream/70 hover:text-cream/90 transition-colors cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {getSocialIcon(link.platform)}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-cream/90">Stay Updated</h3>
            <p className="text-xs text-cream/70 mb-4">
              Get our latest specials and renovation tips
            </p>
            
            {showSuccess ? (
              <div className="text-xs text-green-300 bg-green-900/20 p-2 rounded">
                ✓ Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter email address"
                  required
                  className="w-full px-2 py-1 text-xs bg-cream/10 border border-cream/20 rounded text-cream placeholder-cream/50 focus:outline-none focus:ring-1 focus:ring-cream/40"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || !newsletterEmail}
                  className="w-full px-2 py-1 text-xs bg-cream text-dark-brown-green rounded hover:bg-white transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>
          
          {/* Service Areas - Larger (spans 2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-3 text-cream/90">Service Areas</h3>
            <div className="grid grid-cols-2 gap-1 text-xs">
              {serviceAreas.counties.map((countyName, index) => (
                <div key={index} className="text-cream/70">
                  {countyName}
                </div>
              ))}
            </div>
          </div>
          
          {/* Showroom Location */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-cream/90">Showroom</h3>
            <div className="text-xs text-cream/70 space-y-1">
              <div className="text-cream/80">Pittsboro, NC</div>
              <div>Mon-Fri: 9AM-5PM</div>
              <div>By Appointment Only</div>
            </div>
          </div>
          
          {/* Interactive Map */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-cream/90">Find Us</h3>
            <div className="bg-cream/10 rounded-lg overflow-hidden border border-cream/20">
              <iframe
                src="https://maps.google.com/maps?q=44+Hillsboro+St+Ste+B,Pittsboro,NC+27312&output=embed&z=16"
                width="100%"
                height="120"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Horizon Renovations Showroom Location"
                className="w-full"
              />
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-cream/20 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/60">
            <div>
              {footer.copyright} • {footer.tagline}
            </div>
            <div>
              {footer.licenseNumber}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
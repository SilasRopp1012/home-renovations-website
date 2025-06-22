'use client'

import { useState } from 'react'
import { newsletter } from '@/content/content'

interface NewsletterPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function NewsletterPopup({ isOpen, onClose }: NewsletterPopupProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    
    // Add your newsletter signup logic here
    console.log('Newsletter signup:', email)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail('')
      onClose()
      // You could show a success message here
    }, 1000)
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl max-w-md w-full p-6 lg:p-8 relative animate-fade-in-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          aria-label="Close newsletter popup"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center mb-6">
          <h3 className="font-['Zodiak'] text-xl lg:text-2xl font-bold text-charcoal mb-3">
            {newsletter.popup.title}
          </h3>
          <p className="text-gray-600 text-sm lg:text-base">
            {newsletter.popup.subtitle}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={newsletter.popup.emailPlaceholder}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-green text-gray-900 placeholder-gray-400"
            />
          </div>
          
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium cursor-pointer"
            >
              {newsletter.popup.closeButton}
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !email}
              className="flex-1 px-4 py-3 bg-dark-brown-green text-white rounded-lg hover:bg-brown-green transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? 'Subscribing...' : newsletter.popup.submitButton}
            </button>
          </div>
        </form>

        {/* Privacy text */}
        <p className="text-xs text-gray-500 text-center mt-4">
          {newsletter.popup.privacyText}
        </p>
      </div>
    </div>
  )
} 
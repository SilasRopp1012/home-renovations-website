import Image from 'next/image'
import { serviceCard, images } from '@/content/content'

interface ServiceCardProps {
  title: string
  description: string
  imageUrl?: string
  features?: string[]
}

export default function ServiceCard({
  title,
  description,
  imageUrl,
  features,
}: ServiceCardProps) {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      // Add click handler logic here if needed
    }
  }

  return (
    <div
      className="bg-cream rounded-lg shadow-lg overflow-hidden border-2 border-forest-green/10 hover:border-gold transition-all duration-300 focus-within:ring-2 focus-within:ring-forest-green"
      tabIndex={0}
      role="article"
      aria-label={`Service: ${title}`}
      onKeyDown={handleKeyDown}
    >
      {imageUrl && (
        <div className="h-48 bg-forest-green/5 relative">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = images.fallback
            }}
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-forest-green mb-2">{title}</h3>
        <p className="text-forest-green/80 mb-4">{description}</p>
        {features && features.length > 0 && (
          <div>
            <h4 className="text-sm font-bold text-gold mb-2">
              {serviceCard.featuresLabel}
            </h4>
            <ul
              className="list-disc list-inside text-sm text-forest-green/70"
              role="list"
            >
              {features.map((feature, index) => (
                <li key={index} role="listitem">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

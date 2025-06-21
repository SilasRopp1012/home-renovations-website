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
      className="bg-white rounded-lg shadow-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500"
      tabIndex={0}
      role="article"
      aria-label={`Service: ${title}`}
      onKeyDown={handleKeyDown}
    >
      {imageUrl && (
        <div className="h-48 bg-gray-200 relative">
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
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {features && features.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-gray-800 mb-2">
              {serviceCard.featuresLabel}
            </h4>
            <ul
              className="list-disc list-inside text-sm text-gray-500"
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

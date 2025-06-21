import { pages } from '@/content/content'

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        {pages.portfolio.title}
      </h1>
      <p className="text-lg text-center text-gray-600 mb-6">
        {pages.portfolio.subtitle}
      </p>
      {pages.portfolio.description && (
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          {pages.portfolio.description}
        </p>
      )}
    </div>
  )
}

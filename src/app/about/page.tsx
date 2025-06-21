import { pages } from '@/content/content'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        {pages.about.title}
      </h1>
      <p className="text-lg text-center text-gray-600 mb-6">
        {pages.about.subtitle}
      </p>
      {pages.about.description && (
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          {pages.about.description}
        </p>
      )}
    </div>
  )
}

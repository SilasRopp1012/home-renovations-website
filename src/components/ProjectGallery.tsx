import Image from 'next/image'
import { projectGallery, images } from '@/content/content'

interface Project {
  id: string
  title: string
  description: string
  beforeImage?: string
  afterImage?: string
  category: string
}

interface ProjectGalleryProps {
  projects: Project[]
}

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">{projectGallery.noProjectsMessage}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-lg shadow-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500"
          tabIndex={0}
          role="article"
          aria-label={`Project: ${project.title}`}
        >
          <div className="flex h-48">
            {project.beforeImage && (
              <div className="w-1/2 bg-gray-200 relative">
                <Image
                  src={project.beforeImage}
                  alt={`${project.title} - ${projectGallery.beforeLabel}`}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = images.fallback
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 text-xs text-center py-1 bg-gray-900 bg-opacity-75 text-white">
                  {projectGallery.beforeLabel}
                </div>
              </div>
            )}
            {project.afterImage && (
              <div className="w-1/2 bg-gray-200 relative">
                <Image
                  src={project.afterImage}
                  alt={`${project.title} - ${projectGallery.afterLabel}`}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = images.fallback
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 text-xs text-center py-1 bg-gray-900 bg-opacity-75 text-white">
                  {projectGallery.afterLabel}
                </div>
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-2">{project.description}</p>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {project.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

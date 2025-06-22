import { awards } from '@/content/content'
import Image from 'next/image'

export default function AwardsBanner() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Static Awards Grid - no title */}
        <div className="flex justify-center items-center gap-8 md:gap-12 lg:gap-16 flex-wrap">
          {awards.images.map((award, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={award.src}
                alt={award.alt}
                width={150}
                height={120}
                className="h-24 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
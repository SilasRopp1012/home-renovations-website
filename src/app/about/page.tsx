import Image from 'next/image'
import { aboutPage } from '@/content/content'

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-specials-bg py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-['Zodiak'] text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              {aboutPage.hero.title}
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              {aboutPage.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Mission Text */}
              <div>
                <h2 className="font-['Zodiak'] text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-6">
                  {aboutPage.mission.title}
                </h2>
                {aboutPage.mission.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Mission Image */}
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={aboutPage.mission.image}
                  alt={aboutPage.mission.imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Leadership Image */}
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={aboutPage.leadership.image}
                  alt={aboutPage.leadership.imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Leadership Text */}
              <div>
                <h2 className="font-['Zodiak'] text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-6">
                  {aboutPage.leadership.title}
                </h2>
                {aboutPage.leadership.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-['Zodiak'] text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-6">
                {aboutPage.showroom.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                {aboutPage.showroom.description}
              </p>
            </div>

            {/* Showroom Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {aboutPage.showroom.features.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-warm-gold rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Showroom CTA */}
            <div className="text-center">
              <div className="mb-6">
                <p className="text-gray-700 font-semibold mb-2">{aboutPage.showroom.address.street}</p>
                <p className="text-gray-700 mb-4">{aboutPage.showroom.address.city}</p>
              </div>
              <a 
                href="/contact"
                className="inline-block bg-dark-brown-green hover:bg-brown-green text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                {aboutPage.showroom.ctaButton}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="bg-specials-bg py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-['Zodiak'] text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-12">
              {aboutPage.experience.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aboutPage.experience.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-['Zodiak'] text-4xl lg:text-5xl font-bold text-warm-gold mb-2">
                    {stat.number}
                  </div>
                  <p className="text-charcoal font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

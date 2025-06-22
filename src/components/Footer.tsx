'use client'

import { footer, siteContent } from '@/content/content'

export default function Footer() {
  const { serviceAreas } = siteContent
  
  // Extract individual county names from the "Additional Counties" entry
  const getCountyDisplayNames = () => {
    const counties: string[] = []
    
    serviceAreas.counties.forEach(county => {
      if (county.name === "Additional Counties" && 'areas' in county) {
        // Extract county names from the areas array
        county.areas.forEach(area => {
          const countyName = area.split(':')[0]
          counties.push(countyName)
        })
      } else {
        counties.push(county.name)
      }
    })
    
    return counties
  }
  
  return (
    <footer className="bg-green-900 text-cream py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-cream/90">Contact</h3>
            <div className="space-y-3 text-xs">
              <div>
                <p className="text-cream/80 font-medium">Kevin</p>
                <a href="tel:919.548.3947" className="text-cream/70 hover:text-cream/90 transition-colors cursor-pointer">
                  919.548.3947
                </a>
                <br />
                <a href="mailto:kevin@horizonrenovationsllc.com" className="text-cream/70 hover:text-cream/90 transition-colors cursor-pointer">
                  kevin@horizonrenovationsllc.com
                </a>
              </div>
              <div>
                <p className="text-cream/80 font-medium">Chris</p>
                <a href="tel:336.783.7166" className="text-cream/70 hover:text-cream/90 transition-colors cursor-pointer">
                  336.783.7166
                </a>
                <br />
                <a href="mailto:chris@horizonrenovationsllc.com" className="text-cream/70 hover:text-cream/90 transition-colors cursor-pointer">
                  chris@horizonrenovationsllc.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Service Areas - Simple List */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-3 text-cream/90">Service Areas</h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {getCountyDisplayNames().map((countyName, index) => (
                <div key={index} className="text-cream/70">
                  {countyName}
                </div>
              ))}
            </div>
          </div>
          
          {/* Showroom Location */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-3 text-cream/90">Come Visit Our Showroom!</h3>
            <div className="mb-3">
              <p className="text-xs text-cream/70 mb-2">44 Hillsboro ST.</p>
              <p className="text-xs text-cream/70">Pittsboro, NC 27312</p>
            </div>
            <div className="w-full h-32 rounded-lg overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=44+Hillsboro+ST,Pittsboro,NC+27312&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Horizon Construction Showroom Location"
              />
            </div>
          </div>
        </div>
        
        <div className="border-t border-cream/20 mt-8 pt-4 text-center text-xs text-cream/50">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

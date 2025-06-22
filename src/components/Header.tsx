import Link from 'next/link'
import Image from 'next/image'
import { navigation, images } from '@/content/content'

export default function Header() {
  return (
    <header className="bg-white shadow-lg">
      <nav
        className="container mx-auto px-4 py-2"
        role="navigation"
        aria-label={navigation.ariaLabel}
      >
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-offset-2 rounded"
            aria-label={navigation.links[0].ariaLabel}
          >
            <Image
              src={images.logo.main}
              alt={navigation.brandName}
              width={200}
              height={50}
              className="h-14 lg:h-18 w-auto object-contain"
              priority
            />
            <span className="sr-only">{navigation.brandName}</span>
          </Link>
          <ul className="flex space-x-6" role="menubar">
            {navigation.links.map((link) => (
              <li key={link.href} role="none">
                <Link
                  href={link.href}
                  className="text-gray-900 hover:text-green-800 transition-colors focus:outline-none rounded px-2 py-1 font-medium"
                  role="menuitem"
                  aria-label={link.ariaLabel}
                  tabIndex={0}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

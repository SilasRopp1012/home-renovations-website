import Link from 'next/link'
import { navigation } from '@/content/content'

const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    action()
  }
}

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4" role="navigation" aria-label={navigation.ariaLabel}>
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="text-2xl font-bold text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            aria-label={navigation.links[0].ariaLabel}
          >
            {navigation.brandName}
          </Link>
          <ul className="flex space-x-6" role="menubar">
            {navigation.links.map((link) => (
              <li key={link.href} role="none">
                <Link 
                  href={link.href} 
                  className="text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
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
import { footer } from '@/content/content';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p>{footer.copyright}</p>
          <p className="text-gray-400 mt-2">{footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
} 
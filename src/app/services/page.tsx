import { pages } from "@/content/content";

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">{pages.services.title}</h1>
      <p className="text-lg text-center text-gray-600 mb-6">
        {pages.services.subtitle}
      </p>
      {pages.services.description && (
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          {pages.services.description}
        </p>
      )}
    </div>
  );
} 
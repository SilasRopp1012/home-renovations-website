import { pages } from '@/content/content'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        {pages.contact.title}
      </h1>
      <p className="text-lg text-center text-gray-600 mb-6">
        {pages.contact.subtitle}
      </p>
      {pages.contact.description && (
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
          {pages.contact.description}
        </p>
      )}

      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">{pages.contact.phone}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600">{pages.contact.email}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-gray-600">{pages.contact.address}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
            <p className="text-gray-600">{pages.contact.businessHours}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

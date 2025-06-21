import { pages } from '@/content/content'

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        {pages.home.title}
      </h1>
      <p className="text-lg text-center text-gray-600">{pages.home.subtitle}</p>
    </div>
  )
}

export default Home

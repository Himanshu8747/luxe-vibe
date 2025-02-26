import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const collections = [
  {
    title: "Summer Essentials",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070",
    category: "Summer Collection",
    slug: "summer-essentials",
  },
  {
    title: "Autumn Style",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070",
    category: "New Arrivals",
    slug: "autumn-style",
  },
  {
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=2065",
    category: "Trending Now",
    slug: "accessories",
  },
]

export const FeaturedCollections = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair">Featured Collections</h2>
          <p className="text-muted-foreground">Discover our carefully curated selections</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={collection.image || "/placeholder.svg"}
                alt={collection.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-sm uppercase tracking-wider mb-2 inline-block">{collection.category}</span>
                <h3 className="text-2xl font-playfair mb-4">{collection.title}</h3>
                <Link
                  to={`/collections/${collection.slug}`}
                  className="flex items-center text-sm uppercase tracking-wider hover:text-accent transition-colors"
                >
                  Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


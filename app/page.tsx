import { ProductGrid } from "@/components/product-grid"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Categories />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <ProductGrid />
      </div>
    </div>
  )
}

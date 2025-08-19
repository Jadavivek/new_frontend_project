import { ProductShowcase } from "@/components/product-showcase"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Hedamo</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover premium organic products with complete traceability and sustainability
          </p>
        </header>
        <ProductShowcase />
      </div>
    </main>
  )
}

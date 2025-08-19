"use client"

import { useState } from "react"
import { ProductCard } from "./product-card"
import { ProductDetails } from "./product-details"
import { products } from "@/lib/product-data"

export function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null)

  const handleProductSelect = (productId: number) => {
    setSelectedProduct(productId)
  }

  const handleCloseDetails = () => {
    setSelectedProduct(null)
  }

  const selectedProductData = selectedProduct ? products.find((p) => p.id === selectedProduct) : null

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onSelect={handleProductSelect} />
        ))}
      </div>

      {selectedProductData && <ProductDetails product={selectedProductData} onClose={handleCloseDetails} />}
    </>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Leaf } from "lucide-react"
import Image from "next/image"

interface Product {
  id: number
  name: string
  image: string
  category: string
  description: string
  price: number
  rating: number
  organic: boolean
}

interface ProductCardProps {
  product: Product
  onSelect: (productId: number) => void
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-card border-border">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.organic && (
            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
              <Leaf className="w-3 h-3 mr-1" />
              Organic
            </Badge>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary" className="text-xs">
              {product.category}
            </Badge>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-muted-foreground">{product.rating}</span>
            </div>
          </div>

          <h3 className="font-serif text-xl font-bold text-card-foreground mb-2 line-clamp-2">{product.name}</h3>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>

          <div className="flex items-center justify-between">
            <span className="font-bold text-lg text-primary">${product.price.toFixed(2)}</span>
            <Button
              onClick={() => onSelect(product.id)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Know More
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

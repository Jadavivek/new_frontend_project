"use client"

import { X, Star, Leaf, Shield, Users, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

interface ProductDetailsProps {
  product: any
  onClose: () => void
}

export function ProductDetails({ product, onClose }: ProductDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
      <div className="bg-background rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground">{product.name}</h2>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="secondary">{product.category}</Badge>
              {product.organic && (
                <Badge className="bg-primary text-primary-foreground">
                  <Leaf className="w-3 h-3 mr-1" />
                  Organic
                </Badge>
              )}
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content Grid */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Product Images */}
          <Card className="bg-card border-border">
            <CardContent className="p-0">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-2xl text-primary">${product.price.toFixed(2)}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{product.rating}</span>
                    <span className="text-muted-foreground">({product.reviews.length} reviews)</span>
                  </div>
                </div>
                <p className="text-card-foreground mb-4">{product.description}</p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Add to Cart</Button>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <Award className="w-5 h-5 text-primary" />
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {product.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-card-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Nutrition */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <Leaf className="w-5 h-5 text-primary" />
                Nutrition Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(product.nutrition).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="capitalize text-card-foreground">{key}</span>
                    <span className="font-semibold text-primary">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Traceability */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <Shield className="w-5 h-5 text-primary" />
                Traceability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-card-foreground">Farm Location</span>
                    <span className="font-semibold text-primary">{product.traceability.farm}</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-card-foreground">Harvest Date</span>
                    <span className="font-semibold text-primary">{product.traceability.harvestDate}</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-card-foreground">Certification</span>
                    <Badge className="bg-secondary text-secondary-foreground">
                      {product.traceability.certification}
                    </Badge>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-card-foreground">Sustainability Score</span>
                    <span className="font-semibold text-primary">{product.traceability.sustainabilityScore}/100</span>
                  </div>
                  <Progress value={product.traceability.sustainabilityScore} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reviews */}
          <Card className="bg-card border-border lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <Users className="w-5 h-5 text-primary" />
                Customer Reviews
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {product.reviews.slice(0, 3).map((review: any, index: number) => (
                  <div key={index} className="border-b border-border pb-4 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-card-foreground">{review.author}</span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <p className="text-card-foreground">{review.comment}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

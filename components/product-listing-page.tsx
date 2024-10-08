'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

interface Product {
  id: string;
  image: string;
  price: number;
  discount: number;
}

const products: Product[] = [
  { id: '1', image: '/placeholder.svg?height=300&width=300&text=Green+Shorts', price: 1280, discount: 5 },
  { id: '2', image: '/placeholder.svg?height=300&width=300&text=Black+T-Shirt', price: 1100, discount: 5 },
  { id: '3', image: '/placeholder.svg?height=300&width=300&text=Cream+Sweater', price: 1878, discount: 20 },
  { id: '4', image: '/placeholder.svg?height=300&width=300&text=Gray+Skirt', price: 1394, discount: 5 },
  { id: '5', image: '/placeholder.svg?height=300&width=300&text=Two-Tone+Sweater', price: 1217, discount: 5 },
  { id: '6', image: '/placeholder.svg?height=300&width=300&text=White+Hoodie', price: 1822, discount: 5 },
]

export default function ProductListingPageComponent() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">
          <span className="text-red-500 border-b-2 border-red-500">All items under ¥2,000</span>
        </h1>
        <p className="text-lg">buy 3 get all 30% off</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={`Product ${product.id}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-2 flex justify-between items-center">
                <span className="text-red-500 font-bold">¥{product.price.toLocaleString()}</span>
                <Badge variant="destructive" className="text-xs">
                  -{product.discount}%
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
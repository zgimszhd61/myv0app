'use client'

import React from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Leaf } from 'lucide-react'
import Image from 'next/image'

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  options?: string;
  delivery: string;
  shipsTo: string;
  sellerRating?: string;
  sustainability?: boolean;
  savePercentage?: number;
  stock?: string;
}

const products: Product[] = [
  {
    id: '1',
    title: 'KELIYUAN Wall Art For Kitchen Wall Decor For Living Room Dining Room Decorations Wine Glass Wall Painting Still Life...',
    image: '/placeholder.svg?height=200&width=300&text=Wall+Art',
    price: 49.89,
    originalPrice: 99.78,
    rating: 0,
    reviewCount: 0,
    options: '3 sizes',
    delivery: '$17.62 delivery',
    shipsTo: 'Ships to Japan',
    savePercentage: 50,
    stock: 'Only 19 left in stock - order soon.'
  },
  {
    id: '2',
    title: 'Simhomsen Embroidered Dia De Los Muertos Serape Fiesta Mexican Table Runner, Mexico Day of The Dead Kitchen Dining Tabl...',
    image: '/placeholder.svg?height=200&width=300&text=Table+Runner',
    price: 19.99,
    rating: 5,
    reviewCount: 5,
    delivery: '$10.28 delivery',
    shipsTo: 'Ships to Japan',
    sellerRating: '4.9/5 (352)'
  },
  {
    id: '3',
    title: '3x5 Washable Rug Grey Blue Entryway Rugs Hallway Area Rug Indoor Accent Rug Abstract Non Slip Low Pile Carpet Distressed...',
    image: '/placeholder.svg?height=200&width=300&text=Rug',
    price: 35.99,
    rating: 4.5,
    reviewCount: 71,
    options: '11 sizes',
    delivery: 'Delivery Tue, Oct 22',
    shipsTo: 'Ships to Japan',
    sellerRating: '4.7/5 (73)',
    sustainability: true,
    savePercentage: 20
  },
  {
    id: '4',
    title: 'Christmas Table Runner 72 Inches Long, Christmas Theme Winter Linen Table Runner for Christmas Decorations Indoor, Christmas...',
    image: '/placeholder.svg?height=200&width=300&text=Christmas+Runner',
    price: 9.99,
    rating: 4.5,
    reviewCount: 14,
    delivery: 'Delivery Tue, Oct 22',
    shipsTo: 'Ships to Japan'
  },
  {
    id: '5',
    title: 'Artoid Mode Xmas Trees Snowflakes Green Merry Christmas Table Runner, Winter Seasonal Kitchen Dining Table...',
    image: '/placeholder.svg?height=200&width=300&text=Christmas+Trees+Runner',
    price: 9.99,
    rating: 0,
    reviewCount: 0,
    delivery: 'Delivery Tue, Oct 22',
    shipsTo: 'Ships to Japan',
    sellerRating: '4.9/5 (4,603)'
  }
]

export function ProductListingPageComponent() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Results</h1>
      <p className="text-sm text-gray-500 mb-6">
        Check each product page for other buying options. Price and other details may vary based on product size and color.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <CardContent className="p-4">
              <div className="aspect-w-4 aspect-h-3 mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h2 className="text-sm font-semibold mb-2 line-clamp-3">{product.title}</h2>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="text-sm text-blue-600 ml-1">{product.reviewCount}</span>
              </div>
              <div className="text-lg font-bold mb-2">
                ${product.price.toFixed(2)}
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through ml-2">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              {product.options && <p className="text-sm mb-2">Options: {product.options}</p>}
              {product.savePercentage && (
                <Badge className="bg-green-100 text-green-800 mb-2">
                  Save {product.savePercentage}% with coupon
                </Badge>
              )}
              <p className="text-sm text-gray-500">{product.delivery}</p>
              <p className="text-sm text-gray-500">{product.shipsTo}</p>
              {product.sellerRating && (
                <p className="text-sm text-gray-500">Seller rating: {product.sellerRating}</p>
              )}
              {product.sustainability && (
                <div className="flex items-center text-sm text-green-600 mt-2">
                  <Leaf className="w-4 h-4 mr-1" />
                  1 sustainability feature
                </div>
              )}
              {product.stock && <p className="text-sm text-red-600 mt-2">{product.stock}</p>}
            </CardContent>
            <CardFooter className="mt-auto p-4 pt-0">
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                Add to cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
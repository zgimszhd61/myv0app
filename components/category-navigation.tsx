'use client'

import React from 'react'
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

interface Category {
  name: string;
  image: string;
  tag?: 'SALE' | 'HOT';
}

const categories: Category[] = [
  { name: 'Women', image: '/placeholder.svg?height=100&width=100&text=Women', tag: 'SALE' },
  { name: 'Tops', image: '/placeholder.svg?height=100&width=100&text=Tops' },
  { name: 'Bottoms', image: '/placeholder.svg?height=100&width=100&text=Bottoms' },
  { name: 'Dresses', image: '/placeholder.svg?height=100&width=100&text=Dresses', tag: 'HOT' },
  { name: 'Denim', image: '/placeholder.svg?height=100&width=100&text=Denim', tag: 'SALE' },
  { name: 'Bags & Luggage', image: '/placeholder.svg?height=100&width=100&text=Bags' },
  { name: 'Shoes', image: '/placeholder.svg?height=100&width=100&text=Shoes', tag: 'HOT' },
  { name: 'Beauty & Health', image: '/placeholder.svg?height=100&width=100&text=Beauty' },
  { name: 'Home & Living', image: '/placeholder.svg?height=100&width=100&text=Home', tag: 'HOT' },
  { name: 'Electronics & Cases', image: '/placeholder.svg?height=100&width=100&text=Electronics' },
  { name: 'Accessories & Jewelry', image: '/placeholder.svg?height=100&width=100&text=Accessories' },
  { name: 'Underwear & Sleepwear', image: '/placeholder.svg?height=100&width=100&text=Underwear' },
  { name: 'Kids', image: '/placeholder.svg?height=100&width=100&text=Kids' },
  { name: 'Men', image: '/placeholder.svg?height=100&width=100&text=Men' },
]

export default function CategoryNavigationComponent() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col items-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              {category.tag && (
                <Badge
                  className={`absolute -top-1 -right-1 ${
                    category.tag === 'SALE' ? 'bg-red-500' : 'bg-orange-500'
                  } text-white text-xs px-2 py-1 rounded-full`}
                >
                  {category.tag}
                </Badge>
              )}
            </div>
            <span className="mt-2 text-sm text-center">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
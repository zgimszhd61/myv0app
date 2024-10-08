'use client'

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface Product {
  id: number
  title: string
  description: string
  image: string
  price: number
  originalPrice: number
  discount: number
  tag?: string
}

const products: Product[] = [
  {
    id: 1,
    title: "豆瓣电影日历2025",
    description: "前1.5万本配豆瓣周边礼！拼手速！",
    image: "/placeholder.svg?height=200&width=300",
    price: 99,
    originalPrice: 149,
    discount: 50,
    tag: "每满149减"
  },
  {
    id: 2,
    title: "豆猫电影手办·第四弹",
    description: "经典电影永流传，荧幕化身萌神",
    image: "/placeholder.svg?height=200&width=300",
    price: 59,
    originalPrice: 89,
    discount: 30
  },
  {
    id: 3,
    title: "豆瓣2025日程本-度量时间",
    description: "12个月经典记事读书观影笔记",
    image: "/placeholder.svg?height=200&width=300",
    price: 66,
    originalPrice: 76,
    discount: 10
  }
]

export default function NewProductLaunchComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">新品首发</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={200}
              className="w-full object-cover"
            />
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>
            </CardContent>
            <CardFooter className="bg-gray-50 p-4 flex justify-between items-center">
              <div>
                <span className="text-red-600 text-xl font-bold">¥{product.price}</span>
                <span className="text-gray-400 line-through ml-2">¥{product.originalPrice}</span>
              </div>
              <div className="flex items-center">
                <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                  最高减{product.discount}元
                </span>
                {product.tag && (
                  <span className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded ml-2">
                    {product.tag}
                  </span>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
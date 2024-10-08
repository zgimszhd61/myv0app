'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    title: "豆瓣电影日历2025",
    description: "前1.5万本配豆瓣周边礼！拼手速！",
    price: 99,
    originalPrice: 149,
    discount: "最高减50元",
    gift: "每满1件赠",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    title: "豆猫电影手办·第四弹",
    description: "经典电影永流传，荒诞化身萌神",
    price: 59,
    originalPrice: 69,
    discount: "最高减30元",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    title: "豆瓣豆品 X 索尼影视电视官方联名款 哥伦比亚100周年纪念电影补克",
    description: "神奇AR妙趣体验，52部经典电影推荐",
    price: 25,
    originalPrice: 29,
    discount: "最高减13元",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    title: "豆瓣收藏夹2.0",
    description: "收藏好那些值得纪念的时刻",
    price: 99,
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function DoubanClassicsComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">豆瓣经典</h2>
          <p className="text-sm text-gray-600">口碑好物，匠心甄选</p>
        </div>
        <Link href="/more" className="text-sm text-blue-600 hover:underline">
          查看更多 &gt;
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-sm font-medium line-clamp-2">{product.title}</CardTitle>
              <p className="text-xs text-gray-600 mt-1 line-clamp-2">{product.description}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-end">
              <div>
                <span className="text-red-600 font-bold">¥{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xs text-gray-400 line-through ml-2">¥{product.originalPrice}</span>
                )}
              </div>
              {product.discount && <Badge variant="secondary">{product.discount}</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
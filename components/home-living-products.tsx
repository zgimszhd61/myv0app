'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    title: "豆瓣电影无火香薰 吉光片「语」系列 大容量220ml",
    description: "探讨璀璨的电影吉光片羽",
    price: 168,
    originalPrice: 188,
    discount: "立减20元",
    image: "/placeholder.svg?height=200&width=200",
    tag: "豆影典藏",
  },
  {
    id: 2,
    title: "豆瓣童话小夜灯",
    description: "三款可选，可定时/锂电池可充电/无极调光",
    price: 68,
    originalPrice: 88,
    discount: "立减20元",
    image: "/placeholder.svg?height=200&width=200",
    tag: "《绿野仙踪》",
  },
  {
    id: 3,
    title: '豆瓣"少数派星球"系列 可爱动物图案防滑地垫',
    description: "一垫多用，脚垫、门垫、猫咪狗狗睡觉垫",
    price: 58,
    originalPrice: 68,
    discount: "立减10元",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    title: '豆瓣"少数派星球"系列 植物染T恤',
    description: "可爱动物图案防滑地毯 购T恤赠同款清洁神器",
    price: 92,
    originalPrice: 108,
    discount: "立减16元",
    image: "/placeholder.svg?height=200&width=200",
    tag: "海獭",
  },
]

export default function HomeLivingProductsComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">家居生活</h2>
          <p className="text-sm text-gray-600">追求品质，乐享生活</p>
        </div>
        <Link href="/more" className="text-sm text-blue-600 hover:underline">
          查看更多 &gt;
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardHeader className="p-0 relative">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              {product.tag && (
                <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
                  {product.tag}
                </Badge>
              )}
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
              {product.discount && (
                <Badge variant="secondary" className="bg-red-100 text-red-600">
                  {product.discount}
                </Badge>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
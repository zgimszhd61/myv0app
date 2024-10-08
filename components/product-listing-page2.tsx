'use client'

import React from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  sales: number;
  tag?: string;
}

const products: Product[] = [
  {
    id: '1',
    title: '远程安装虚拟机系统游戏多开全网游戏跳过检测支持99%游戏',
    image: '/placeholder.svg?height=200&width=200&text=Gaming+Emulator',
    price: 10,
    sales: 23,
    tag: '30起'
  },
  {
    id: '2',
    title: '新中式入户玄关走廊过道圆形带led灯光装饰画高端简约',
    image: '/placeholder.svg?height=200&width=200&text=Decorative+Light',
    price: 828,
    sales: 1,
    tag: '退货宝'
  },
  {
    id: '3',
    title: '九牧王无死角马桶防溅水大管道大冲力',
    image: '/placeholder.svg?height=200&width=200&text=Toilet',
    price: 608,
    sales: 85
  },
  {
    id: '4',
    title: '免挖头发,洗澡不堵,买它!第三代碎发地漏盖!',
    image: '/placeholder.svg?height=200&width=200&text=Drain+Cover',
    price: 200,
    sales: 100,
    tag: '退货宝'
  },
  {
    id: '5',
    title: 'Set for life 24FW慵懒随性百搭通勤微修身中性立衣帽衫夹克',
    image: '/placeholder.svg?height=200&width=200&text=Hoodie',
    price: 299,
    sales: 200
  },
  {
    id: '6',
    title: '安踏速干裤丨运动裤男士秋季新款梭织透气运动裤直筒裤',
    image: '/placeholder.svg?height=200&width=200&text=Sports+Pants',
    price: 139,
    sales: 2000,
    tag: '退货宝'
  }
]

const categories = [
  { name: '猜你喜欢', icon: '🦊' },
  { name: '运动户外', icon: '🏃' },
  { name: '馋嘴零食', icon: '🍔' },
  { name: '潮电数码', icon: '📱' },
  { name: '服饰时尚', icon: '👚' },
  { name: '家居日用', icon: '🏠' },
  { name: '个护家清', icon: '🧼' }
]

export default function ProductListingPageComponent() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <nav className="flex space-x-4 overflow-x-auto pb-2 mb-4">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={index === 0 ? "default" : "outline"}
            className="flex items-center space-x-1 whitespace-nowrap"
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </Button>
        ))}
      </nav>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="w-full h-48 object-cover"
              />
              {product.tag && (
                <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                  {product.tag}
                </Badge>
              )}
            </CardContent>
            <CardFooter className="flex flex-col items-start p-2">
              <h3 className="text-sm font-medium line-clamp-2 mb-1">{product.title}</h3>
              <div className="flex justify-between items-center w-full">
                <div className="flex items-baseline">
                  <span className="text-lg font-bold text-red-500">¥{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-500 line-through ml-1">
                      ¥{product.originalPrice}
                    </span>
                  )}
                </div>
                <span className="text-xs text-gray-500">{product.sales}人购买</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
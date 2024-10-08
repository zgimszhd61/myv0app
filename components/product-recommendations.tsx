'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: 1,
    title: "豆瓣收藏夹2.0",
    image: "/placeholder.svg?height=200&width=200",
    link: "/product/1"
  },
  {
    id: 2,
    title: "豆瓣打工人主题T恤",
    image: "/placeholder.svg?height=200&width=200",
    link: "/product/2"
  },
  {
    id: 3,
    title: "豆瓣黑白帆布包",
    image: "/placeholder.svg?height=200&width=200",
    link: "/product/3"
  },
  {
    id: 4,
    title: "豆瓣艺术T恤",
    image: "/placeholder.svg?height=200&width=200",
    link: "/product/4"
  },
  {
    id: 5,
    title: "豆瓣金属中性笔",
    image: "/placeholder.svg?height=200&width=200",
    link: "/product/5"
  },
  {
    id: 6,
    title: '豆瓣"少数派星球"系列 植物染T恤 可爱动物图案防滑地毯 购T恤赠同款清洁神器',
    image: "/placeholder.svg?height=200&width=200",
    link: "/product/6"
  }
]

export default function ProductRecommendationsComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-green-600 mb-6">猜你喜欢...</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Link href={product.link} key={product.id} className="block">
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2">{product.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
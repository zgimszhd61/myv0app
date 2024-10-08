"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

const productImages = [
  '/placeholder.svg?height=400&width=400',
  '/placeholder.svg?height=400&width=400',
  '/placeholder.svg?height=400&width=400',
  '/placeholder.svg?height=400&width=400',
  '/placeholder.svg?height=400&width=400',
]

export default function ProductDetailComponent() {
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="relative aspect-square mb-4">
            <Image
              src={productImages[currentImage]}
              alt="豆瓣经典帆布包"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`relative w-20 h-20 flex-shrink-0 ${
                  index === currentImage ? 'ring-2 ring-red-500' : ''
                }`}
              >
                <Image
                  src={image}
                  alt={`豆瓣经典帆布包 ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </button>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-2">豆瓣经典帆布包</h1>
          <p className="text-3xl font-bold text-red-500 mb-2">¥149.00<span className="text-sm text-gray-500">/个</span></p>
          <p className="text-sm text-gray-500 mb-4">43.0w人在逛</p>
          <div className="space-y-4">
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">加入购物车</Button>
            <Button className="w-full bg-red-500 hover:bg-red-600 text-white">立即购买</Button>
          </div>
        </div>
      </div>
      <Tabs defaultValue="details" className="mt-8">
        <TabsList>
          <TabsTrigger value="details">商品详情</TabsTrigger>
          <TabsTrigger value="reviews">豆友说 2</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <div className="prose max-w-none">
            <h2>产品描述</h2>
            <p>豆瓣经典帆布包是一款简约而实用的包袋，采用高质量帆布材料制作，耐用耐磨。多种颜色可选，适合日常使用和各种场合。</p>
            <h2>产品规格</h2>
            <ul>
              <li>材质：优质帆布</li>
              <li>尺寸：40cm x 35cm x 10cm</li>
              <li>颜色：军绿色、深蓝色、黄色、红色</li>
              <li>肩带长度：可调节</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="reviews">
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded">
              <p className="font-bold">用户1</p>
              <p>非常喜欢这个包，质量很好，颜色也很漂亮！</p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <p className="font-bold">用户2</p>
              <p>实用性很强，容量大，很适合日常使用。</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
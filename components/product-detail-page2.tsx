'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Minus, Plus, Heart, ChevronDown } from 'lucide-react'
import Image from 'next/image'

const productImages = [
  '/placeholder.svg?height=400&width=400&text=Ring+Main',
  '/placeholder.svg?height=80&width=80&text=Ring+1',
  '/placeholder.svg?height=80&width=80&text=Ring+2',
  '/placeholder.svg?height=80&width=80&text=Ring+3',
  '/placeholder.svg?height=80&width=80&text=Ring+4',
]

const sizes = [
  '4mm版 10号', '4mm版 11号', '4mm版 12号', '4mm版 13号',
  '4mm版 14号', '4mm版 15号', '4mm版 16号', '4mm版 17号',
  '4mm版 18号', '4mm版 19号', '4mm版 20号', '4mm版 21号',
  '4mm版 22号'
]

export default function ProductDetailPageComponent() {
  const [mainImage, setMainImage] = useState(productImages[0])
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="flex gap-4">
            <div className="w-20 space-y-2">
              {productImages.slice(1).map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Product thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  className="cursor-pointer border hover:border-gray-400"
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
            <div className="flex-grow">
              <Image
                src={mainImage}
                alt="Main product image"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold mb-4">
            专利产品 纯飞机4mm 银松珠宝Pt900硬铂金戒指 简约男女情侣对戒
          </h1>
          <div className="text-gray-500 mb-4">已售 35</div>
          <div className="text-3xl font-bold text-red-500 mb-4">¥3000<span className="text-sm">起</span></div>
          <div className="text-orange-500 mb-4">3期免息</div>
          <Card className="mb-4">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500">配送</span>
                <div className="flex items-center">
                  <span>陕西西安 至 杭州余杭</span>
                  <ChevronDown className="w-4 h-4 ml-1" />
                </div>
              </div>
              <div className="text-sm text-gray-500">快递: 免运费 承诺48小时内发货, 晚发必赔</div>
            </CardContent>
          </Card>
          <Card className="mb-4">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">保障</span>
                <div className="flex items-center">
                  <span>先鉴后发 材质不符赔三 7天无理由退货</span>
                  <ChevronDown className="w-4 h-4 ml-1" />
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">戒指手寸:</h3>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size, index) => (
                <Badge key={index} variant="outline" className="cursor-pointer hover:bg-gray-100">
                  {size}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex items-center mb-4">
            <span className="mr-4">数量:</span>
            <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              <Minus className="h-4 w-4" />
            </Button>
            <Input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-16 mx-2 text-center"
            />
            <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
              <Plus className="h-4 w-4" />
            </Button>
            <span className="ml-4">即将售罄</span>
          </div>
          <div className="flex gap-4">
            <Button className="flex-1 bg-orange-500 hover:bg-orange-600">立即购买</Button>
            <Button variant="secondary" className="flex-1">加入购物车</Button>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
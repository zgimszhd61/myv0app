'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb"
import { Heart, MapPin, Star, Plane, Train, Coffee, Key, Wind } from 'lucide-react'
import Image from 'next/image'

const hotelImages = [
  "/placeholder.svg?height=400&width=600&text=Hotel+Main+Image",
  "/placeholder.svg?height=100&width=150&text=Hotel+Image+1",
  "/placeholder.svg?height=100&width=150&text=Hotel+Image+2",
  "/placeholder.svg?height=100&width=150&text=Hotel+Image+3",
  "/placeholder.svg?height=100&width=150&text=Hotel+Image+4",
  "/placeholder.svg?height=100&width=150&text=Hotel+Image+5",
]

export default function HotelListingPageComponent() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <Breadcrumb className="mb-4">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">携程</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">酒店</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">上海酒店</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem >
          <BreadcrumbLink href="#">花筑·崇明漫墅美郡民宿</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-2xl font-bold mb-2">花筑·崇明漫墅美郡民宿</h1>
          <div className="flex items-center space-x-2">
            <Badge>民宿</Badge>
            <div className="flex">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            </div>
            <Button variant="ghost" size="sm">
              <Heart className="w-4 h-4 mr-2" />
              收藏
            </Button>
          </div>
        </div>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
          选择房间
        </Button>
      </div>

      <div className="flex items-center mb-4">
        <MapPin className="w-4 h-4 mr-2 text-gray-500" />
        <span className="text-sm text-gray-600">上海崇明区中兴镇红星村825号</span>
        <Button variant="link" size="sm" className="ml-2">
          显示地图
        </Button>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        开业：2023 漫墅----慢生活，漫情怀。
        <Button variant="link" size="sm">
          查看更多
        </Button>
      </p>

      <div className="grid grid-cols-4 gap-2 mb-6">
        <div className="col-span-2 row-span-2">
          <Image
            src={hotelImages[0]}
            alt="Hotel main image"
            width={600}
            height={400}
            layout="responsive"
            className="rounded-lg"
          />
        </div>
        {hotelImages.slice(1).map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Hotel image ${index + 1}`}
            width={150}
            height={100}
            layout="responsive"
            className="rounded-lg"
          />
        ))}
      </div>

      <Card className="mb-6">
        <CardContent className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-blue-500 mr-2">4.9分</span>
            <span className="text-lg font-semibold">超棒</span>
          </div>
          <Button variant="link">
            显示所有45条点评
          </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">房间又新又干净，院子也很漂亮也很宽敞，设计细节很赞，拿个小球可以让小朋友玩...</h3>
            <p className="text-sm text-gray-600">干净卫生，服务很好</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <Plane className="w-4 h-4 mr-2" />
              <span>距离浦东机场53.97公里</span>
            </div>
            <div className="flex items-center">
              <Train className="w-4 h-4 mr-2" />
              <span>距离上海火车站54.84公里</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex space-x-4 mb-6">
        <Badge variant="secondary" className="flex items-center">
          <Coffee className="w-4 h-4 mr-2" />
          接机服务
        </Badge>
        <Badge variant="secondary" className="flex items-center">
          <Key className="w-4 h-4 mr-2" />
          智能门锁
        </Badge>
        <Badge variant="secondary" className="flex items-center">
          <Wind className="w-4 h-4 mr-2" />
          空调
        </Badge>
      </div>

      <Button variant="link" className="text-blue-500">
        显示所有设施
      </Button>
    </div>
  )
}
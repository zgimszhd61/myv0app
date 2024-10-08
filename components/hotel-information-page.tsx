'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Car, Utensils, Plane, Tv, Shield, Home, Music, Mountain, Book, 
  ChevronDown, ChevronUp
} from 'lucide-react'
import Image from 'next/image'

const facilities = [
  { icon: <Car className="w-6 h-6" />, name: "私人停车场", badge: "免费" },
  { icon: <Utensils className="w-6 h-6" />, name: "共用厨房" },
  { icon: <Plane className="w-6 h-6" />, name: "接机服务", badge: "每车¥300" },
  { icon: <Plane className="w-6 h-6" />, name: "送机服务", badge: "每车¥300" },
  { icon: <Tv className="w-6 h-6" />, name: "大堂吧" },
  { icon: <Car className="w-6 h-6" />, name: "行李寄存", badge: "免费" },
  { icon: <Shield className="w-6 h-6" />, name: "营地安保设施" },
  { icon: <Home className="w-6 h-6" />, name: "家庭影院" },
  { icon: <Utensils className="w-6 h-6" />, name: "棋牌室" },
  { icon: <Home className="w-6 h-6" />, name: "营地淋浴间" },
  { icon: <Music className="w-6 h-6" />, name: "KTV" },
  { icon: <Mountain className="w-6 h-6" />, name: "野餐区" },
  { icon: <Mountain className="w-6 h-6" />, name: "营地" },
  { icon: <Book className="w-6 h-6" />, name: "图书室" },
]

export default function HotelInformationPageComponent() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>酒店简介</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="font-semibold">开业：</p>
              <p>2023</p>
            </div>
            <div>
              <p className="font-semibold">客房数：</p>
              <p>5</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="font-semibold">酒店电话：</p>
            <p>+86-18616316289</p>
            <p>+86-13641604872</p>
          </div>
          <div className="relative">
            <p className={`text-gray-700 ${isExpanded ? '' : 'line-clamp-3'}`}>
              漫墅----慢生活，漫情怀。美丽的崇明，静享一片悠闲时光。漫墅为您营造一篇音乐、书与咖啡交融的主题乐章，1000多平的大草坪，可露营，可烧烤，远离尘世的喧嚣，静享下午温暖的阳光。跨过长江隧桥，下高速左转，沿着美丽的陈杨公路，行驶约2公里，即到达漫墅美郡。
            </p>
            <Button 
              variant="link" 
              className="text-blue-500 absolute bottom-0 right-0 bg-white"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <>
                  收起 <ChevronUp className="w-4 h-4 ml-1" />
                </>
              ) : (
                <>
                  展开 <ChevronDown className="w-4 h-4 ml-1" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>服务及设施</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-center">
                {facility.icon}
                <span className="ml-2 text-sm">{facility.name}</span>
                {facility.badge && (
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {facility.badge}
                  </Badge>
                )}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Image
                src="/placeholder.svg?height=200&width=300&text=餐厅"
                alt="餐厅"
                width={300}
                height={200}
                layout="responsive"
                className="rounded-lg"
              />
              <p className="text-center mt-2">餐厅</p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=200&width=300&text=儿童乐园"
                alt="儿童乐园"
                width={300}
                height={200}
                layout="responsive"
                className="rounded-lg"
              />
              <p className="text-center mt-2">儿童乐园</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
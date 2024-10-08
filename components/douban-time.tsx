'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Compass, Grid, ClipboardList, User } from "lucide-react"

export default function DoubanTimeComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8 bg-[#B2D9D8]">
        <CardContent className="p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">豆瓣时间</h2>
            <h3 className="text-4xl font-bold text-white mb-4">如何读透一本书</h3>
            <p className="text-xl text-white mb-4">12堂阅读写作训练课</p>
            <Button className="bg-[#F5A693] hover:bg-[#F5A693]/90 text-white">
              立即收听 &gt;
            </Button>
          </div>
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Reading illustration"
            width={200}
            height={200}
            className="rounded-full"
          />
        </CardContent>
      </Card>

      <div className="flex justify-between mb-8">
        <Button variant="ghost" className="flex flex-col items-center">
          <Building2 className="h-8 w-8 text-[#F5A693] mb-2" />
          <span>青椒学院</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <Compass className="h-8 w-8 text-[#4A90E2] mb-2" />
          <span>时间发现</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <Grid className="h-8 w-8 text-[#F5A623] mb-2" />
          <span>全部专栏</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <ClipboardList className="h-8 w-8 text-[#9013FE] mb-2" />
          <span>签到</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <User className="h-8 w-8 text-[#7ED321] mb-2" />
          <span>我的</span>
        </Button>
      </div>

      <h3 className="text-xl font-bold mb-4">新品上架：国学名家讲解先秦儒学，阐发儒家核心思想</h3>

      <Card>
        <CardContent className="p-4 flex">
          <Image
            src="/placeholder.svg?height=120&width=120"
            alt="Course cover"
            width={120}
            height={120}
            className="rounded mr-4"
          />
          <div className="flex-1">
            <h4 className="text-lg font-bold mb-2">品读四书——清华国学院儒学经典必修课</h4>
            <p className="text-sm text-gray-600 mb-2">主讲人 陈来</p>
            <p className="text-sm mb-4">
              国学名家讲解先秦儒学，在当代语境里阐发儒家核心思想，讲清儒学的价值，建构新时代文化自信。
            </p>
            <div className="flex justify-between items-center">
              <span className="text-[#FF6B6B] font-bold">59.00元</span>
              <span className="text-gray-400 line-through">99.00元</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
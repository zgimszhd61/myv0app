'use client'

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function DoubanReadingHeaderComponent() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-[#614E3C]">豆瓣读书</h1>
            <div className="relative">
              <Input
                type="text"
                placeholder="书名、作者、ISBN"
                className="pl-2 pr-8 py-1 w-64 text-sm border-gray-300"
              />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=60&width=120"
              alt="2023年度读书榜单"
              width={120}
              height={60}
              className="rounded"
            />
          </div>
        </div>
        <nav className="flex space-x-6 mt-4 text-sm">
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900 px-0">我读</Button>
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900 px-0">动态</Button>
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900 px-0">豆瓣猜</Button>
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900 px-0">分类浏览</Button>
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900 px-0">购书单</Button>
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900 px-0">电子图书</Button>
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900 px-0">2023年度榜单</Button>
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900 px-0">2023年度报告</Button>
        </nav>
      </div>
    </header>
  )
}
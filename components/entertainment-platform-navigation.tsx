'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Flame, Rss, ChevronDown, Newspaper, Calendar, Users, Tv, Book, Music, Video } from 'lucide-react'

const mainCategories = [
  { name: "番剧", icon: <Tv className="w-4 h-4" /> },
  { name: "国创", icon: <Video className="w-4 h-4" /> },
  { name: "综艺", icon: <Users className="w-4 h-4" /> },
  { name: "动画", icon: <Video className="w-4 h-4" /> },
  { name: "鬼畜", icon: <Music className="w-4 h-4" /> },
  { name: "舞蹈", icon: <Users className="w-4 h-4" /> },
  { name: "娱乐", icon: <Music className="w-4 h-4" /> },
  { name: "科技", icon: <Tv className="w-4 h-4" /> },
  { name: "美食", icon: <Tv className="w-4 h-4" /> },
  { name: "汽车", icon: <Tv className="w-4 h-4" /> },
  { name: "运动", icon: <Users className="w-4 h-4" /> },
  { name: "更多", icon: <ChevronDown className="w-4 h-4" /> },
]

const subCategories = [
  { name: "电影", icon: <Video className="w-4 h-4" /> },
  { name: "电视剧", icon: <Tv className="w-4 h-4" /> },
  { name: "纪录片", icon: <Video className="w-4 h-4" /> },
  { name: "游戏", icon: <Tv className="w-4 h-4" /> },
  { name: "音乐", icon: <Music className="w-4 h-4" /> },
  { name: "影视", icon: <Video className="w-4 h-4" /> },
  { name: "知识", icon: <Book className="w-4 h-4" /> },
  { name: "资讯", icon: <Newspaper className="w-4 h-4" /> },
  { name: "生活", icon: <Users className="w-4 h-4" /> },
  { name: "时尚", icon: <Tv className="w-4 h-4" /> },
]

const additionalFeatures = [
  { name: "专栏", icon: <Newspaper className="w-4 h-4" /> },
  { name: "活动", icon: <Calendar className="w-4 h-4" /> },
  { name: "社区中心", icon: <Users className="w-4 h-4" /> },
  { name: "直播", icon: <Video className="w-4 h-4" /> },
  { name: "课堂", icon: <Book className="w-4 h-4" /> },
  { name: "新歌热榜", icon: <Music className="w-4 h-4" /> },
]

export default function EntertainmentPlatformNavigationComponent() {
  return (
    <nav className="max-w-7xl mx-auto p-4">
      <div className="flex items-center space-x-4 mb-4">
        <Button className="rounded-full bg-orange-500 hover:bg-orange-600">
          <Rss className="w-5 h-5 mr-2" />
          动态
        </Button>
        <Button className="rounded-full bg-red-500 hover:bg-red-600">
          <Flame className="w-5 h-5 mr-2" />
          热门
        </Button>
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <div className="flex space-x-4 p-4">
            {mainCategories.map((category) => (
              <Button key={category.name} variant="ghost" className="flex items-center">
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="flex items-center justify-between">
        <ScrollArea className="w-3/4 whitespace-nowrap rounded-md border">
          <div className="flex space-x-4 p-4">
            {subCategories.map((category) => (
              <Button key={category.name} variant="ghost" size="sm" className="flex items-center">
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <div className="flex space-x-2">
          {additionalFeatures.map((feature) => (
            <Button key={feature.name} variant="outline" size="sm" className="flex items-center">
              {feature.icon}
              <span className="ml-2">{feature.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  )
}
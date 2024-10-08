'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Settings, Play } from 'lucide-react'
import Image from 'next/image'

const categories = [
  "全部", "音乐", "游戏", "直播", "合辑", "动作冒险游戏", "自然", "最近上传", "已观看", "发现新视频"
]

const videos = [
  {
    id: 1,
    title: "2-HOUR STUDY WITH ME Pomodoro 25/5 with Snow | No Fire Crackling...",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Study+With+Me",
    duration: "1:56:39",
    creator: "Celine",
    views: "13万",
    uploadTime: "1年前"
  },
  {
    id: 2,
    title: "通过这份激励的电子游戏音乐播放列表提升你的工作效率",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Game+Music",
    duration: "49:49",
    creator: "Khun",
    views: "1376次",
    uploadTime: "12天前"
  },
  {
    id: 3,
    title: "手持大枪【人间无敌】| 跨下宝马【百战】名将！魔王重为何爱的武将！鬼武藏 森长可",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Game+Character",
    duration: "16:35",
    creator: "铲屎官圆爸爸",
    views: "3.1万",
    uploadTime: "1年前"
  },
  {
    id: 4,
    title: "【好聽的韓文歌2024】2024年人月必聽歌曲 | 小時無憂無慮 | 舒服小清新音樂收藏...",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Korean+Music",
    duration: "1:02:54",
    creator: "樂來樂愛 Music",
    views: "4.8万",
    uploadTime: "1个月前"
  }
]

export default function VideoStreamingPlatformComponent() {
  const [activeCategory, setActiveCategory] = useState("全部")

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <Button variant="outline" className="flex items-center">
          <Settings className="w-4 h-4 mr-2" />
          调整推荐内容
        </Button>
        <ScrollArea className="w-[80%] whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "ghost"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <Card key={video.id} className="overflow-hidden">
            <CardContent className="p-0 relative">
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={300}
                height={200}
                layout="responsive"
              />
              <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-1 rounded">
                {video.duration}
              </div>
            </CardContent>
            <CardFooter className="flex-col items-start p-4">
              <div className="flex items-start space-x-4 w-full">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>{video.creator[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                  <h3 className="font-semibold text-sm line-clamp-2">{video.title}</h3>
                  <p className="text-sm text-gray-500">{video.creator}</p>
                  <p className="text-sm text-gray-500">
                    {video.views}次观看 · {video.uploadTime}
                  </p>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
'use client'

import React from 'react'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart } from 'lucide-react'
import Image from 'next/image'

const categories = [
  "推荐", "教育", "穿搭", "美食", "彩妆", "影视", "职场", "情感", "家居", "游戏", "旅行", "健身"
]

const posts = [
  {
    id: 1,
    image: "/placeholder.svg?height=200&width=300&text=Basketball+Court",
    title: "你们懂一眼万年的感觉吗！！！",
    author: "格调",
    likes: 79000,
  },
  {
    id: 2,
    image: "/placeholder.svg?height=200&width=300&text=Celebrities",
    title: "原来他们是亲戚关系，你都知道吗？",
    author: "小故事酒馆",
    likes: 1127,
  },
  {
    id: 3,
    image: "/placeholder.svg?height=200&width=300&text=Hangzhou",
    title: "10.3杭州出啥事了？？彻底疯了吗？",
    author: "e类人才小芹",
    likes: 110,
  },
  {
    id: 4,
    image: "/placeholder.svg?height=200&width=300&text=9/11+Attack",
    title: "震惊世界的美国911事件究竟有多恐怖？",
    author: "全全探案局",
    likes: 2886,
  },
  {
    id: 5,
    image: "/placeholder.svg?height=200&width=300&text=Traditional+Building",
    title: "满觉陇阿红'汤屋'的6个视角，及其内部",
    author: "子墨在杭州",
    likes: 90,
  },
]

export default function  SocialMediaFeedComponent() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {categories.map((category) => (
            <Button key={category} variant="ghost" className="flex-shrink-0">
              {category}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={200}
                layout="responsive"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{post.title}</h3>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Avatar className="w-6 h-6">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" />
                  <AvatarFallback>{post.author[0]}</AvatarFallback>
                </Avatar>
                <span className="text-sm text-gray-500">{post.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-500">
                  {post.likes > 10000 ? `${(post.likes / 10000).toFixed(1)}万` : post.likes}
                </span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
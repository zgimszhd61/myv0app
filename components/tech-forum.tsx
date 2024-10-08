'use client'

import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronUp } from 'lucide-react'

interface Post {
  id: string;
  title: string;
  category: string;
  author: string;
  avatar: string;
  timestamp: string;
  replies: number;
  lastReplyBy: string;
}

const categories = ["技术", "创意", "好玩", "Apple", "酷工作", "交易", "城市", "问与答", "最热", "全部", "R2", "VXNA"]
const subCategories = ["程序员", "Python", "iDev", "Android", "Linux", "node.js", "云计算", "宽带症候群"]

const posts: Post[] = [
  {
    id: "1",
    title: "使用 golang 可以开发一套监控系统吗",
    category: "Go 编程语言",
    author: "florentino",
    avatar: "/placeholder.svg?height=40&width=40",
    timestamp: "几秒前",
    replies: 5,
    lastReplyBy: "guanzhangzhang"
  },
  {
    id: "2",
    title: "Windows 系统，插入 USB 设备电脑会蓝屏",
    category: "程序员",
    author: "CFCL",
    avatar: "/placeholder.svg?height=40&width=40",
    timestamp: "几秒前",
    replies: 13,
    lastReplyBy: "tool2dx"
  },
  {
    id: "3",
    title: "写了个安卓小程序，实时转发短信和未接来电",
    category: "Android",
    author: "jinweijie",
    avatar: "/placeholder.svg?height=40&width=40",
    timestamp: "几秒前",
    replies: 43,
    lastReplyBy: "a1b2c3T"
  },
  {
    id: "4",
    title: "送一枚 follow 邀请码，RSS 重度用户请举手",
    category: "RSS",
    author: "Jasonqiao",
    avatar: "/placeholder.svg?height=40&width=40",
    timestamp: "2 分钟前",
    replies: 75,
    lastReplyBy: "HenLebesgue"
  },
  {
    id: "5",
    title: "不是很懂 NAS，有点问题想问一下下。",
    category: "NAS",
    author: "kokerkov",
    avatar: "/placeholder.svg?height=40&width=40",
    timestamp: "3 分钟前",
    replies: 41,
    lastReplyBy: "xiamy1314"
  },
]

export default function TechForumComponent() {
  const [activeCategory, setActiveCategory] = useState("技术")
  const [activeSubCategory, setActiveSubCategory] = useState("程序员")

  return (
    <div className="max-w-4xl mx-auto p-4">
      <nav className="mb-4">
        <ul className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <li key={category}>
              <Button
                variant={activeCategory === category ? "default" : "ghost"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="mb-6 bg-gray-100 p-2 rounded">
        <ul className="flex flex-wrap gap-2">
          {subCategories.map((category) => (
            <li key={category}>
              <Button
                variant={activeSubCategory === category ? "secondary" : "ghost"}
                onClick={() => setActiveSubCategory(category)}
                size="sm"
              >
                {category}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow">
            <Avatar className="w-10 h-10">
              <AvatarImage src={post.avatar} alt={post.author} />
              <AvatarFallback>{post.author[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-grow">
              <h3 className="text-lg font-medium mb-1">{post.title}</h3>
              <div className="flex items-center text-sm text-gray-500 space-x-2">
                <Badge variant="secondary">{post.category}</Badge>
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.timestamp}</span>
                <span>•</span>
                <span>最后回复来自 {post.lastReplyBy}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <ChevronUp className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-500">{post.replies}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
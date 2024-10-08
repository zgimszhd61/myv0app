'use client'

import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ThumbsUp, Bookmark, Share2, MessageSquare } from "lucide-react"

interface Comment {
  id: number
  author: string
  avatar: string
  content: string
  timestamp: string
  location: string
}

const comments: Comment[] = [
  {
    id: 1,
    author: "阿k",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "那就谈",
    timestamp: "2024-10-05 05:07:40",
    location: "浙江"
  },
  {
    id: 2,
    author: "凹凸木 (我是一只大傻瓜, 呷呷呷呷呷)",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "没有啊",
    timestamp: "2024-10-05 07:02:43",
    location: "河北"
  },
  {
    id: 3,
    author: "小径分叉的花园 (荒腔走板的人生)",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "间歇性恋爱，一年分四次那种啊",
    timestamp: "2024-10-05 07:52:52",
    location: "浙江"
  },
  {
    id: 4,
    author: "Andres (嘿嘿嘿...)",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "好好想，过段时间就不想了",
    timestamp: "2024-10-05 09:39:28",
    location: "浙江"
  },
  {
    id: 5,
    author: "Vogue (生活, 享受每一秒...! )",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "",
    timestamp: "2024-10-05 10:21:05",
    location: "浙江"
  }
]

export default function ForumPostComponent() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <h1 className="text-2xl font-bold mb-4">突然想tan恋爱了</h1>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="不盼蓮莱" />
              <AvatarFallback>不盼</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">来自: 不盼蓮莱</p>
              <p className="text-sm text-gray-500">2024-10-05 00:30:04 浙江</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4">就是说有没有靠谱的</p>
          <div className="flex justify-end space-x-2">
            <Button variant="ghost" size="sm">
              投诉
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="ghost" size="sm">
            <ThumbsUp className="w-4 h-4 mr-2" />
            赞 2
          </Button>
          <Button variant="ghost" size="sm">
            <Bookmark className="w-4 h-4 mr-2" />
            收藏
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="w-4 h-4 mr-2" />
            转发
          </Button>
          <Button variant="ghost" size="sm">
            <MessageSquare className="w-4 h-4 mr-2" />
            回应
          </Button>
        </CardFooter>
      </Card>

      <div className="mt-4 space-y-4">
        <div className="flex justify-between text-sm text-gray-500">
          <div className="space-x-2">
            <Button variant="ghost" size="sm">回应</Button>
            <Button variant="ghost" size="sm">转发</Button>
            <Button variant="ghost" size="sm">赞</Button>
            <Button variant="ghost" size="sm">收藏</Button>
          </div>
          <Button variant="ghost" size="sm">只看楼主</Button>
        </div>

        {comments.map((comment) => (
          <Card key={comment.id}>
            <CardContent className="pt-4">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarImage src={comment.avatar} alt={comment.author} />
                  <AvatarFallback>{comment.author[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{comment.author}</p>
                      <p className="text-sm text-gray-500">{comment.timestamp} {comment.location}</p>
                    </div>
                  </div>
                  <p className="mt-2">{comment.content}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button variant="ghost" size="sm">
                <ThumbsUp className="w-4 h-4 mr-2" />
                赞
              </Button>
              <Button variant="ghost" size="sm">
                回应
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
import React from 'react'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const reviews = [
  {
    id: 1,
    image: "/placeholder.svg?height=300&width=400",
    text: "翻箱倒柜找出来刚毕业那会儿攒下来的各种话剧票、门票、朋友们拍的拍立得。从世界各地寄来的明信片、种种回忆蔓延开来，保存记忆回到质朴的方式可真好呀。",
    user: {
      name: "晖",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  },
  {
    id: 2,
    image: "/placeholder.svg?height=400&width=300",
    text: "好东西要分享出来。",
    user: {
      name: "夜班公交司机",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  },
  {
    id: 3,
    image: "/placeholder.svg?height=300&width=400",
    text: "是回忆、是碎片、是不可磨灭的印迹。",
    user: {
      name: "万物静默如初",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  },
  {
    id: 4,
    image: "/placeholder.svg?height=300&width=400",
    text: "#豆瓣收藏夹2.0# 各种小细节很棒，三种收纳尺寸和收纳袋非常实用。周末晚上又写又贴爱的不亦乐乎 已经变成收藏夹手帐二合一了 填的满满当当翻起来好开心(^^)",
    user: {
      name: "石板绿",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  },
]

export default function UserReviews() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">用户测评</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={review.image}
              alt={`Review image ${review.id}`}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-700 mb-4 line-clamp-3">{review.text}</p>
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src={review.user.avatar} alt={review.user.name} />
                  <AvatarFallback>{review.user.name[0]}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-gray-900">{review.user.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
'use client'

import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Heart, Share } from "lucide-react"

interface Post {
  id: string
  author: string
  avatar: string
  content: string
  images?: string[]
  replies: number
  likes: number
  shares: number
}

const posts: Post[] = [
  {
    id: "1",
    author: "baby monster",
    avatar: "/placeholder.svg",
    content: "第一个公开结婚的90后吗",
    replies: 14,
    likes: 0,
    shares: 0,
  },
  {
    id: "2",
    author: "菁島",
    avatar: "/placeholder.svg",
    content: "",
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
    replies: 159,
    likes: 818,
    shares: 26,
  },
  {
    id: "3",
    author: "foxfoxfox",
    avatar: "/placeholder.svg",
    content: "求推类似剧！！！太喜欢了根本找不到替代品😭",
    images: ["/placeholder.svg?height=400&width=600"],
    replies: 439,
    likes: 2138,
    shares: 130,
  },
]

export default function SocialFeedComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">#为你精选站内热点内容</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar>
                <AvatarImage src={post.avatar} alt={post.author} />
                <AvatarFallback>{post.author[0]}</AvatarFallback>
              </Avatar>
              <h2 className="text-lg font-semibold">{post.author}</h2>
            </CardHeader>
            <CardContent>
              {post.content && <p className="mb-4">{post.content}</p>}
              {post.images && (
                <div className="grid grid-cols-2 gap-2">
                  {post.images.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={`Post image ${index + 1}`}
                      width={400}
                      height={300}
                      className="rounded-md object-cover"
                    />
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" size="sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                {post.replies} 回应
              </Button>
              <Button variant="ghost" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                赞 ({post.likes})
              </Button>
              <Button variant="ghost" size="sm">
                <Share className="w-4 h-4 mr-2" />
                {post.shares} 转发
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
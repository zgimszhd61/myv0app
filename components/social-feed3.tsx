'use client'

import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ThumbsUp, MessageCircle, Share2 } from "lucide-react"

interface Post {
  id: string
  author: string
  avatar: string
  date: string
  content: string
  topic: string
  likes: number
  comments: number
  shares: number
  image?: string
}

const posts: Post[] = [
  {
    id: "1",
    author: "Lina de Paris",
    avatar: "/placeholder.svg",
    date: "2023-12-06 05:05:35",
    content: "最近接连读了上野千鹤子的《一个人的老后》、戴安娜·阿特希尔的《暮色将近》，以及偶然刷到博主`小Lin说`一期关于北京养老院的视频，让我想到简单写写身边普通法国老人的晚年生活给大家参考一下。法国目前65岁以上人口约占总人口的21%，女性人均预期寿命为85.3岁，男性...",
    topic: "我们该如何面对衰老和死亡?",
    likes: 862,
    comments: 76,
    shares: 153,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "2",
    author: "苗Miau",
    avatar: "/placeholder.svg",
    date: "2023-12-01 16:15:56",
    content: "一波三折的剧情对故事来说是幸事，但当悬疑类探案故事集打破第四面墙，介入生活，吸食生活，就十分面目可怖了。近期不慎丢失ipad、iphone等物，损失过万，经过多方努力，于72小时内找回，浅记录下渡人渡己，祝你永远不需要这篇攻略。 ...",
    topic: "普通人如何清醒地活",
    likes: 734,
    comments: 180,
    shares: 151,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function SocialFeedComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">话题精选动态 / 我关注的话题动态</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar>
                <AvatarImage src={post.avatar} alt={post.author} />
                <AvatarFallback>{post.author[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-lg font-semibold">{post.author} 的日记</h2>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{post.content}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-blue-600">来自话题 {post.topic}</span>
                {post.image && (
                  <Image src={post.image} alt="Post image" width={100} height={100} className="rounded-md" />
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" size="sm">
                <ThumbsUp className="w-4 h-4 mr-2" />
                {post.likes}
              </Button>
              <Button variant="ghost" size="sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                {post.comments} 回应
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                {post.shares} 推荐
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
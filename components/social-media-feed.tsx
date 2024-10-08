'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThumbsUp, MessageSquare, Share2, Bookmark, Heart } from 'lucide-react'

interface Post {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  likes: number;
  comments: number;
  shares: number;
}

const posts: Post[] = [
  {
    id: 1,
    title: "A股大涨，5天逾80家公司发布股东减持结果或计划公告，部分股东提前终止减持，哪些信息值得关注？",
    excerpt: "阿星派驻地球卧底：在一片欢歌笑语声中，一则本应重磅的消息被人忽视了。本来它才是这场惊天救援的原因。... 阅读全文",
    author: "阿星派驻地球卧底",
    likes: 1214,
    comments: 306,
    shares: 0
  },
  {
    id: 2,
    title: "Team Leader 究竟要不要写代码?",
    excerpt: "陈胜：你问的是 tech leader吧，带5-10人一线程序员的，或者称为技术经理 当然要写代码，这个是干活的主力，主程序员 TL的技术水平必须过硬，... 阅读全文",
    author: "陈胜",
    likes: 198,
    comments: 79,
    shares: 0
  },
  {
    id: 3,
    title: "什么是「苹果式中文」？",
    excerpt: "刘飞：「苹果式中文」的本质是中文语感很差的文字游戏。就是那种，你仔细想想也大概能明白他们想表达的意思，但就是拗口、别扭和难受。特征的话，有这么几项：... 阅读全文",
    author: "刘飞",
    likes: 14000,
    comments: 622,
    shares: 0
  },
  {
    id: 4,
    title: "《黑神话》取景地小西天被喊差评，该事件对其他旅游景区有哪些警示作用?",
    excerpt: "天霸动霸 tua：转发：作为隐县人，我只能说，我的家乡尽力了，为了这淡淡的富贵，好多单位组织志愿者已经在景区服务几个月了；一夜之间把路面重新铺好，摊... 阅读全文",
    author: "天霸动霸 tua",
    likes: 10000,
    comments: 276,
    shares: 0
  }
]

export default function SocialMediaFeedComponent() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <Tabs defaultValue="recommended" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="follow">关注</TabsTrigger>
          <TabsTrigger value="recommended">推荐</TabsTrigger>
          <TabsTrigger value="hot">热榜</TabsTrigger>
          <TabsTrigger value="video">视频</TabsTrigger>
        </TabsList>
        <TabsContent value="recommended">
          {posts.map((post) => (
            <Card key={post.id} className="mb-4">
              <CardHeader>
                <CardTitle className="text-lg font-bold">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">{post.author}</p>
                <p className="text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    赞同 {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    {post.comments} 条评论
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    分享
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Bookmark className="w-4 h-4 mr-2" />
                    收藏
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Heart className="w-4 h-4 mr-2" />
                    喜欢
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
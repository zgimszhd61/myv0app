'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThumbsUp, MessageSquare, Share2, Bookmark, Heart, ChevronUp, ChevronDown } from 'lucide-react'

export default function QaPlatformDetail() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <Tabs defaultValue="story" className="w-full mb-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="story">故事</TabsTrigger>
          <TabsTrigger value="folk">民间故事</TabsTrigger>
          <TabsTrigger value="horror">恐怖文</TabsTrigger>
          <TabsTrigger value="riddle">脑洞类问题</TabsTrigger>
          <TabsTrigger value="mystery">灵异文</TabsTrigger>
        </TabsList>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            有哪些令人恐惧的民间传说？
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Button variant="default">关注问题</Button>
            <Button variant="outline">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
              写回答
            </Button>
            <Button variant="outline">邀请回答</Button>
            <Button variant="ghost" className="ml-auto">
              <ThumbsUp className="w-4 h-4 mr-2" />
              好问题 112
            </Button>
            <Button variant="ghost">
              <MessageSquare className="w-4 h-4 mr-2" />
              1 条评论
            </Button>
            <Button variant="ghost">
              <Share2 className="w-4 h-4 mr-2" />
              分享
            </Button>
          </div>

          <div className="text-sm text-gray-500">
            922 个回答
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="不嘻嘻" />
                <AvatarFallback>不嘻嘻</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">不嘻嘻</div>
                <div className="text-sm text-gray-500">奇迹深小孩</div>
              </div>
            </div>
            <Button variant="outline">+ 关注</Button>
          </div>

          <div className="text-sm text-gray-500">
            327 人赞同了该回答
          </div>

          <Badge variant="secondary" className="mb-4">本回答节选自盐选专栏，有助于解答该问题</Badge>

          <div className="space-y-4">
            <p>我们村有着甲仙*的传说，可百年来谁都没有见过。</p>
            <p>直到饿死的奶奶回来了，她一手的长甲，双手白嫩。</p>
            <p>奶奶的指甲一甲难求，人人都说她是神仙下凡。</p>
            <p>没有人发现，吃过指甲的人，浑身都布满了甲印！</p>
            <p>1</p>
            <p>我的奶奶不是我的奶奶，她就是一个怪物！</p>
            <p>人人都供奉她为神仙，她的指甲让人为之大打出手，她是我们村的甲儿仙。</p>
            <p>谁也不知道，人前华丽富贵的甲儿仙，背地里如何哀嚎：</p>
            <p>「别拔了，我疼，我疼！</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex space-x-2">
            <Button variant="outline">
              <ChevronUp className="w-4 h-4 mr-2" />
              赞同 327
            </Button>
            <Button variant="outline">
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost">
              <MessageSquare className="w-4 h-4 mr-2" />
              28 条评论
            </Button>
            <Button variant="ghost">
              <Share2 className="w-4 h-4 mr-2" />
              分享
            </Button>
            <Button variant="ghost">
              <Bookmark className="w-4 h-4 mr-2" />
              收藏
            </Button>
            <Button variant="ghost">
              <Heart className="w-4 h-4 mr-2" />
              喜欢
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
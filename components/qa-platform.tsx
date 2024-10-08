'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Eye, MessageSquare, Star, PenSquare } from 'lucide-react'

interface Question {
  id: number;
  title: string;
  views: number;
  answers: number;
  follows: number;
}

const questions: Question[] = [
  {
    id: 1,
    title: "有没有那种女主人间清醒，且敢作敢当绝不委屈自己的文?",
    views: 4618810,
    answers: 1222,
    follows: 2687
  },
  {
    id: 2,
    title: "有哪些令人恐惧的民间传说?",
    views: 11833596,
    answers: 921,
    follows: 3579
  },
  {
    id: 3,
    title: "有没有那种远筹帷幄的大女主爽文?",
    views: 6451278,
    answers: 750,
    follows: 2161
  },
  {
    id: 4,
    title: "有没有什么巨爽无比，能让你彻夜看完的爽文?",
    views: 4538018,
    answers: 983,
    follows: 2362
  },
  {
    id: 5,
    title: "有没有重生文推荐?",
    views: 905344,
    answers: 593,
    follows: 1192
  },
  {
    id: 6,
    title: "有没有人来写一个，女主比女配还嫌的小说?",
    views: 121552304,
    answers: 1738,
    follows: 16660
  },
  {
    id: 7,
    title: "恐怖是什么感觉?",
    views: 116667489,
    answers: 5952,
    follows: 20000
  },
  {
    id: 8,
    title: "如果虐文女主突然醒悟，会有什么故事?",
    views: 212588043,
    answers: 4118,
    follows: 38120
  }
]

export default function QaPlatform() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        <Tabs defaultValue="hot" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="hot">高热问题</TabsTrigger>
            <TabsTrigger value="submissions">投稿热点</TabsTrigger>
            <TabsTrigger value="brother">手哥提问</TabsTrigger>
          </TabsList>
          <TabsContent value="hot">
            <p className="text-sm text-gray-500 mb-4">
              故事领域近7天浏览量飙升最快的 top50 问题打包放送
            </p>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">问题</h2>
              <span className="text-sm text-gray-500">操作</span>
            </div>
            {questions.map((question, index) => (
              <React.Fragment key={question.id}>
                {index > 0 && <Separator className="my-4" />}
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold">{question.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {question.views.toLocaleString()} 浏览
                      </span>
                      <span className="flex items-center">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        {question.answers.toLocaleString()} 回答
                      </span>
                      <span className="flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        {question.follows.toLocaleString()} 关注
                      </span>
                    </div>
                  </div>
                  <Button variant="default" className="bg-blue-500 hover:bg-blue-600 text-white">
                    <PenSquare className="w-4 h-4 mr-2" />
                    写回答
                  </Button>
                </div>
              </React.Fragment>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
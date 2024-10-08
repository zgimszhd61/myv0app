'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
    title: "《西游记》里，孙悟空为什么不找如来报仇?",
    views: 29583833,
    answers: 3673,
    follows: 25707
  },
  {
    id: 2,
    title: "《西游记》怎么接后续?",
    views: 15108188,
    answers: 741,
    follows: 4840
  },
  {
    id: 3,
    title: "《西游记》里有哪些可悲的细节?",
    views: 24767869,
    answers: 1019,
    follows: 27444
  },
  {
    id: 4,
    title: "《西游记》有哪些隐喻内容和暗示?",
    views: 33465540,
    answers: 955,
    follows: 17871
  },
  {
    id: 5,
    title: "如果一个人突然知道了宇宙的终极真相，他会不会疯掉?",
    views: 3051609,
    answers: 623,
    follows: 1492
  },
  {
    id: 6,
    title: "人类现在有没有可能是宇宙中最高等的文明?",
    views: 31222129,
    answers: 3754,
    follows: 22438
  },
  {
    id: 7,
    title: "是哪吒比较皮还是孙悟空比较皮?",
    views: 1131546,
    answers: 83,
    follows: 209
  },
  {
    id: 8,
    title: "金蝉子为什么要转世?",
    views: 1733303,
    answers: 80,
    follows: 221
  }
]

export default function QaPlatform() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">问题</h2>
          <span className="text-sm text-gray-500">操作</span>
        </div>
        {questions.map((question, index) => (
          <React.Fragment key={question.id}>
            {index > 0 && <Separator className="my-4" />}
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{question.title}</h3>
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
              <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
                <PenSquare className="w-4 h-4 mr-2" />
                写回答
              </Button>
            </div>
          </React.Fragment>
        ))}
      </CardContent>
    </Card>
  )
}
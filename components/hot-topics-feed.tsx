'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Flame, Share2 } from 'lucide-react'
import Image from 'next/image'

interface Topic {
  id: number;
  title: string;
  description: string;
  views: number;
  image?: string;
  isNew?: boolean;
}

const topics: Topic[] = [
  {
    id: 1,
    title: "乒乓球亚锦赛男团首盘，王楚钦2-3不敌14岁伊朗小将，目前王楚钦的问题到底出在哪?",
    description: "北京时间10月8日，2024年乒乓球亚锦赛在哈萨克斯坦阿...",
    views: 34620000,
    image: "/placeholder.svg?height=80&width=120&text=Table+Tennis"
  },
  {
    id: 2,
    title: "10月8日创业板指全天大涨17.25%，两市成交额超3.45万亿创新高，如何看待今日行情?",
    description: "市场全天大幅高开回落后再度走高，创业板指续创历史单日...",
    views: 30950000,
    image: "/placeholder.svg?height=80&width=120&text=Stock+Market"
  },
  {
    id: 3,
    title: "2024诺贝尔物理学奖授予人工神经网络机器学习，为什么会颁给AI领域?",
    description: "瑞典皇家科学院10月8日宣布，将2024年诺贝尔物理学奖...",
    views: 18360000,
    image: "/placeholder.svg?height=80&width=120&text=Nobel+Prize"
  },
  {
    id: 4,
    title: "物理学界的人是如何看待今年诺贝尔物理学奖的颁奖结果的?",
    description: "",
    views: 1260000,
    isNew: true
  },
  {
    id: 5,
    title: "为什么越谨小慎微、按部就班的人，越常常感到「失控感」？",
    description: "",
    views: 560000,
    image: "/placeholder.svg?height=80&width=120&text=Dice",
    isNew: true
  }
]

export default function HotTopicsFeedComponent() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-bold flex items-center">
            <Badge variant="destructive" className="mr-2">
              辟谣
            </Badge>
            辟谣专区
          </CardTitle>
        </CardHeader>
        <CardContent>
          {topics.map((topic, index) => (
            <div key={topic.id} className="mb-4 last:mb-0">
              <div className="flex items-start">
                <span className="text-2xl font-bold text-orange-500 mr-4">{index + 1}</span>
                <div className="flex-grow">
                  <h3 className="text-base font-semibold mb-1">{topic.title}</h3>
                  {topic.description && (
                    <p className="text-sm text-gray-600 mb-2">{topic.description}</p>
                  )}
                  <div className="flex items-center text-sm text-gray-500">
                    <Flame className="w-4 h-4 mr-1" />
                    <span className="mr-4">{(topic.views / 10000).toFixed(0)}万热度</span>
                    <Share2 className="w-4 h-4 mr-1" />
                    <span>分享</span>
                    {topic.isNew && (
                      <Badge variant="secondary" className="ml-2">
                        新
                      </Badge>
                    )}
                  </div>
                </div>
                {topic.image && (
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    width={80}
                    height={60}
                    className="ml-4 rounded"
                  />
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
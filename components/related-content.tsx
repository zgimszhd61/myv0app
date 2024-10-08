'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Eye, Plus } from 'lucide-react'
import Image from 'next/image'

interface RelatedQuestion {
  id: string;
  question: string;
  answer: string;
}

interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  views: number;
}

const relatedQuestions: RelatedQuestion[] = [
  {
    id: "1",
    question: "How will Taiwan balance its energy needs with its economic goals",
    answer: "Taiwan is exploring various strategies to balance its energy needs with economic goals, including investing in renewable energy sources, improving energy efficiency, and diversifying its energy mix."
  },
  {
    id: "2",
    question: "What are the potential economic impacts of Taiwan's energy shortages",
    answer: "Energy shortages in Taiwan could lead to production disruptions in key industries, particularly the semiconductor sector, potentially affecting global supply chains and Taiwan's economic growth."
  },
  {
    id: "3",
    question: "How might Taiwan's energy policy changes affect its global trade partnerships",
    answer: "Changes in Taiwan's energy policy could impact its competitiveness in global markets, potentially affecting trade relationships, especially in energy-intensive industries like semiconductor manufacturing."
  },
  {
    id: "4",
    question: "What are the environmental implications of Taiwan's current energy mix",
    answer: "Taiwan's current energy mix, which relies heavily on fossil fuels, has significant environmental implications including air pollution and greenhouse gas emissions. The country is working to increase its share of renewable energy to address these issues."
  },
  {
    id: "5",
    question: "How can Taiwan's renewable energy targets be more effectively achieved",
    answer: "To achieve its renewable energy targets more effectively, Taiwan can focus on improving infrastructure, increasing investment in research and development, streamlining regulatory processes, and fostering public-private partnerships in the renewable energy sector."
  }
]

const articles: Article[] = [
  {
    id: "1",
    title: "台湾半导体远程关闭开关",
    description: "荷兰半导体设备制造商ASML和全球最大的芯片...",
    image: "/placeholder.svg?height=100&width=150&text=Semiconductor",
    views: 35657
  },
  {
    id: "2",
    title: "中国提前6年实现可再生能源目标",
    description: "据彭博新闻报道，中国在2024年7月的风能和太阳...",
    image: "/placeholder.svg?height=100&width=150&text=Renewable+Energy",
    views: 9830
  },
  {
    id: "3",
    title: "马来西亚的韧性科技热潮",
    description: "根据马来西亚贸易和工业部长扎夫鲁·阿兹兹的说...",
    image: "/placeholder.svg?height=100&width=150&text=Tech+Boom",
    views: 3007
  },
  {
    id: "4",
    title: "人工智能需求重启三里岛",
    description: "根据最近的报道，人工智能的快速发展正在推动核...",
    image: "/placeholder.svg?height=100&width=150&text=AI+Energy",
    views: 40320
  }
]

export default function RelatedContentComponent() {
  const [isPro, setIsPro] = useState(false)

  return (
    <div className="max-w-3xl mx-auto p-4">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="mr-2">相关的</span>
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {relatedQuestions.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="mr-2">继续阅读</span>
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {articles.map((article) => (
            <Card key={article.id}>
              <CardContent className="p-4">
                <div className="flex space-x-4">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={100}
                    height={100}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{article.title}</CardTitle>
                    <p className="text-sm text-gray-600 mb-2">{article.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Eye className="w-4 h-4 mr-1" />
                      <span>{article.views.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Input placeholder="提出后续问题" className="flex-1" />
              <Button size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Pro</span>
              <Switch checked={isPro} onCheckedChange={setIsPro} />
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
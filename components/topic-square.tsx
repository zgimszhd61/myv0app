'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Topic {
  id: string
  title: string
}

const topics: Topic[] = [
  { id: "1", title: "遛狗奇遇记" },
  { id: "2", title: "冬天是什么支撑你早起？" },
  { id: "3", title: "如电影情节一般的亲身经历" },
  { id: "4", title: "我的博士生活" },
  { id: "5", title: "留在老家工作后的生活" },
  { id: "6", title: "通勤路上积少成多做成的事" },
]

export function TopicSquareComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">话题广场</h1>
        <Button variant="link" className="text-blue-600">
          换一批看看
        </Button>
      </div>
      <h2 className="text-xl font-semibold text-green-600 mb-6">推荐你来参与 · · · · ·</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Card key={topic.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg text-blue-600">{topic.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow"></CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full text-green-600 border-green-600 hover:bg-green-50">
                参与话题
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
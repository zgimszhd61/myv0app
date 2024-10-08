'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Book {
  title: string
  author: string
  genre: string
  coverUrl?: string
}

interface RankingCategory {
  title: string
  description: string
  books: Book[]
}

const rankingCategories: RankingCategory[] = [
  {
    title: "连载榜",
    description: "签约作品,2 日内有更新，按周热度排行（榜单前 10 作品不重复进入潜力榜）",
    books: [
      { title: "欢迎回家", author: "陈之遥", genre: "女性 家庭故事", coverUrl: "/placeholder.svg?height=120&width=80" },
      { title: "光明世界", author: "", genre: "言情" },
      { title: "越过的蓝色海", author: "", genre: "言情" },
      { title: "一心二医", author: "", genre: "女性" },
      { title: "惊闻", author: "", genre: "悬疑" },
      { title: "初雪覆盖里士满", author: "", genre: "女性" },
      { title: "爱殇", author: "", genre: "言情" },
      { title: "鱼刺骨", author: "", genre: "言情" },
      { title: "抗恳树", author: "", genre: "言情" },
      { title: "台风天", author: "", genre: "言情" },
    ]
  },
  {
    title: "潜力榜",
    description: "签约作品,2 日内有更新日字数在二万至十万之间，按周阅读时长排序",
    books: [
      { title: "一晴盛夏深", author: "林不容", genre: "言情 现代言情", coverUrl: "/placeholder.svg?height=120&width=80" },
      { title: "爱情事务处理局", author: "", genre: "女性" },
      { title: "怪味糖", author: "", genre: "言情" },
      { title: "熟女半熟", author: "", genre: "女性" },
      { title: "鲫鱼烧的后遗症", author: "", genre: "悬疑" },
      { title: "盲眠", author: "", genre: "言情" },
      { title: "基因争夺", author: "", genre: "言情" },
      { title: "宫室宜家", author: "", genre: "女性" },
      { title: "晚来熟", author: "", genre: "言情" },
      { title: "暗夜中的情人", author: "", genre: "言情" },
    ]
  },
  {
    title: "畅销榜（周）",
    description: "按照作品过去 7 天销售额排序",
    books: [
      { title: "这里没有善男信女", author: "柳爱虎", genre: "言情 现代言情", coverUrl: "/placeholder.svg?height=120&width=80" },
      { title: "典妻", author: "", genre: "言情" },
      { title: "达克兰港", author: "", genre: "言情" },
      { title: "此地良宵", author: "", genre: "言情" },
      { title: "云胡不喜", author: "", genre: "言情" },
      { title: "浪漫有限合伙", author: "", genre: "女性" },
      { title: "爱在两千公里外", author: "", genre: "言情" },
      { title: "智者不入爱河", author: "", genre: "女性" },
      { title: "他先爱上她的", author: "", genre: "言情" },
      { title: "装腔启示录", author: "", genre: "言情" },
    ]
  },
  {
    title: "新人榜",
    description: "作者在豆瓣阅读平台首次发布的作品，签约时间在 60 天内，且 3 日内有更新，按照周阅读...",
    books: [
      { title: "越过的蓝色海", author: "咸鱼", genre: "言情 现代言情", coverUrl: "/placeholder.svg?height=120&width=80" },
      { title: "破晓之光：商周传奇", author: "", genre: "幻想" },
      { title: "抗恳树", author: "", genre: "言情" },
      { title: "恶的表达式", author: "", genre: "悬疑" },
      { title: "鱼刺骨", author: "", genre: "言情" },
      { title: "天降横财与老公", author: "", genre: "言情" },
      { title: "形婚第五年", author: "", genre: "言情" },
      { title: "鲫鱼烧的后遗症", author: "", genre: "悬疑" },
      { title: "基因争夺", author: "", genre: "言情" },
      { title: "暗夜中的情人", author: "", genre: "言情" },
    ]
  },
]

export default function BookRankingsComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">排行</h1>
        <Button variant="link">查看更多</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {rankingCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
              <p className="text-sm text-gray-500">{category.description}</p>
            </CardHeader>
            <CardContent>
              {category.books.map((book, bookIndex) => (
                <div key={bookIndex} className="flex items-center mb-4">
                  <span className="text-lg font-bold mr-4 w-6 text-right">{bookIndex + 1}</span>
                  {book.coverUrl && bookIndex === 0 && (
                    <Image
                      src={book.coverUrl}
                      alt={book.title}
                      width={80}
                      height={120}
                      className="mr-4"
                    />
                  )}
                  <div>
                    <h3 className="font-semibold">{book.title}</h3>
                    {book.author && <p className="text-sm text-gray-600">{book.author}</p>}
                    <p className="text-sm text-gray-500">{book.genre}</p>
                  </div>
                </div>
              ))}
              <Button variant="link" className="mt-2">查看详情</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
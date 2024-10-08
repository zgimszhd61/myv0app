'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Book {
  id: number
  title: string
  author: string
  description: string
  cover: string
}

const books: Book[] = [
  {
    id: 1,
    title: "典妻",
    author: "青灯",
    description: "傻儿子，你就不要我们了？",
    cover: "/placeholder.svg?height=200&width=150"
  },
  {
    id: 2,
    title: "此地良宵",
    author: "李丁莹",
    description: "跟无情错老板一起翻旧账。",
    cover: "/placeholder.svg?height=200&width=150"
  },
  {
    id: 3,
    title: "爱在两千公里外",
    author: "吃粟子的喵喵",
    description: "一次奔赴，一场救赎。",
    cover: "/placeholder.svg?height=200&width=150"
  },
  {
    id: 4,
    title: "易情",
    author: "玉观音",
    description: "玉观音，死美人，徐少的豁脾小夫人",
    cover: "/placeholder.svg?height=200&width=150"
  },
  {
    id: 5,
    title: "问清如许",
    author: "叶不凉",
    description: "水产养殖女博士x乡镇企业继承人",
    cover: "/placeholder.svg?height=200&width=150"
  }
]

const genres = [
  "全部", "悬疑", "破镜重圆", "先婚后爱", "职场", "青梅竹马", "校园", 
  "群像", "治愈", "熟男熟女", "相爱相杀", "刑侦", "天作之合", "民国", "古代言情"
]

export default function LiteraryContestComponent() {
  return (
    <div className="container mx-auto px-4">
      <div className="relative mb-8">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="青春言情 - 主题征稿·第六季"
          width={1200}
          height={300}
          className="w-full rounded-lg"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl font-bold mb-2">青春言情</h1>
          <p className="text-xl">主题征稿·第六季</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <Image src="/placeholder.svg?height=24&width=24" alt="Icon" width={24} height={24} />
          <span className="font-semibold">林不晚作品《刺猬》新书上市</span>
        </div>
        <div className="space-x-4">
          <Button variant="ghost">征文专区</Button>
          <Button variant="ghost">出版与改编</Button>
          <Button variant="ghost">作者福利</Button>
        </div>
      </div>

      <Tabs defaultValue="完本频道" className="mb-6">
        <TabsList>
          <TabsTrigger value="完本频道">完本频道</TabsTrigger>
          <TabsTrigger value="言情频道">言情频道</TabsTrigger>
          <TabsTrigger value="悬疑频道">悬疑频道</TabsTrigger>
          <TabsTrigger value="女性频道">女性频道</TabsTrigger>
          <TabsTrigger value="幻想频道">幻想频道</TabsTrigger>
          <TabsTrigger value="同人频道">同人频道</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">畅销金榜</h2>
        <div className="flex flex-wrap gap-2">
          {genres.map((genre, index) => (
            <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm">
              {genre}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {books.map((book) => (
          <Card key={book.id}>
            <CardContent className="p-4">
              <Image
                src={book.cover}
                alt={book.title}
                width={150}
                height={200}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="font-semibold mb-1">{book.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{book.author}</p>
              <p className="text-sm">{book.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
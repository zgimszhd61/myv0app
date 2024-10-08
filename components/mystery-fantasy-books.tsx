'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown } from "lucide-react"

interface Book {
  id: number
  title: string
  author: string
  description: string
  coverUrl: string
  wordCount: string
  genre: string
  status: string
}

const books: Book[] = [
  {
    id: 1,
    title: "令她战栗的光辉",
    author: "桑文鹤",
    description: "因不育而导致婚姻失败的撰稿人柴佳梅搬回老家与丈偶多年的父亲柴润林同住，也因此认识了父亲的交往对象梁清香。柴佳梅与梁清香不睦。梁清香沉...",
    coverUrl: "/placeholder.svg?height=150&width=100",
    wordCount: "9.3 万字",
    genre: "社会派",
    status: "连载中"
  },
  {
    id: 2,
    title: "花腐",
    author: "芝喜",
    description: "一场暴雪压塌了在建中的体育馆，废墟下，白骨支离，警服残破，唯有警号仍旧灼目。何以不解，父亲殉职后早已火化入殓，为何尸骨会在此处重现？ ...",
    coverUrl: "/placeholder.svg?height=150&width=100",
    wordCount: "22.8 万字",
    genre: "社会派",
    status: "连载中"
  },
  {
    id: 3,
    title: "应如是",
    author: "柒行",
    description: "应如是看着他，微一挑眉：`你现在这样，看上去还比较像一个正人君子。在魔界那身装扮，像个......` `像个什么？`应如是中肯道：`祸害。`应陆离像是...",
    coverUrl: "/placeholder.svg?height=150&width=100",
    wordCount: "22.2 万字",
    genre: "幻想言情",
    status: "连载中"
  },
  {
    id: 4,
    title: "山中居灵神簿·下",
    author: "页面异常",
    description: "一辆载满乘客的列车突然失去控制，仅有方向盘可以使用，你是唯一懂得如何操纵列车的人。前方有两条轨道，左侧轨道上有五个孩子，右侧轨道上有个...",
    coverUrl: "/placeholder.svg?height=150&width=100",
    wordCount: "4.4 万字",
    genre: "都市幻想",
    status: "连载中"
  },
  {
    id: 5,
    title: "棉铃虫",
    author: "李喜儿",
    description: "一名死刑犯在被执行的前一秒，揭发了另一起凶杀案的真凶，因为戴罪立功，他的死刑暂缓。在他指认的埋尸地点，刑警挖出了一具已成白骨的女尸。这...",
    coverUrl: "/placeholder.svg?height=150&width=100",
    wordCount: "2.7 万字",
    genre: "社会派",
    status: "已完结"
  },
  {
    id: 6,
    title: "建安十八年",
    author: "墨琰",
    description: "一场大雨过后，禹安县北郊发现一具被野狗啃噬的女尸，尸体双目凸出，嘴唇大张，脸上布满了深可见骨的伤痕。捕头陈琅和师爷沈青江迅速锁定了嫌犯...",
    coverUrl: "/placeholder.svg?height=150&width=100",
    wordCount: "15.3 万字",
    genre: "刑侦",
    status: "连载中"
  }
]

export default function MysteryFantasyBooksComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">悬疑幻想精选</h1>
      
      <div className="flex justify-between items-center mb-6">
        <Button variant="outline" className="text-gray-600">
          筛选 <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
        <Tabs defaultValue="综合">
          <TabsList>
            <TabsTrigger value="综合">综合</TabsTrigger>
            <TabsTrigger value="热度最高">热度最高</TabsTrigger>
            <TabsTrigger value="最近更新">最近更新</TabsTrigger>
            <TabsTrigger value="销量最高">销量最高</TabsTrigger>
            <TabsTrigger value="好评最多">好评最多</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {books.map((book) => (
          <Card key={book.id} className="flex overflow-hidden">
            <Image
              src={book.coverUrl}
              alt={book.title}
              width={100}
              height={150}
              className="object-cover"
            />
            <CardContent className="flex-1 p-4">
              <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
              <p className="text-gray-600 mb-2">{book.author}</p>
              <p className="text-sm mb-4 line-clamp-2">{book.description}</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="mr-4">{book.genre}</span>
                <span className="mr-4">{book.wordCount}</span>
                <span>{book.status}</span>
              </div>
              <Button variant="outline" className="w-full">加入书架</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
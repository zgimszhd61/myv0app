'use client'

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface Group {
  name: string
  memberCount: number
  imageUrl: string
}

const groups: Group[] = [
  { name: "杭州豆瓣", memberCount: 172854, imageUrl: "/placeholder.svg?height=50&width=50" },
  { name: "广州找工作", memberCount: 9804, imageUrl: "/placeholder.svg?height=50&width=50" },
  { name: "杭州最靠谱的谈恋爱小组", memberCount: 53896, imageUrl: "/placeholder.svg?height=50&width=50" },
  { name: "假装情侣（杭州）", memberCount: 29270, imageUrl: "/placeholder.svg?height=50&width=50" },
  { name: "我们都爱看博客.", memberCount: 13503, imageUrl: "/placeholder.svg?height=50&width=50" },
  { name: "吃喝玩乐泡泡杭州", memberCount: 66009, imageUrl: "/placeholder.svg?height=50&width=50" },
  { name: "知乎", memberCount: 24731, imageUrl: "/placeholder.svg?height=50&width=50" },
  { name: "独立博客集中营", memberCount: 5555, imageUrl: "/placeholder.svg?height=50&width=50" },
  { name: "区块链", memberCount: 14212, imageUrl: "/placeholder.svg?height=50&width=50" },
  { name: "麦肯锡季刊", memberCount: 3069, imageUrl: "/placeholder.svg?height=50&width=50" },
]

export default function DoubanGroupsComponent() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-4">我的豆瓣小组</h1>
          <nav className="flex space-x-4 mb-4">
            <Button variant="ghost">小组主页</Button>
            <Button variant="secondary">加入的小组</Button>
            <Button variant="ghost">关注的小组</Button>
            <Button variant="ghost">发起</Button>
            <Button variant="ghost">回应</Button>
            <Button variant="ghost">喜欢</Button>
            <Button variant="ghost">推荐</Button>
          </nav>
        </div>
        <div className="text-right">
          <Avatar className="w-16 h-16 mb-2">
            <AvatarImage src="/placeholder.svg?height=64&width=64" alt="阿难" />
            <AvatarFallback>阿难</AvatarFallback>
          </Avatar>
          <h2 className="font-bold">阿难</h2>
          <p className="text-sm text-gray-500">常居: 浙江杭州</p>
          <Button variant="outline" size="sm" className="mt-2">
            豆瓣主页
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((group, index) => (
          <Card key={index}>
            <CardContent className="flex items-center p-4">
              <Image
                src={group.imageUrl}
                alt={group.name}
                width={50}
                height={50}
                className="rounded-md mr-4"
              />
              <div>
                <h3 className="font-semibold">{group.name}</h3>
                <p className="text-sm text-gray-500">({group.memberCount})</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
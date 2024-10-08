'use client'

import { Star, BookmarkPlus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export default function BookDetailsComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">脑袋可以对半切，真心却不能对半分</h1>
      <div className="flex items-center space-x-2 mb-4">
        <Badge variant="secondary">签约作品</Badge>
        <Badge variant="secondary">已定价</Badge>
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400" />
          <Star className="w-4 h-4 text-yellow-400" />
          <Star className="w-4 h-4 text-yellow-400" />
          <Star className="w-4 h-4 text-yellow-400" />
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-gray-500 ml-1">暂无评价</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge>女性小说</Badge>
        <Badge>职场女性</Badge>
        <Badge>都市</Badge>
        <Badge>轻松</Badge>
        <Badge>强强</Badge>
        <Badge>群像</Badge>
        <Badge>业界精英</Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-normal text-gray-500">字数</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">126,886</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-normal text-gray-500">阅读</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">165,909</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-normal text-gray-500">加入书架</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1,929</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-normal text-gray-500">推荐票</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">6,170</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>简介</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">张怀凝是前途无量的神经内科医生，她只想看病人，不想挑男人，可有两个男人想被她挑。</p>
          <p className="mb-2">多年来的同事兼好友竟然是她没血缘的表弟。知恩图报，他愿意为她做任何事。</p>
          <p className="mb-2">主动提出离婚的前夫竟然说离不开她，他想要再来一次的机会。</p>
          <p className="mb-2">左右为难时，她那深藏不露的鼻鼾也找上门来，他对她也另有安排......</p>
          <p className="mb-2">张怀凝很头疼，但她还要继续工作，帮真正头疼的病人们识别病因，并争取副主任的位子</p>
          <p>强剧情，快节奏，三个有阳暗面的好人</p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>人物设定</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-pink-400"></div>
              <span>女主张怀凝 外热内冷好医生</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              <span>男主杨涛 绿茶圣父假表弟</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              <span>男主檀宜之 八面玲珑有嫌疑</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span>配角柳先生 荣升二舅了</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>目录 (33)</CardTitle>
          <div className="flex items-center space-x-2">
            <Checkbox id="latest" />
            <label htmlFor="latest" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              最新发表在前
            </label>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center py-2 border-b">
            <span className="font-bold">32 看吧，你逃我追，你是插翅难飞</span>
            <span className="text-gray-500">2024-10-07</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <span>序</span>
            <span className="text-gray-500">2024-10-06</span>
          </div>
        </CardContent>
      </Card>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-center space-x-4">
        <Button className="w-40">
          <BookmarkPlus className="mr-2 h-4 w-4" /> 加入书架
        </Button>
        <Button className="w-40" variant="secondary">开始阅读</Button>
      </div>
    </div>
  )
}
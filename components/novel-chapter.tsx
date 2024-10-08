'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

export default function NovelChapterComponent() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2">32 看吧，你逃我追，你是插翅难飞</h1>
      <div className="flex items-center space-x-2 mb-6">
        <Avatar className="w-8 h-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="陆雾" />
          <AvatarFallback>陆</AvatarFallback>
        </Avatar>
        <span className="text-gray-600">陆雾 2024-10-07</span>
      </div>

      <Card className="mb-8">
        <CardContent className="prose max-w-none pt-6">
          <p>张怀凝垂首无言。檀宜之莞尔，道："是杨涛不对，他明知故犯，让你为难。投怀送抱你就这么把持不住吗？算了，也是人之常情，他太主动了。""哪怕你再看不顺眼杨涛，这件事也先别和我家里说。""在你心里，我就是这么下作的人吗？我们从小认识，我一直觉得很了解你，现在看来好像是我太自信了。""你有话不妨直说，不要藏着掖着。""是我提的离婚，如今我对你也是外人了，你对我和善，也是因为你宽厚，念旧情。对于你和杨涛的事，我也没有干涉的余地。要说旁观者清，我还对你有情，说出的话也就算不上客观。……是我自私了，我还是希…</p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>作者已定价本章售价 ¥ 0.30</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 mb-4">余额 ¥ 0.00 阅点</p>
          <div className="flex space-x-4 mb-4">
            <Button className="flex-1">一键购买本章</Button>
            <Button variant="outline" className="flex-1">批量购买</Button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">开启自动购买（包含本章）</span>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>作者的话</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="陆雾" />
              <AvatarFallback>陆</AvatarFallback>
            </Avatar>
            <span className="font-semibold">陆雾</span>
            <span className="text-sm text-gray-500">作者</span>
            <span className="text-sm text-gray-500">09-27</span>
          </div>
          <p>看这章的标题，绝对想不到这话是谁对谁说的</p>
        </CardContent>
      </Card>
    </div>
  )
}
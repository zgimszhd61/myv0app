'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ComedyEventPageComponent() {
  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <Image
                src="/placeholder.svg"
                alt="松果喜剧 Event Poster"
                width={300}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h1 className="text-2xl font-bold mb-2">松果喜剧 | 西湖脱口秀精品秀@湖滨银泰in77 E区二楼</h1>
              <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded inline-block mb-4">即将开始</div>
              <p className="mb-2"><strong>时间:</strong> 10月08日 周二 19:30 ~ 10月31日 周四 21:00</p>
              <p className="mb-2"><strong>地点:</strong> 杭州 松果脱口秀—湖滨银泰店 湖滨银泰in77 E区二楼松果喜剧</p>
              <p className="mb-2"><strong>费用:</strong> 120.00元</p>
              <p className="mb-2"><strong>类型:</strong> 戏剧-其他</p>
              <p className="mb-2"><strong>信息提供者:</strong> 猫眼演出</p>
              <div className="flex gap-4 mt-4">
                <Button variant="outline">感兴趣 (65)</Button>
                <Button>要参加 (36)</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">活动详情</h2>
            <ul className="list-disc list-inside">
              <li>演出/活动时长: 以现场为准</li>
              <li>主要演员: 以现场为准</li>
              <li>最低演出/活动时长: 以现场为准</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">温馨提示</h2>
            <p className="text-sm text-gray-600">
              本活动信息由发起人自行发布，仅代表其个人意志。
              豆瓣网无关。活动的后续事项由发起人独立安排
              及负责。豆瓣网仅提供信息展示空间，不能保证活动
              的真实性、有效性、安全性，请在参加活动前与发起
              人具体沟通核实相关情况，注意人身安全与财产安
              全。
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">活动地图</h2>
          <Image
            src="/placeholder.svg"
            alt="Event Location Map"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">活动成员 (36人参加 · 65人感兴趣)</h2>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-4">
            {[...Array(12)].map((_, i) => (
              <Avatar key={i}>
                <AvatarImage src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${i}`} />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

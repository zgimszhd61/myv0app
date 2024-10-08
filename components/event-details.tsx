'use client'

import React from 'react'
import Image from 'next/image'
import { CalendarDays, MapPin, Users, AlertTriangle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function EventDetails() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt="Event location"
            width={400}
            height={300}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">探寻南宋皇城的所在地，打卡老杭州风情街巷（杭州）</h1>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center">
              <CalendarDays className="w-5 h-5 mr-2" />
              <span>09月14日 周六 14:00 ~ 12月08日 周日 17:00</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>杭州 地铁5号线"候潮门"站</span>
            </div>
            <div>费用: 19元(活动费)</div>
            <div>类型: 聚会-交友</div>
            <div>主办方: 互助网-小南</div>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>21 人感兴趣 14 人要参加</span>
            </div>
            <Button variant="outline" className="bg-red-100 text-red-600">感兴趣</Button>
            <Button>要参加</Button>
          </div>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-lg font-semibold mb-2">活动须知</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>如何报名：点击上面的【感兴趣】或者【想参加】，然后添加小冬瓜微信：huzhu200705（也可以进群聊，备注"进群"，拉你进活动群）</li>
                <li>活动日期：每周末，具体添加小冬瓜微信：huzhu200705，咨询活动。</li>
                <li>报名要求：23-39岁之间的喜欢交友的小伙伴。</li>
              </ol>
            </CardContent>
          </Card>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">活动详情</h2>
            <p>杭州哪里有真正小众、文艺的打卡地?</p>
            <p>这个南宋皇城根下的复古社区，</p>
            <p>是一个烟火气十足的地方，</p>
            <p>是正宗的老杭州风情片区，</p>
            <p>是慵小众、够文艺的文青打卡必选之地，</p>
            <p>身临其境，有穿越回80年代之感。</p>
          </div>
        </div>
        <div>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-lg font-semibold mb-2">温馨提示</h2>
              <p className="text-sm text-gray-600">
                <AlertTriangle className="w-4 h-4 inline mr-1" />
                本活动信息由发起人自行发布，仅代表其个人意志，与豆瓣网无关。且活动的后续事项由发起人独立安排及负责。豆瓣网仅提供信息展示空间，不能保证活动的真实性、有效性、安全性，请在参加活动前与发起人具体确认相关情况，注意人身安全与财产安全。
              </p>
            </CardContent>
          </Card>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-lg font-semibold mb-2">活动地图</h2>
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Event location map"
                width={300}
                height={200}
                className="w-full rounded-lg"
              />
            </CardContent>
          </Card>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-lg font-semibold mb-2">活动组织者</h2>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Organizer" />
                  <AvatarFallback>ON</AvatarFallback>
                </Avatar>
                <span>我想组织</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-lg font-semibold mb-2">活动成员 (14人参加 · 21人感兴趣)</h2>
              <div className="grid grid-cols-4 gap-2">
                {[...Array(14)].map((_, i) => (
                  <Avatar key={i}>
                    <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${i+1}`} alt={`Member ${i+1}`} />
                    <AvatarFallback>{i+1}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
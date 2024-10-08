'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Event = {
  id: string
  title: string
  category: string
  date: string
  location: string
  price: string
  organizer: string
  participants: number
  interested: number
  imageUrl: string
}

const categories = ["全部", "音乐", "戏剧", "讲座", "聚会", "电影", "展览", "运动", "公益", "旅行", "赛事", "课程", "亲子", "其他"]
const dateFilters = ["全部", "今天", "明天", "周末", "最近一周", "选择日期", "最新发布"]

export default function EventListComponent() {
  const [selectedCategory, setSelectedCategory] = useState("全部")
  const [selectedDate, setSelectedDate] = useState("全部")

  // Mock data - in a real application, this would come from an API
  const events: Event[] = [
    {
      id: "1",
      title: "松果喜剧 | 西湖脱口秀精品秀@湖滨银泰in77 E区二楼",
      category: "戏剧",
      date: "10月08日 周二 19:30 ~ 10月31日 周四 21:00",
      location: "松果脱口秀-湖滨银泰店 湖滨银泰in77E区二楼松果喜剧",
      price: "120.00元",
      organizer: "猫眼演出",
      participants: 36,
      interested: 65,
      imageUrl: "/placeholder.svg"
    },
    // Add more events here...
  ]

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">杭州最近一周同城活动</h1>
      
      <div className="flex flex-wrap gap-4 mb-6">
        <Select onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="选择类型" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setSelectedDate}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="选择时间" />
          </SelectTrigger>
          <SelectContent>
            {dateFilters.map(filter => (
              <SelectItem key={filter} value={filter}>{filter}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button variant="outline">全部地区</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map(event => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover mb-4" />
              <p className="text-sm text-gray-500 mb-2">{event.date}</p>
              <p className="text-sm mb-2">{event.location}</p>
              <p className="font-bold mb-2">{event.price}</p>
              <p className="text-sm text-gray-500 mb-2">发起: {event.organizer}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{event.participants}人参加</span>
                <span>{event.interested}人感兴趣</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
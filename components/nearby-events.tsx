'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"

interface Event {
  id: string;
  title: string;
  image: string;
  description: string;
}

const nearbyEvents: Event[] = [
  {
    id: '1',
    title: '松果喜剧 | 西湖脱口秀精品秀@湖滨银泰...',
    image: '/placeholder.svg?height=200&width=150&text=Comedy',
    description: '松果喜剧 | 西湖脱口秀精品秀@湖滨银泰...'
  },
  {
    id: '2',
    title: '【大华书场】苏州评弹专场（每天下午）',
    image: '/placeholder.svg?height=200&width=150&text=Suzhou',
    description: '【大华书场】苏州评弹专场（每天下午）'
  },
  {
    id: '3',
    title: '相约网红丝绸博物馆，认识新朋友（杭...',
    image: '/placeholder.svg?height=200&width=150&text=Museum',
    description: '相约网红丝绸博物馆，认识新朋友（杭...'
  },
  {
    id: '4',
    title: '【国庆音乐嗨翻天】西湖民谣之夜沉浸...',
    image: '/placeholder.svg?height=200&width=150&text=Music',
    description: '【国庆音乐嗨翻天】西湖民谣之夜沉浸...'
  },
  {
    id: '5',
    title: '笑海相声-周一/二/三/四/五/六/日（大...',
    image: '/placeholder.svg?height=200&width=150&text=Comedy',
    description: '笑海相声-周一/二/三/四/五/六/日（大...'
  },
  {
    id: '6',
    title: '国美夜校 | 美院喊你来上课! 喜欢摄影...',
    image: '/placeholder.svg?height=200&width=150&text=Photography',
    description: '国美夜校 | 美院喊你来上课! 喜欢摄影...'
  }
]

export default function NearbyEventsComponent() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">附近热门活动 (距离本活动3公里范围内)</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {nearbyEvents.map((event) => (
          <Card key={event.id}>
            <CardContent className="p-0">
              <Image
                src={event.image}
                alt={event.title}
                width={150}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-2">
                <h3 className="text-sm font-medium line-clamp-2">{event.title}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="border-t pt-4">
        <h3 className="text-xl font-bold mb-4">活动讨论区</h3>
        <div className="flex justify-end space-x-4">
          <Link href="/more-topics" className="text-blue-600 hover:underline">
            &gt; 浏览更多话题
          </Link>
          <Link href="/post-discussion" className="text-blue-600 hover:underline">
            &gt; 在活动讨论区发言
          </Link>
        </div>
      </div>
    </div>
  )
}
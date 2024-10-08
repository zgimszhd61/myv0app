'use client'

import React from 'react'
import Link from 'next/link'
import { MessageSquare } from 'lucide-react'

const discussions = [
  {
    id: 1,
    title: '双11"肩并肩"王炸套装仅此21天',
    comments: 0,
    date: '11-02'
  },
  {
    id: 2,
    title: '打工人系列微信表情包上线啦',
    comments: 1,
    date: '10-26'
  },
  {
    id: 3,
    title: '【豆瓣2024日程本上新】相信「渐变信仰」的人生，才是不可战胜的夏天',
    comments: 0,
    date: '10-20'
  }
]

export default function OfficialGroupDiscussionsComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">官方小组</h2>
        <Link href="/more-discussions" className="text-sm text-blue-600 hover:underline">
          查看更多小组讨论 &gt;
        </Link>
      </div>
      <div className="space-y-4">
        {discussions.map((discussion) => (
          <div key={discussion.id} className="flex justify-between items-center py-3 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full">
                <MessageSquare size={14} className="text-gray-500" />
              </div>
              <span className="text-gray-500 text-sm">{discussion.comments}</span>
              <Link href={`/discussion/${discussion.id}`} className="text-gray-800 hover:text-blue-600">
                {discussion.title}
              </Link>
            </div>
            <span className="text-sm text-gray-500">{discussion.date}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
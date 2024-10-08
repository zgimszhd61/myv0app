'use client'

import { useState } from 'react'

interface Topic {
  id: number
  title: string
  views: number
  popularity: number
}

const initialTopics: Topic[] = [
  { id: 1, title: "我一人就是一个草台班子", views: 162000, popularity: 4 },
  { id: 2, title: '"对自己差点吧！"摆脱消费主义陷阱从我做起', views: 201000, popularity: 4 },
  { id: 3, title: "夏天才有的蓝天白云", views: 33000, popularity: 3 },
  { id: 4, title: "一人一个珍藏的meme梗图", views: 23505000, popularity: 4 },
  { id: 5, title: "让你爱上北京的一个瞬间", views: 25000, popularity: 3 },
  { id: 6, title: "巴黎奥运会-我在看直播", views: 709000, popularity: 5 },
  { id: 7, title: "你为什么喜欢巴黎奥运会开幕式", views: 29000, popularity: 4 },
  { id: 8, title: "周末宅家做饭的快乐Plog", views: 870000, popularity: 4 },
  { id: 9, title: "7天·团建 | 这个月你游泳了吗？", views: 207000, popularity: 4 },
  { id: 10, title: "这个世界终于赢成了我想要的样子", views: 25927000, popularity: 3 },
]

export default function TrendingTopicsComponent() {
  const [topics] = useState<Topic[]>(initialTopics)

  const formatViews = (views: number) => {
    return views >= 10000 ? `${(views / 10000).toFixed(1)}万` : views.toString()
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-green-700 mb-4">24小时话题趋势 · · · · ·</h2>
      <ol className="space-y-4">
        {topics.map((topic, index) => (
          <li key={topic.id} className="flex items-center space-x-2">
            <span className="text-blue-600 font-medium min-w-[20px]">{index + 1}.</span>
            <div className="flex-grow">
              <h3 className="text-blue-600 font-medium">{topic.title}</h3>
              <div className="flex items-center space-x-2 text-gray-500">
                <span>{formatViews(topic.views)}次浏览</span>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`w-1 h-3 mx-px ${
                        i < topic.popularity ? 'bg-blue-400' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
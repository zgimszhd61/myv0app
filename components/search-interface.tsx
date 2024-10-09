"use client"

import { useState } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'

export function SearchInterface() {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', query)
    // Here you would typically handle the search logic
  }

  const suggestedQuestions = [
    { text: '「clean fit」穿搭的搭配技巧', link: '#' },
    { text: '淡颜适合的发型推荐', link: '#' },
    { text: '为什么基因相似度高的生物会有不同的外观？', link: '#' },
    { text: '为什么绝大部分人都默认赵云是大帅哥？', link: '#' },
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">用提问发现世界</h1>
      <div className="w-full max-w-2xl">
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="relative flex items-center">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="输入你想问的..."
              className="w-full p-4 pr-20 pl-24 text-gray-700 bg-white border-2 border-purple-200 rounded-full focus:outline-none focus:border-purple-400"
            />
            <div className="absolute left-4 flex items-center">
              <span className="text-gray-600 mr-2">深入</span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
            <button
              type="submit"
              className="absolute right-3 p-2 text-purple-600 hover:text-purple-800"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </form>
        <div className="space-y-4">
          {suggestedQuestions.map((question, index) => (
            <a
              key={index}
              href={question.link}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-gray-700">{question.text}</span>
              <ArrowRight className="h-5 w-5 text-purple-600" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
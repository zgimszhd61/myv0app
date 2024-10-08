"use client"

import React, { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function DoubanDoupinFeedbackComponent() {
  const [feedback, setFeedback] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the feedback to your server
    console.log('Feedback submitted:', feedback)
    setFeedback('')
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex items-center mb-4">
        <div className="bg-green-600 text-white text-xs font-bold p-2 mr-2">
          豆瓣<br />豆品
        </div>
        <h1 className="text-2xl font-bold">给豆瓣豆品写豆邮</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="在这里写下你的反馈..."
            className="w-full h-64 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-start space-x-4">
          <Button type="submit" className="bg-green-600 text-white hover:bg-green-700">
            好了，寄出去
          </Button>
          <Button type="button" variant="outline" onClick={() => setFeedback('')}>
            撤销
          </Button>
        </div>
      </form>
    </div>
  )
}
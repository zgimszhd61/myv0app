'use client'

import { PaperclipIcon, ArrowUpIcon, ImageIcon, FileTextIcon, GraduationCapIcon, GiftIcon, BarChartIcon, EyeIcon, ListTodoIcon, PenToolIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const suggestions = [
  { icon: <ImageIcon className="w-4 h-4" />, text: "Create image", color: "text-green-500" },
  { icon: <FileTextIcon className="w-4 h-4" />, text: "Summarize text", color: "text-orange-500" },
  { icon: <GraduationCapIcon className="w-4 h-4" />, text: "Get advice", color: "text-blue-500" },
  { icon: <GiftIcon className="w-4 h-4" />, text: "Surprise me", color: "text-purple-500" },
  { icon: <BarChartIcon className="w-4 h-4" />, text: "Analyze data", color: "text-cyan-500" },
  { icon: <EyeIcon className="w-4 h-4" />, text: "Analyze images", color: "text-indigo-500" },
  { icon: <ListTodoIcon className="w-4 h-4" />, text: "Make a plan", color: "text-yellow-500" },
  { icon: <PenToolIcon className="w-4 h-4" />, text: "Help me write", color: "text-pink-500" },
]

export function AiAssistantInterface() {
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-8">
      <h1 className="text-4xl font-bold text-center">What can I help with?</h1>
      
      <div className="relative">
        <Input
          type="text"
          placeholder="Message ChatGPT"
          className="w-full pl-10 pr-10 py-3 text-lg rounded-full border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
        <PaperclipIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-full p-2"
        >
          <ArrowUpIcon className="w-5 h-5 text-gray-600" />
        </Button>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3">
        {suggestions.map((suggestion, index) => (
          <Button
            key={index}
            variant="outline"
            className="flex items-center space-x-2 rounded-full px-4 py-2 border border-gray-300 hover:border-gray-400 hover:bg-gray-50"
          >
            <span className={suggestion.color}>{suggestion.icon}</span>
            <span className="text-gray-700">{suggestion.text}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
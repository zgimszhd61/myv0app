"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, 
  List, ListOrdered, Quote, Image, Video, Paperclip, MoreHorizontal,
  Type, Copy, Maximize2
} from 'lucide-react'

export default function DiaryEntryComponent() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <span className="text-2xl font-bold mr-4">豆瓣</span>
          <h1 className="text-xl">写日记</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Type className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Copy className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <Input
        placeholder="添加标题"
        value={title}
        onChange={handleTitleChange}
        className="mb-4"
      />

      <div className="bg-gray-100 p-2 mb-4 flex flex-wrap items-center space-x-2">
        <select className="bg-white border rounded px-2 py-1">
          <option>正文</option>
        </select>
        <Button variant="ghost" size="icon">
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Italic className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Underline className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <AlignLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <AlignCenter className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <AlignRight className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <List className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <ListOrdered className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Quote className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Image className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Video className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Paperclip className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      <Textarea
        placeholder="写日记..."
        value={content}
        onChange={handleContentChange}
        className="min-h-[400px] mb-4"
      />

      <div className="flex justify-end space-x-2">
        <Button variant="outline">预览</Button>
        <Button>下一步</Button>
      </div>
    </div>
  )
}
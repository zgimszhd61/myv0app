'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function StorySubmissionFormComponent() {
  const [title, setTitle] = useState('')
  const [synopsis, setSynopsis] = useState('')
  const [prompt, setPrompt] = useState('')

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>编辑</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-base font-semibold flex items-center">
            作品名称
            <span className="text-red-500 ml-1">*</span>
          </Label>
          <Input 
            id="title" 
            placeholder="请输入名称" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={15}
          />
          <p className="text-sm text-right text-gray-500">({title.length}/15)</p>
        </div>

        <div className="space-y-2">
          <Label className="text-base font-semibold flex items-center">
            作品类型
            <span className="text-red-500 ml-1">*</span>
          </Label>
          <div className="flex space-x-2">
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="选择类型" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="short">短篇</SelectItem>
                {/* Add more options as needed */}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="短篇" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fixed">篇幅选定后存后无法修改</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="hotTopics" className="text-base">热点元素：</Label>
          <Select>
            <SelectTrigger id="hotTopics">
              <SelectValue placeholder="如内容带有热点/热梗，请选择" />
            </SelectTrigger>
            <SelectContent>
              {/* Add hot topics as needed */}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="activities" className="text-base">参与征稿：</Label>
          <Select>
            <SelectTrigger id="activities">
              <SelectValue placeholder="选择参与的征稿活动" />
            </SelectTrigger>
            <SelectContent>
              {/* Add activities as needed */}
            </SelectContent>
          </Select>
          <Button variant="link" className="p-0 h-auto">更多</Button>
        </div>

        <div className="space-y-2">
          <Label htmlFor="synopsis" className="text-base font-semibold flex items-center">
            作品梗概
            <span className="text-red-500 ml-1">*</span>
          </Label>
          <Textarea 
            id="synopsis" 
            placeholder="简单描述作品的故事内容，至少 50 字~" 
            className="min-h-[100px]"
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
            maxLength={800}
          />
          <p className="text-sm text-right text-gray-500">({synopsis.length}/800)</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="prompt" className="text-base">作品导语：</Label>
          <Textarea 
            id="prompt" 
            placeholder="一个好的导语要注意凸显人物/剧情发展的变化，具备戏剧张力，至少 50 字~" 
            className="min-h-[100px]"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            maxLength={100}
          />
          <p className="text-sm text-right text-gray-500">({prompt.length}/100)</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-4">
        <Button variant="outline">取消</Button>
        <Button>保存</Button>
      </CardFooter>
    </Card>
  )
}
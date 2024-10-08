'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { PlusCircle, Image as ImageIcon, Hash, AtSign, Smile, MapPin, Users, Tag } from 'lucide-react'
import Image from 'next/image'

export default function ContentCreationInterfaceComponent() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [images, setImages] = useState<string[]>(['/placeholder.svg?height=100&width=100&text=Image'])
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState('')

  const handleAddImage = () => {
    setImages([...images, '/placeholder.svg?height=100&width=100&text=New+Image'])
  }

  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag])
      setNewTag('')
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">图片编辑 (1/18)</h1>
        <Button variant="link" className="text-red-500">
          清空并重新上传
        </Button>
      </div>

      <div className="grid grid-cols-6 gap-4 mb-6">
        <Card className="col-span-1 aspect-square flex items-center justify-center cursor-pointer hover:bg-gray-100" onClick={handleAddImage}>
          <PlusCircle className="w-8 h-8 text-gray-400" />
          <span className="sr-only">添加图片</span>
        </Card>
        {images.map((src, index) => (
          <Card key={index} className="col-span-1 aspect-square overflow-hidden">
            <CardContent className="p-0">
              <Image src={src} alt={`Image ${index + 1}`} width={100} height={100} layout="responsive" />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="title">正文内容</Label>
          <Input
            id="title"
            placeholder="填写标题会有更多赞哦~"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-2"
          />
          <div className="relative">
            <Textarea
              placeholder="在这里输入正文描述，真诚有价值的分享予人温暖"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[200px]"
            />
            <span className="absolute bottom-2 right-2 text-sm text-gray-400">
              {content.length} / 1000
            </span>
          </div>
        </div>

        <div className="flex space-x-4">
          <Button variant="outline" size="sm">
            <Hash className="w-4 h-4 mr-2" />
            话题
          </Button>
          <Button variant="outline" size="sm">
            <AtSign className="w-4 h-4 mr-2" />
            用户
          </Button>
          <Button variant="outline" size="sm">
            <Smile className="w-4 h-4 mr-2" />
            表情
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="location">添加地点</Label>
            <Select>
              <SelectTrigger id="location">
                <SelectValue placeholder="添加地点" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="location1">地点 1</SelectItem>
                <SelectItem value="location2">地点 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="group">关联群聊</Label>
            <Select>
              <SelectTrigger id="group">
                <SelectValue placeholder="选择群聊" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="group1">群聊 1</SelectItem>
                <SelectItem value="group2">群聊 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label>标记人或地点让重点突出</Label>
          <div className="flex items-center mt-2">
            <Input
              placeholder="添加标记"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              className="mr-2"
            />
            <Button onClick={handleAddTag} variant="outline">
              添加标记
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
            发布
          </Button>
          <Button size="lg" variant="outline">
            保存
          </Button>
        </div>
      </div>
    </div>
  )
}
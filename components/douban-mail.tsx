'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Film, Hash, MessageSquare, Speaker, User } from "lucide-react"

type Message = {
  id: string
  sender: string
  avatar: string
  content: string
  date: string
  type: 'personal' | 'system' | 'book' | 'movie' | 'topic' | 'audio'
}

const initialMessages: Message[] = [
  { id: '1', sender: '朵', avatar: '/placeholder.svg', content: '文科。难找工作。', date: '2024-07-04', type: 'personal' },
  { id: '2', sender: '小仙', avatar: '/placeholder.svg', content: '你来杭州旅游还是工作？', date: '2023-05-24', type: 'personal' },
  { id: '3', sender: '豆瓣读书', avatar: '/placeholder.svg', content: '"豆瓣2021年度读书榜单"揭...', date: '2021-12-22', type: 'book' },
  { id: '4', sender: '南歌子', avatar: '/placeholder.svg', content: '你好哇 如何加进群呀', date: '2021-10-23', type: 'personal' },
  { id: '5', sender: '倾听文字的声音小站', avatar: '/placeholder.svg', content: '悦读FM重新开播，马上收听吧！', date: '2020-05-24', type: 'audio' },
  { id: '6', sender: '喵喵', avatar: '/placeholder.svg', content: '求加群，如何加你微信', date: '2020-04-19', type: 'personal' },
  { id: '7', sender: '豆瓣话题', avatar: '/placeholder.svg', content: '"豆瓣街头故事摄影大赛"邀...', date: '2019-04-04', type: 'topic' },
  { id: '8', sender: '豆瓣电影', avatar: '/placeholder.svg', content: '豆瓣电影2018年度榜单揭晓 ...', date: '2018-12-21', type: 'movie' },
  { id: '9', sender: '系统豆邮', avatar: '/placeholder.svg', content: '来往小组管理员删除了你的发言', date: '2018-04-13', type: 'system' },
  { id: '10', sender: '[已注销]', avatar: '/placeholder.svg', content: '【5折封顶】淘宝特卖五月换...', date: '2015-05-03', type: 'system' },
]

export default function DoubanMailComponent() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [filter, setFilter] = useState<string>('all')

  const getIconForMessageType = (type: Message['type']) => {
    switch (type) {
      case 'personal': return <User className="h-4 w-4" />
      case 'system': return <MessageSquare className="h-4 w-4" />
      case 'book': return <BookOpen className="h-4 w-4" />
      case 'movie': return <Film className="h-4 w-4" />
      case 'topic': return <Hash className="h-4 w-4" />
      case 'audio': return <Speaker className="h-4 w-4" />
      default: return <MessageSquare className="h-4 w-4" />
    }
  }

  const filteredMessages = filter === 'all' ? messages : messages.filter(m => m.type === filter)

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">我的豆邮</h1>
        <Select onValueChange={setFilter} defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="筛选：我的豆邮" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">全部豆邮</SelectItem>
            <SelectItem value="personal">个人豆邮</SelectItem>
            <SelectItem value="system">系统豆邮</SelectItem>
            <SelectItem value="book">读书相关</SelectItem>
            <SelectItem value="movie">电影相关</SelectItem>
            <SelectItem value="topic">话题相关</SelectItem>
            <SelectItem value="audio">音频相关</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Badge className="mb-4">豆邮 ({messages.length}未读)</Badge>

      <Card>
        <CardContent className="p-0">
          {filteredMessages.map((message) => (
            <div key={message.id} className="flex items-center p-4 border-b last:border-b-0">
              <Checkbox id={`message-${message.id}`} className="mr-4" />
              <Avatar className="h-10 w-10 mr-4">
                <AvatarImage src={message.avatar} alt={message.sender} />
                <AvatarFallback>{getIconForMessageType(message.type)}</AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold">{message.sender}</h3>
                  <span className="text-sm text-gray-500">{message.date}</span>
                </div>
                <p className="text-sm text-gray-700">{message.content}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
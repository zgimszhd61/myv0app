'use client'

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Plus, MoreVertical, Smile, Image, Paperclip, Bell } from 'lucide-react'

interface ChatEntry {
  id: string
  name: string
  avatar: string
  lastMessage: string
  time: string
  isOfficial?: boolean
}

const chatEntries: ChatEntry[] = [
  { id: '1', name: '卢旭宁', avatar: '/placeholder.svg', lastMessage: '大佬涨粉好快，能不能加你...', time: '16:03', isOfficial: true },
  { id: '2', name: '科技事儿', avatar: '/placeholder.svg', lastMessage: '你有13条留言额度，今天能...', time: '15:47', isOfficial: true },
  { id: '3', name: '蚁厂', avatar: '/placeholder.svg', lastMessage: '活跃粉丝很多，已经不错了...', time: '15:41', isOfficial: true },
  { id: '4', name: '是乐谷的铁粉群', avatar: '/placeholder.svg', lastMessage: '笑口常开1号😂', time: '14:28' },
  { id: '5', name: '乐谷粉丝群', avatar: '/placeholder.svg', lastMessage: '我发布了新微博，快来围观...', time: '13:29' },
  { id: '6', name: '艾克ai分享', avatar: '/placeholder.svg', lastMessage: '大佬，你是真人吗，还是机...', time: '12:20', isOfficial: true },
  { id: '7', name: '暖南说', avatar: '/placeholder.svg', lastMessage: '我是暖南说 谢谢你关注哦 一...', time: '10:23', isOfficial: true },
  { id: '8', name: 'IT互联网那点事', avatar: '/placeholder.svg', lastMessage: '感谢你的私信！', time: '10:22', isOfficial: true },
  { id: '9', name: '魔法师蛋小丁', avatar: '/placeholder.svg', lastMessage: '大佬涨粉好快，能不能加你...', time: '10:21', isOfficial: true },
]

export default function MessagingAppComponent() {
  const [selectedChat, setSelectedChat] = useState<ChatEntry | null>(chatEntries[1])
  const [message, setMessage] = useState('')

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-80 bg-gray-900 text-white flex flex-col">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="是乐谷" />
              <AvatarFallback>是乐谷</AvatarFallback>
            </Avatar>
            <span className="font-semibold">是乐谷</span>
          </div>
          <div className="flex space-x-2">
            <Button size="icon" variant="ghost">
              <Plus className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              className="pl-8 bg-gray-800 text-white placeholder-gray-400 border-none"
              placeholder="查找联系人或群"
            />
          </div>
        </div>
        <ScrollArea className="flex-1">
          {chatEntries.map((entry) => (
            <div
              key={entry.id}
              className={`flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 cursor-pointer ${
                selectedChat?.id === entry.id ? 'bg-gray-800' : ''
              }`}
              onClick={() => setSelectedChat(entry)}
            >
              <Avatar>
                <AvatarImage src={entry.avatar} alt={entry.name} />
                <AvatarFallback>{entry.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <span className="font-medium truncate">{entry.name}</span>
                  <span className="text-xs text-gray-400">{entry.time}</span>
                </div>
                <p className="text-sm text-gray-400 truncate">{entry.lastMessage}</p>
              </div>
              {entry.isOfficial && (
                <div className="bg-yellow-500 text-xs text-black px-1 rounded">V</div>
              )}
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">{selectedChat?.name || '科技事儿'}</h2>
          <Button size="icon" variant="ghost">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <span className="text-sm text-gray-500">该对话来自于未关注人</span>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-md">
                大佬涨粉好快，能不能加你微信请教一下，怎么做到的呀
              </div>
            </div>
            <div className="flex justify-start">
              <Avatar className="mr-2">
                <AvatarImage src="/placeholder.svg" alt="科技事儿" />
                <AvatarFallback>科技事儿</AvatarFallback>
              </Avatar>
              <div className="bg-gray-200 rounded-lg py-2 px-4 max-w-md">
                fengyuzaizhou
              </div>
            </div>
            <div className="flex justify-start">
              <Avatar className="mr-2 opacity-0">
                <AvatarFallback>科技事儿</AvatarFallback>
              </Avatar>
              <div className="bg-gray-200 rounded-lg py-2 px-4 max-w-md">
                你有13条留言额度，今天能发送13条留言消息
              </div>
            </div>
          </div>
        </ScrollArea>
        <div className="bg-white p-4 flex items-center space-x-2">
          <Button size="icon" variant="ghost">
            <Smile className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <Image className="h-5 w-5" />
          </Button>
          <Input
            className="flex-1"
            placeholder="按下Enter发送消息/ Command+Enter换行"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button size="icon" variant="ghost">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <Bell className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
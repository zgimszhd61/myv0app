'use client'

import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronUp, ChevronDown } from 'lucide-react'

interface Post {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  votes: number;
}

const mainPost: Post = {
  id: "main",
  author: "CFCL",
  avatar: "/placeholder.svg?height=48&width=48&text=CFCL",
  content: `1. USB 设备无论是麦克风，打印机，摄像头等都会出现这种情况。
2. 这种情况出现很多次，不是偶尔。
3. 蓝屏后重新开机，再插入设备，则不会蓝屏。
4. Windows 系统，台式电脑和笔记本电脑都会出现这种情况。
5. 请教一下大家，可能是什么问题，是 windows 系统问题，还是设备问题，还是系统中存在某种病毒。`,
  timestamp: "1小时 54 分钟前",
  votes: 448
}

const replies: Post[] = [
  {
    id: "1",
    author: "WuDiHaiTai",
    avatar: "/placeholder.svg?height=48&width=48&text=WDH",
    content: `1. 蓝屏报错代码是什么
2. 附上事件查看器中 Windows 日志（右键此电脑—管理—事件查看器下）

这两条给了的话比较好排障`,
    timestamp: "1小时 51 分钟前",
    votes: 1
  },
  {
    id: "2",
    author: "totoro625",
    avatar: "/placeholder.svg?height=48&width=48&text=T625",
    content: `查看一下"控制面板\系统和安全\安全和维护\可靠性监视程序"`,
    timestamp: "1小时 43 分钟前",
    votes: 2
  },
  {
    id: "3",
    author: "davin",
    avatar: "/placeholder.svg?height=48&width=48&text=davin",
    content: `进入安全模式，在设备管理器中卸载 USB 控制器驱动程序，然后重新启动，等系统自动安装相应的驱动试试。`,
    timestamp: "1小时 40 分钟前",
    votes: 3
  },
  {
    id: "4",
    author: "b821025551b",
    avatar: "/placeholder.svg?height=48&width=48&text=b8210",
    content: `这让我想起来当初买了某个品牌的一体机，只要一连 WiFi 就蓝屏`,
    timestamp: "1小时 36 分钟前",
    votes: 4
  },
  {
    id: "5",
    author: "xiaozecn",
    avatar: "/placeholder.svg?height=48&width=48&text=XZ",
    content: `也许是供电问题，也许是硬盘，至少我见过某些小主机搭配国产 ZHITAI 会出现这种情况。`,
    timestamp: "1小时 22 分钟前 via Android",
    votes: 5
  },
  {
    id: "6",
    author: "acorngyl",
    avatar: "/placeholder.svg?height=48&width=48&text=AG",
    content: `从现象 1 和 4 看出来，OP 手上多个 usb 设备和多台电脑都有问题。这就有点神奇了。`,
    timestamp: "1小时 18 分钟前",
    votes: 6
  }
]

export default function ForumDiscussionComponent() {
  const [votes, setVotes] = useState<{ [key: string]: number }>({
    main: mainPost.votes,
    ...replies.reduce((acc, reply) => ({ ...acc, [reply.id]: reply.votes }), {})
  })

  const handleVote = (id: string, increment: number) => {
    setVotes(prev => ({ ...prev, [id]: prev[id] + increment }))
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="mb-4">
        <nav className="text-sm text-gray-500 mb-2">
          <a href="#" className="hover:underline">V2EX</a> {' > '}
          <a href="#" className="hover:underline">程序员</a>
        </nav>
        <h1 className="text-2xl font-bold mb-2">Windows 系统，插入 USB 设备电脑会蓝屏</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span>{mainPost.author}</span>
          <span>•</span>
          <span>{mainPost.timestamp}</span>
          <span>•</span>
          <span>{votes.main} 次点击</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex">
          <div className="flex flex-col items-center mr-4">
            <Button variant="ghost" size="sm" onClick={() => handleVote('main', 1)}>
              <ChevronUp className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium">{votes.main}</span>
            <Button variant="ghost" size="sm" onClick={() => handleVote('main', -1)}>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
          <div>
            <Avatar className="w-10 h-10 mb-2">
              <AvatarImage src={mainPost.avatar} alt={mainPost.author} />
              <AvatarFallback>{mainPost.author[0]}</AvatarFallback>
            </Avatar>
            <div className="whitespace-pre-wrap">{mainPost.content}</div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">14 条回复 • 2024-10-08 16:55:11 +08:00</h2>
      </div>

      {replies.map((reply) => (
        <div key={reply.id} className="bg-white rounded-lg shadow p-4 mb-4">
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <Button variant="ghost" size="sm" onClick={() => handleVote(reply.id, 1)}>
                <ChevronUp className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium">{votes[reply.id]}</span>
              <Button variant="ghost" size="sm" onClick={() => handleVote(reply.id, -1)}>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={reply.avatar} alt={reply.author} />
                  <AvatarFallback>{reply.author[0]}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{reply.author}</span>
                <span className="text-sm text-gray-500">{reply.timestamp}</span>
              </div>
              <div className="whitespace-pre-wrap">{reply.content}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
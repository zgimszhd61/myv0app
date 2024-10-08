'use client'

import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Home, 
  FileText, 
  Users, 
  Feather, 
  Share2, 
  DollarSign, 
  User, 
  HelpCircle, 
  AlertCircle,
  Pen
} from 'lucide-react'

const menuItems = [
  { icon: <Home className="w-5 h-5" />, label: "主页" },
  { icon: <FileText className="w-5 h-5" />, label: "作品管理" },
  { icon: <Users className="w-5 h-5" />, label: "社区故事管理" },
  { icon: <Feather className="w-5 h-5" />, label: "创作风向", active: true },
  { icon: <Share2 className="w-5 h-5" />, label: "分发上架" },
  { icon: <DollarSign className="w-5 h-5" />, label: "收益管理" },
  { icon: <User className="w-5 h-5" />, label: "个人中心" },
  { icon: <HelpCircle className="w-5 h-5" />, label: "常见问题" },
  { icon: <AlertCircle className="w-5 h-5" />, label: "创作规则" },
]

export default function ContentCreatorSidebarComponent() {
  return (
    <div className="w-64 bg-white shadow-lg h-screen flex flex-col">
      <Card className="m-4">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4 mb-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Uhakadotcom" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-bold">Uhakadotcom</h2>
              <p className="text-sm text-gray-500">创作等级 Lv.9</p>
            </div>
          </div>
          <Button className="w-full mb-4">
            <Pen className="w-4 h-4 mr-2" />
            创建作品
          </Button>
          <Badge variant="secondary" className="w-full justify-start py-2">
            <img src="/placeholder.svg?height=20&width=20" alt="Zhihu logo" className="w-5 h-5 mr-2" />
            知乎盐选创作者
          </Badge>
        </CardContent>
      </Card>
      <nav className="flex-grow">
        <ul className="space-y-2 px-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Button
                variant="ghost"
                className={`w-full justify-start ${item.active ? 'bg-blue-50 text-blue-600' : ''}`}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
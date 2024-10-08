'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Home, 
  Search, 
  Bell, 
  Mail, 
  Pencil, 
  Star, 
  Bookmark, 
  Briefcase, 
  Users, 
  User, 
  MoreHorizontal,
  Twitter
} from 'lucide-react'

const menuItems = [
  { icon: Home, label: 'Home' },
  { icon: Search, label: 'Explore' },
  { icon: Bell, label: 'Notifications' },
  { icon: Mail, label: 'Messages' },
  { icon: Pencil, label: 'Grok' },
  { icon: Twitter, label: 'Premium' },
  { icon: Bookmark, label: 'Bookmarks' },
  { icon: Briefcase, label: 'Jobs' },
  { icon: Users, label: 'Communities' },
  { icon: User, label: 'Profile' },
  { icon: MoreHorizontal, label: 'More' },
]

export default function TwitterSidebarComponent() {
  return (
    <div className="flex flex-col h-screen bg-black text-white p-4 w-64">
      <div className="mb-4">
        <Twitter className="w-8 h-8" />
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-gray-900"
              >
                <item.icon className="mr-4 h-6 w-6" />
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full py-3 mb-4">
        Post
      </Button>
      <div className="flex items-center">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/placeholder.svg?height=40&width=40&text=Y11" alt="@seclink" />
          <AvatarFallback>Y11</AvatarFallback>
        </Avatar>
        <div className="ml-3 flex-grow">
          <p className="font-semibold">Y11</p>
          <p className="text-sm text-gray-400">@seclink</p>
        </div>
        <Button variant="ghost" size="icon" className="text-white">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
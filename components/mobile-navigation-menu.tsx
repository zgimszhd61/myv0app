'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Home, PlusSquare, Bell, User, Menu } from 'lucide-react'

export default function MobileNavigationMenuComponent() {
  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex-grow">
        {/* Content area */}
      </div>
      <nav className="border-t border-gray-200">
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <Button variant="ghost" className="w-full justify-start text-lg font-normal">
              <Home className="mr-4 h-6 w-6" />
              发现
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start text-lg font-normal">
              <PlusSquare className="mr-4 h-6 w-6" />
              发布
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start text-lg font-normal relative">
              <Bell className="mr-4 h-6 w-6" />
              通知
              <span className="absolute top-0 left-4 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start text-lg font-normal">
              <User className="mr-4 h-6 w-6" />
              我
            </Button>
          </li>
        </ul>
      </nav>
      <div className="border-t border-gray-200 p-4">
        <Button variant="ghost" className="w-full justify-start text-lg font-normal">
          <Menu className="mr-4 h-6 w-6" />
          更多
        </Button>
      </div>
    </div>
  )
}
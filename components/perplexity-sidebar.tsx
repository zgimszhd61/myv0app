'use client'

import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown, ChevronLeft, Home, Compass, Library, Settings, Download, X, MessageSquare } from 'lucide-react'

export default function PerplexitySidebarComponent() {
  return (
    <div className="w-64 h-screen bg-gray-100 flex flex-col">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center">
          <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4A5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 8L8 12L12 16" stroke="#4A5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 12H8" stroke="#4A5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-xl font-semibold">perplexity</span>
        </div>
        <Button variant="ghost" size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>

      <div className="px-4 mb-4">
        <div className="relative">
          <Input placeholder="新建帖子" className="pl-10 pr-10" />
          <Button variant="ghost" size="icon" className="absolute left-2 top-1/2 transform -translate-y-1/2">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75705 13.6881L8.99505 12.6383C9.37411 12.5282 9.73573 12.3773 10.0748 12.1909L10.986 12.7653C11.3218 12.977 11.7595 12.928 12.0403 12.6473L12.6464 12.0412C12.9271 11.7604 12.9761 11.3227 12.7644 10.9869L12.1902 10.076C12.3768 9.73688 12.5278 9.37515 12.638 8.99596L13.6879 8.75794C14.0751 8.67015 14.35 8.32601 14.35 7.92897V7.07183C14.35 6.6748 14.0751 6.33065 13.6879 6.24287L12.6381 6.00488C12.528 5.62578 12.3771 5.26414 12.1906 4.92507L12.7648 4.01407C12.9765 3.6782 12.9275 3.2405 12.6468 2.95975L12.0407 2.35366C11.7599 2.07292 11.3222 2.02392 10.9864 2.23565L10.0755 2.80989C9.73622 2.62328 9.37437 2.47229 8.99505 2.36209L8.75705 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 5.00001C5.96703 3.9535 7.57675 3.57706 9.07868 4.02332C10.5806 4.46957 11.7145 5.67883 11.9711 7.20144C12.2277 8.72405 11.5721 10.2478 10.2642 11.1434C8.95636 12.039 7.24546 12.1637 5.82081 11.4643C4.39615 10.7648 3.45605 9.34961 3.3349 7.76908C3.21376 6.18854 3.93209 4.66021 5.2318 3.71365L4.28982 2.77167C2.68769 3.98991 1.75 5.89991 1.75 7.92897C1.75 11.3797 4.54929 14.179 7.99999 14.179C11.4507 14.179 14.25 11.3797 14.25 7.92897C14.25 4.47826 11.4507 1.67897 7.99999 1.67897C6.35868 1.67897 4.85718 2.28684 3.71252 3.30402L4.92053 5.00001Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </Button>
          <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L13.3536 2.35355ZM2.85355 0.646447C3.04882 0.451184 3.36539 0.451184 3.56066 0.646447L7.49645 4.58224C7.6917 4.7775 7.6917 5.09408 7.49645 5.28934C7.30118 5.48461 6.98461 5.48461 6.78934 5.28934L2.85355 1.35355C2.65829 1.15829 2.65829 0.841709 2.85355 0.646447ZM11.1464 9.64645C11.3417 9.45118 11.6583 9.45118 11.8536 9.64645L14.3536 12.1464C14.5488 12.3417 14.5488 12.6583 14.3536 12.8536C14.1583 13.0488 13.8417 13.0488 13.6464 12.8536L11.1464 10.3536C10.9512 10.1583 10.9512 9.84171 11.1464 9.64645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </Button>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2 px-4">
          <li>
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              首页
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start">
              <Compass className="mr-2 h-4 w-4" />
              发现
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start">
              <Library className="mr-2 h-4 w-4" />
              图书馆
            </Button>
          </li>
        </ul>
        <ul className="space-y-2 px-4 mt-4">
          <li>
            <Button variant="ghost" className="w-full justify-start text-left">
              How will Taiwan balance its
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start text-left">
              百丽公司发展历程
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start text-left">
              reweb的发展历程
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start text-left">
              PEG比率通常代表什么含义
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start text-left">
              Iconiq Capital有过哪些成功投资
            </Button>
          </li>
        </ul>
      </nav>

      <div className="p-4 border-t">
        <div className="bg-white p-4 rounded-lg mb-4">
          <h3 className="font-semibold mb-2">邀请你的队友</h3>
          <p className="text-sm text-gray-600 mb-2">想要与您的团队或企业一起使用Perplexity吗？</p>
          <Button variant="outline" className="w-full">
            了解更多 &gt;
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <div className="ml-2">
              <div className="text-sm font-medium">lininruc5968</div>
              <div className="text-xs text-gray-500">pro</div>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex justify-between p-4 border-t">
        <Button variant="ghost" size="icon">
          <Download className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <X className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <MessageSquare className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
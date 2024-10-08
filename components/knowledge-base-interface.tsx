'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Folder, Lock, Globe, Info } from 'lucide-react'

interface DocumentCategory {
  id: number;
  title: string;
  description?: string;
  icon: 'folder' | 'lock' | 'globe' | 'info';
  access?: 'private' | 'public';
}

const categories: DocumentCategory[] = [
  { id: 1, title: "乐谷未公开文库", description: "得搞点的文章与书籍", icon: "lock", access: "private" },
  { id: 2, title: "CVE安全漏洞威胁情报", description: "关注Java（maven）、NodeJS（npm）、Python...", icon: "globe", access: "public" },
  { id: 3, title: "乐谷笔记与分享", icon: "lock", access: "private" },
  { id: 4, title: "乐谷非技术相关文库", icon: "folder" },
  { id: 5, title: "乐谷业务学习笔记", description: "业务学习笔记，这里记录的是可以公开的笔记", icon: "globe", access: "public" },
  { id: 6, title: "乐谷技术学习笔记", description: "各种环境搭建，编程学习过程中遇到的问题与解决", icon: "globe", access: "public" },
  { id: 7, title: "小说与文学作品", icon: "info" },
  { id: 8, title: "AI今日精选", icon: "info" },
  { id: 9, title: "新技术知识库", icon: "info" },
  { id: 10, title: "论文阅读文集", icon: "info" },
  { id: 11, title: "精品文章笔记", icon: "info" },
  { id: 12, title: "公司发展历程", icon: "info" },
  { id: 13, title: "精选演讲翻译文稿", icon: "info" },
  { id: 14, title: "乐谷创新知识", icon: "folder" },
  { id: 15, title: "早期创业收获集", icon: "folder" },
  { id: 16, title: "算法技术文档-强化学习", icon: "info" },
  { id: 17, title: "算法技术文档", icon: "folder" },
  { id: 18, title: "nuxt3前端编程", icon: "folder" },
  { id: 19, title: "swiftUI移动端教程", icon: "folder" },
  { id: 20, title: "动手学强化学习", icon: "folder" },
  { id: 21, title: "cloudflare文集", icon: "folder" },
  { id: 22, title: "vercel文集", icon: "folder" },
  { id: 23, title: "auth0和clerk文集", icon: "folder" },
  { id: 24, title: "应用安全检测", icon: "folder" },
  { id: 25, title: "镜像安全检测", icon: "folder" },
  { id: 26, title: "crewall应用", icon: "info" },
  { id: 27, title: "autogen应用", icon: "folder" },
  { id: 28, title: "solana研发文集", icon: "folder" },
  { id: 29, title: "polygon研发文集", icon: "folder" },
  { id: 30, title: "Typescript编程文集", icon: "folder" },
]

const IconComponent = ({ icon }: { icon: DocumentCategory['icon'] }) => {
  switch (icon) {
    case 'folder':
      return <Folder className="w-6 h-6 text-blue-500" />;
    case 'lock':
      return <Lock className="w-6 h-6 text-gray-500" />;
    case 'globe':
      return <Globe className="w-6 h-6 text-green-500" />;
    case 'info':
      return <Info className="w-6 h-6 text-yellow-500" />;
    default:
      return <Folder className="w-6 h-6 text-blue-500" />;
  }
}

export default function KnowledgeBaseInterfaceComponent() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">知识库</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Card key={category.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <IconComponent icon={category.icon} />
              <CardTitle className="ml-2 text-base font-medium">{category.title}</CardTitle>
              {category.access && (
                <Badge variant={category.access === 'private' ? 'secondary' : 'outline'} className="ml-auto">
                  {category.access === 'private' ? '私有' : '可公开'}
                </Badge>
              )}
            </CardHeader>
            {category.description && (
              <CardContent>
                <p className="text-sm text-gray-500">{category.description}</p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
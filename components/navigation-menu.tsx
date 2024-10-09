'use client'

import React from 'react'
import { Building2, FileText, LayoutGrid, Landmark, Users, Newspaper, FileBarChart, TrendingUp, ChevronRight } from 'lucide-react'

interface MenuItem {
  icon: React.ReactNode
  title: string
  count: number
  change?: number
  expandable?: boolean
}

const menuItems: MenuItem[] = [
  { icon: <Building2 className="h-5 w-5" />, title: "公司库", count: 427407, change: 202, expandable: true },
  { icon: <FileText className="h-5 w-5" />, title: "事件库", count: 207826, change: 64, expandable: true },
  { icon: <LayoutGrid className="h-5 w-5" />, title: "行业赛道", count: 0, expandable: true },
  { icon: <Landmark className="h-5 w-5" />, title: "机构库", count: 10837, change: 2, expandable: true },
  { icon: <Users className="h-5 w-5" />, title: "人物库", count: 396648, change: 119 },
  { icon: <Newspaper className="h-5 w-5" />, title: "新闻库", count: 159882, change: 39, expandable: true },
  { icon: <FileBarChart className="h-5 w-5" />, title: "报告库", count: 79777 },
  { icon: <TrendingUp className="h-5 w-5" />, title: "行情趋势", count: 0, expandable: true },
]

export function NavigationMenuComponent() {
  return (
    <nav className="bg-gray-800 text-white w-64 p-4 space-y-2">
      {menuItems.map((item, index) => (
        <div key={index} className="flex items-center justify-between hover:bg-gray-700 p-2 rounded cursor-pointer">
          <div className="flex items-center space-x-3">
            {item.icon}
            <span>{item.title}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-sm text-gray-400">
              {item.count.toLocaleString()}
              {item.change !== undefined && (
                <span className="text-green-400 ml-1">(+{item.change})</span>
              )}
            </div>
            {item.expandable && <ChevronRight className="h-4 w-4 text-gray-400" />}
          </div>
        </div>
      ))}
    </nav>
  )
}
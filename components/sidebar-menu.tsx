'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from 'lucide-react'

interface MenuItem {
  label: string;
  expandable?: boolean;
  expanded?: boolean;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { label: "我的购物车" },
  { 
    label: "我的订单",
    expandable: true,
    children: [
      { label: "已买到的宝贝" },
      { label: "我的拍卖" },
      { label: "官方集运" },
    ]
  },
  { label: "我的卡券包" },
  { label: "宝贝收藏" },
  { label: "关注店铺" },
  { label: "我的足迹" },
  { label: "购买过的店铺" },
  { label: "我的发票" },
  { label: "评价管理" },
  { label: "退款维权", expandable: true },
  { label: "账户设置", expandable: true },
]

export default function SidebarMenuComponent() {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpand = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    )
  }

  const renderMenuItem = (item: MenuItem) => (
    <li key={item.label}>
      <Button
        variant="ghost"
        className="w-full justify-between"
        onClick={() => item.expandable && toggleExpand(item.label)}
      >
        {item.label}
        {item.expandable && (
          expandedItems.includes(item.label) ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
        )}
      </Button>
      {item.expandable && expandedItems.includes(item.label) && item.children && (
        <ul className="ml-4 mt-2 space-y-2">
          {item.children.map(child => renderMenuItem(child))}
        </ul>
      )}
    </li>
  )

  return (
    <div className="w-64 bg-gray-50 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4 text-orange-500">首页</h2>
      <nav>
        <ul className="space-y-2">
          {menuItems.map(item => renderMenuItem(item))}
        </ul>
      </nav>
    </div>
  )
}
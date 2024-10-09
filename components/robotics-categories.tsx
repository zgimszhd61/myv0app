'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

interface Category {
  name: string
  totalProjects: number
  subcategories: { name: string; count: number }[]
}

const categories: Category[] = [
  {
    name: "机器人技术",
    totalProjects: 770,
    subcategories: [
      { name: "计算机视觉", count: 630 },
      { name: "机器视觉", count: 548 },
      { name: "人脸识别", count: 311 },
      { name: "机器人算法", count: 70 },
      { name: "语音识别", count: 305 },
      { name: "人机交互", count: 400 },
      { name: "SLAM", count: 50 },
      { name: "手势识别", count: 23 },
      { name: "机器学习", count: 649 },
    ]
  },
  {
    name: "机器人研发及生产",
    totalProjects: 2348,
    subcategories: [
      { name: "机器人整机生产", count: 1439 },
      { name: "控制系统", count: 373 },
      { name: "机器人供应链", count: 445 },
      { name: "驱动器", count: 60 },
      { name: "机器人零部件", count: 218 },
      { name: "传感器/中间件", count: 188 },
      { name: "伺服电机", count: 81 },
    ]
  },
  {
    name: "工业机器人",
    totalProjects: 1672,
    subcategories: [
      { name: "焊接机器人", count: 198 },
      { name: "搬运机器人", count: 62 },
      { name: "装配机器人", count: 72 },
      { name: "码垛机器人", count: 26 },
      { name: "喷涂机器人", count: 70 },
      { name: "工业检测机器人", count: 179 },
    ]
  },
  {
    name: "服务机器人",
    totalProjects: 1605,
    subcategories: [
      { name: "个人/家用机器人", count: 620 },
      { name: "教育机器人", count: 295 },
      { name: "娱乐机器人", count: 80 },
      { name: "陪伴机器人", count: 105 },
      { name: "扫地机器人", count: 71 },
      { name: "物流机器人", count: 435 },
      { name: "送餐机器人", count: 16 },
      { name: "导购机器人", count: 10 },
      { name: "清洁机器人", count: 111 },
      { name: "农业机器人", count: 71 },
      { name: "医用机器人", count: 203 },
      { name: "康复机器人", count: 67 },
      { name: "手术机器人", count: 151 },
      { name: "特种机器人", count: 233 },
      { name: "军事机器人", count: 3 },
      { name: "巡检机器人", count: 55 },
      { name: "安防机器人", count: 95 },
      { name: "探测机器人", count: 3 },
    ]
  },
  {
    name: "机器人媒体及社区",
    totalProjects: 44,
    subcategories: [
      { name: "机器人媒体", count: 23 },
      { name: "机器人社区", count: 24 },
      { name: "机器人模型", count: 43 },
    ]
  },
]

export function RoboticsCategories() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  return (
    <div className="container mx-auto p-4 space-y-6">
      {categories.map((category) => (
        <div key={category.name} className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-orange-500">{category.name}</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">{category.totalProjects}个项目</span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.subcategories.map((subcategory) => (
              <button
                key={subcategory.name}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
                onClick={() => setExpandedCategory(subcategory.name)}
              >
                {subcategory.name} ({subcategory.count})
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
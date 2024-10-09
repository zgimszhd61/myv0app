'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { HelpCircle } from 'lucide-react'

const filterCategories = [
  {
    name: "行业",
    options: ["不限", "先进制造", "人工智能", "企业服务", "VR/AR", "医疗健康", "电商零售", "汽车交通", "金融", "本地生活", "教育", "游戏", "文娱传媒", "体育运动", "物流", "房地产", "社交网络", "广告营销", "旅游", "工具软件", "农业", "传统制造", "区块链", "元宇宙"]
  },
  {
    name: "轮次",
    options: ["不限", "种子轮", "天使轮", "Pre-A轮", "A轮", "A+轮", "Pre-B轮", "B轮", "B+轮", "C+轮", "C轮", "D轮", "D+轮", "E轮", "E+轮", "F轮", "G轮", "H轮", "Pre-IPO", "战略投资"]
  },
  {
    name: "并购",
    options: ["合并", "收购"]
  },
  {
    name: "上市",
    options: ["不限", "基石轮", "IPO上市", "IPO上市后", "新三板", "新三板定增", "退市"],
    vipOptions: ["基石轮", "退市"]
  },
  {
    name: "退出",
    options: ["不限", "IPO", "并购", "新三板", "回购", "股权转让", "清算", "借壳"],
    vipOptions: ["新三板", "股权转让", "清算", "借壳"]
  },
  {
    name: "股权转让",
    options: ["不限", "已完成", "已披露", "已终止"],
    vipOptions: ["已完成", "已披露", "已终止"]
  },
  {
    name: "地区",
    options: ["不限", "国内", "海外", "热门地点"]
  },
  {
    name: "币种",
    options: ["不限", "人民币", "美元", "欧元", "英镑", "新台币", "港元", "日元", "卢比", "澳元", "其他"]
  },
  {
    name: "时间",
    options: ["不限", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016年及以前"]
  },
  {
    name: "桔子优选",
    options: ["不限", "名企首秀", "知名FA", "知名风投", "一年两轮", "超过两年未融资", "IPO排队", "科创板", "FA事件", "国资背景", "领投事件", "独家投资", "独角兽", "千里马", "未公开事件"],
    vipOptions: ["名企首秀", "知名FA", "知名风投", "一年两轮", "超过两年未融资", "IPO排队", "科创板", "FA事件", "国资背景", "领投事件", "独家投资", "独角兽", "千里马"]
  }
]

export function InvestmentFilter() {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})

  const toggleFilter = (category: string, option: string) => {
    setSelectedFilters(prev => {
      const current = prev[category] || []
      if (current.includes(option)) {
        return { ...prev, [category]: current.filter(item => item !== option) }
      } else {
        return { ...prev, [category]: [...current, option] }
      }
    })
  }

  return (
    <div className="container mx-auto p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><a href="#">首页</a></li>
            <li>投资事件</li>
          </ul>
        </div>
        <Button variant="link" className="text-orange-500">使用已保存的筛选</Button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="font-semibold">标签：</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="h-4 w-4" />
              </TooltipTrigger>
              <TooltipContent>
                <p>输入关键词进行筛选</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Input placeholder="风口、赛道、标签、等关键词" className="max-w-xs" />
        </div>

        {filterCategories.map((category, index) => (
          <div key={index} className="flex flex-wrap items-center gap-2">
            <span className="font-semibold min-w-20">{category.name}：</span>
            {category.options.map((option, optionIndex) => (
              <Badge
                key={optionIndex}
                variant={selectedFilters[category.name]?.includes(option) ? "default" : "outline"}
                className={`cursor-pointer ${option === '不限' ? 'bg-orange-100 text-orange-800 hover:bg-orange-200' : ''} ${category.vipOptions?.includes(option) ? 'border-red-500' : ''}`}
                onClick={() => toggleFilter(category.name, option)}
              >
                {option}
                {category.vipOptions?.includes(option) && (
                  <span className="ml-1 text-xs text-red-500">VIP</span>
                )}
              </Badge>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
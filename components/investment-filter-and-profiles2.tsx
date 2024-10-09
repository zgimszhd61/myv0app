'use client'

import { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const filterCategories = [
  {
    name: "投资行业",
    options: ["不限", "互联网", "移动互联网", "医疗健康", "环保能源", "制造业", "本地生活", "教育", "金融", "文化娱乐", "硬件", "农业", "游戏", "企业服务", "电子商务", "汽车交通", "房产服务", "旅游", "广告营销", "SNS社交网络", "工具软件", "体育运动", "人工智能", "互联网金融", "消费升级", "新材料", "大数据", "TMT", "物联网", "物流运输", "云计算", "智能制造", "区块链", "工业4.0", "零售快消", "Web3.0", "半导体", "新能源", "元宇宙"]
  },
  {
    name: "地区",
    options: ["不限", "国内", "海外", "热门地点"]
  },
  {
    name: "投资阶段",
    options: ["不限", "种子天使轮", "Pre-A轮", "A轮", "B轮", "C轮及以后", "IPO上市", "IPO上市后", "收购", "战略投资"]
  },
  {
    name: "桔子优选",
    options: ["不限", "知名企业", "知名高校", "已认证"],
    vipOptions: ["知名企业", "知名高校", "已认证"]
  }
]

const investors = [
  { name: "彭超", title: "超越创投·创始合伙人", bio: "彭超，超越创投创始合伙人，天使投资人，是SHEIN最早的投资人之一。", image: "/placeholder.svg" },
  { name: "陈德霖", title: "圆币科技联合创始人，董事长", bio: "陈德霖，圆币科技联合创始人，董事长，曾担任香港金融管理局总裁。1976年，陈德霖从香港中文大学毕业后，进入香港政府工作。1991年出任外汇基金管理局副局长，...", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DFdwyhRl69QWSi8k6Veyc12XGDtYku.png" },
  { name: "习程远", title: "", bio: "习程远，尺寸资本创始人兼CEO，广联达创始人之志中的儿子。他本人是研究生学历，毕业于马里兰大学，掌握工程管理和土木工程理论，熟悉中美建筑行业相关法律、...", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DFdwyhRl69QWSi8k6Veyc12XGDtYku.png" },
  { name: "Sam Altman", title: "Hydrazine Capital · Founder", bio: "Sam Altman is the co-founder and CEO of OpenAI. Sam was previously the Chairman of Y Combinator, a leading silicon valley startup accelerator.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DFdwyhRl69QWSi8k6Veyc12XGDtYku.png" },
  { name: "Nat Friedman", title: "GitHub · CEO", bio: "Nat Friedman, 硅谷天使投资人，AI Grant联合创始人，Github前CEO。1999 年Friedman 毕业于麻省理工学院，毕业后创办了 Ximian。Ximian 后来被 Novell 收购，...", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DFdwyhRl69QWSi8k6Veyc12XGDtYku.png" },
  { name: "Lee Soo-man", title: "", bio: "Lee Soo-man is the founder of SM Entertainment. Lee Soo-man attended California State University, Northridge.", image: "/placeholder.svg" },
]

export function InvestmentFilterAndProfiles() {
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
    <div className="container mx-auto p-4 space-y-6">
      <div className="space-y-4">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {investors.map((investor, index) => (
          <Card key={index}>
            <CardContent className="flex items-start space-x-4 p-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={investor.image} alt={investor.name} />
                <AvatarFallback>{investor.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-bold">{investor.name}</h3>
                <p className="text-sm text-gray-500">{investor.title}</p>
                <p className="text-sm mt-2 line-clamp-3">{investor.bio}</p>
                <Button variant="outline" className="mt-2">
                  <span className="text-orange-500">☆</span> 关注
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
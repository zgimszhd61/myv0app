'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const sourceOptions = ["精选新闻", "机构新闻", "抓取新闻"]
const industryOptions = ["不限", "先进制造", "人工智能", "企业服务", "VR/AR", "医疗健康", "电商零售", "汽车交通", "金融", "本地生活", "教育", "游戏", "文娱传媒", "体育运动", "物流", "房地产", "社交网络", "广告营销", "旅游", "工具软件", "农业", "传统制造", "区块链", "元宇宙"]
const typeOptions = ["不限", "产品", "融资", "采访报道", "分析评论", "竞争合作", "传言预测", "转型调整", "人事变动", "关停倒闭", "内部消息", "其他"]

const newsItems = [
  { date: "今天", title: "「吉天星舟」完成数千万元Pre-A轮融资，已成功发射两颗新一代'三高'光学遥感卫星", company: "吉天星舟", industry: "先进制造", location: "江苏", source: "36kr.com" },
  { date: "今天", title: "「深度原理」完成天使+轮融资", company: "深度原理", industry: "人工智能", location: "北京", source: "www.chinaventure.com.cn" },
  { date: "今天", title: "上海宝丰新三板挂牌上市，2023年全年营业收入5.23亿元", company: "宝丰机械", industry: "传统制造", location: "上海", source: "news.10jqka.com.cn" },
  { date: "今天", title: "西立股份将在新三板挂牌公开转让 2023年度营收6766.55万", company: "西立股份", industry: "传统制造", location: "山东", source: "www.wabei.cn" },
  { date: "今天", title: "科恩股份将在新三板挂牌公开转让 2023年度营收9771.15万", company: "科恩股份", industry: "先进制造", location: "浙江", source: "www.wabei.cn" },
  { date: "今天", title: "浙江迎丰科技股份有限公司 关于控股股东、实际控制人协议转让公司部分股份暨 权益变动的提示性公告", company: "迎丰股份", industry: "传统制造", location: "浙江", source: "pdf.dfcfw.com" },
  { date: "今天", title: "晶体材料及元器件厂商'飞锐特'完成数千万元人民币Pre-A轮融资", company: "飞锐特", industry: "先进制造", location: "四川", source: "36kr.com" },
]

export function InvestmentNewsFeed() {
  const [selectedSource, setSelectedSource] = useState("精选新闻")
  const [selectedIndustry, setSelectedIndustry] = useState("不限")
  const [selectedType, setSelectedType] = useState("不限")

  return (
    <div className="container mx-auto p-4 space-y-4">
      <div className="flex space-x-2">
        {sourceOptions.map((option) => (
          <Button
            key={option}
            variant={selectedSource === option ? "default" : "outline"}
            onClick={() => setSelectedSource(option)}
          >
            {option}
          </Button>
        ))}
      </div>

      <Input type="text" placeholder="输入关键词，按回车键确认" className="max-w-md" />

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <span className="font-semibold">行业：</span>
          <div className="flex flex-wrap gap-2">
            {industryOptions.map((option) => (
              <Badge
                key={option}
                variant={selectedIndustry === option ? "default" : "outline"}
                className={`cursor-pointer ${option === '不限' ? 'bg-orange-100 text-orange-800 hover:bg-orange-200' : ''}`}
                onClick={() => setSelectedIndustry(option)}
              >
                {option}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-semibold">类型：</span>
          <div className="flex flex-wrap gap-2">
            {typeOptions.map((option) => (
              <Badge
                key={option}
                variant={selectedType === option ? "default" : "outline"}
                className={`cursor-pointer ${option === '不限' ? 'bg-orange-100 text-orange-800 hover:bg-orange-200' : ''}`}
                onClick={() => setSelectedType(option)}
              >
                {option}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {newsItems.map((item, index) => (
          <div key={index} className="flex items-start justify-between p-4 bg-white rounded-lg shadow">
            <div className="space-y-2">
              <div className="text-sm text-gray-500">{item.date}</div>
              <h3 className="font-semibold">{item.title}</h3>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                <span className="text-sm">{item.company}</span>
                <Badge variant="secondary">{item.industry}</Badge>
                <span className="text-sm text-gray-500">{item.location}</span>
              </div>
            </div>
            <div className="text-sm text-gray-500">{item.source}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, HelpCircle, Download } from 'lucide-react'

const investmentData = [
  { id: 1, date: '2024-10-09', company: '磁骋科技', subInfo: '磁流变智能悬架技术开发商', industry: '汽车交通', round: '天使轮', amount: '1500万人民币', investor: '盛景网联(盛景嘉成)', valuation: '7500万人民币' },
  { id: 2, date: '2024-10-09', company: 'R-storm', subInfo: '特种机器人制造商', industry: '人工智能', round: 'A轮', amount: '500万人民币', investor: '中关村科技租赁', valuation: '2500万人民币' },
  { id: 3, date: '2024-10-09', company: '飞锐特', subInfo: '光电晶体材料及元器件制造商', industry: '先进制造', round: 'Pre-A轮', amount: '未透露', investor: '[领投] 毅达资本\n苏高新金控/苏高新创投', valuation: '1亿人民币' },
  { id: 4, date: '2024-10-08', company: '库萨科技', subInfo: '无人作业解决方案提供商', industry: '先进制造', round: 'A轮', amount: '800万人民币', investor: '中关村科技租赁', valuation: '4000万人民币' },
  { id: 5, date: '2024-10-08', company: '达远辰光', subInfo: '分子诊断和分子生物学应用...', industry: '医疗健康', round: 'Pre-A轮', amount: '数千万人民币', investor: '[领投] 亚辉龙\n阳和投资', valuation: '1.5亿人民币' },
]

export function InvestmentTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  const toggleSelectAll = () => {
    if (selectedItems.length === investmentData.length) {
      setSelectedItems([])
    } else {
      setSelectedItems(investmentData.map(item => item.id))
    }
  }

  const toggleSelectItem = (id: number) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-semibold">共131383条投资事件</div>
        <div className="flex space-x-2">
          <Button variant="secondary">
            全部下载
            <Download className="ml-2 h-4 w-4" />
          </Button>
          <span className="text-gray-500">或</span>
          <Input type="number" placeholder="1" className="w-16" value={currentPage} onChange={(e) => setCurrentPage(Number(e.target.value))} />
          <span className="text-gray-500">-</span>
          <Input type="number" placeholder="结束页" className="w-20" />
          <Button variant="secondary">
            分页下载
            <HelpCircle className="ml-2 h-4 w-4" />
          </Button>
          <Button>投资事件统计</Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox checked={selectedItems.length === investmentData.length} onCheckedChange={toggleSelectAll} />
            </TableHead>
            <TableHead>时间</TableHead>
            <TableHead>公司名</TableHead>
            <TableHead>行业</TableHead>
            <TableHead>轮次</TableHead>
            <TableHead>金额</TableHead>
            <TableHead>投资方</TableHead>
            <TableHead>最新估值(估算)</TableHead>
            <TableHead>详情</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {investmentData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Checkbox checked={selectedItems.includes(item.id)} onCheckedChange={() => toggleSelectItem(item.id)} />
              </TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>
                <div>{item.company}</div>
                <div className="text-sm text-gray-500">{item.subInfo}</div>
              </TableCell>
              <TableCell>{item.industry}</TableCell>
              <TableCell>{item.round}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>
                {item.investor.split('\n').map((inv, index) => (
                  <div key={index} className={index === 0 && inv.startsWith('[领投]') ? 'text-orange-500' : ''}>{inv}</div>
                ))}
              </TableCell>
              <TableCell>{item.valuation}</TableCell>
              <TableCell>
                <Button variant="secondary" size="sm">详情</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
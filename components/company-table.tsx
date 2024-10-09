'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

const companies = [
  { id: 1, name: "腾飞光伏", logo: "/placeholder.svg", activeTime: "存活8年5个月", closeDate: "2024-09-30", industry: "先进制造", location: "江苏", establishDate: "2016-04-01", investmentStatus: "尚未获投" },
  { id: 2, name: "看准网", logo: "/placeholder.svg", activeTime: "存活10年9个月", closeDate: "2024-09-30", industry: "企业服务", location: "北京", establishDate: "2013-12-01", investmentStatus: "尚未获投" },
  { id: 3, name: "贞观", logo: "/placeholder.svg", activeTime: "存活8年8个月", closeDate: "2024-09-27", industry: "文娱传媒", location: "陕西", establishDate: "2016-01-01", investmentStatus: "尚未获投" },
  { id: 4, name: "WeLoop唯乐", logo: "/placeholder.svg", activeTime: "存活10年5个月", closeDate: "2024-09-24", industry: "先进制造", location: "广东", establishDate: "2014-04-01", investmentStatus: "尚未获投" },
  { id: 5, name: "WeLoop小黑", logo: "/placeholder.svg", activeTime: "存活10年5个月", closeDate: "2024-09-24", industry: "先进制造", location: "广东", establishDate: "2014-04-01", investmentStatus: "尚未获投" },
  { id: 6, name: "Transposit", logo: "/placeholder.svg", activeTime: "存活8年1个月", closeDate: "2024-09-13", industry: "企业服务", location: "北美洲", establishDate: "2016-08-01", investmentStatus: "尚未获投" },
  { id: 7, name: "动漫之家", logo: "/placeholder.svg", activeTime: "存活19年8个月", closeDate: "2024-09-12", industry: "文娱传媒", location: "北京", establishDate: "2005-01-01", investmentStatus: "已被收购" },
  { id: 8, name: "Big Lots", logo: "/placeholder.svg", activeTime: "存活57年8个月", closeDate: "2024-09-09", industry: "电商零售", location: "北美洲", establishDate: "1967-01-01", investmentStatus: "尚未获投" },
  { id: 9, name: "Tally Technologies", logo: "/placeholder.svg", activeTime: "存活9年8个月", closeDate: "2024-09-04", industry: "金融", location: "北美洲", establishDate: "2015-01-01", investmentStatus: "A轮" },
  { id: 10, name: "鼎泰丰", logo: "/placeholder.svg", activeTime: "存活20年0个月", closeDate: "2024-08-26", industry: "本地生活", location: "北京", establishDate: "2004-08-01", investmentStatus: "尚未获投" },
]

export function CompanyTable() {
  return (
    <div className="container mx-auto p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">公司简称</TableHead>
            <TableHead>关闭时间</TableHead>
            <TableHead>行业</TableHead>
            <TableHead>地点</TableHead>
            <TableHead>成立时间</TableHead>
            <TableHead>获投状态</TableHead>
            <TableHead className="text-right">操作</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.map((company) => (
            <TableRow key={company.id}>
              <TableCell className="font-medium">
                <div className="flex items-center space-x-3">
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                  <div className="flex items-center space-x-2">
                    <Image src={company.logo} alt={company.name} width={32} height={32} className="rounded" />
                    <div>
                      <div>{company.name}</div>
                      <div className="text-xs text-gray-500">{company.activeTime}</div>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{company.closeDate}</TableCell>
              <TableCell>{company.industry}</TableCell>
              <TableCell>{company.location}</TableCell>
              <TableCell>{company.establishDate}</TableCell>
              <TableCell>{company.investmentStatus}</TableCell>
              <TableCell className="text-right">
                <Button variant="secondary">上香</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
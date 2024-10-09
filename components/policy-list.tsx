'use client'

import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

interface Policy {
  title: string
  industry: string
  releaseDate: string
  documentNumber: string
}

const policies: Policy[] = [
  {
    title: "宁夏回族自治区人民政府关于印发《宁夏回族自治区推动大规模设备更新和消费品以旧换新实施方案》的通知",
    industry: "综合",
    releaseDate: "2024-04-22",
    documentNumber: "-"
  },
  {
    title: "陕西省知识产权保护和促进条例",
    industry: "综合",
    releaseDate: "2024-04-22",
    documentNumber: "-"
  },
  {
    title: "贵州省人民政府关于废止、宣布失效、修改部分行政规范性文件的决定（黔府发〔2024〕3号）",
    industry: "综合",
    releaseDate: "2024-04-22",
    documentNumber: "-"
  },
  {
    title: "宁夏回族自治区人民政府办公厅关于印发《实施法治政府建设提升工程任务分工方案》的通知",
    industry: "综合",
    releaseDate: "2024-04-22",
    documentNumber: "-"
  },
  {
    title: "省人民政府关于贵州凤冈经济开发区调整区位的批复（黔府函〔2024〕62号）",
    industry: "综合",
    releaseDate: "2024-04-22",
    documentNumber: "-"
  },
  {
    title: "省人民政府办公厅关于印发贵州省全面加强和改进新时代学生心理健康工作实施方案（2024—2026年）的通知（黔府办函〔2024〕22号）",
    industry: "综合",
    releaseDate: "2024-04-22",
    documentNumber: "-"
  },
  {
    title: "山西省司法厅关于对《山西省红十字会条例（修订草案）》公开征求意见的公告",
    industry: "综合",
    releaseDate: "2024-04-22",
    documentNumber: "-"
  },
  {
    title: "中共中央国务院中央军委关于给景海鹏颁发"特级航天功勋奖章"授予朱杨柳、桂海潮"英雄航天员"荣誉称号并颁发"三级航天功勋奖章"的决定",
    industry: "综合",
    releaseDate: "2024-04-19",
    documentNumber: "-"
  },
  {
    title: "关于公开征集整治形式主义为基层减负问题线索的公告",
    industry: "综合",
    releaseDate: "2024-04-19",
    documentNumber: "-"
  }
]

export function PolicyListComponent() {
  const handleDetailsClick = (policy: Policy) => {
    console.log("Showing details for:", policy.title)
    // Implement the details view logic here
  }

  return (
    <div className="container mx-auto py-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40%]">政策标题</TableHead>
            <TableHead>行业</TableHead>
            <TableHead>发布时间</TableHead>
            <TableHead>发文字号</TableHead>
            <TableHead className="text-right">详情</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {policies.map((policy, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{policy.title}</TableCell>
              <TableCell>{policy.industry}</TableCell>
              <TableCell>{policy.releaseDate}</TableCell>
              <TableCell>{policy.documentNumber}</TableCell>
              <TableCell className="text-right">
                <Button variant="outline" onClick={() => handleDetailsClick(policy)}>
                  详情
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
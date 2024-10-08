'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText } from 'lucide-react'

interface Stat {
  title: string;
  value: number | string;
  unit?: string;
}

const stats: Stat[] = [
  { title: "观看", value: 0 },
  { title: "观看总时长", value: 0, unit: "秒" },
  { title: "点赞", value: 0 },
  { title: "收藏", value: 0 },
  { title: "评论", value: 0 },
  { title: "弹幕", value: 0 },
  { title: "笔记涨粉", value: 0 },
]

export default function AccountOverviewDashboardComponent() {
  const [timeRange, setTimeRange] = useState<'7days' | '30days'>('7days')

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">账号概览</h1>
      
      <div className="flex space-x-2 mb-4">
        <Button 
          variant={timeRange === '7days' ? 'default' : 'outline'}
          onClick={() => setTimeRange('7days')}
        >
          近7日
        </Button>
        <Button 
          variant={timeRange === '30days' ? 'default' : 'outline'}
          onClick={() => setTimeRange('30days')}
        >
          近30日
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className={index === 0 ? "col-span-2" : ""}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {stat.value}{stat.unit}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center text-gray-500">
        <FileText className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2">尚未生成数据</p>
      </div>
    </div>
  )
}
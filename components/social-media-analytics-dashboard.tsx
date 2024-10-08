'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { InfoCircledIcon, DownloadIcon } from '@radix-ui/react-icons'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { date: '2024-09-08', value: 1000 },
  { date: '2024-09-12', value: 300 },
  { date: '2024-09-16', value: 1200 },
  { date: '2024-09-20', value: 3200 },
  { date: '2024-09-24', value: 1700 },
  { date: '2024-09-28', value: 1100 },
  { date: '2024-10-02', value: 1400 },
  { date: '2024-10-06', value: 1600 },
]

const metrics = [
  { title: '发博量', value: '266' },
  { title: '阅读量', value: '28.6万' },
  { title: '公域阅读量', value: '3.9万', highlight: true },
  { title: '私域阅读量', value: '19.1万' },
  { title: '转发量', value: '157' },
  { title: '评论量', value: '12' },
  { title: '点赞量', value: '147' },
]

export default function SocialMediaAnalyticsDashboardComponent() {
  const [timeRange, setTimeRange] = useState('近30日')

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold mr-2">账号核心数据</h1>
          <InfoCircledIcon className="text-gray-400" />
        </div>
        <Button variant="link" className="text-blue-500">
          数据助手 &gt;
        </Button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">博文</h2>
        <div className="flex space-x-2">
          {['昨日', '近7日', '近30日'].map((range) => (
            <Button
              key={range}
              variant={timeRange === range ? 'default' : 'outline'}
              size="sm"
              onClick={() => setTimeRange(range)}
            >
              {range}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {metrics.slice(0, 4).map((metric) => (
          <Card key={metric.title} className={metric.highlight ? 'bg-orange-100' : ''}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-normal text-gray-500">{metric.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{metric.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-4">互动</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {metrics.slice(4).map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-normal text-gray-500">{metric.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{metric.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-end mb-4">
        <Button variant="outline" size="sm">
          <DownloadIcon className="mr-2 h-4 w-4" />
          导出数据
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
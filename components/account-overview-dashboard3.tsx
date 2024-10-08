'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowDownIcon, ArrowUpIcon, DownloadIcon, Calendar, BarChart2, LineChart } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { date: 'Sep 11', impressions: 275000, engagements: 8000 },
  { date: 'Sep 15', impressions: 260000, engagements: 10000 },
  { date: 'Sep 19', impressions: 110000, engagements: 1000 },
  { date: 'Sep 23', impressions: 230000, engagements: 3000 },
  { date: 'Sep 27', impressions: 140000, engagements: 2000 },
  { date: 'Oct 1', impressions: 150000, engagements: 4000 },
  { date: 'Oct 5', impressions: 80000, engagements: 3000 },
]

const stats = [
  { title: 'Impressions', value: '2.9M', change: -13 },
  { title: 'Engagement rate', value: '2.1%', change: 9.3 },
  { title: 'Profile visits', value: '5.8K', change: 33 },
  { title: 'New follows', value: '627', change: -3.2 },
  { title: 'Replies', value: '588', change: -31 },
  { title: 'Likes', value: '3.4K', change: -39 },
  { title: 'Reposts', value: '249', change: -66 },
  { title: 'Bookmarks', value: '1.3K', change: -45 },
  { title: 'Shares', value: '32', change: -62 },
]

export default function AccountOverviewDashboardComponent() {
  const [timeRange, setTimeRange] = useState('28D')
  const [chartType, setChartType] = useState('Bar')
  const [timeScale, setTimeScale] = useState('Daily')

  return (
    <div className="max-w-7xl mx-auto p-4 bg-gray-900 text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Account overview</h1>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-2" />
          </Button>
          {['7D', '28D', '3M', '1Y'].map((range) => (
            <Button
              key={range}
              variant={timeRange === range ? 'default' : 'outline'}
              size="sm"
              onClick={() => setTimeRange(range)}
            >
              {range}
            </Button>
          ))}
          <Button variant="outline" size="sm">
            <DownloadIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <Card className="bg-gray-800 mb-6">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <Select value="impressions" onValueChange={() => {}}>
                <SelectTrigger className="w-[180px] bg-gray-700">
                  <SelectValue placeholder="Impressions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="impressions">Impressions</SelectItem>
                  <SelectItem value="engagements">Engagements</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex space-x-2">
              <Select value={chartType} onValueChange={setChartType}>
                <SelectTrigger className="w-[100px] bg-gray-700">
                  <SelectValue placeholder="Chart type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Bar">Bar</SelectItem>
                  <SelectItem value="Line">Line</SelectItem>
                </SelectContent>
              </Select>
              <Select value={timeScale} onValueChange={setTimeScale}>
                <SelectTrigger className="w-[100px] bg-gray-700">
                  <SelectValue placeholder="Time scale" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Daily">Daily</SelectItem>
                  <SelectItem value="Weekly">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Area yAxisId="left" type="monotone" dataKey="impressions" stroke="#8884d8" fill="#8884d8" />
                <Area yAxisId="right" type="monotone" dataKey="engagements" stroke="#82ca9d" fill="#82ca9d" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${stat.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change > 0 ? <ArrowUpIcon className="inline w-4 h-4 mr-1" /> : <ArrowDownIcon className="inline w-4 h-4 mr-1" />}
                {Math.abs(stat.change)}%
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
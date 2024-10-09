'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Building2, Users, FileSpreadsheet, Banknote } from 'lucide-react'

const summaryData = [
  { title: "公司", icon: Building2, total: "62686", percentage: "14.66%", color: "bg-purple-200" },
  { title: "创业者", icon: Users, total: "34907", percentage: "9.73%", color: "bg-teal-200" },
  { title: "事件", icon: FileSpreadsheet, total: "21718", percentage: "13.93%", newThisMonth: "8", newPercentage: "26.67%", color: "bg-green-200" },
  { title: "融资额", icon: Banknote, total: "16877.59", totalUnit: "亿元", percentage: "17.21%", newThisMonth: "1.13", newPercentage: "14.6%", color: "bg-yellow-200" },
]

const industryData = [
  { name: "电子设备", total: 18962, invested: 1500 },
  { name: "智能装备", total: 10085, invested: 800 },
  { name: "新材料", total: 8327, invested: 1200 },
  { name: "新能源", total: 4185, invested: 900 },
  { name: "集成电路", total: 4022, invested: 2500 },
  { name: "测试测量", total: 3152, invested: 400 },
  { name: "激光/光电", total: 2953, invested: 300 },
  { name: "工业4.0", total: 2362, invested: 600 },
  { name: "传感设备", total: 1707, invested: 200 },
  { name: "机器人", total: 1526, invested: 400 },
  { name: "航空航天", total: 762, invested: 150 },
  { name: "其他工业", total: 609, invested: 100 },
  { name: "可穿戴设备", total: 580, invested: 80 },
  { name: "3D打印", total: 409, invested: 50 },
  { name: "无人机", total: 408, invested: 100 },
  { name: "固废处理", total: 352, invested: 30 },
  { name: "物联网设备", total: 272, invested: 40 },
]

export function IndustryDashboard() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">先进制造</h1>
        <Button>统计数据导出</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryData.map((item, index) => (
          <Card key={index}>
            <CardHeader className={`flex flex-row items-center justify-between space-y-0 pb-2 ${item.color}`}>
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              <item.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.total}{item.totalUnit}</div>
              <p className="text-xs text-muted-foreground">
                总占比 {item.percentage}
                {item.newThisMonth && (
                  <>
                    <br />
                    本月新增 {item.newThisMonth} ({item.newPercentage})
                  </>
                )}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="entrepreneurship">
        <TabsList>
          <TabsTrigger value="entrepreneurship">创业行情</TabsTrigger>
          <TabsTrigger value="investment">投资行情</TabsTrigger>
        </TabsList>
        <TabsContent value="entrepreneurship" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>中国先进制造领域各子行业创业公司分布</CardTitle>
                <div className="text-sm text-muted-foreground">(更新于2024-10-09 | 来源: IT桔子)</div>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={industryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="invested" stackId="a" fill="#FFA500" name="已获投" />
                  <Bar dataKey="total" stackId="a" fill="#D3D3D3" name="尚未获投" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <div className="flex justify-end">
            <Button>统计数据导出</Button>
          </div>
        </TabsContent>
        <TabsContent value="investment">
          {/* Investment trends content would go here */}
        </TabsContent>
      </Tabs>
    </div>
  )
}
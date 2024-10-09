'use client'

import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LineChart, Line, ResponsiveContainer } from 'recharts'

interface TrendData {
  keyword: string
  image: string
  weeklyData: { value: number }[]
  monthlyChange: number
  yearlyChange: number
}

const trendData: TrendData[] = [
  {
    keyword: "fall outfits",
    image: "/placeholder.svg?height=40&width=40",
    weeklyData: [{ value: 30 }, { value: 40 }, { value: 45 }, { value: 50 }, { value: 49 }, { value: 60 }, { value: 70 }, { value: 91 }],
    monthlyChange: -2,
    yearlyChange: 1
  },
  {
    keyword: "halloween nails",
    image: "/placeholder.svg?height=40&width=40",
    weeklyData: [{ value: 20 }, { value: 22 }, { value: 25 }, { value: 30 }, { value: 40 }, { value: 45 }, { value: 60 }, { value: 90 }],
    monthlyChange: 50,
    yearlyChange: -7
  },
  {
    keyword: "fall nail designs",
    image: "/placeholder.svg?height=40&width=40",
    weeklyData: [{ value: 10 }, { value: 15 }, { value: 20 }, { value: 25 }, { value: 30 }, { value: 40 }, { value: 50 }, { value: 55 }],
    monthlyChange: 5,
    yearlyChange: 50
  },
  {
    keyword: "dewy summer makeup",
    image: "/placeholder.svg?height=40&width=40",
    weeklyData: [{ value: 5 }, { value: 10 }, { value: 15 }, { value: 40 }, { value: 30 }, { value: 35 }, { value: 32 }, { value: 30 }],
    monthlyChange: -20,
    yearlyChange: 10000
  },
  {
    keyword: "early fall nails",
    image: "/placeholder.svg?height=40&width=40",
    weeklyData: [{ value: 5 }, { value: 8 }, { value: 12 }, { value: 10 }, { value: 15 }, { value: 20 }, { value: 25 }, { value: 30 }],
    monthlyChange: -1,
    yearlyChange: 400
  },
  {
    keyword: "fall nail colors",
    image: "/placeholder.svg?height=40&width=40",
    weeklyData: [{ value: 20 }, { value: 22 }, { value: 25 }, { value: 30 }, { value: 35 }, { value: 40 }, { value: 45 }, { value: 50 }],
    monthlyChange: 10,
    yearlyChange: 20
  },
  {
    keyword: "fall nails 2024",
    image: "/placeholder.svg?height=40&width=40",
    weeklyData: [{ value: 5 }, { value: 10 }, { value: 15 }, { value: 20 }, { value: 25 }, { value: 30 }, { value: 40 }, { value: 45 }],
    monthlyChange: 6,
    yearlyChange: 10000
  }
]

const TrendChart: React.FC<{ data: { value: number }[] }> = ({ data }) => (
  <ResponsiveContainer width="100%" height={30}>
    <LineChart data={data}>
      <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} />
    </LineChart>
  </ResponsiveContainer>
)

export function TrendDataTableComponent() {
  return (
    <div className="container mx-auto py-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">关键词</TableHead>
            <TableHead>每周变化</TableHead>
            <TableHead>每月变化</TableHead>
            <TableHead>每月变化</TableHead>
            <TableHead>每年变化</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {trendData.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={item.image} alt={item.keyword} />
                    <AvatarFallback>{item.keyword[0]}</AvatarFallback>
                  </Avatar>
                  <span>{item.keyword}</span>
                </div>
              </TableCell>
              <TableCell>
                <TrendChart data={item.weeklyData} />
              </TableCell>
              <TableCell className={item.monthlyChange >= 0 ? "text-green-600" : "text-red-600"}>
                {item.monthlyChange > 0 ? "+" : ""}{item.monthlyChange}%
              </TableCell>
              <TableCell className={item.monthlyChange >= 0 ? "text-green-600" : "text-red-600"}>
                {item.monthlyChange > 0 ? "+" : ""}{item.monthlyChange}%
              </TableCell>
              <TableCell className={item.yearlyChange >= 0 ? "text-green-600" : "text-red-600"}>
                {item.yearlyChange > 0 ? "+" : ""}{item.yearlyChange}%{item.yearlyChange >= 10000 ? "+" : ""}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
'use client'

import React from 'react'
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle } from 'lucide-react'
import Image from 'next/image'

const refundTypes = ['全部', '仅退款', '退货退款', '换货']
const refundTimes = ['最近申请', '最近处理', '最近完成']
const refundStatuses = ['全部', '待处理', '处理中', '已完成', '已取消']
const paymentStatuses = ['全部', '未退款', '已退款', '退款中']
const subAccountTypes = ['全部', '主账号', '子账号']

interface RefundItem {
  id: string;
  orderNumber: string;
  refundNumber: string;
  shopName: string;
  productName: string;
  productDescription: string;
  refundAmount: number;
  applicationTime: string;
  serviceType: string;
  refundStatus: string;
  image: string;
}

const refundItems: RefundItem[] = [
  {
    id: '1',
    orderNumber: '230776979186124650',
    refundNumber: '175935865592245046',
    shopName: 'AI智能化时代',
    productName: 'colab pro/pro+会员升级 充值订阅 代付 计算单元 GPU TPU SD编程',
    productDescription: '颜色分类:pro - 一个月/充值自己号',
    refundAmount: 47.90,
    applicationTime: '2024-09-28 14:17:05',
    serviceType: '仅退款',
    refundStatus: '退款成功',
    image: '/placeholder.svg?height=80&width=80&text=Colab'
  }
]

export default function RefundManagementPageComponent() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">退款管理</h1>
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">退款类型:</label>
              <Select>
                {refundTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">退款时间:</label>
              <Select>
                {refundTimes.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </Select>
            </div>
            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm font-medium mb-1">从:</label>
              <Input type="datetime-local" defaultValue="2024-07-10T17:42:02" />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm font-medium mb-1">到:</label>
              <Input type="datetime-local" defaultValue="2024-10-09T17:42:02" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">退款状态:</label>
              <Select>
                {refundStatuses.map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">垫付状态:</label>
              <Select>
                {paymentStatuses.map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">小二介入:</label>
              <Select>
                {subAccountTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </Select>
            </div>
          </div>
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">提交</Button>
        </CardContent>
      </Card>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>宝贝</TableHead>
            <TableHead>退款金额</TableHead>
            <TableHead>申请时间</TableHead>
            <TableHead>服务类型</TableHead>
            <TableHead>退款状态</TableHead>
            <TableHead>交易操作</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {refundItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <div className="flex items-start">
                  <Image
                    src={item.image}
                    alt={item.productName}
                    width={80}
                    height={80}
                    className="mr-4"
                  />
                  <div>
                    <p className="font-medium mb-1">{item.productName}</p>
                    <p className="text-sm text-gray-500 mb-1">{item.productDescription}</p>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{item.shopName}</Badge>
                      <Button variant="ghost" size="sm" className="text-blue-500 p-0">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        和我联系
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">订单编号: {item.orderNumber}</p>
                    <p className="text-sm text-gray-500">退款编号: {item.refundNumber}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>¥{item.refundAmount.toFixed(2)}</TableCell>
              <TableCell>{item.applicationTime}</TableCell>
              <TableCell>
                <Badge variant="secondary">{item.serviceType}</Badge>
              </TableCell>
              <TableCell>
                <Badge variant="default">{item.refundStatus}</Badge>
              </TableCell>
              <TableCell>
                <Button variant="link">服务详情</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
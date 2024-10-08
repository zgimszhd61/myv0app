'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle } from 'lucide-react'
import Image from 'next/image'

interface OrderItem {
  id: string;
  date: string;
  orderNumber: string;
  shopName: string;
  productName: string;
  productDescription: string;
  originalPrice: number;
  finalPrice: number;
  quantity: number;
  status: string;
  image: string;
  tags?: string[];
}

const orderItems: OrderItem[] = [
  {
    id: '1',
    date: '2024-09-28',
    orderNumber: '230815293891724650',
    shopName: '4k奈飞高...',
    productName: 'video 30天 [交易快照]',
    productDescription: '游戏版本: 包月版 语种分类: 简体中文 账号激活地区: 任意地区',
    originalPrice: 13.88,
    finalPrice: 13.88,
    quantity: 1,
    status: '交易成功',
    image: '/placeholder.svg?height=80&width=80&text=Video',
    tags: ['授权卡']
  },
  {
    id: '2',
    date: '2024-09-28',
    orderNumber: '230805825823624650',
    shopName: 'AI智能化时...',
    productName: 'colab pro/pro+会员升级 充值订阅 代付 计算单元 GPU TPU SD编程 [交易快照]',
    productDescription: '颜色分类: pro - 一个月/充值自己号',
    originalPrice: 58.90,
    finalPrice: 47.90,
    quantity: 1,
    status: '交易成功',
    image: '/placeholder.svg?height=80&width=80&text=Colab',
    tags: ['授权卡']
  },
  {
    id: '3',
    date: '2024-09-19',
    orderNumber: '229814022363244650',
    shopName: '天天特卖工...',
    productName: '[上新价] 泓一草原鲜乳大饼饼干牛奶味饼干500g早餐零食休闲食品休闲小吃 [交易快照]',
    productDescription: '口味: 鲜乳大饼1kg+送1kg（超值4斤装共216片）',
    originalPrice: 40.20,
    finalPrice: 26.80,
    quantity: 1,
    status: '交易成功',
    image: '/placeholder.svg?height=80&width=80&text=Biscuits',
    tags: ['正品', '7天无理由退货', '极速退款', '运费险']
  },
  {
    id: '4',
    date: '2024-09-15',
    orderNumber: '229400824863244650',
    shopName: '四季年华办...',
    productName: '牛皮纸笔记本子加厚缝线本本子 [交易快照]',
    productDescription: '颜色分类: 【牛皮】 B5&middot ； 5本&middot ； 30张（60页）/本',
    originalPrice: 15.60,
    finalPrice: 7.80,
    quantity: 1,
    status: '交易成功',
    image: '/placeholder.svg?height=80&width=80&text=Notebook',
    tags: ['正品', '7天无理由退货', '极速退款']
  }
]

export default function OrderHistoryPageComponent() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {orderItems.map((item) => (
        <Card key={item.id} className="mb-4">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Checkbox id={`select-${item.id}`} />
                <span className="text-gray-500">{item.date}</span>
                <span className="text-gray-500">订单号: {item.orderNumber}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-blue-500" />
                <span className="text-blue-500">和我联系</span>
              </div>
            </div>
            <div className="flex items-start">
              <Image
                src={item.image}
                alt={item.productName}
                width={80}
                height={80}
                className="mr-4"
              />
              <div className="flex-grow">
                <h3 className="font-semibold mb-1">{item.productName}</h3>
                <p className="text-sm text-gray-500 mb-1">{item.productDescription}</p>
                <div className="flex space-x-1">
                  {item.tags && item.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">¥{item.finalPrice.toFixed(2)}</p>
                {item.originalPrice !== item.finalPrice && (
                  <p className="text-sm text-gray-500 line-through">¥{item.originalPrice.toFixed(2)}</p>
                )}
                <p className="text-sm text-gray-500">x{item.quantity}</p>
                <p className="text-sm font-semibold text-red-500">{item.status}</p>
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <Button variant="outline" size="sm">评价</Button>
              <Button variant="outline" size="sm">订单详情</Button>
              <Button variant="outline" size="sm">查看物流</Button>
              {item.id === '3' && <Button variant="outline" size="sm">申请开票</Button>}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
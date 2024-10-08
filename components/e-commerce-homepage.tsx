'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

const categories = [
  { name: '分类', isNew: true },
  { name: '天猫', isSpecial: true },
  { name: '淘宝直播', isLive: true },
  { name: '淘宝企业购', isNew: true },
  { name: '司法拍卖' },
  { name: '天猫超市', isSpecial: true },
  { name: '闲鱼集市', isSpecial: true },
  { name: '飞猪旅行' }
]

const sidebarCategories = [
  '电脑 / 办公 / 文具',
  '工业品 / 商业 / 定制',
  '家电 / 手机 / 数码',
  '家具 / 家装 / 家居',
  '女装 / 男装 / 配饰',
  '女鞋 / 男鞋 / 运动',
  '汽车 / 珠宝 / 箱包',
  '食品 / 生鲜 / 健康',
  '母婴 / 童装 / 玩具',
  '美妆 / 洗护 / 宠物',
  '娱乐 / 图书 / 鲜花'
]

const products = [
  { name: '维达手帕纸餐巾纸可爱卫生纸...', price: 3.6, sales: '357万人已抢' },
  { name: '金纺留香珠衣物持久留香香味...', price: 3.6, discount: '已补3元' },
  { name: '企业购工具套装', price: 9.9 },
  { name: '蓝牙耳机', price: 13.46 },
  { name: 'iPhone 12', price: 858 },
  { name: 'iPhone 13', price: 1499 }
]

export default function ECommerceHomepage() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <nav className="flex space-x-4 overflow-x-auto pb-2 mb-4">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={category.isSpecial ? "default" : "outline"}
            className="flex items-center space-x-1 whitespace-nowrap"
          >
            {category.isNew && <Badge className="bg-orange-500">NEW</Badge>}
            {category.isLive && <Badge className="bg-red-500">直播</Badge>}
            <span>{category.name}</span>
          </Button>
        ))}
      </nav>

      <div className="flex gap-4">
        <aside className="w-48 flex-shrink-0">
          <h2 className="font-bold mb-2">分类</h2>
          <ul className="space-y-2">
            {sidebarCategories.map((category, index) => (
              <li key={index}>
                <Button variant="ghost" className="w-full justify-start">
                  {category}
                </Button>
              </li>
            ))}
          </ul>
        </aside>

        <main className="flex-grow">
          <div className="grid grid-cols-3 gap-4">
            <Card className="col-span-2 bg-orange-500 text-white">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2">1688严选</h2>
                <h3 className="text-4xl font-bold mb-4">工厂裸价</h3>
                <p className="text-lg">大牌平替 爆款好物</p>
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Factory+Direct+Sales"
                  alt="Factory Direct Sales"
                  width={400}
                  height={200}
                  className="mt-4"
                />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">百亿补贴:买贵必赔</h3>
                <div className="grid grid-cols-2 gap-2">
                  {products.slice(0, 2).map((product, index) => (
                    <div key={index} className="text-sm">
                      <Image
                        src={`/placeholder.svg?height=100&width=100&text=Product+${index + 1}`}
                        alt={product.name}
                        width={100}
                        height={100}
                        className="mb-1"
                      />
                      <p className="line-clamp-2">{product.name}</p>
                      <p className="text-red-500">¥{product.price}</p>
                      <p className="text-xs text-gray-500">{product.sales || product.discount}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2 flex justify-between">
                  <span>企业购</span>
                  <span className="text-gray-400">&gt;</span>
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {products.slice(2, 4).map((product, index) => (
                    <div key={index} className="text-sm">
                      <Image
                        src={`/placeholder.svg?height=50&width=50&text=Product+${index + 3}`}
                        alt={product.name}
                        width={50}
                        height={50}
                        className="mb-1"
                      />
                      <p>¥{product.price}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2 flex justify-between">
                  <span>低价专区</span>
                  <span className="text-gray-400">&gt;</span>
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {products.slice(4, 6).map((product, index) => (
                    <div key={index} className="text-sm">
                      <Image
                        src={`/placeholder.svg?height=50&width=50&text=Product+${index + 5}`}
                        alt={product.name}
                        width={50}
                        height={50}
                        className="mb-1"
                      />
                      <p>¥{product.price}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2 flex justify-between">
                  <span>淘宝直播</span>
                  <Badge className="bg-red-500">红包雨</Badge>
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-sm">
                    <Image
                      src="/placeholder.svg?height=80&width=80&text=Live+Stream+1"
                      alt="Live Stream 1"
                      width={80}
                      height={80}
                      className="mb-1"
                    />
                    <p>菌菌好物推荐</p>
                  </div>
                  <div className="text-sm">
                    <Image
                      src="/placeholder.svg?height=80&width=80&text=Live+Stream+2"
                      alt="Live Stream 2"
                      width={80}
                      height={80}
                      className="mb-1"
                    />
                    <p>小朱来逛逛</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2 flex justify-between">
                  <span>淘江湖</span>
                  <Badge className="bg-orange-500">人气热帖</Badge>
                </h3>
                <p className="text-sm">晒假日游记赢千元拍立得</p>
                <p className="text-xs text-gray-500 mt-1">
                  AI最大的想象力不在于机器屏幕，...
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  乡村振兴第二期—河北省秦皇岛...
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  【淘天商家必看】双11招商开启
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
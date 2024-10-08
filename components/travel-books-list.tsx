'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { StarIcon } from "lucide-react"

interface Book {
  id: number
  title: string
  author: string
  publisher: string
  publishDate: string
  price: number
  rating: number
  ratingCount: number
  description: string
  coverUrl: string
  paperbackPrice: number
}

const books: Book[] = [
  {
    id: 1,
    title: "去遇见",
    author: "杨天真",
    publisher: "太白文艺出版社",
    publishDate: "2024-7-4",
    price: 59.80,
    rating: 6.8,
    ratingCount: 679,
    description: "通透的杨天真，决定给自己放个长假。在这个悠长假期中，杨天真暂停了手上的所有工作，从紧张的日程表中抽身，独自踏上旅途。从巴黎到伦敦，从纽约到西班牙，她经历了...",
    coverUrl: "/placeholder.svg?height=150&width=100",
    paperbackPrice: 44.85
  },
  {
    id: 2,
    title: "萧关道",
    author: "胡成",
    publisher: "云南人民出版社",
    publishDate: "2024-6",
    price: 98.00,
    rating: 9.0,
    ratingCount: 136,
    description: "★`单向街书店文学奖`年度旅行写作获奖者最新力作 ★ 重访古路，穿越历史与文化 ★ 看见时代洪流下普通人的喜怒哀乐 ★ 罗新作序推荐 【内容简介】 汉时北道...",
    coverUrl: "/placeholder.svg?height=150&width=100",
    paperbackPrice: 84.00
  },
  {
    id: 3,
    title: "我用中文做了场梦",
    author: "[意] 亚历 (Alessandro Ceschi)",
    publisher: "文汇出版社",
    publishDate: "2024-7",
    price: 69.00,
    rating: 8.2,
    ratingCount: 775,
    description: "✨一个意大利人用中文书写的中国六年漫游，这可能是你今年读到的最有意思的中文🌍 亚历的文字给人带来全新的阅读体验，在讲述上也打破了某种隔阂，这本身就是一个语...",
    coverUrl: "/placeholder.svg?height=150&width=100",
    paperbackPrice: 34.50
  }
]

export default function TravelBooksListComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">豆瓣图书标签: 旅行</h1>
      <div className="flex justify-end space-x-4 text-sm text-blue-600 mb-4">
        <button>综合排序</button>
        <button>按出版日期排序</button>
        <button>按评价排序</button>
      </div>
      <div className="space-y-6">
        {books.map((book) => (
          <Card key={book.id} className="overflow-hidden">
            <CardContent className="p-6 flex">
              <Image
                src={book.coverUrl}
                alt={book.title}
                width={100}
                height={150}
                className="object-cover mr-6"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
                <p className="text-sm text-gray-600 mb-2">
                  {book.author} / {book.publisher} / {book.publishDate} / {book.price.toFixed(2)}元
                </p>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(book.rating / 2)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm">
                    {book.rating} ({book.ratingCount}人评价)
                  </span>
                </div>
                <p className="text-sm mb-4">{book.description}</p>
                <div className="flex items-center space-x-4">
                  <div className="space-x-2">
                    <Button variant="outline" size="sm">想读</Button>
                    <Button variant="outline" size="sm">在读</Button>
                    <Button variant="outline" size="sm">读过</Button>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">纸质版 {book.paperbackPrice.toFixed(2)}元</span>
                    <Button variant="outline" size="sm" className="ml-2">加入购书单</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
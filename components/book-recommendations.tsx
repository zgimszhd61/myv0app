'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X } from 'lucide-react'

const books = [
  {
    id: 1,
    title: "人·兽·鬼 写在人生边上",
    image: "/placeholder.svg?height=200&width=150",
    link: "/book/1"
  },
  {
    id: 2,
    title: "舌功学",
    image: "/placeholder.svg?height=200&width=150",
    link: "/book/2"
  },
  {
    id: 3,
    title: "魂牵",
    image: "/placeholder.svg?height=200&width=150",
    link: "/book/3"
  },
  {
    id: 4,
    title: "Rules of Thumb",
    image: "/placeholder.svg?height=200&width=150",
    link: "/book/4"
  },
  {
    id: 5,
    title: "柏杨白话版资治通鉴-八王之乱·大分裂",
    image: "/placeholder.svg?height=200&width=150",
    link: "/book/5"
  },
  {
    id: 6,
    title: "Social Network Data Analytics",
    image: "/placeholder.svg?height=200&width=150",
    link: "/book/6"
  },
  {
    id: 7,
    title: "沟通",
    image: "/placeholder.svg?height=200&width=150",
    link: "/book/7"
  },
  {
    id: 8,
    title: "说服的艺术",
    image: "/placeholder.svg?height=200&width=150",
    link: "/book/8",
    hasEbook: true
  },
  {
    id: 9,
    title: "創意筆記本-思考力",
    image: "/placeholder.svg?height=200&width=150",
    link: "/book/9"
  }
]

export default function BookRecommendationsComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">豆瓣猜你可能感兴趣的图书</h2>
        <Link href="/more-books" className="text-blue-600 hover:underline">
          更多»
        </Link>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {books.map((book) => (
          <div key={book.id} className="relative">
            <Link href={book.link}>
              <div className="relative aspect-[2/3] mb-2">
                <Image
                  src={book.image}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2">{book.title}</h3>
            </Link>
            <button className="absolute top-0 right-0 bg-white rounded-full p-1 shadow-md" aria-label="Remove recommendation">
              <X size={16} className="text-gray-500" />
            </button>
            {book.hasEbook && (
              <span className="absolute bottom-8 right-0 bg-blue-500 text-white text-xs px-1 py-0.5 rounded">
                有电子书
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
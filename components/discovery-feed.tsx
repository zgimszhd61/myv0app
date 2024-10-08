'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Bookmark, Star, Settings, Coins, Paintbrush, Dumbbell, Tv, X } from 'lucide-react'
import Image from 'next/image'

interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  authorAvatar: string;
}

const categories = [
  { name: "热门", icon: <Star className="w-4 h-4" /> },
  { name: "科学与技术", icon: <Settings className="w-4 h-4" /> },
  { name: "金融", icon: <Coins className="w-4 h-4" /> },
  { name: "艺术与文化", icon: <Paintbrush className="w-4 h-4" /> },
  { name: "体育", icon: <Dumbbell className="w-4 h-4" /> },
  { name: "娱乐", icon: <Tv className="w-4 h-4" /> },
]

const featuredArticle: Article = {
  id: "featured",
  title: "Taiwan Faces an Energy Crunch",
  description: "Taiwan's energy sector faces a critical juncture as the island grapples with an intensifying power crunch, threatening its economic backbone—the semiconductor...",
  image: "/placeholder.svg?height=400&width=800&text=Taiwan+Energy",
  author: "elymc",
  authorAvatar: "/placeholder.svg?height=40&width=40&text=E",
}

const articles: Article[] = [
  {
    id: "1",
    title: "2024年诺贝尔医学奖",
    description: "2024年诺贝尔生理学或医学奖授予了美国科学家维维克...",
    image: "/placeholder.svg?height=200&width=300&text=Nobel+Prize",
    author: "elymc",
    authorAvatar: "/placeholder.svg?height=40&width=40&text=E",
  },
  {
    id: "2",
    title: "海洋生物融合为一体",
    description: "科学家发现，海核桃（一种柿水母）在受伤后可以与其他...",
    image: "/placeholder.svg?height=200&width=300&text=Marine+Biology",
    author: "elymc",
    authorAvatar: "/placeholder.svg?height=40&width=40&text=E",
  },
  {
    id: "3",
    title: "塞拉太空幽灵飞船",
    description: "Sierra Space的Ghost航天器是一种革命性的物流系统，...",
    image: "/placeholder.svg?height=200&width=300&text=Space+Ghost",
    author: "elymc",
    authorAvatar: "/placeholder.svg?height=40&width=40&text=E",
  },
]

export default function DiscoveryFeedComponent() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-xl font-bold">发</span>
          </div>
          <h1 className="text-2xl font-bold">发现</h1>
        </div>
      </header>

      <nav className="flex space-x-4 mb-6 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant={selectedCategories.includes(category.name) ? "default" : "outline"}
            className="flex items-center space-x-1"
            onClick={() => toggleCategory(category.name)}
          >
            {category.icon}
            <span>{category.name}</span>
          </Button>
        ))}
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="mb-6">
            <CardContent className="p-0">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
            </CardContent>
            <CardHeader>
              <CardTitle>{featuredArticle.title}</CardTitle>
              <p className="text-gray-600">{featuredArticle.description}</p>
            </CardHeader>
            <CardFooter className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src={featuredArticle.authorAvatar} alt={featuredArticle.author} />
                  <AvatarFallback>{featuredArticle.author[0]}</AvatarFallback>
                </Avatar>
                <span>{featuredArticle.author}</span>
              </div>
              <Button variant="ghost" size="icon">
                <Bookmark className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {articles.map((article) => (
              <Card key={article.id}>
                <CardContent className="p-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                  <p className="text-sm text-gray-600">{article.description}</p>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage src={article.authorAvatar} alt={article.author} />
                      <AvatarFallback>{article.author[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{article.author}</span>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>让它成为你的</span>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </CardTitle>
              <p className="text-sm text-gray-600">选择主题和兴趣，以自定义您的发现体验</p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {categories.map((category) => (
                  <Badge
                    key={category.name}
                    variant={selectedCategories.includes(category.name) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => toggleCategory(category.name)}
                  >
                    {category.name}
                  </Badge>
                ))}
              </div>
              <Button className="w-full">保存兴趣</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
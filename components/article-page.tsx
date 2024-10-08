'use client'

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Eye, Award } from 'lucide-react'
import Image from 'next/image'

interface RelatedArticle {
  title: string;
  source: string;
  logo: string;
  number: number;
}

const relatedArticles: RelatedArticle[] = [
  {
    title: "Taiwan's energy crunch could throw a wrench into global chip industry",
    source: "cnbc",
    logo: "/placeholder.svg?height=20&width=20&text=CNBC",
    number: 1
  },
  {
    title: "Taiwan's Energy Policy at Odds With Economic Needs - Jamestown",
    source: "jamestown",
    logo: "/placeholder.svg?height=20&width=20&text=JT",
    number: 2
  },
  {
    title: "Why Taiwan and Its Tech Industry Are Facing an Energy Crisis",
    source: "e360.yale",
    logo: "/placeholder.svg?height=20&width=20&text=YALE",
    number: 3
  }
]

export default function ArticlePageComponent() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-slate-800">Taiwan Faces an Energy Crunch</h1>
      
      <div className="flex items-center space-x-4 mb-6">
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=40&width=40&text=E" alt="elymc" />
          <AvatarFallback>E</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">策划者 elymc</div>
          <div className="text-sm text-gray-500 flex items-center space-x-4">
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              2 分钟阅读
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              8 小时前
            </span>
            <span className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              3,877
            </span>
            <span className="flex items-center">
              <Award className="w-4 h-4 mr-1" />
              236
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <p className="text-lg mb-4">
            Taiwan's energy sector faces a critical juncture as the island grapples with an
            intensifying power crunch, threatening its economic backbone—the semiconductor
            industry. As reported by CNBC, Taiwan has endured three major outages in the last seven
            years, highlighting the precarious state of its energy infrastructure and raising concerns
            about the sustainability of its crucial chip manufacturing capabilities.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {relatedArticles.map((article, index) => (
              <Card key={index}>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Image src={article.logo} alt={article.source} width={20} height={20} />
                    <span className="text-xs text-gray-500">{article.source}</span>
                  </div>
                  <Badge variant="secondary">{article.number}</Badge>
                </CardContent>
              </Card>
            ))}
            <Card>
              <CardContent className="h-full flex items-center justify-center">
                <span className="text-sm text-gray-500">查看更多 2</span>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>介绍</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600">Semiconductor Industry Energy Demand</li>
                <li className="text-sm text-gray-600">Reliance on Imported Fuels</li>
                <li className="text-sm text-gray-600">Infrastructure and Blackouts</li>
                <li className="text-sm text-gray-600">Policy Challenges and Future Outlook</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
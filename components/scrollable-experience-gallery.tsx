'use client'

import React from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Share2 } from 'lucide-react'
import Image from 'next/image'

interface Experience {
  id: number;
  title: string;
  host: string;
  image: string;
  status: 'sold_out' | 'available';
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "ポリーポケットのコンパクトで遊ぼう",
    host: "Polly Pocket",
    image: "/placeholder.svg?height=400&width=600&text=Polly+Pocket+Playhouse",
    status: "sold_out"
  },
  {
    id: 2,
    title: "ポリーポケットのコンパクトにお泊まり",
    host: "Polly Pocket",
    image: "/placeholder.svg?height=400&width=600&text=Polly+Pocket+House",
    status: "sold_out"
  },
  {
    id: 3,
    title: "Kevin Hartと満喫するVIPなひととき",
    host: "Kevin Hart",
    image: "/placeholder.svg?height=400&width=600&text=Kevin+Hart+VIP+Experience",
    status: "sold_out"
  },
  {
    id: 4,
    title: "X-Mansionで訓練を受けよう",
    host: "Jubilee",
    image: "/placeholder.svg?height=400&width=600&text=X-Mansion+Training+Room",
    status: "sold_out"
  },
  {
    id: 5,
    title: "ボリウッドスターJanhvi Kapoorの暮らし",
    host: "Janhvi Kapoor",
    image: "/placeholder.svg?height=400&width=600&text=Janhvi+Kapoor+Lifestyle",
    status: "sold_out"
  }
]

export default  function ScrollableExperienceGalleryComponent() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex space-x-4 p-4">
          {experiences.map((experience) => (
            <Card key={experience.id} className="w-[300px] flex-shrink-0">
              <CardContent className="p-0 relative">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />
                <button className="absolute top-2 right-2 bg-white rounded-full p-2">
                  <Share2 className="w-4 h-4 text-gray-600" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-bold text-lg line-clamp-2">{experience.title}</h3>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-4">
                <div>
                  <p className="text-sm text-gray-600">ホスト：{experience.host}さん</p>
                  <Badge variant="secondary" className="mt-1">
                    {experience.status === 'sold_out' ? '完売' : '利用可能'}
                  </Badge>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}
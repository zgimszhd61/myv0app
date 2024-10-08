'use client'

import React from 'react'
import Image from 'next/image'
import { Star, MessageCircle, PenLine, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface CastMember {
  name: string;
  role: string;
  image: string;
}

const castMembers: CastMember[] = [
  { name: "周莉亚", role: "导演", image: "/placeholder.svg?height=100&width=100&text=周莉亚" },
  { name: "韩真", role: "导演", image: "/placeholder.svg?height=100&width=100&text=韩真" },
  { name: "张翰", role: "饰 希孟", image: "/placeholder.svg?height=100&width=100&text=张翰" },
  { name: "孟庆旸", role: "饰 青绿", image: "/placeholder.svg?height=100&width=100&text=孟庆旸" },
  { name: "谢素豪", role: "饰 展卷人", image: "/placeholder.svg?height=100&width=100&text=谢素豪" },
  { name: "刘洋", role: "饰 唐石人", image: "/placeholder.svg?height=100&width=100&text=刘洋" },
]

export default function MovieDetailsComponent() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex mb-6">
        <Image
          src="/placeholder.svg?height=300&width=200&text=只此青绿"
          alt="只此青绿"
          width={200}
          height={300}
          className="rounded-lg mr-6"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">只此青绿 (2024)</h1>
          <p className="mb-2">导演: 周莉亚 / 韩真</p>
          <p className="mb-2">编剧: 徐祖慈</p>
          <p className="mb-2">主演: 张翰 / 孟庆旸 / 谢素豪 / 刘洋 / 王晶 / 更多...</p>
          <p className="mb-2">类型: 剧情 / 歌舞 / 历史</p>
          <p className="mb-2">制片国家/地区: 中国大陆</p>
          <p className="mb-2">语言: 无对白</p>
          <p className="mb-2">上映日期: 2024-10-01(中国大陆)</p>
          <p className="mb-2">片长: 89分钟</p>
          <p className="mb-2">又名: 只此青绿(电影版) / A Tapestry of a Legendary Land</p>
          <p>IMDb: tt33059181</p>
        </div>
      </div>

      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="text-4xl font-bold mb-2">8.0</div>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
            ))}
          </div>
          <div className="text-sm text-gray-500">16544人评价</div>
        </div>
        <div className="w-64">
          {[5, 4, 3, 2, 1].map((stars) => (
            <div key={stars} className="flex items-center mb-1">
              <span className="w-4 text-right mr-2">{stars}星</span>
              <Progress value={stars === 5 ? 34.3 : stars === 4 ? 40.3 : stars === 3 ? 19.5 : stars === 2 ? 4.2 : 1.7} className="w-40" />
              <span className="w-12 text-right ml-2">{stars === 5 ? '34.3%' : stars === 4 ? '40.3%' : stars === 3 ? '19.5%' : stars === 2 ? '4.2%' : '1.7%'}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">好于 90% 歌舞片</span>
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">好于 89% 历史片</span>
      </div>

      <div className="flex space-x-4 mb-6">
        <Button variant="outline" className="flex items-center">
          <Star className="w-4 h-4 mr-2" />
          想看
        </Button>
        <Button variant="outline" className="flex items-center">
          <Star className="w-4 h-4 mr-2" />
          看过
        </Button>
        <Button variant="ghost" className="flex items-center">
          <MessageCircle className="w-4 h-4 mr-2" />
          写短评
        </Button>
        <Button variant="ghost" className="flex items-center">
          <PenLine className="w-4 h-4 mr-2" />
          写影评
        </Button>
        <Button variant="ghost" className="flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          添加到片单
        </Button>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">只此青绿的剧情简介 · · · · · ·</h2>
        <p>一位现代文物研究员（谢素豪 饰）在《千里江山图》即将展出之际潜心钻研，跨越九百余年时空走入北宋少年画家希孟（张翰 饰）的内心，目睹了希孟呕心沥血忘我创作，与无数劳动者携手，历尽千辛万苦创作出传世画卷的历程。</p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">只此青绿的演职员 · · · · · · ( 全部 54 )</h2>
        <div className="grid grid-cols-6 gap-4">
          {castMembers.map((member, index) => (
            <div key={index} className="text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={100}
                height={100}
                className="rounded-full mx-auto mb-2"
              />
              <p className="font-medium">{member.name}</p>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
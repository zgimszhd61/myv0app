'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Star, ThumbsUp, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Movie {
  id: string;
  title: string;
  poster: string;
  rating?: number;
}

interface Review {
  id: string;
  user: string;
  rating: number;
  date: string;
  content: string;
  helpfulCount: number;
  location?: string;
}

const recommendedMovies: Movie[] = [
  { id: '1', title: '郑和下西洋1：沧海幽灵', poster: '/placeholder.svg?height=200&width=150&text=郑和下西洋1' },
  { id: '2', title: '志愿军：存亡之战', poster: '/placeholder.svg?height=200&width=150&text=志愿军', rating: 7.2 },
  { id: '3', title: '谁国夫人', poster: '/placeholder.svg?height=200&width=150&text=谁国夫人' },
  { id: '4', title: '敦煌英雄', poster: '/placeholder.svg?height=200&width=150&text=敦煌英雄' },
  { id: '5', title: '余烬', poster: '/placeholder.svg?height=200&width=150&text=余烬' },
  { id: '6', title: '永不消逝的电波', poster: '/placeholder.svg?height=200&width=150&text=永不消逝的电波' },
  { id: '7', title: '首尔之春', poster: '/placeholder.svg?height=200&width=150&text=首尔之春', rating: 8.8 },
  { id: '8', title: '椒麻堂会', poster: '/placeholder.svg?height=200&width=150&text=椒麻堂会', rating: 8.6 },
  { id: '9', title: '东极岛', poster: '/placeholder.svg?height=200&width=150&text=东极岛' },
  { id: '10', title: '731', poster: '/placeholder.svg?height=200&width=150&text=731' },
]

const reviews: Review[] = [
  {
    id: '1',
    user: 'qqzoom1999',
    rating: 4,
    date: '2024-10-01 10:40:43',
    content: '二刷完毕，有遗憾有惊喜但是不想再点评任何。即使演了快六百场，真正能走进剧院看到现场的人还是少，能遇到它的城市还是少。2017年或未来能去展馆看上《千里江山图》真迹的还是少……电影是大众的艺术，感谢绿子，感谢电影，把千里江山带到更多地区的银幕上、带到流媒体、带到千家万户、带到每个人心中。',
    helpfulCount: 697,
    location: '江苏'
  },
  {
    id: '2',
    user: 'Medea_Medusa',
    rating: 4,
    date: '2024-10-01 23:22:31',
    content: '很多人的评论搞错了方向，我以为将舞剧改成电影的意义在于：让动辄三位数票价的，只能在一二线城市大型剧院看到的，古典、唯美、高雅的舞蹈诗剧艺术形式以两位数的价格和近距离分毫毕现的体验飞入寻常百姓家，并毫不刻意地完成了文化润人之功能。我所在的场次坐了一半人，什么年龄段都有，却是我体验过的人多却观众席最安静的一场电影，可见它的剧情转承叙事逻辑弱并不是什么问题，是它诗意而震撼的音、画、景、舞、情令所有人动容…',
    helpfulCount: 132,
    location: '江苏'
  },
  {
    id: '3',
    user: '树熊出没',
    rating: 4,
    date: '2024-09-22 14:06:38',
    content: '2024.09.01看了点映，效果还是很震撼的，虽然以前对国画没类主题无感，但这副的立意还是很特别，音乐五星。',
    helpfulCount: 680,
    location: '广东'
  },
]

export default function MovieRecommendationsAndReviewsComponent() {
  const [reviewFilter, setReviewFilter] = useState('热门')

  return (
    <div className="max-w-4xl mx-auto p-4">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">喜欢这部电影的人也喜欢</h2>
        <div className="grid grid-cols-5 gap-4">
          {recommendedMovies.map((movie) => (
            <div key={movie.id} className="text-center">
              <Image
                src={movie.poster}
                alt={movie.title}
                width={150}
                height={200}
                className="rounded-lg mb-2"
              />
              <h3 className="text-sm font-medium mb-1">{movie.title}</h3>
              {movie.rating && (
                <div className="flex items-center justify-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm">{movie.rating}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">只此青绿的短评 · · · · · · ( 全部 10555 条 )</h2>
          <Button variant="outline">
            <span className="mr-2">我要写短评</span>
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex space-x-4 mb-4">
          {['热门', '最新', '好友'].map((filter) => (
            <Button
              key={filter}
              variant={reviewFilter === filter ? 'default' : 'ghost'}
              onClick={() => setReviewFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-4">
              <div className="flex items-center mb-2">
                <span className="font-medium mr-2">{review.user}</span>
                <div className="flex items-center mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
                {review.location && (
                  <span className="text-sm text-gray-500 ml-2">{review.location}</span>
                )}
              </div>
              <p className="mb-2">{review.content}</p>
              <div className="flex items-center text-sm text-gray-500">
                <ThumbsUp className="w-4 h-4 mr-1" />
                <span>{review.helpfulCount} 有用</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
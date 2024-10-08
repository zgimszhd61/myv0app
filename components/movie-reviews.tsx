'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

type Review = {
  id: string
  movieTitle: string
  reviewTitle: string
  rating: number
  content: string
  posterUrl: string
}

const initialReviews: Review[] = [
  {
    id: '1',
    movieTitle: '关云长',
    reviewTitle: '《关云长》应该这么看',
    rating: 5,
    content: '昨天看了电影《关云长》觉得还不错。但是豆瓣上的对此电影的评价都一般般。我想可能是他们没看懂吧。拍一部好电影是很难的，导演既要让电影拍得有深度，观众看完不会大骂弱智；又要让观众能看懂，有那么...',
    posterUrl: '/placeholder.svg'
  },
  {
    id: '2',
    movieTitle: 'Inception',
    reviewTitle: '以后若是我变得没理想了，都都喜欢，孤独终老，请您叫醒我',
    rating: 5,
    content: '面临大学毕业，我兴致勃勃地找各种人聊天，得到的却是各种冷水。他们都说，应届生都有各种想法，对未来充满憧憬，而工作之后理想什么的，就会没了。看到盗梦里头，对"孤独终老"的解释，突然又有了感觉。...',
    posterUrl: '/placeholder.svg'
  }
]

export default function MovieReviewsComponent() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews)

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-green-700 mb-6">我的评论 ··········· (评论{reviews.length})</h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          <Card key={review.id} className="flex overflow-hidden">
            <img src={review.posterUrl} alt={review.movieTitle} className="w-32 h-auto object-cover" />
            <div className="flex-grow">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-blue-600">{review.reviewTitle}</CardTitle>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">阿难 评论: {review.movieTitle}</span>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{review.content}</p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
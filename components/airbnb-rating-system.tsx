'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Sparkles, ClipboardCheck, Key, MessageCircle, MapPin, DollarSign } from 'lucide-react'

interface RatingCategory {
  name: string;
  score: number;
  icon: React.ReactNode;
}

const ratingCategories: RatingCategory[] = [
  { name: "清潔さ", score: 5.0, icon: <Sparkles className="w-6 h-6" /> },
  { name: "掲載情報の正確さ", score: 4.9, icon: <ClipboardCheck className="w-6 h-6" /> },
  { name: "チェックイン", score: 4.9, icon: <Key className="w-6 h-6" /> },
  { name: "コミュニケーション", score: 5.0, icon: <MessageCircle className="w-6 h-6" /> },
  { name: "ロケーション", score: 4.9, icon: <MapPin className="w-6 h-6" /> },
  { name: "価格", score: 4.9, icon: <DollarSign className="w-6 h-6" /> },
]

export default function AirbnbRatingSystemComponent() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex justify-center items-center space-x-2">
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-gray-700" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v5.7c0 4.83-3.36 9.36-7 10.46-3.64-1.1-7-5.63-7-10.46v-5.7l7-3.12z"/>
            <path d="M12 5l-5 2.18v3.82c0 3.31 2.19 6.42 5 7.5 2.81-1.08 5-4.19 5-7.5V7.18L12 5z"/>
          </svg>
          <span className="text-5xl font-bold">5.0</span>
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-gray-700" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v5.7c0 4.83-3.36 9.36-7 10.46-3.64-1.1-7-5.63-7-10.46v-5.7l7-3.12z"/>
            <path d="M12 5l-5 2.18v3.82c0 3.31 2.19 6.42 5 7.5 2.81-1.08 5-4.19 5-7.5V7.18L12 5z"/>
          </svg>
        </div>
        <CardTitle className="text-2xl font-bold mt-4">ゲストチョイス</CardTitle>
        <p className="text-sm text-gray-600 mt-2">
          評価、レビュー、信頼性において、<br />
          Airbnbのゲストから好評を得ている宿泊先
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="font-bold">総合評価</span>
            <Progress value={100} className="flex-grow" />
            <span>5</span>
          </div>
          {ratingCategories.map((category, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-8">{category.icon}</div>
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <span>{category.name}</span>
                  <span>{category.score.toFixed(1)}</span>
                </div>
                <Progress value={category.score * 20} className="mt-1" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
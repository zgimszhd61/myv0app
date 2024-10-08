"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CountdownProps {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const Countdown: React.FC<CountdownProps> = ({ days, hours, minutes, seconds }) => {
  const [timeLeft, setTimeLeft] = useState({ days, hours, minutes, seconds })

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft(prev => ({ ...prev, seconds: prev.seconds - 1 }))
      } else if (timeLeft.minutes > 0) {
        setTimeLeft(prev => ({ ...prev, minutes: prev.minutes - 1, seconds: 59 }))
      } else if (timeLeft.hours > 0) {
        setTimeLeft(prev => ({ ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }))
      } else if (timeLeft.days > 0) {
        setTimeLeft(prev => ({ ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }))
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  return (
    <div className="text-center mb-4">
      <span className="text-2xl font-bold">
        距结束: <span className="text-red-600">{timeLeft.days}</span> 天{' '}
        <span className="text-red-600">{timeLeft.hours.toString().padStart(2, '0')}</span> 时{' '}
        <span className="text-red-600">{timeLeft.minutes.toString().padStart(2, '0')}</span> 分{' '}
        <span className="text-red-600">{timeLeft.seconds.toString().padStart(2, '0')}</span> 秒
      </span>
    </div>
  )
}

export default function LimitedTimeOfferComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">限时抢购</h1>
      <Countdown days={23} hours={9} minutes={10} seconds={0} />
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="flex-1">
          <CardContent className="p-0 relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="豆瓣电影无火香薰 吉光片‘语’系列 礼盒"
              width={600}
              height={400}
              className="w-full h-auto"
            />
            <Button variant="outline" className="absolute left-2 top-1/2 -translate-y-1/2">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="absolute right-2 top-1/2 -translate-y-1/2">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
        <Card className="flex-1 md:max-w-xs">
          <CardContent className="p-4">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="豆瓣电影无火香薰 吉光片‘语’系列 220ml"
              width={200}
              height={200}
              className="w-full h-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">豆瓣电影无火香薰 吉光片"语"系列 220ml</h2>
            <p className="text-sm text-gray-600 mb-4">预过瑰丽的电影吉光片羽</p>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-red-600 text-2xl font-bold">¥168</span>
                <span className="text-gray-400 line-through ml-2">¥188</span>
              </div>
              <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                立减20元
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">马上抢</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
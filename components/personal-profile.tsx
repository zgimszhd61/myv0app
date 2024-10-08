'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type DiaryEntry = {
  id: string
  title: string
  date: string
  content: string
  replies: number
}

type Album = {
  id: string
  title: string
  coverImage: string
  updatedAt: string
}

type Review = {
  id: string
  title: string
  rating: number
  content: string
  image: string
}

const diaryEntries: DiaryEntry[] = [
  {
    id: '1',
    title: '我的端午节',
    date: '2017-05-28 14:50:18',
    content: '我的端午节就宅在家里折腾自己的typecho博客了，使用的是linode环境 + mysql + typecho，很快就搭好了。但是都闲的是现在没啥访问量，也没有什么人反馈。(访问流量方面在cnzz后台可以看到)  不知道有没有朋友也搭过网站或者博客的，第一批访客可以用什么...',
    replies: 2
  },
  {
    id: '2',
    title: '如何评价三国中三个君主管理风格',
    date: '2016-08-30 13:23:16',
    content: '更多文章见：http://www.alipie.com/ 综述 在三国的几位君主中，曹操的管理能力最强。刘备和孙权也都不易。有人的地方就有江湖，如果能把自己放在他们当时的处境思考，可以学到很多东西。刘备-鄂国 精英主义和团子主义，并且信任有限的几个人。这几个人有...',
    replies: 0
  }
]

const albums: Album[] = [
  {
    id: '1',
    title: '真相',
    coverImage: '/placeholder.svg',
    updatedAt: '2012-10-17'
  }
]

const reviews: Review[] = [
  {
    id: '1',
    title: '《关云长》应该这么看',
    rating: 5,
    content: '昨天看了电影《关云长》觉得还不错，但是豆瓣上对此电影的评价都一般般。我想可能是他们没看懂吧。拍一部好电影是很难的，导演既要让电影拍得有深度，观众看完不会太弱智；又要让观众能看懂，有那么...',
    image: '/placeholder.svg'
  }
]

export default function PersonalProfileComponent() {
  const [activeTab, setActiveTab] = useState('diary')

  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/placeholder.svg" alt="阿难" />
            <AvatarFallback>阿难</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <h1 className="text-2xl font-bold">阿难</h1>
            <p className="text-sm text-gray-500">(添加签名档)</p>
          </div>
        </div>
      </header>

      <nav className="mb-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-8">
            <TabsTrigger value="home">我的主页</TabsTrigger>
            <TabsTrigger value="broadcast">广播</TabsTrigger>
            <TabsTrigger value="album">相册</TabsTrigger>
            <TabsTrigger value="diary">日记</TabsTrigger>
            <TabsTrigger value="doulist">豆列</TabsTrigger>
            <TabsTrigger value="collection">片单</TabsTrigger>
            <TabsTrigger value="book">书单</TabsTrigger>
            <TabsTrigger value="settings">设置</TabsTrigger>
          </TabsList>
        </Tabs>
      </nav>

      <main>
        <TabsContent value="diary">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">我的日记 ······ (全部)</h2>
            <Button>+ 写日记</Button>
          </div>
          {diaryEntries.map((entry) => (
            <Card key={entry.id} className="mb-4">
              <CardHeader>
                <CardTitle>{entry.title}</CardTitle>
                <p className="text-sm text-gray-500">{entry.date}</p>
              </CardHeader>
              <CardContent>
                <p>{entry.content}</p>
                <p className="text-sm text-blue-500 mt-2">({entry.replies}回应)</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="album">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">我的相册 ······ (创建1·关注0)</h2>
            <div>
              <Button className="mr-2">+ 发照片</Button>
              <Button>+ 新建相册</Button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {albums.map((album) => (
              <Card key={album.id}>
                <CardContent className="p-0">
                  <img src={album.coverImage} alt={album.title} className="w-full h-40 object-cover" />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-sm">{album.title}</CardTitle>
                  <p className="text-xs text-gray-500">{album.updatedAt}更新</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="home">
          <h2 className="text-xl font-semibold mb-4">我的评论 ··········· (评论4)</h2>
          {reviews.map((review) => (
            <Card key={review.id} className="mb-4">
              <CardHeader>
                <div className="flex items-start">
                  <img src={review.image} alt={review.title} className="w-20 h-28 object-cover mr-4" />
                  <div>
                    <CardTitle>{review.title}</CardTitle>
                    <div className="flex items-center mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current text-yellow-500" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>{review.content}</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </main>
    </div>
  )
}
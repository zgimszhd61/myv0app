'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MessageSquare, Heart, Share2, Image as ImageIcon } from 'lucide-react'

type Post = {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  image?: string
  likes: number
  comments: number
  shares: number
}

const initialPosts: Post[] = [
  {
    id: '1',
    author: {
      name: '火星上的米',
      avatar: '/placeholder.svg'
    },
    content: '就是每一天都能单独拿出来成为一个游戏的牛逼之作',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VvdhwCoNyV3Hx7TlG7l5I7ph7ALoxZ.png',
    likes: 5,
    comments: 1,
    shares: 0
  },
  {
    id: '2',
    author: {
      name: '秦一',
      avatar: '/placeholder.svg'
    },
    content: '今天路过银行，碰见一个保安依靠在门口，手里拿了块牌印了个二维码，对路过的行人喊，美女(帅哥) 加一下企业微信吧，眼神里透露出无奈，自卑，敬畏。\n我觉得他可能是想到了若干年前的一种职业，一种站在门口摇首弄姿的职责。\n想不到，男保安都这样站街了呢，真是一种奇怪的呼应。',
    likes: 7,
    comments: 2,
    shares: 0
  },
  // Add more posts as needed
]

export default function SocialFeedComponent() {
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [newPost, setNewPost] = useState('')

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      const post: Post = {
        id: Date.now().toString(),
        author: {
          name: '当前用户',
          avatar: '/placeholder.svg'
        },
        content: newPost,
        likes: 0,
        comments: 0,
        shares: 0
      }
      setPosts([post, ...posts])
      setNewPost('')
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <Button variant="ghost">说句话</Button>
        <Button variant="ghost">发照片</Button>
        <Button variant="ghost">推荐网页</Button>
        <Button variant="ghost">写日记</Button>
        <Button variant="ghost">首页设置</Button>
      </header>

      <div className="mb-6">
        <Input
          placeholder="分享生活点滴..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <div className="flex justify-between mt-2">
          <Button variant="ghost" size="icon">
            <ImageIcon className="h-4 w-4" />
          </Button>
          <Button onClick={handlePostSubmit}>发布</Button>
        </div>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <div className="ml-2">
                  <p className="text-sm font-medium">{post.author.name}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{post.content}</p>
              {post.image && (
                <img src={post.image} alt="Post image" className="mt-2 rounded-md" />
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                {post.likes}
              </Button>
              <Button variant="ghost" size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                {post.comments}
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                {post.shares}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
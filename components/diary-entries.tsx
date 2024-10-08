'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type DiaryEntry = {
  id: string
  title: string
  date: string
  content: string
  replies: number
}

const initialEntries: DiaryEntry[] = [
  {
    id: '1',
    title: '我的端午节',
    date: '2017-05-28 14:50:18',
    content: '我的端午节就宅在家里折腾自己的typecho博客了，使用的是linode环境 + mysql + typecho，很快就搭好了。但是都闲的是现在没啥访问量，也没有什么人反馈。(访问流量方面在cnzz后台可以看到) 不知道有没有朋友也搭过网站或者博客的，第一批访客可以用什么...',
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

export default function DiaryEntriesComponent() {
  const [entries, setEntries] = useState<DiaryEntry[]>(initialEntries)
  const [newEntry, setNewEntry] = useState({ title: '', content: '' })

  const handleNewEntry = () => {
    if (newEntry.title && newEntry.content) {
      const entry: DiaryEntry = {
        id: Date.now().toString(),
        title: newEntry.title,
        date: new Date().toLocaleString('zh-CN', { hour12: false }),
        content: newEntry.content,
        replies: 0
      }
      setEntries([entry, ...entries])
      setNewEntry({ title: '', content: '' })
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-green-700">我的日记 ······ (全部)</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">+ 写日记</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>写新日记</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Input
                placeholder="标题"
                value={newEntry.title}
                onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
              />
              <Textarea
                placeholder="内容"
                value={newEntry.content}
                onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })}
              />
              <Button onClick={handleNewEntry}>发布</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-6">
        {entries.map((entry) => (
          <Card key={entry.id}>
            <CardHeader>
              <CardTitle className="text-lg font-bold text-blue-600">{entry.title}</CardTitle>
              <p className="text-sm text-gray-500">{entry.date}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{entry.content}</p>
              <p className="text-sm text-blue-500 mt-2 cursor-pointer">({entry.replies}回应)</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface DiscussionTopic {
  title: string;
  replies: number;
  timestamp: string;
  author: string;
}

const topics: DiscussionTopic[] = [
  { title: "租房咨询", replies: 6, timestamp: "13秒前", author: "杭州豆瓣" },
  { title: "突然想tan恋爱了", replies: 35, timestamp: "12分钟前", author: "杭州豆瓣" },
  { title: "捏子", replies: 9, timestamp: "22分钟前", author: "杭州豆瓣" },
  { title: "老想起一个人咋办", replies: 14, timestamp: "今天12:40", author: "杭州豆瓣" },
  { title: "女票很难也要继续", replies: 2, timestamp: "今天12:07", author: "杭州豆瓣" },
  // Add more topics as needed
]

export default function DiscussionForumComponent() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">我的小组讨论</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/2">话题</TableHead>
            <TableHead>回复</TableHead>
            <TableHead>时间</TableHead>
            <TableHead>作者</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {topics.map((topic, index) => (
            <TableRow key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
              <TableCell className="font-medium">{topic.title}</TableCell>
              <TableCell>{topic.replies}回应</TableCell>
              <TableCell>{topic.timestamp}</TableCell>
              <TableCell>{topic.author}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
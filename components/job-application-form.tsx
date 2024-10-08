"use client"

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function JobApplicationFormComponent() {
  const [recentWork, setRecentWork] = useState('')
  const [workHistory, setWorkHistory] = useState('')
  const [additionalInfo, setAdditionalInfo] = useState('')
  const [doubanProfile, setDoubanProfile] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', { recentWork, workHistory, additionalInfo, doubanProfile, agreeTerms })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4 space-y-6">
      <div>
        <Label htmlFor="recent-work">最近工作单位</Label>
        <Input
          id="recent-work"
          value={recentWork}
          onChange={(e) => setRecentWork(e.target.value)}
          className="w-full"
        />
      </div>

      <div>
        <Label htmlFor="work-history">工作经历</Label>
        <Textarea
          id="work-history"
          value={workHistory}
          onChange={(e) => setWorkHistory(e.target.value)}
          placeholder="请注明工作开始/结束时间、公司名称、职位、工作内容、离职原因......"
          className="w-full h-40"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">更多信息(选填)</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="resume">上传简历</Label>
            <Input id="resume" type="file" className="w-full" />
            <p className="text-sm text-gray-500">简历最大2M，DOC/PDF/PPT格式，请用：职位-姓名-学校-学历 命名</p>
          </div>
          <div>
            <Label htmlFor="photo">上传照片</Label>
            <Input id="photo" type="file" className="w-full" />
            <p className="text-sm text-gray-500">照片最大500KB，JPG/PNG/GIF格式</p>
          </div>
          <div>
            <Label htmlFor="portfolio">上传作品</Label>
            <Input id="portfolio" type="file" className="w-full" />
            <p className="text-sm text-gray-500">自荐信、产品分析报告等作品文件，文件最大4M，DOC/PDF格式</p>
          </div>
          <div>
            <Label htmlFor="additional-info">更多的介绍自己</Label>
            <Input
              id="additional-info"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              placeholder="例如：博客、作品网页链接......"
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="douban-profile">如果你愿意，你的豆瓣是</Label>
        <Input
          id="douban-profile"
          value={doubanProfile}
          onChange={(e) => setDoubanProfile(e.target.value)}
          placeholder="http://www.douban.com/people/"
          className="w-full"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={agreeTerms}
          onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
        />
        <Label htmlFor="terms" className="text-sm">
          确认简历内容准确，真实有效。
          如在录用后发现与事实不符，公司保留立即解除劳动关系、不给付任何费用及追究相关赔偿的权利。
        </Label>
      </div>

      <Button type="submit" className="w-20">提交</Button>
    </form>
  )
}
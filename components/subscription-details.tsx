'use client'

import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SubscriptionDetailsComponent() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span>订阅</span>
        <Button variant="outline">管理订阅</Button>
      </div>
      <div className="flex justify-between items-center">
        <span>AI 模型</span>
        <div className="flex items-center">
          <span>Claude 3.5 Sonnet</span>
          <ChevronDown className="w-4 h-4 ml-2" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span>图像生成模型</span>
        <div className="flex items-center">
          <span>FLUX.1</span>
          <ChevronDown className="w-4 h-4 ml-2" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span>Pro Discord</span>
        <Button variant="outline">加入</Button>
      </div>
      <div className="flex justify-between items-center">
        <span>Pro 支持</span>
        <Button variant="outline">联系</Button>
      </div>
      <div className="flex justify-between items-center">
        <span>推荐</span>
        <div>
          <span>成功的: 3</span>
          <Button variant="link">推荐给朋友</Button>
        </div>
      </div>
    </div>
  )
}
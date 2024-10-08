'use client'

import { useState } from 'react'
import { Gift, Copy, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ReferralProgram() {
  const [email, setEmail] = useState('')
  const referralLink = 'https://perplexity.ai/pro?referral_code=SC4NT94J'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink)
    // You might want to add a toast notification here
  }

  const sendEmail = () => {
    // Implement email sending logic here
    console.log('Sending email to:', email)
    setEmail('')
    // You might want to add a toast notification here
  }

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <div className="text-center">
        <Gift className="w-16 h-16 mx-auto text-teal-600" />
        <h1 className="text-2xl font-bold mt-4">你知道谁会喜欢 Pro?</h1>
        <p className="text-gray-600 mt-2">
          推荐给一个朋友，你们俩都可以获得折扣。赠送$10，得到$10。
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="referral-link" className="block text-sm font-medium text-gray-700 mb-1">
            您的推荐链接
          </label>
          <div className="flex">
            <Input
              id="referral-link"
              value={referralLink}
              readOnly
              className="flex-grow"
            />
            <Button onClick={copyToClipboard} className="ml-2" variant="outline">
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            经邮件发送你的链接
          </label>
          <div className="flex">
            <Input
              id="email"
              type="email"
              placeholder="henry@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow"
            />
            <Button onClick={sendEmail} className="ml-2" variant="outline">
              发送
            </Button>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600">
        每推荐一位订阅者，你的下一个计费周期可以减免$10，他们也可以减免$10。你可以推荐尽可能多的人，折扣会在每个计费周期内自动获取一次。
      </p>
    </div>
  )
}
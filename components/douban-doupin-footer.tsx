'use client'

import React from 'react'
import Link from 'next/link'
import { HelpCircle, MessageSquare, Briefcase } from 'lucide-react'

export default function DoubanDoupinFooterComponent() {
  return (
    <footer className="bg-gray-100 py-8 px-4 text-sm text-gray-600">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">豆瓣豆品</h2>
            <p>© 2024 market.douban.com, all rights reserved 北京豆瓣豆品文化有限公司</p>
          </div>
          <div className="flex space-x-4">
            <Link href="/shopping-instructions" className="flex items-center hover:text-blue-600">
              <HelpCircle size={18} className="mr-1" />
              购物说明
            </Link>
            <Link href="/feedback" className="flex items-center hover:text-blue-600">
              <MessageSquare size={18} className="mr-1" />
              意见反馈
            </Link>
            <Link href="/business-cooperation" className="flex items-center hover:text-blue-600">
              <Briefcase size={18} className="mr-1" />
              商务合作
            </Link>
          </div>
        </div>
        <div className="text-xs">
          <p>营业执照：【仅销售预包装食品备案号：YB110511044101515】</p>
          <p>出版物经营许可证：新出发京批字第170330号</p>
        </div>
      </div>
    </footer>
  )
}
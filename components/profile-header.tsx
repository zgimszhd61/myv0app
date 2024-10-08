'use client'

import Image from 'next/image'
import { Pencil } from 'lucide-react'

export default function ProfileHeaderComponent() {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <div className="relative">
        <Image
          src="/placeholder.svg"
          alt="Profile"
          width={80}
          height={80}
          className="rounded-full"
        />
        <button className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2">
          <Pencil className="w-4 h-4 text-white" />
        </button>
      </div>
      <h1 className="text-2xl font-bold">个人资料</h1>
    </div>
  )
}
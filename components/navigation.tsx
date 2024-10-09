'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function NavigationComponent() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-orange-500"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="10" r="3" />
                <line x1="12" y1="13" x2="12" y2="16" />
                <line x1="10" y1="16" x2="14" y2="16" />
              </svg>
              <span className="ml-2 text-xl font-bold">
                <span className="text-red-500">C</span>
                <span className="text-black">SDN</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link href="/service" className="text-gray-700 hover:text-gray-900">Service</Link>
            <Link href="/report" className="text-gray-700 hover:text-gray-900">Report</Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900">Blog</Link>
          </div>
          <div>
            <Button className="bg-red-400 hover:bg-red-500 text-white">
              Contact
            </Button>
          </div>
        </nav>
      </div>
      <div className="h-1 bg-purple-500"></div>
    </header>
  )
}
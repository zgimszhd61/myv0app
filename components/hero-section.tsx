'use client'

import React from 'react'
import { Terminal, BookOpen, Users, Globe } from 'lucide-react'

export function HeroSectionComponent() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-gray-500 text-lg mb-2">Who we are</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            The world's second largest developer community
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Stack Overflow + GitHub for Chinese developers<br />
            Your best partner for entering China developer market
          </p>
          <div className="grid grid-cols-2 gap-8">
            <Stat icon={<Terminal />} number="47+ million" label="developers" />
            <Stat icon={<BookOpen />} number="60+ million" label="blogs, QAs and Repos" />
            <Stat icon={<Users />} number="130+ million" label="monthly visitors" />
            <Stat icon={<Globe />} number="1000+" label="global partners" />
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-200 rounded-bl-full"></div>
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Developer illustration"
              className="relative z-10"
            />
            <FloatingIcon icon="SQL" top="10%" left="10%" />
            <FloatingIcon icon="PHP" top="20%" right="10%" />
            <FloatingIcon icon="JS" bottom="30%" right="20%" />
            <FloatingIcon icon="{ }" bottom="10%" left="30%" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Stat({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) {
  return (
    <div className="flex items-center">
      <div className="mr-4 text-purple-500">{icon}</div>
      <div>
        <div className="text-2xl font-bold">{number}</div>
        <div className="text-gray-600">{label}</div>
      </div>
    </div>
  )
}

function FloatingIcon({ icon, top, left, right, bottom }: { icon: string; top?: string; left?: string; right?: string; bottom?: string }) {
  return (
    <div
      className="absolute bg-blue-400 text-white p-2 rounded-lg shadow-lg"
      style={{ top, left, right, bottom }}
    >
      {icon}
    </div>
  )
}
'use client'

import React from 'react'
import Link from 'next/link'
import { Building2, Compass, LayoutGrid, CalendarCheck, User } from 'lucide-react'

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  color: string;
}

const navItems: NavItem[] = [
  { icon: <Building2 size={24} />, label: '青椒学院', href: '/academy', color: 'bg-red-400' },
  { icon: <Compass size={24} />, label: '时间发现', href: '/discovery', color: 'bg-blue-400' },
  { icon: <LayoutGrid size={24} />, label: '全部专栏', href: '/columns', color: 'bg-yellow-400' },
  { icon: <CalendarCheck size={24} />, label: '签到', href: '/check-in', color: 'bg-purple-400' },
  { icon: <User size={24} />, label: '我的', href: '/profile', color: 'bg-green-400' },
]

export default function NavigationBarComponent() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item, index) => (
          <Link key={index} href={item.href} className="flex flex-col items-center">
            <div className={`rounded-full p-2 ${item.color}`}>
              {item.icon}
            </div>
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
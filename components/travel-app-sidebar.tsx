'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Menu,
  Hotel,
  Plane,
  Train,
  Compass,
  MapPin,
  Car,
  Ticket,
  ShoppingBag,
  Gift,
  Briefcase,
  DollarSign,
  Users,
  HelpCircle
} from 'lucide-react'

const menuItems = [
  { icon: <Hotel className="w-6 h-6" />, label: "酒店" },
  { icon: <Plane className="w-6 h-6" />, label: "机票" },
  { icon: <Train className="w-6 h-6" />, label: "火车票" },
  { icon: <Compass className="w-6 h-6" />, label: "旅游" },
  { icon: <MapPin className="w-6 h-6" />, label: "攻略·景点" },
  { icon: <Car className="w-6 h-6" />, label: "汽车·船票" },
  { icon: <Ticket className="w-6 h-6" />, label: "门票·活动" },
  { icon: <Car className="w-6 h-6" />, label: "用车" },
  { icon: <ShoppingBag className="w-6 h-6" />, label: "全球购" },
  { icon: <Gift className="w-6 h-6" />, label: "礼品卡" },
  { icon: <Briefcase className="w-6 h-6" />, label: "企业商旅" },
  { icon: <DollarSign className="w-6 h-6" />, label: "携程金融" },
  { icon: <Users className="w-6 h-6" />, label: "老友会" },
  { icon: <HelpCircle className="w-6 h-6" />, label: "关于携程" },
]

export default function TravelAppSidebarComponent() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out`}>
      <div className="flex justify-between items-center p-4 border-b">
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      <ScrollArea className="h-[calc(100vh-64px)]">
        <nav className="p-4">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start text-left mb-2"
            >
              <span className="text-blue-500 mr-4">{item.icon}</span>
              {item.label}
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </div>
  )
}
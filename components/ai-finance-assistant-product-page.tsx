'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb"
import { Star, ExternalLink, Twitter, Facebook } from 'lucide-react'
import Image from 'next/image'

export default function AiFinanceAssistantProductPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Breadcrumb className="mb-4">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">AI Accounting Assistant</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">cc:Monet Home - AI Finance Assistant</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <div className="flex justify-between items-start mb-4">
        <h1 className="text-3xl font-bold">cc:Monet Home - AI Finance Assistant</h1>
        <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">
          <ExternalLink className="w-4 h-4 mr-2" />
          Open site
        </Button>
      </div>

      <div className="flex items-center space-x-4 mb-4">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <span className="text-gray-600">5</span>
        <span className="text-gray-600">0 Reviews</span>
        <span className="text-gray-600">3 Saved</span>
        <Button variant="ghost" size="sm">
          <Star className="w-4 h-4 mr-2" />
          3
        </Button>
        <Button variant="ghost" size="icon">
          <Twitter className="w-5 h-5 text-blue-400" />
        </Button>
        <Button variant="ghost" size="icon">
          <Facebook className="w-5 h-5 text-blue-600" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-6">
        <div>
          <dl className="space-y-2">
            <div>
              <dt className="font-semibold">Introduction:</dt>
              <dd>AI assistant that streamlines invoicing and bookkeeping tasks.</dd>
            </div>
            <div>
              <dt className="font-semibold">Added on:</dt>
              <dd>Sep 26 2024</dd>
            </div>
            <div>
              <dt className="font-semibold">Monthly Visitors:</dt>
              <dd>--</dd>
            </div>
            <div>
              <dt className="font-semibold">Social & Email:</dt>
              <dd>--</dd>
            </div>
          </dl>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="secondary">Website</Badge>
            <Badge variant="secondary">Free</Badge>
            <Badge variant="secondary">AI Accounting Assistant</Badge>
          </div>
        </div>
        <Card>
          <CardContent className="p-0">
            <Image
              src="/placeholder.svg?height=300&width=500&text=cc:Monet+Home+Screenshot"
              alt="cc:Monet Home Screenshot"
              width={500}
              height={300}
              layout="responsive"
            />
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="outline" className="bg-indigo-500 hover:bg-indigo-600 text-white">
          Advertise this tool
        </Button>
        <Button variant="outline">Update this tool</Button>
      </div>
    </div>
  )
}
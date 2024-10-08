'use client'

import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star } from 'lucide-react'
import Image from 'next/image'

interface Product {
  id: number;
  title: string;
  image: string;
  users: string;
  country: string;
  countryPercentage: string;
  stars: number;
  description: string;
  tags: string[];
}

const products: Product[] = [
  {
    id: 1,
    title: "Promptchan AI",
    image: "/placeholder.svg?height=200&width=300&text=Promptchan+AI",
    users: "1.3M",
    country: "🇺🇸",
    countryPercentage: "17.48%",
    stars: 35,
    description: "Free Girl AI Image Generator",
    tags: ["AI Girlfriend", "AI Anime Art"]
  },
  {
    id: 2,
    title: "MagicAi",
    image: "/placeholder.svg?height=200&width=300&text=MagicAi",
    users: "--",
    country: "🇨🇳",
    countryPercentage: "100.00%",
    stars: 1,
    description: "Create AI-generated images and videos easily and for free.",
    tags: ["Text to Image"]
  },
  {
    id: 3,
    title: "Prompt Blaze",
    image: "/placeholder.svg?height=200&width=300&text=Prompt+Blaze",
    users: "--",
    country: "🇬🇧",
    countryPercentage: "74.74%",
    stars: 0,
    description: "Browser extension for chaining and executing AI prompts.",
    tags: ["AI Reply Assistant"]
  },
  {
    id: 4,
    title: "Copalot AI Support",
    image: "/placeholder.svg?height=200&width=300&text=Copalot+AI+Support",
    users: "--",
    country: "--",
    countryPercentage: "--",
    stars: 0,
    description: "AI platform for customizable chatbots and video FAQs.",
    tags: ["AI Customer Service Assistant"]
  }
]

export default function JustLaunchedAiProducts() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Just launched</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={200}
                layout="responsive"
              />
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-lg">{product.title}</CardTitle>
                <Button variant="ghost" size="icon">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-2 mb-2 text-sm text-gray-600">
                <span>{product.users}</span>
                <span>{product.country}</span>
                <span>{product.countryPercentage}</span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1">{product.stars}</span>
                </div>
              </div>
              <p className="text-sm mb-4">{product.description}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
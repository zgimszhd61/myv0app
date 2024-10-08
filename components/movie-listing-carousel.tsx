"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Movie {
  id: string;
  title: string;
  poster: string;
  rating: number;
}

const movies: Movie[] = [
  { id: '1', title: '749局', poster: '/placeholder.svg?height=400&width=300&text=749局', rating: 4.2 },
  { id: '2', title: '只此青绿', poster: '/placeholder.svg?height=400&width=300&text=只此青绿', rating: 8.0 },
  { id: '3', title: '志愿军：存亡之战', poster: '/placeholder.svg?height=400&width=300&text=志愿军', rating: 7.2 },
  { id: '4', title: '出走的决心', poster: '/placeholder.svg?height=400&width=300&text=出走的决心', rating: 8.8 },
  { id: '5', title: '浴火之路', poster: '/placeholder.svg?height=400&width=300&text=浴火之路', rating: 6.3 },
]

export default function MovieListingCarouselComponent() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 7

  const nextPage = () => {
    setCurrentPage((prev) => (prev % totalPages) + 1)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 2 + totalPages) % totalPages + 1)
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">正在热映</h1>
        <div>
          <Link href="/now-showing" className="text-blue-600 hover:underline mr-4">全部正在热映»</Link>
          <Link href="/coming-soon" className="text-blue-600 hover:underline">即将上映»</Link>
        </div>
      </div>
      <div className="relative">
        <div className="flex justify-between mb-4">
          {movies.map((movie) => (
            <div key={movie.id} className="w-1/5 px-2">
              <Image
                src={movie.poster}
                alt={movie.title}
                width={300}
                height={400}
                className="w-full h-auto rounded-lg mb-2"
              />
              <h2 className="text-lg font-semibold mb-1">{movie.title}</h2>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(movie.rating / 2)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-1 text-sm">{movie.rating}</span>
              </div>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                选座购票
              </Button>
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 -left-4 -translate-y-1/2">
          <Button variant="outline" size="icon" onClick={prevPage}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute top-1/2 -right-4 -translate-y-1/2">
          <Button variant="outline" size="icon" onClick={nextPage}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="text-center mt-4">
        {currentPage} / {totalPages}
      </div>
    </div>
  )
}
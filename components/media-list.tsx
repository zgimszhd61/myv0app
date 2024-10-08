'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type MediaItem = {
  id: string
  title: string
  imageUrl: string
  status: 'current' | 'want' | 'finished'
}

const initialBooks: MediaItem[] = [
  { id: '1', title: 'Web安全', imageUrl: '/placeholder.svg', status: 'current' },
  { id: '2', title: '说服', imageUrl: '/placeholder.svg', status: 'current' },
  { id: '3', title: 'Valuation', imageUrl: '/placeholder.svg', status: 'current' },
  { id: '4', title: '搜索引擎优化', imageUrl: '/placeholder.svg', status: 'current' },
  { id: '5', title: 'CSS权威指南', imageUrl: '/placeholder.svg', status: 'current' },
  { id: '6', title: '团队协作的五大障碍', imageUrl: '/placeholder.svg', status: 'want' },
  { id: '7', title: '资治通鉴', imageUrl: '/placeholder.svg', status: 'want' },
  { id: '8', title: '品牌路线图', imageUrl: '/placeholder.svg', status: 'want' },
  { id: '9', title: '只需倾听', imageUrl: '/placeholder.svg', status: 'want' },
  { id: '10', title: '须臾', imageUrl: '/placeholder.svg', status: 'want' },
]

const initialMovies: MediaItem[] = [
  { id: '1', title: 'The Notebook', imageUrl: '/placeholder.svg', status: 'want' },
  { id: '2', title: 'Hotel Rwanda', imageUrl: '/placeholder.svg', status: 'want' },
  { id: '3', title: 'WALL·E', imageUrl: '/placeholder.svg', status: 'want' },
  { id: '4', title: 'The Pianist', imageUrl: '/placeholder.svg', status: 'want' },
  { id: '5', title: '倩女幽魂', imageUrl: '/placeholder.svg', status: 'want' },
  { id: '6', title: '关云长', imageUrl: '/placeholder.svg', status: 'finished' },
  { id: '7', title: 'Inception', imageUrl: '/placeholder.svg', status: 'finished' },
  { id: '8', title: 'Face/Off', imageUrl: '/placeholder.svg', status: 'finished' },
  { id: '9', title: 'Malèna', imageUrl: '/placeholder.svg', status: 'finished' },
  { id: '10', title: 'The Curious Case of Benjamin Button', imageUrl: '/placeholder.svg', status: 'finished' },
]

export default function MediaListComponent() {
  const [books, setBooks] = useState<MediaItem[]>(initialBooks)
  const [movies, setMovies] = useState<MediaItem[]>(initialMovies)

  const renderMediaGrid = (items: MediaItem[], category: 'current' | 'want' | 'finished') => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {items.filter(item => item.status === category).map(item => (
        <div key={item.id} className="flex flex-col items-center">
          <img src={item.imageUrl} alt={item.title} className="w-32 h-48 object-cover rounded-md shadow-md" />
          <p className="mt-2 text-sm text-center">{item.title}</p>
        </div>
      ))}
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto p-4">
      <Tabs defaultValue="books">
        <TabsList className="mb-4">
          <TabsTrigger value="books">我读</TabsTrigger>
          <TabsTrigger value="movies">我看</TabsTrigger>
        </TabsList>
        <TabsContent value="books">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-green-700 mb-4">
                我读 ······ ({books.filter(b => b.status === 'current').length}本在读 · 
                {books.filter(b => b.status === 'want').length}本想读 · 
                {books.filter(b => b.status === 'finished').length}本读过)
              </h2>
              <h3 className="text-xl font-semibold mb-2">在读</h3>
              {renderMediaGrid(books, 'current')}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">想读</h3>
              {renderMediaGrid(books, 'want')}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="movies">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-green-700 mb-4">
                我看 ······ ({movies.filter(m => m.status === 'want').length}部想看 · 
                {movies.filter(m => m.status === 'finished').length}部看过 · 
                {movies.filter(m => m.status === 'current').length}个片单)
              </h2>
              <h3 className="text-xl font-semibold mb-2">想看</h3>
              {renderMediaGrid(movies, 'want')}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">看过</h3>
              {renderMediaGrid(movies, 'finished')}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
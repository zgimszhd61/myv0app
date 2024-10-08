'use client'

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Image, Smile, Calendar, MapPin, Type, Bold, Italic, MessageCircle, Repeat, Heart, BarChart2, Bookmark, Share } from 'lucide-react'

export default function SocialMediaInterfaceComponent() {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-black text-white">
      <Card className="bg-black text-white border-gray-800">
        <CardHeader className="flex flex-row items-center space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=50&width=50&text=🐶" alt="@user" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <Input 
            className="flex-grow bg-transparent border-none text-xl" 
            placeholder="What is happening?!" 
          />
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon"><Image className="h-5 w-5 text-green-500" /></Button>
              <Button variant="ghost" size="icon"><Smile className="h-5 w-5 text-green-500" /></Button>
              <Button variant="ghost" size="icon"><Type className="h-5 w-5 text-green-500" /></Button>
              <Button variant="ghost" size="icon"><Calendar className="h-5 w-5 text-green-500" /></Button>
              <Button variant="ghost" size="icon"><MapPin className="h-5 w-5 text-green-500" /></Button>
              <Button variant="ghost" size="icon"><Bold className="h-5 w-5 text-green-500" /></Button>
              <Button variant="ghost" size="icon"><Italic className="h-5 w-5 text-green-500" /></Button>
            </div>
            <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-2">
              Post
            </Button>
          </div>
        </CardContent>
      </Card>

      <Separator className="my-4 bg-gray-800" />
      <p className="text-center text-green-500 my-4">Show 1 post</p>

      <Card className="bg-black text-white border-gray-800 mb-4">
        <CardHeader className="flex flex-row items-center space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=50&width=50&text=AG" alt="@animesh_garg" />
            <AvatarFallback>AG</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">Animesh Garg <span className="text-blue-400">✓</span></p>
            <p className="text-gray-500">@animesh_garg · 13m</p>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-2">Woah! Congrats <span className="text-blue-400">@geoffreyhinton</span></p>
          <p className="mb-2">This is so big for computer scientists</p>
          <p className="text-green-500">@VectorInst</p>

          <Card className="bg-black text-white border border-gray-800 mt-4">
            <CardHeader className="flex flex-row items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=50&width=50&text=NP" alt="@NobelPrize" />
                <AvatarFallback>NP</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">The Nobel Prize <span className="text-blue-400">✓</span></p>
                <p className="text-gray-500">@NobelPrize · 27m</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Learn more about the 2024 #NobelPrize in Physics</p>
              <p className="text-gray-500">Press release: bit.ly/3TFxHIH</p>
              <p className="text-gray-500">Popular information: bit.ly/3Bi9H8u</p>
              <p className="text-gray-500">Advanced information: bit.ly/3N3pp9U</p>
              <div className="mt-4 bg-teal-200 rounded-lg overflow-hidden">
                <img 
                  src="/placeholder.svg?height=200&width=400&text=Nobel+Prize+Illustration" 
                  alt="Nobel Prize Illustration"
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">© Johan Jarnestad/The Royal Swedish Academy of Sciences</p>
            </CardContent>
          </Card>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="ghost" size="icon"><MessageCircle className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon"><Repeat className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon"><Heart className="h-5 w-5" /> 4</Button>
          <Button variant="ghost" size="icon"><BarChart2 className="h-5 w-5" /> 178</Button>
          <Button variant="ghost" size="icon"><Bookmark className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon"><Share className="h-5 w-5" /></Button>
        </CardFooter>
      </Card>
    </div>
  )
}
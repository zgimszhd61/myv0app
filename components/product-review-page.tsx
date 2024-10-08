'use client'

import React from 'react'
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ThumbsUp, MoreHorizontal } from 'lucide-react'
import Image from 'next/image'

const filterOptions = ['All', 'Color', 'Size']
const sortOptions = ['Recommend', 'Most Recent', 'Highest Rated', 'Lowest Rated']

const reviewTags = [
  { name: 'keep warm', count: 99 },
  { name: 'will repurchase', count: 7 },
  { name: 'winter outfits', count: 78 },
  { name: 'good fabric material', count: 70 },
  { name: 'right thickness', count: 32 },
  { name: 'Comfortable strap', count: 20 },
  { name: 'no smell', count: 27 },
  { name: 'feels good', count: 100 },
  { name: 'casual', count: 17 },
  { name: 'missing accessories', count: 7 },
]

interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  measurements: {
    weight: string;
    bust: string;
    waist: string;
    height: string;
    hips: string;
  };
  overallFit: string;
  color: string;
  size: string;
  productQuality: string;
  trueToImages: string;
  smellDescription: string;
  comment: string;
  images: string[];
  helpfulCount: number;
}

const reviews: Review[] = [
  {
    id: '1',
    author: 'm***y',
    date: '2024/1/24',
    rating: 5,
    measurements: {
      weight: '50 kg / 110 lbs',
      bust: '81 cm / 32 in',
      waist: '61 cm / 24 in',
      height: '161 cm / 63 in',
      hips: '84 cm / 33 in',
    },
    overallFit: 'True to Size',
    color: 'Beige',
    size: 'M',
    productQuality: 'lovely jumper and good quality',
    trueToImages: 'yes',
    smellDescription: 'no smell',
    comment: '',
    images: ['/placeholder.svg?height=100&width=100&text=Review+Image'],
    helpfulCount: 4,
  },
  {
    id: '2',
    author: 'R***A',
    date: '2024/1/3',
    rating: 5,
    measurements: {
      weight: '64 kg / 141 lbs',
      bust: '75 cm / 30 in',
      waist: '70 cm / 28 in',
      height: '135 cm / 53 in',
      hips: '83 cm / 33 in',
    },
    overallFit: 'True to Size',
    color: 'Blue',
    size: 'L',
    productQuality: 'soft',
    trueToImages: 'yes',
    smellDescription: 'no smell',
    comment: 'its so beautiful . i lovel love it . so soft',
    images: [
      '/placeholder.svg?height=100&width=100&text=Review+Image+1',
      '/placeholder.svg?height=100&width=100&text=Review+Image+2',
    ],
    helpfulCount: 3,
  },
]

export default function ProductReviewPageComponent() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Reviews</h1>
        <Button variant="outline">Image</Button>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center">
          <span className="mr-2">Rating</span>
          <Select>
            <option>All</option>
          </Select>
        </div>
        <div className="flex items-center">
          <span className="mr-2">Filter by product (color or size)</span>
          <Select>
            {filterOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </Select>
        </div>
        <div className="flex items-center">
          <span className="mr-2">Sort by</span>
          <Select>
            {sortOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </Select>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {reviewTags.map((tag) => (
          <Badge key={tag.name} variant="secondary" className="text-sm">
            {tag.name} ({tag.count})
          </Badge>
        ))}
      </div>

      {reviews.map((review) => (
        <Card key={review.id} className="mb-6">
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="font-semibold">{review.author}</span>
                <span className="text-gray-500 ml-2">{review.date}</span>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-600 mb-2">
              <span className="mr-4">Weight: {review.measurements.weight}</span>
              <span className="mr-4">Bust: {review.measurements.bust}</span>
              <span className="mr-4">Waist: {review.measurements.waist}</span>
              <span className="mr-4">Height: {review.measurements.height}</span>
              <span>Hips: {review.measurements.hips}</span>
            </div>
            <div className="text-sm text-gray-600 mb-2">
              <span className="mr-4">Overall Fit: {review.overallFit}</span>
              <span className="mr-4">Color: {review.color}</span>
              <span>Size: {review.size}</span>
            </div>
            <div className="mb-2">
              <p>Product Quality: {review.productQuality}</p>
              <p>True to Product Images: {review.trueToImages}</p>
              <p>Smell Description: {review.smellDescription}</p>
            </div>
            {review.comment && <p className="mb-2">{review.comment}</p>}
            <div className="flex gap-2 mb-2">
              {review.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Review image ${index + 1}`}
                  width={100}
                  height={100}
                  className="rounded"
                />
              ))}
            </div>
            <div className="flex items-center justify-between">
              <Button variant="ghost" className="text-gray-500">
                <ThumbsUp className="w-4 h-4 mr-1" />
                Helpful ({review.helpfulCount})
              </Button>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
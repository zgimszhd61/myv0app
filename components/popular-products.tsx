'use client'

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface Product {
  id: number
  title: string
  description: string
  price: number
  discount?: number
  image: string
}

const products: Product[] = [
  {
    id: 1,
    title: "豆猫毛绒挂饰",
    description: "阿黑阿白萌系水果摊开市",
    price: 69,
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    id: 2,
    title: "豆瓣电影随身旅行通用票据夹",
    description: "让票据井井有条",
    price: 69,
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    id: 3,
    title: "798 X 豆瓣豆品 艺法自然24色水溶彩铅",
    description: "灵感随时画 人均艺术家",
    price: 119,
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    id: 4,
    title: "豆瓣打工人主题T恤",
    description: "打工人办公室宣言",
    price: 98,
    discount: 30,
    image: "/placeholder.svg?height=200&width=200"
  }
]

export default function PopularProductsComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">人气单品</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">{product.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            </CardContent>
            <CardFooter className="bg-gray-50 p-4 flex justify-between items-center">
              <span className="text-red-600 font-bold">¥{product.price}</span>
              {product.discount && (
                <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                  立减{product.discount}元
                </span>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
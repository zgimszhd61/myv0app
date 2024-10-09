'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DeveloperEventsComponent() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <section>
        <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-l-4 border-indigo-900 pl-4">
          We hosted the biggest developer annual event in China
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">1024 Developer's Day</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Developer</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>3,000+ offline participants</li>
                <li>20 million+ online participants</li>
                <li>1000+ developers compete on the same stage</li>
              </ul>
              <h3 className="text-xl font-semibold">Experts</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>200+ technical experts participated</li>
              </ul>
              <h3 className="text-xl font-semibold">Technologies</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>30+ new products and technologies released</li>
                <li>30+ popular technology and application forums</li>
              </ul>
            </div>
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-evp0nGG6tfmZ9snF33NSef4vlyRj9Y.png"
                alt="1024 Developer's Day event"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-l-4 border-indigo-900 pl-4">
          We hosted the first OpenStack Days in China
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">OpenStack Days China</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-evp0nGG6tfmZ9snF33NSef4vlyRj9Y.png"
                alt="OpenStack Days China event"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li>70+ keynote speeches and 60+ Seminars</li>
                <li>2,000+ onsite viewers</li>
                <li>200,000+ online viewers</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CsdnService() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">CSDN Service</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-purple-50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">For Developers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Developers interacting with charts and graphs"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-lg text-center">
              An open community for developers to learn, share, and collaborate
            </p>
          </CardContent>
        </Card>

        <Card className="bg-blue-50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">For Organizations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Team working with data and analytics screens"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Developer ecosystem services</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Effective community building & promotion</li>
              <li>Industry conference, meetup, competitions and hackathons</li>
              <li>Survey report for target audience</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
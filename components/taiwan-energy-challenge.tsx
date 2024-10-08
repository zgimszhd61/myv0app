'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronDown, Search } from 'lucide-react'
import Image from 'next/image'

interface ResearchTask {
  id: string;
  task: string;
  details: string;
}

interface Source {
  id: string;
  title: string;
  publisher: string;
  logo: string;
  number: number;
}

const researchTasks: ResearchTask[] = [
  {
    id: "1",
    task: "Investigate the current energy challenges facing Taiwan in relation to its economic goals, particularly in the semiconductor industry",
    details: "Analyze Taiwan's energy consumption patterns, focusing on the semiconductor industry's needs. Examine recent power outages and their impact on economic output."
  },
  {
    id: "2",
    task: "Explore potential strategies and policies Taiwan could implement to balance its energy needs with economic objectives",
    details: "Research energy efficiency measures, renewable energy adoption plans, and grid modernization efforts. Consider the economic implications of each strategy."
  },
  {
    id: "3",
    task: "Gather insights on the role of renewable energy and nuclear power in Taiwan's future energy strategy",
    details: "Investigate Taiwan's current renewable energy capacity and plans for expansion. Analyze the debate around nuclear power and its potential role in the energy mix."
  }
]

const sources: Source[] = [
  {
    id: "1",
    title: "New President, Nuclear Energy, and Net Zero: How Will Taiwan ...",
    publisher: "bakerinstitute",
    logo: "/placeholder.svg?height=20&width=20&text=BI",
    number: 1
  },
  {
    id: "2",
    title: "Taiwan's Energy Policy at Odds With Economic Needs",
    publisher: "jamestown",
    logo: "/placeholder.svg?height=20&width=20&text=JT",
    number: 2
  },
  {
    id: "3",
    title: "2024 Semiconductor Position Paper - AmCham Taiwan",
    publisher: "amcham.com",
    logo: "/placeholder.svg?height=20&width=20&text=AC",
    number: 3
  }
]

export default function TaiwanEnergyChallengeComponent() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">
        How will Taiwan balance its energy needs with its economic goals
      </h1>

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="w-5 h-5 mr-2" />
              专业搜索
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {researchTasks.map((task) => (
                <AccordionItem key={task.id} value={task.id}>
                  <AccordionTrigger>
                    <div className="flex items-start">
                      <div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-2 mt-1" />
                      <span className="text-left">{task.task}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>{task.details}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="mr-2">来源</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sources.map((source) => (
            <Card key={source.id}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Image
                      src={source.logo}
                      alt={source.publisher}
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-600">{source.publisher}</span>
                  </div>
                  <span className="text-sm font-semibold">{source.number}</span>
                </div>
                <p className="text-sm font-medium">{source.title}</p>
              </CardContent>
            </Card>
          ))}
          <Card>
            <CardContent className="p-4 flex items-center justify-center">
              <span className="text-sm text-gray-500">查看更多 2</span>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">答案</h2>
        <p className="mb-4">
          Taiwan faces a complex challenge in balancing its energy needs with its economic goals,
          particularly as it navigates the demands of its critical semiconductor industry while
          striving for sustainable energy practices.
        </p>
        <h3 className="text-lg font-semibold mb-2">Current Energy Landscape</h3>
        {/* Additional content for the Current Energy Landscape section would go here */}
      </section>
    </div>
  )
}
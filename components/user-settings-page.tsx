import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight } from 'lucide-react'

export default function UserSettingsPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-4">设置</h1>
        <nav className="flex space-x-4 border-b">
          <Button variant="link" className="text-gray-600">账户</Button>
          <Button variant="link" className="text-gray-600 border-b-2 border-black">个人资料</Button>
          <Button variant="link" className="text-gray-600">API</Button>
          <Button variant="link" className="text-gray-600">企业</Button>
        </nav>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          您的问题
        </h2>
        <div className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">
              What are your hobbies or interests? This question will help understand the user's personality and what they enjoy doing in their free time.
            </label>
            <div className="flex items-center">
              <Textarea className="flex-grow mr-2" placeholder="Enter your hobbies or interests" />
              <div className="flex items-center space-x-2">
                <Button variant="outline" className="text-gray-500">跳过</Button>
                <Button variant="outline" className="text-gray-500">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          <div>
            <label className="block mb-2 font-medium">
              What is your current occupation? This question will help understand the user's professional background and experience.
            </label>
            <div className="flex items-center">
              <Input className="flex-grow mr-2" placeholder="Enter your current occupation" />
              <div className="flex items-center space-x-2">
                <Button variant="outline" className="text-gray-500">跳过</Button>
                <Button variant="outline" className="text-gray-500">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          <div>
            <label className="block mb-2 font-medium">
              What are your long-term goals? This question will help understand the user's aspirations and what they are working towards.
            </label>
            <div className="flex items-center">
              <Textarea className="flex-grow mr-2" placeholder="Enter your long-term goals" />
              <div className="flex items-center space-x-2">
                <Button variant="outline" className="text-gray-500">跳过</Button>
                <Button variant="outline" className="text-gray-500">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 9L9 15" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 9L15 15" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          开始
        </h2>
        <ul className="space-y-2">
          <li>
            <Button variant="link" className="w-full justify-between text-left text-gray-800">
              Write a story based on me
              <ChevronRight className="h-4 w-4" />
            </Button>
          </li>
          <li>
            <Button variant="link" className="w-full justify-between text-left text-gray-800">
              Give me a recipe for my favorite food
              <ChevronRight className="h-4 w-4" />
            </Button>
          </li>
          <li>
            <Button variant="link" className="w-full justify-between text-left text-gray-800">
              What are some movie recommendations for me?
              <ChevronRight className="h-4 w-4" />
            </Button>
          </li>
        </ul>
      </section>
    </div>
  )
}
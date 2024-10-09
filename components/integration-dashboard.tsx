'use client'

import { Search, Slack, AlertCircle } from 'lucide-react'
import Image from 'next/image'

export function IntegrationDashboard() {
  const categories = [
    'All Integrations',
    'Source Control',
    'Container registries',
    'Container orchestrators',
    'Continuous integration',
    'IDE plugins',
    'Gatekeeper plugins',
    'Notifications',
    'Cloud events'
  ]

  const integrations = [
    { name: 'Slack', icon: <Slack className="w-12 h-12 text-green-500" /> },
    { name: 'Slack App', icon: <Slack className="w-12 h-12 text-green-500" /> },
    { name: 'Jira', icon: <Image src="/placeholder.svg" width={48} height={48} alt="Jira" className="text-blue-700" /> }
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 shadow-md">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search integrations..."
            className="w-full pl-10 pr-4 py-2 border rounded-md"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" />
        </div>
        <nav>
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className={`block py-2 px-4 rounded ${
                category === 'Notifications' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </a>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Notifications</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              {integration.icon}
              <h2 className="mt-4 font-semibold">{integration.name}</h2>
              {integration.name === 'Jira' && (
                <p className="mt-2 text-sm text-blue-600">Upgrade plan to enable</p>
              )}
            </div>
          ))}
        </div>

        {/* Request integration section */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Can't find what you're looking for?</h2>
          <div className="flex">
            <input
              type="text"
              placeholder="Request an integration..."
              className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
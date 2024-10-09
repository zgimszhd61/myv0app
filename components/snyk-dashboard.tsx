'use client'

import { ChevronDown } from 'lucide-react'

export default function SnykDashboard() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Secure your dependencies with Snyk</h1>
      <p className="text-gray-600 mb-8">Scan your projects to get started.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Monitor deployed apps</h2>
            <ul className="list-disc pl-5 mb-4">
              <li>Test apps for vulnerable dependencies</li>
              <li>Get notifications about new vulnerabilities</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Browse integrations
            </button>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Protect your source code</h2>
            <ul className="list-disc pl-5 mb-4">
              <li>Test repos for vulnerable dependencies</li>
              <li>Create pull requests with fixes and patches</li>
              <li>Flag fix pull requests that add new vulnerabilities</li>
              <li>Get notifications for new vulnerabilities</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex items-center">
              Add projects
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Monitor local projects</h2>
            <p className="mb-4">
              Install our CLI tool to monitor local projects for known vulnerabilities:
            </p>
            <div className="bg-gray-900 text-white p-3 rounded mb-4">
              <pre className="font-mono text-sm">
                <code>
                  npm install -g snyk{'\n'}
                  cd ~/projects/my-project/{'\n'}
                  snyk monitor
                </code>
              </pre>
            </div>
            <a href="#" className="text-blue-600 hover:underline">
              Full documentation for Snyk CLI
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
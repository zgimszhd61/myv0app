'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight, Check, ExternalLink } from 'lucide-react'

export function SnykCliInstall() {
  const [selectedOS, setSelectedOS] = useState('macOS')
  const [selectedMethod, setSelectedMethod] = useState('Executables')

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Where is the code you want to scan?</h1>
      <p className="text-gray-600 mb-8">Scan your projects for security issues</p>

      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
            <Check className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Choose integration method</h2>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
            2
          </div>
          <div className="flex-grow">
            <h2 className="text-lg font-semibold mb-4">Install Snyk CLI</h2>
            <div className="bg-white border rounded-lg p-6">
              <div className="flex space-x-4 mb-4">
                {['Executables', 'npm', 'Homebrew', 'Scoop'].map((method) => (
                  <button
                    key={method}
                    className={`px-3 py-1 rounded ${
                      selectedMethod === method
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                    onClick={() => setSelectedMethod(method)}
                  >
                    {method}
                  </button>
                ))}
              </div>
              <p className="mb-4">
                Use curl or{' '}
                <a href="#" className="text-blue-600 hover:underline flex items-center inline-flex">
                  GitHub Releases
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>{' '}
                to download a standalone executable (macOS, Linux, Windows) of Snyk CLI for your
                platform.
              </p>
              <div className="space-y-2">
                {['macOS', 'Windows', 'Linux'].map((os) => (
                  <div key={os} className="border-t pt-2">
                    <button
                      className="flex items-center justify-between w-full text-left"
                      onClick={() => setSelectedOS(os)}
                    >
                      <span className="font-medium">{os}</span>
                      {selectedOS === os ? (
                        <ChevronDown className="w-5 h-5" />
                      ) : (
                        <ChevronRight className="w-5 h-5" />
                      )}
                    </button>
                    {selectedOS === os && os === 'macOS' && (
                      <div className="mt-2 bg-gray-900 text-white p-3 rounded">
                        <pre className="font-mono text-sm">
                          <code>
                            curl https://static.snyk.io/cli/latest/snyk-macos -o snyk{'\n'}
                            chmod +x ./snyk{'\n'}
                            mv ./snyk /usr/local/bin/
                          </code>
                        </pre>
                        <button className="mt-2 px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600">
                          Copy
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-gray-200 text-gray-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
            3
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Authenticate your machine</h2>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-gray-200 text-gray-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
            4
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Scan for security issues</h2>
          </div>
        </div>
      </div>

      <div className="mt-8 flex space-x-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Next step
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">
          Previous
        </button>
      </div>
    </div>
  )
}
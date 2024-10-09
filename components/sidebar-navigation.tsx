'use client'

import Link from 'next/link'
import { ChevronRight, LogOut } from 'lucide-react'

export function SidebarNavigation() {
  return (
    <nav className="w-64 bg-zinc-900 text-zinc-100 h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-zinc-500 uppercase text-sm font-semibold mb-2">Projects</h2>
          <Link href="/projects" className="block py-1 text-zinc-100 hover:text-white transition-colors">
            All projects
          </Link>
        </div>
        
        <div>
          <h2 className="text-zinc-500 uppercase text-sm font-semibold mb-2">Account</h2>
          <ul className="space-y-1">
            <li><Link href="/preferences" className="block py-1 text-zinc-400 hover:text-white transition-colors">Preferences</Link></li>
            <li><Link href="/access-tokens" className="block py-1 text-zinc-400 hover:text-white transition-colors">Access Tokens</Link></li>
            <li><Link href="/security" className="block py-1 text-zinc-400 hover:text-white transition-colors">Security</Link></li>
            <li><Link href="/audit-logs" className="block py-1 text-zinc-400 hover:text-white transition-colors">Audit Logs</Link></li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-zinc-500 uppercase text-sm font-semibold mb-2">Documentation</h2>
          <ul className="space-y-1">
            <li>
              <Link href="/guides" className="flex items-center py-1 text-zinc-400 hover:text-white transition-colors">
                <ChevronRight className="h-4 w-4 mr-1" />
                Guides
              </Link>
            </li>
            <li>
              <Link href="/api-reference" className="flex items-center py-1 text-zinc-400 hover:text-white transition-colors">
                <ChevronRight className="h-4 w-4 mr-1" />
                API Reference
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="absolute bottom-4">
        <button className="flex items-center text-zinc-400 hover:text-white transition-colors">
          <LogOut className="h-4 w-4 mr-2" />
          Log out
        </button>
      </div>
    </nav>
  )
}
'use client'

import { services, categories, getServicesByCategory } from '@/lib/knowledge'
import { useState } from 'react'

interface ServiceSidebarProps {
  onSelectService: (query: string) => void
}

const categoryEmojis: Record<string, string> = {
  Identity: '🪪',
  Travel: '✈️',
  Vehicles: '🚗',
  'Civil Records': '📋',
  Legal: '⚖️',
  'Local Services': '🏛️',
  Civic: '🗳️',
}

export default function ServiceSidebar({ onSelectService }: ServiceSidebarProps) {
  const [expanded, setExpanded] = useState<string | null>('Identity')

  const handleServiceClick = (title: string) => {
    onSelectService(`How do I get a ${title}?`)
  }

  return (
    <aside className="w-72 flex-shrink-0 bg-lk-maroon-dark text-white flex flex-col overflow-hidden">
      {/* Sidebar header */}
      <div className="px-4 py-5 border-b border-white/10">
        <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-1">Browse Services</p>
        <p className="text-xs text-white/40">Click any service to ask about it</p>
      </div>

      {/* Service categories */}
      <nav className="flex-1 overflow-y-auto py-2 chat-scroll">
        {categories.map((cat) => {
          const catServices = getServicesByCategory(cat)
          const isOpen = expanded === cat

          return (
            <div key={cat}>
              <button
                onClick={() => setExpanded(isOpen ? null : cat)}
                className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-white/10 transition-colors text-left"
              >
                <span className="flex items-center gap-2 text-sm font-semibold text-white/90">
                  <span>{categoryEmojis[cat] ?? '📄'}</span>
                  {cat}
                </span>
                <span className="text-white/40 text-xs">{isOpen ? '▲' : '▼'}</span>
              </button>

              {isOpen && (
                <div className="pb-1">
                  {catServices.map((svc) => (
                    <button
                      key={svc.id}
                      onClick={() => handleServiceClick(svc.title)}
                      className="w-full text-left px-6 py-2 text-xs text-white/70 hover:text-white hover:bg-white/10 transition-colors leading-snug"
                    >
                      {svc.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-white/10">
        <p className="text-[10px] text-white/30 leading-relaxed">
          Always verify fees and requirements at the official office before your visit.
        </p>
      </div>
    </aside>
  )
}

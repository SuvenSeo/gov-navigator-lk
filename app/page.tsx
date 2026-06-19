'use client'

import { useRef } from 'react'
import ChatInterface, { type ChatInterfaceRef } from '@/components/ChatInterface'
import ServiceSidebar from '@/components/ServiceSidebar'

export default function Home() {
  const chatRef = useRef<ChatInterfaceRef>(null)

  const handleSelectService = (query: string) => {
    chatRef.current?.submitMessage(query)
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-lk-maroon text-white flex-shrink-0 shadow-md">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🇱🇰</span>
            <div>
              <h1 className="text-base font-bold leading-tight tracking-tight">GovNav LK</h1>
              <p className="text-xs text-white/60 leading-none">රජයේ සේවා සොයාගන්න · Government Service Navigator</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://drp.gov.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/50 hover:text-white/80 transition-colors"
            >
              drp.gov.lk
            </a>
            <a
              href="https://www.immigration.gov.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/50 hover:text-white/80 transition-colors"
            >
              immigration.gov.lk
            </a>
            <a
              href="https://dmt.gov.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/50 hover:text-white/80 transition-colors"
            >
              dmt.gov.lk
            </a>
            <div className="h-4 w-px bg-white/20" />
            <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/70 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
              AI Powered
            </span>
          </div>
        </div>

        {/* Sub-bar */}
        <div className="bg-lk-maroon-dark/60 px-6 py-1.5 flex items-center gap-2">
          <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">Quick links:</span>
          {[
            { label: 'NIC', q: 'How do I apply for a new NIC?' },
            { label: 'Passport', q: 'How do I apply for a new passport?' },
            { label: 'Driving License', q: 'How do I get a new driving license?' },
            { label: 'Birth Certificate', q: 'How do I get a certified copy of my birth certificate?' },
            { label: 'Police Clearance', q: 'How do I get a police clearance certificate?' },
          ].map(({ label, q }) => (
            <button
              key={label}
              onClick={() => handleSelectService(q)}
              className="text-[11px] text-white/60 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-0.5 rounded-full transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <ServiceSidebar onSelectService={handleSelectService} />

        {/* Chat */}
        <ChatInterface ref={chatRef} />
      </main>
    </div>
  )
}

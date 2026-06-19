'use client'

import { useRef, useState } from 'react'
import AmbientBackground from '@/components/AmbientBackground'
import AppHeader from '@/components/AppHeader'
import ChatInterface, { type ChatInterfaceRef } from '@/components/ChatInterface'
import HeroSection from '@/components/HeroSection'
import ServiceComparison from '@/components/ServiceComparison'
import ServiceSidebar from '@/components/ServiceSidebar'
import TrustBar from '@/components/TrustBar'

export default function Home() {
  const chatRef = useRef<ChatInterfaceRef>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [compareOpen, setCompareOpen] = useState(false)

  const handleSelectService = (query: string) => {
    chatRef.current?.submitMessage(query)
    setSidebarOpen(false)
  }

  const scrollToChat = () => {
    document.getElementById('chat-input-area')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    chatRef.current?.focusInput()
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-lk-cream">
      <div className="lk-pattern-bg absolute inset-0 pointer-events-none opacity-60" aria-hidden />
      <div className="relative flex flex-col h-full min-h-0">
        <AppHeader
          onQuickAsk={handleSelectService}
          onToggleSidebar={() => setSidebarOpen((o) => !o)}
          sidebarOpen={sidebarOpen}
          onOpenCompare={() => setCompareOpen(true)}
        />

        <HeroSection onStartQuery={scrollToChat} />

        <main className="flex-1 flex overflow-hidden relative min-h-0">
          {sidebarOpen && (
            <button
              type="button"
              className="lg:hidden fixed inset-0 bg-lk-maroon-dark/50 backdrop-blur-sm z-30 animate-fade-in"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close services menu"
            />
          )}

          <ServiceSidebar
            onSelectService={handleSelectService}
            mobileOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          <div className="relative flex-1 flex flex-col min-w-0 overflow-hidden">
            <AmbientBackground />
            <div className="relative flex-1 flex flex-col min-h-0 bg-gradient-to-b from-white/40 via-lk-cream/30 to-lk-sand/40">
              <ChatInterface ref={chatRef} />
            </div>
          </div>
        </main>

        <TrustBar />

        <ServiceComparison open={compareOpen} onClose={() => setCompareOpen(false)} />
      </div>
    </div>
  )
}

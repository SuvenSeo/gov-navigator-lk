'use client'

import LkTricolorBar from '@/components/LkTricolorBar'
import { getTotalServiceCount } from '@/lib/knowledge'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'govnav-hero-dismissed'

interface HeroSectionProps {
  onStartQuery: () => void
}

export default function HeroSection({ onStartQuery }: HeroSectionProps) {
  const [visible, setVisible] = useState(true)
  const total = getTotalServiceCount()

  const stats = [
    { icon: '🦁', value: `${total}+`, label: 'Services' },
    { icon: '🇱🇰', value: '22M', label: 'Citizens' },
    { icon: '⏱️', value: '2–4h', label: 'Saved per visit' },
    { icon: '📞', value: '1919', label: 'GIC Helpline' },
  ]

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === '1') setVisible(false)
    } catch {
      /* ignore */
    }
  }, [])

  const dismiss = () => {
    setVisible(false)
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* ignore */
    }
  }

  if (!visible) {
    return (
      <button
        type="button"
        onClick={() => setVisible(true)}
        className="flex-shrink-0 w-full text-center py-2 text-[11px] font-medium text-lk-maroon/70 hover:text-lk-maroon bg-gradient-to-r from-lk-gold/15 via-lk-cream to-lk-emerald/10 border-b border-lk-gold/25 transition-all hover:shadow-sm"
      >
        ✨ Show Sri Lanka welcome banner
      </button>
    )
  }

  return (
    <section className="hero-batik flex-shrink-0 relative overflow-hidden">
      <LkTricolorBar />
      <div
        className="absolute inset-0 bg-gradient-to-br from-lk-maroon via-[#5a1018] to-lk-maroon-dark animate-gradient-shift"
        style={{ backgroundSize: '200% 200%' }}
      />

      <div className="relative px-4 md:px-10 py-8 md:py-10">
        <button
          type="button"
          onClick={dismiss}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/20 hover:bg-black/30 text-white/80 text-lg backdrop-blur-sm border border-white/10 transition-all hover:scale-105"
          aria-label="Dismiss welcome banner"
        >
          ×
        </button>

        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-1.5 mb-4 text-[11px] font-semibold tracking-wide uppercase text-lk-gold-light">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-soft" />
            Sri Lanka&apos;s AI Government Guide
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-[1.15]">
            Never Waste A Day At A{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-lk-gold-light via-lk-gold to-lk-gold-light">
                Government Office
              </span>
            </span>{' '}
            Again
          </h2>

          <p className="font-sinhala text-base md:text-lg text-white/80 mt-3 font-medium">
            ලේසියෙන්ම රජයේ සේවාවන් ලබා ගන්නේ කෙසේද?
          </p>
          <p className="text-sm text-white/50 mt-1 max-w-lg mx-auto">
            Documents · Fees · Offices · Steps — verified from official portals
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3 mt-7 max-w-2xl mx-auto">
            {stats.map(({ icon, value, label }, i) => (
              <div
                key={label}
                className="lk-stat-badge flex-col !py-3 !rounded-xl opacity-0 animate-fade-up"
                style={{ animationDelay: `${0.08 + i * 0.07}s`, animationFillMode: 'forwards' }}
              >
                <span className="text-lg" aria-hidden>
                  {icon}
                </span>
                <span className="text-lg md:text-xl font-black text-lk-gold-light leading-none">
                  {value}
                </span>
                <span className="text-[10px] text-white/60 font-medium uppercase tracking-wider">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onStartQuery}
            className="group mt-8 inline-flex items-center gap-2.5 bg-gradient-to-r from-lk-gold via-lk-gold-light to-lk-gold text-lk-maroon-dark font-extrabold px-8 py-3.5 rounded-full shadow-lk-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-8px_rgba(212,160,23,0.55)] active:scale-[0.98] text-sm md:text-base"
          >
            <span>Start Your Query</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>

          <p className="text-[10px] text-white/35 mt-4 font-sinhala">
            ඉංග්‍රීසි හෝ සිංහලෙන් අහන්න · Ask in English or Sinhala
          </p>
        </div>
      </div>
      <LkTricolorBar />
    </section>
  )
}

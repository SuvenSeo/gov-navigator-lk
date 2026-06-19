'use client'

import { type ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
  layoutKey: number
}

/** Re-animates main workspace when hero collapses or layout shifts */
export default function PageTransition({ children, layoutKey }: PageTransitionProps) {
  return (
    <div key={layoutKey} className="flex flex-1 flex-col min-h-0 overflow-hidden page-transition-enter">
      {children}
    </div>
  )
}

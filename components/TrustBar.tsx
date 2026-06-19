'use client'

import LkTricolorBar from '@/components/LkTricolorBar'

const TRUST_ITEMS = [
  { icon: '📞', label: 'GIC', value: '1919', href: 'https://gic.gov.lk' },
  { icon: '✓', label: 'Data', value: 'Verified', href: 'https://gic.gov.lk' },
  { icon: '🔒', label: 'Privacy', value: 'No NIC stored', href: undefined },
]

export default function TrustBar() {
  return (
    <footer className="flex-shrink-0 relative z-10">
      <LkTricolorBar />
      <div className="bg-lk-sand/90 dark:bg-lk-night-card/95 backdrop-blur-sm border-t border-lk-maroon/8 dark:border-lk-gold/10 px-4 md:px-6 py-2 transition-colors duration-300">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[10px]">
          <div className="flex flex-wrap items-center gap-2">
            {TRUST_ITEMS.map(({ icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-1 bg-white/70 dark:bg-lk-night-elevated/80 border border-lk-maroon/8 dark:border-lk-gold/12 rounded-full px-2.5 py-0.5"
              >
                <span aria-hidden>{icon}</span>
                <span className="text-gray-500 dark:text-lk-cream/50">{label}:</span>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-lk-maroon dark:text-lk-gold-light hover:underline"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="font-semibold text-lk-maroon dark:text-lk-gold-light">{value}</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-[10px] text-gray-400 dark:text-lk-cream/35 font-sinhala hidden sm:block">
            GovNav LK රජයේ ආයතනයක් නොවේ
          </p>
        </div>
      </div>
    </footer>
  )
}

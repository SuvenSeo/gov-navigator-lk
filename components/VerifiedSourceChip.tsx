import type { MatchedSource } from '@/lib/matchServiceFromQuery'

interface VerifiedSourceChipProps {
  source: MatchedSource
}

export default function VerifiedSourceChip({ source }: VerifiedSourceChipProps) {
  const host = (() => {
    try {
      return new URL(source.sourceUrl).hostname.replace(/^www\./, '')
    } catch {
      return 'official source'
    }
  })()

  return (
    <div className="mt-3 pt-3 border-t border-lk-emerald/20 flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-900 bg-gradient-to-r from-emerald-50 to-emerald-100/80 border border-emerald-300/60 px-2.5 py-1 rounded-full shadow-sm">
        <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[8px]">
          ✓
        </span>
        Official source verified
        {source.lastVerified && (
          <span className="font-normal text-emerald-700">· {source.lastVerified}</span>
        )}
      </span>
      <a
        href={source.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[10px] text-lk-maroon hover:text-lk-maroon-light underline underline-offset-2"
      >
        {host} — {source.title}
      </a>
    </div>
  )
}

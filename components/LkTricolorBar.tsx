/** Decorative Sri Lankan tricolor accent — maroon · gold · emerald */
export default function LkTricolorBar({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex h-1 w-full ${className}`}
      role="presentation"
      aria-hidden
    >
      <span className="flex-1 bg-lk-maroon" />
      <span className="flex-1 bg-lk-gold" />
      <span className="flex-1 bg-lk-emerald" />
    </div>
  )
}

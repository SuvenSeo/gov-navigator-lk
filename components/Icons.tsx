/**
 * Consistent line-icon set (24x24, currentColor, 1.75 stroke).
 * Replaces inconsistent OS emoji across the persistent UI chrome so the
 * platform reads as serious civic software rather than a casual chat toy.
 */
interface IconProps {
  className?: string
  size?: number
  strokeWidth?: number
}

function base(size = 18, strokeWidth = 1.75) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
}

export function SearchIcon({ className = '', size, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

export function SendIcon({ className = '', size, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4Z" />
    </svg>
  )
}

export function UserIcon({ className = '', size, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

export function BoltIcon({ className = '', size, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M13 2 4.5 13.5a.5.5 0 0 0 .4.8H11l-1 7 8.5-11.5a.5.5 0 0 0-.4-.8H12l1-7Z" />
    </svg>
  )
}

export function ScaleIcon({ className = '', size, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M12 3v18" />
      <path d="M7 21h10" />
      <path d="m3 7 4-1 4 1" />
      <path d="m13 7 4-1 4 1" />
      <path d="M3 7 1 12a3 3 0 0 0 6 0L5 7" />
      <path d="m19 7-2 5a3 3 0 0 0 6 0l-2-5" />
    </svg>
  )
}

export function ShieldIcon({ className = '', size, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export function PhoneIcon({ className = '', size, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M13.5 2A6.5 6.5 0 0 1 20 8.5" />
      <path d="M13.5 6A2.5 2.5 0 0 1 16 8.5" />
      <path d="M5 4h3l1.5 4.5L7 10a11 11 0 0 0 5 5l1.5-2.5L18 14v3a2 2 0 0 1-2 2A14 14 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  )
}

export function CheckBadgeIcon({ className = '', size, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="m9 12 2 2 4-4" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  )
}

export function ClockIcon({ className = '', size, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

export function LayersIcon({ className = '', size, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </svg>
  )
}

export function UsersIcon({ className = '', size, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13A4 4 0 0 1 16 11" />
    </svg>
  )
}

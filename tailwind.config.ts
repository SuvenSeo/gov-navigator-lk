import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'lk-maroon': '#6B0F1A',
        'lk-maroon-dark': '#4A0B12',
        'lk-gold': '#D4A017',
        'lk-gold-light': '#F5D060',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config

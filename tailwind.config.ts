import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"EB Garamond"', 'serif'],
      },
      colors: {
        navy: '#091422',
        charcoal: '#111111',
        paper: '#F7F5F0',
      },
      animation: {
        'expand': 'expand 0.8s ease-out 0.3s forwards',
      },
    },
  },
  plugins: [],
}

export default config

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nez: {
          bg: '#0A0B0D',
          'bg-2': '#101114',
          'bg-3': '#16181C',
          line: '#23262D',
          text: '#EDEEF0',
          'text-2': '#B6B9C2',
          muted: '#6B7080',
          accent: '#A5F26A',
          'accent-2': '#63E0FF',
          warn: '#FF7A5C',
        },
      },
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Instrument Serif', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-border': 'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(6,182,212,0.1))',
      },
      boxShadow: {
        'glow-purple': '0 0 30px rgba(139,92,246,0.3)',
        'glow-blue': '0 0 30px rgba(6,182,212,0.3)',
        'glass': '0 8px 32px rgba(0,0,0,0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(139,92,246,0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(139,92,246,0.5)' },
        }
      }
    },
  },
  plugins: [],
}

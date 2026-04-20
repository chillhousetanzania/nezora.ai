/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Legacy colors (preserved for backward compatibility)
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
        // Neutral base (soft grays, not pure black/white)
        neutral: {
          50: '#fafafa',   // Soft white backgrounds
          100: '#f5f5f5',  // Card backgrounds (light mode)
          200: '#e5e5e5',  // Borders (light mode)
          300: '#d4d4d4',  // Disabled states
          400: '#a3a3a3',  // Secondary text
          500: '#737373',  // Muted text
          600: '#525252',  // Body text
          700: '#404040',  // Headings
          800: '#262626',  // Card backgrounds (dark mode)
          900: '#171717',  // Page backgrounds (dark mode)
        },
        // Primary accent (reduced saturation - 60% max)
        primary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',   // Main primary color (60% saturation)
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        // Secondary accent
        secondary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',   // Main secondary color
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        // Semantic colors (reduced saturation)
        success: {
          50: '#f0fdf4',
          400: '#34d399',
          500: '#10b981',   // 50% saturation
          600: '#059669',
          900: '#064e3b',
        },
        warning: {
          50: '#fffbeb',
          400: '#fbbf24',
          500: '#f59e0b',   // 50% saturation
          600: '#d97706',
          900: '#78350f',
        },
        error: {
          50: '#fef2f2',
          400: '#f87171',
          500: '#ef4444',   // 50% saturation
          600: '#dc2626',
          900: '#7f1d1d',
        },
      },
      spacing: {
        '0': '0px',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
      },
      fontFamily: {
        body: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        // Legacy fonts (preserved)
        grotesk: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Instrument Serif', 'serif'],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '16px', letterSpacing: '0em' }],
        'sm': ['14px', { lineHeight: '20px', letterSpacing: '0em' }],
        'base': ['15px', { lineHeight: '24px', letterSpacing: '0em' }],
        'lg': ['17px', { lineHeight: '28px', letterSpacing: '0em' }],
        'xl': ['20px', { lineHeight: '28px', letterSpacing: '-0.01em' }],
        '2xl': ['24px', { lineHeight: '32px', letterSpacing: '-0.01em' }],
        '3xl': ['30px', { lineHeight: '36px', letterSpacing: '-0.02em' }],
        '4xl': ['36px', { lineHeight: '40px', letterSpacing: '-0.02em' }],
        '5xl': ['48px', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-border': 'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(6,182,212,0.1))',
      },
      boxShadow: {
        // Legacy shadows (preserved)
        'glow-purple': '0 0 30px rgba(139,92,246,0.3)',
        'glow-blue': '0 0 30px rgba(6,182,212,0.3)',
        'glass': '0 8px 32px rgba(0,0,0,0.3)',
        // New soft shadows
        'soft-xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'soft-sm': '0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'soft-md': '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 8px 24px 0 rgba(0, 0, 0, 0.12)',
        'soft-xl': '0 12px 32px 0 rgba(0, 0, 0, 0.16)',
        'glow-primary': '0 0 24px 0 rgba(168, 85, 247, 0.3)',
        'glow-secondary': '0 0 24px 0 rgba(6, 182, 212, 0.3)',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        'full': '9999px',
      },
      transitionDuration: {
        'fast': '100ms',
        'normal': '200ms',
        'slow': '300ms',
        'slower': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
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

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container-highest": "#e3e2e7",
        "on-surface-variant": "#434656",
        "on-primary-fixed-variant": "#0038b6",
        "secondary": "#4c4aca",
        "surface": "#faf9fe",
        "on-tertiary-fixed": "#3c0800",
        "on-error-container": "#93000a",
        "surface-variant": "#e3e2e7",
        "inverse-surface": "#2f3034",
        "on-tertiary": "#ffffff",
        "primary": "#003ec7",
        "tertiary": "#952200",
        "on-secondary-container": "#fffbff",
        "on-primary": "#ffffff",
        "surface-container": "#eeedf3",
        "on-primary-fixed": "#001452",
        "secondary-fixed-dim": "#c2c1ff",
        "error-container": "#ffdad6",
        "tertiary-fixed-dim": "#ffb4a1",
        "on-surface": "#1a1b1f",
        "outline": "#737688",
        "background": "#faf9fe",
        "inverse-on-surface": "#f1f0f5",
        "surface-tint": "#004ced",
        "surface-bright": "#faf9fe",
        "surface-dim": "#dad9df",
        "primary-fixed": "#dde1ff",
        "on-background": "#1a1b1f",
        "secondary-fixed": "#e2dfff",
        "surface-container-low": "#f4f3f8",
        "surface-container-lowest": "#ffffff",
        "primary-fixed-dim": "#b7c4ff",
        "primary-container": "#0052ff",
        "on-secondary-fixed-variant": "#3631b4",
        "outline-variant": "#c3c5d9",
        "on-error": "#ffffff",
        "tertiary-fixed": "#ffdbd2",
        "on-secondary": "#ffffff",
        "tertiary-container": "#bf3003",
        "on-secondary-fixed": "#0c006a",
        "inverse-primary": "#b7c4ff",
        "surface-container-high": "#e9e7ed",
        "error": "#ba1a1a",
        "secondary-container": "#6664e4",
        "on-primary-container": "#dfe3ff",
        "on-tertiary-fixed-variant": "#891e00",
        "on-tertiary-container": "#ffddd5"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Inter", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      }
    }
  },
  plugins: [],
}

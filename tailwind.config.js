/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        bgPrimary: '#000000',     /* Pure Black */
        surface: '#111111',       /* Sangat Gelap (Dark Grey) */
        surfaceBorder: '#222222', /* Border Halus */
        accent: '#8b5cf6',        /* Neon Purple */
        accentSecondary: '#3b82f6' /* Neon Blue */
      },
    },
  },
  plugins: [],
}

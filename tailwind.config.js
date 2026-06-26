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
        bgPrimary: '#0f172a',
        surface: 'rgba(30, 41, 59, 0.7)',
        accent: '#38bdf8',
      },
      animation: {
        'float': 'float 10s infinite ease-in-out alternate',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(5%, 5%)' },
        }
      }
    },
  },
  plugins: [],
}

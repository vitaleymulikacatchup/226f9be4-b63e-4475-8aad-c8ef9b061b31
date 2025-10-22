/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'hs-dark': '#2a2a2a',
        'hs-darker': '#1a1a1a',
        'hs-blue': '#4a90e2',
        'hs-green': '#5cb85c',
        'hs-purple': '#8e44ad',
        'hs-orange': '#f39c12',
        'hs-red': '#e74c3c',
        'hs-yellow': '#f1c40f',
        'hs-cyan': '#17a2b8',
        'hs-pink': '#e91e63',
        'hs-teal': '#20c997',
        'hs-indigo': '#6610f2',
        'hs-gray': '#6c757d'
      },
      fontFamily: {
        'sans': ['Arial', 'sans-serif']
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem'
      }
    },
  },
  plugins: [],
}
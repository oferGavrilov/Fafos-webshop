/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'fuzzy': ['Fuzzy', 'ui-sans-serif', 'system-ui'],
      'rubik': ['Rubik'],
      'marker': ['Permanent Marker', 'cursive'],
      'montserrat': ['Montserrat'],
      'pangolin': ['Pangolin']
    },
    colors: {
      'primary': '#242424',
      'secondary': '#dee2e6',
      'tertiary': '#e9ecef',
      'transparent': 'transparent',
      'white': '#ffffff',
      'blue': '#3b82f6',
      'amber': '#f59e0b',
      'green': '#4ade80',
      'gray': {
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        600: '#4b5563',
      },
      'dark-gray':'#6c757d',
      'slate': {
        100:'#f1f5f9',
      },
    },
    extend: {
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

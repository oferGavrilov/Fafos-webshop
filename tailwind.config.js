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
      'fuzzy': ['Fuzzy']
    },
    extend: {
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}

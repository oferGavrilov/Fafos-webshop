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
      'fuzzy': ['Fuzzy' , 'ui-sans-serif', 'system-ui'],
      'rubik':['Rubik'],
      'marker':['Permanent Marker' , 'cursive'],
      'montserrat':['Montserrat'],
    },
    extend: {
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}

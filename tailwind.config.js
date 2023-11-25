/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
      },
      colors: {
        'mainC': '#D9D9D9',
        'window': '#A6A6A6',
        'text': '#',
        'rectangles': '#BEBEBE'
        }
      },
    },
  };



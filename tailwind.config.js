/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/views/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      blueberry: '#4980F2',
      white: '#F7FAFF',
      turquoise: '#45E5CB',
      platinum: '#B5B5B5',
      skyblue: '#80A9FF',
      chineseblack: '#0B1426',
      green: '#4BC75A',
      red: '#E44526',
      black: '#000000',
    },
    extend: {},
  },
  plugins: [],
};

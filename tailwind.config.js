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
      darkBlack: '#000000',
      black: '#0E0E10',
      blackFirstTone: '#1A1A1E',
      blackSecondTone: '#303035',
      blackThirdTone: '#8E8E91',
      white: '#FFFFFF',
      grayLight: '#E2E2ED',
      gray: '#C6C6D0',
      blue: '#007AFF',
      linkBlue: '#2911C9',
      blueLight: '#E7F0FF',
      green: '#40B079',
      red: '#DF3D4D',
    },
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'black-dark':'#1F1F23',
      'black':'#272C34',
      'black-light':'#303640',
      'black-light-1':'#39404B',
      'text-white':'#D2D3DF'
    }
  },
  plugins: [],
}

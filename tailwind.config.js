/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
   ],
  theme: {
    extend: {
      colors: {
        'primary' : '#FFC017',
        'secondary' : '#191919',
        'ternary' : '#292929'
      }
    },
  },
  plugins: [],
}
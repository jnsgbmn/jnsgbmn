/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'p' : ['Avenir'],
        'h1' : ['Allenoire Free Personal', 'normal']
      },
    },
  },
  plugins: [],
}

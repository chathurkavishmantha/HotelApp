/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat'],
        BodoniModa: ['Bodoni.Moda'],
      },
      boxShadow:{
        card: '1px 5px 20px #9a9a9a'
      }
    },
  },
  plugins: [],
}

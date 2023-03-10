/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '390px',
      // => @media (min-width: 390px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      fontFamily: {
        Montserrat: ['Montserrat'],
        BodoniModa: ['Bodoni Moda'],
        PlayFair: ['Playfair Display'],
        Roboto: ['Roboto']
      },
      boxShadow:{
        card: '1px 5px 20px #9a9a9a'
      },      
    },
  },
  plugins: [],
}

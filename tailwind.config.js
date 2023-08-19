/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'red-pp':'#C72026',
        'yellow-pp':'#F6F980',
        'grey-pp':'#D9D9D9',
        'green-pp': '#1A9900'
      },
      fontFamily:{
        sergioTrendy: ['Sergio Trendy', 'normal'],
        coiny: ['Coiny-Cyrillic','normal']
      }
    },
    screens: {
      'se': '375px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'ml':'940px',
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}


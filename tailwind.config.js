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
        'grey-pp':'#D9D9D9'
      },
      fontFamily:{
        sergioTrendy: ['Sergio Trendy', 'normal']
      }
    },
  },
  plugins: [],
}


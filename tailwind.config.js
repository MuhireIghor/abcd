/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero_pattern':'url("./public/images/bg1.png")',
      },
      colors:{
        'mainblue':'#4B6DF3',
        'footerBlue':'#000518',
        'orangeFooter':' #F96155'
      },fontFamily:{
        'hiring':'Nanum Pen'
      }

    },
  },
  plugins: [],
}
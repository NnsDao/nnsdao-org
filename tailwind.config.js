const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  mode: 'jit',
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width:{
        '1/11':'63rem'
      },
      fontWeight: ['hover', 'focus'],
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      inset: {
        '0': 0,
       '120': '32rem',
      },
      backgroundColor: theme => ({
        'primary': '#010F39',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        
       }),
      textColor: {
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        'faqColor': '#C9CCD1',
        'newsletterText':'#4C7BFE',
        'newsletterHolder':'#BBBBBB',
      },
       backgroundImage: theme => ({
        'starfish': "url('/imgs/starfish.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

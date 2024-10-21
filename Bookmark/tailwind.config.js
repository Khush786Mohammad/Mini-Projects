/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0 94% 66%)',
        grayishBlue: 'hsl(229, 8%, 60%)',
        veryDarkBlue: 'hsl(229, 31%, 21%)',
      },
      fontFamily:{
        rubik: ['Rubik', 'sans-serif'],
      },
      filter:{
        'custom-color-filter': 'invert(53%) sepia(38%) saturate(3303%) hue-rotate(326deg) brightness(101%) contrast(96%)',
      }
    },
  },
  plugins: [],
}


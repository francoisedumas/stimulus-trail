const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        black: colors.black,
        white: colors.white,
        red: colors.red,
        yellow: colors.yellow
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['disabled']
   },
  },
  plugins: [],
}

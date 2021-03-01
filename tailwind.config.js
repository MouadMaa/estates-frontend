const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {},
    fontFamily: {
      body: ['Open Sans', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      primary: {
        default: '#4263eb',
        light: '#4c6ef5',
        dark: '#3b5bdb',
      },
    },
  },
  variants: {
    extend: {
      scale: ['group-hover', 'active'],
      rotate: ['group-hover'],
      translate: ['group-hover'],
    },
  },
  plugins: [],
}

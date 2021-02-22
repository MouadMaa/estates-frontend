const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	theme: {
		extend: {},
		fontFamily: {
			body: [ 'Open Sans', ...defaultTheme.fontFamily.sans ],
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.coolGray,
			primary: {
				default: '#FF385C',
				light: '#FF4466',
				dark: '#FF3055',
			},
		},
	},
	variants: {
		extend: {
			scale: [ 'group-hover' ],
			rotate: [ 'group-hover' ],
			translate: [ 'group-hover' ],
		},
	},
	plugins: [],
}

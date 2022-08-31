/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				'bebas-neue': ['Bebas Neue', 'sans-serif']
			},
			backgroundImage: {
				'jamaica-flag': 'url("../assets//images/jamaica-flag.svg")'
			},
			colors: {
				cornsilk: '#FBF5DD',
				'rich-black': '#040A22',
				'bangladesh-green': '#017749',
				'north-texas-green': '#009B3A',
				dandelion: '#ffd477'
			}
		}
	},
	variants: {
		extend: {}
	},

	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')]
};

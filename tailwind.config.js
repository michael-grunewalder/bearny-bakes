module.exports = {
	content: [
		'src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'
	],
	theme:{
		extend: {
			fontFamily: {
			  'cookie': ['Cookie', 'cursive'],
			  'fredoka': ['Fredoka', 'sans-serif'],

			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'branding-primary': '#d33479',
			'branding-secondary': '#170a1c',
			'black': '#000000',
			'white': '#ffffff',
			'cerise': {
				'50': '#fdf5f8', 
				'100': '#fbebf2', 
				'200': '#f4ccde', 
				'300': '#edaec9', 
				'400': '#e071a1', 
				'500': '#d33479', 
				'600': '#be2f6d', 
				'700': '#9e275b', 
				'800': '#7f1f49', 
				'900': '#67193b'
			},
			'ebony': {
				'50': '#f3f3f4', 
				'100': '#e8e7e8', 
				'200': '#c5c2c6', 
				'300': '#a29da4', 
				'400': '#5d5460', 
				'500': '#170a1c', 
				'600': '#150919', 
				'700': '#110815', 
				'800': '#0e0611', 
				'900': '#0b050e'
			},
			'apricot-peach': {
				'50': '#fffdfb', 
				'100': '#fffaf7', 
				'200': '#fff3ec', 
				'300': '#ffebe0', 
				'400': '#ffdcc9', 
				'500': '#ffcdb2', 
				'600': '#e6b9a0', 
				'700': '#bf9a86', 
				'800': '#997b6b', 
				'900': '#7d6457'
			},
			'blue-bell': {
				'50': '#f9fafd', 
				'100': '#f4f6fb', 
				'200': '#e2e7f5', 
				'300': '#d1d9ef', 
				'400': '#afbde3', 
				'500': '#8ca0d7', 
				'600': '#7e90c2', 
				'700': '#6978a1', 
				'800': '#546081', 
				'900': '#454e69'
			},
			'malibu': {
				'50': '#fafcfe', 
				'100': '#f4f9fe', 
				'200': '#e4f0fc', 
				'300': '#d3e7fa', 
				'400': '#b2d6f6', 
				'500': '#91c4f2', 
				'600': '#83b0da', 
				'700': '#6d93b6', 
				'800': '#577691', 
				'900': '#476077'
			}
		}
	},
	daisyui: {
		themes: [
			{
				"dbearny-bakes": {
					"primary": "#d33479",
					"secondary": "#ffcdb2",
					"accent": "#8ca0d7",
					"neutral": "#170A1c",
					"base-100": "#FFFFFF",
					"info": "#3ABFF8",
					"success": "#36D399",
					"warning": "#FBBD23",
					"error": "#F87272",
				},
			},
		],
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwindcss-debug-screens'),
		require("daisyui"),
	],
}

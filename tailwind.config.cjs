const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	preflight: {
		heading: false
	},
	theme: {
		colors: {
			test: '#292e36'
		},
		extend: {
			container: {
				padding: '1rem'
			},
			height: {
				'screen-1/2': '50vh',
				'screen-1/3': '33.333333vh',
				'screen-2/3': '66.666667vh',
				'screen-1/4': '25vh',
				100: '25rem',
				120: '30rem',
				140: '35rem',
				160: '40rem'
			}
		}
	},

	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
};

module.exports = config;

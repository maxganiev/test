/** @type {import("snowpack").SnowpackUserConfig } */

export default {
	mount: {
		public: { url: '/', static: true },
		src: '/dist',
	},
	plugins: [['@snowpack/plugin-vue']],
	routes: [
		/* Enable an SPA Fallback in development: */
		//	{ match: 'routes', src: '.*', dest: '/index.html' },
	],
	optimize: {
		/* Example: Bundle your final build: */
		bundle: true,
		minify: true,
		target: 'es2018',
	},
	packageOptions: {
		/* ... */
	},
	devOptions: {
		/* ... */
	},
	buildOptions: {
		watch: true,
	},
};

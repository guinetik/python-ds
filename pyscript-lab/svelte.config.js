import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess';
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'public',
			assets: 'public',
			domain: null,
			jekyll: false,
			fallback: null,
			precompress: false
		}),
		paths: {
			base: dev ? '' : '/python-ds/pyscript-lab'
		},
		appDir: 'public',
		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		}
	}
};
;

export default config;

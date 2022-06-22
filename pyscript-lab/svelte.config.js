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
			// note to future me
			// use github path when building 4 prod
			// this repo has a gh-pages branch that serves as a deployment path for the repo
			// to build the app 4 produtction run
			// ´npm run build´ 
			// then commit stuff to git then
			// `push-dir --dir=public --branch=gh-pages`
			base: dev ? '' : '/python-ds'
		},
		appDir: 'svelte',
		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		}
	}
};
;

export default config;

import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		prerender: {
			default: true,
		},
		trailingSlash: 'always', // & .nojekyll file for deployment on GitHub pages
		paths: {
			base: dev ? '' : '/jscraftcamp_website_svelte-kit', // there's currently a bug, so only add to beginning of link paths when building production version (npm run preview won't work)
		}
	}
};

export default config;

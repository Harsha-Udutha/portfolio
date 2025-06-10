import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	vitePlugin: {
		inspector: {
			showToggleButton: 'always'
		}
	},
	kit: {
		adapter: adapter({ fallback: '404.html' }),
		alias: {
			$lib: './src/lib',
			'@data': './src/lib/data',
			'@components': './src/lib/components',
			'@md': './src/lib/md',
			'@stores': './src/lib/stores',
			'@utils': './src/lib/utils'
		},
		paths: {
			base: isProd ? '/portfolio' : ''
		}
	}
};

export default config;

import adapter from '@sveltejs/adapter-static';

// let string = 'theoryslut.xyz';
const dev = process.argv.includes('dev');

const config = {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: 'error.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: ''
		}
	}
};

export default config;

import { metadata } from '../../../metadata/thoughts';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	let entries = metadata.log;
	const post = entries.filter((entry) => entry.slug === params.slug)[0];
	if (!post) {
		throw error(404, {
			message: 'Not found'
		});
	}

	let component = await (async () =>
		(
			await import(`../../../thoughts/${params.slug}.svelte`)
		).default)();

	return {
		component
	};
}

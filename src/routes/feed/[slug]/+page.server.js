import { metadata } from '../../../metadata/feed';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	let entries = metadata.posts;
	const tagged_posts = entries.filter((entry) => entry.tags.includes(params.slug));
	if (!tagged_posts) {
		throw error(404, {
			message: "I'm sorry. No posts with that tag were found."
		});
	}

	return {
		entries: tagged_posts.sort((a, b) => {
			return new Date(a.published) < new Date(b.published) ? 1 : -1;
		})
	};
}

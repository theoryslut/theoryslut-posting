import { metadata } from '../../metadata/feed';

export async function load() {
	return {
		entries: metadata.posts.sort((a, b) => {
			return new Date(a.published) < new Date(b.published) ? 1 : -1;
		})
	};
}

import { metadata } from '../../metadata/log';

export async function load() {
	return {
		entries: metadata.log.sort((a, b) => {
			return new Date(a.published) < new Date(b.published) ? 1 : -1;
		})
	};
}

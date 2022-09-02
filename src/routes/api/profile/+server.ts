import { profiles } from '$lib/scripts/profiles';
import { error, type RequestHandler } from '@sveltejs/kit';
export const GET: RequestHandler = ({ url }): Response => {
	const id = url.searchParams.get('id');
	if (id) {
		const profile = profiles.find((profile) => profile.id === id);
		if (!profile) {
			throw error(400, `Profile not found: ${id}`);
		}
		return new Response(JSON.stringify(profile));
	}
	return new Response(JSON.stringify(profiles));
};

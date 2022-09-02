import { profiles } from '$lib/scripts/profiles';
import { error, type RequestHandler } from '@sveltejs/kit';

export const prerender = true;
export const GET: RequestHandler = ({ request }): Response => {
	const queryString = request.url.split('?')[1];
	const p = new URLSearchParams(queryString);
	const id = p.get('id') as string;
	if (!id) {
		console.error(`No id found in query string ${queryString} for GET /api/profile of url ${request.url}`);
		return new Response(JSON.stringify({
			error: 'No id found in query string'
		})
		)
	};
	const profile = profiles.find((profile) => profile.id === id);
	if (!profile) {
		throw error(400, `Profile not found: ${id}`);
	}
	return new Response(JSON.stringify(profile));

};

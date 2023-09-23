export const base = 'https://api.movies.tastejs.com';

export async function get(
	fetch: typeof globalThis.fetch,
	endpoint: string,
	params?: Record<string, string>
) {
	const q = new URLSearchParams(params);
	const response = await fetch(`${base}/${endpoint}?${q}`);

	return await response.json();
}

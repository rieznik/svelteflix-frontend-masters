export const base = 'https://api.movies.tastejs.com';
export const mediaBase = 'https://image.tmdb.org/t/p';

export const get = async (
	fetch: typeof globalThis.fetch,
	endpoint: string,
	params?: Record<string, string>
) => {
	const q = new URLSearchParams(params);
	const response = await fetch(`${base}/${endpoint}?${q}`);

	return await response.json();
};

export const media = (filePath: string, width: number) => `${mediaBase}/w${width}${filePath}`;

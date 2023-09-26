export const base = 'https://api.movies.tastejs.com';
export const mediaBase = 'https://image.tmdb.org/t/p';

const cache = new Map();

export const get = async (
	fetch: typeof globalThis.fetch,
	endpoint: string,
	params?: Record<string, string>
) => {
	const q = new URLSearchParams(params);
	const url = `${base}/${endpoint}?${q}`;

	if (cache.has(url)) {
		return cache.get(url);
	}

	const response = await fetch(url);
	const data = await response.json();

	cache.set(url, data);

	return data;
};

export const media = (filePath: string, width: number) => `${mediaBase}/w${width}${filePath}`;

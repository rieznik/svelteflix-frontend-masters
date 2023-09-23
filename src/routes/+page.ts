import * as api from '$lib/api';
import type { MovieDetails, MovieList } from '$lib/types.js';

export async function load({ fetch }) {
	const [trending, nowPlaying, upcoming] = await Promise.all([
		(await api.get(fetch, 'trending/movie/day')) as MovieList,
		(await api.get(fetch, 'movie/now_playing')) as MovieList,
		(await api.get(fetch, 'movie/upcoming')) as MovieList
	]);

	const featured = (await api.get(fetch, `movie/${trending.results[0].id}`, {
		append_to_response: 'images'
	})) as MovieDetails;

	return {
		trending,
		featured,
		nowPlaying,
		upcoming
	};
}

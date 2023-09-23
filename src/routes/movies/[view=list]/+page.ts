import * as api from '$lib/api';
import type { MovieList } from '$lib/types.js';
import { views } from '$lib/views.js';

export const load = async ({ params, url, fetch }) => {
	const view = views[params.view];
	const page = url.searchParams.get('page') ?? '1';

	const data = (await api.get(fetch, view.endpoint, { page })) as MovieList;

	return {
		view: params.view,
		title: view.title,
		endpoint: view.endpoint,
		movies: data.results,
		nextPage: data.page < data.total_pages ? data.page + 1 : null
	};
};

<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import Hero from './Hero.svelte';
	import { views } from '$lib/views';

	export let data;

	console.log(data);
</script>

<h1 class="column">Top trending movies</h1>

<Hero movie={data.featured} />

<Carousel movies={data.trending.results} view={views.trending} href="/movies/trending" />
<Carousel movies={data.nowPlaying.results} view={views.nowPlaying} href="/movies/nowPlaying" />
<Carousel movies={data.upcoming.results} view={views.upcoming} href="/movies/upcoming" />

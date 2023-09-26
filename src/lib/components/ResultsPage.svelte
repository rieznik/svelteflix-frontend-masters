<script lang="ts">
	import { media } from '$lib/api';
	import type { MovieListResult } from '$lib/types';
	import { createEventDispatcher, onMount } from 'svelte';

	export let movies: MovieListResult[];
	export let next: string | null;

	const dispatch = createEventDispatcher();

	let viewport: HTMLDivElement;
	let results: HTMLDivElement;
	let itemWidth: number;
	let itemHeight: number;
	let numColumns = 4;

	let firstElement = 0;
	let lastElement = movies.length;
	let paddingTop = 0;
	let paddingBottom = 0;

	const handleScroll = () => {
		const remaining = viewport.scrollHeight - (viewport.scrollTop + viewport.clientHeight);

		if (remaining < 400) {
			dispatch('feedEnd');
		}

		firstElement = Math.floor(viewport.scrollTop / itemHeight) * numColumns;
		lastElement = Math.ceil((viewport.scrollTop + viewport.clientHeight) / itemHeight) * numColumns;

		paddingTop = Math.floor(firstElement / numColumns) * itemHeight;
		paddingBottom = Math.floor(movies.length - lastElement) / numColumns;
	};

	const handleResize = () => {
		const first = results.firstChild as HTMLAnchorElement;

		itemWidth = first.offsetWidth;
		itemHeight = first.offsetHeight;
		numColumns = 4;

		handleScroll();
	};

	onMount(handleResize);
</script>

<svelte:window on:resize={handleResize} />

<div bind:this={viewport} class="viewport" on:scroll={handleScroll}>
	<div
		bind:this={results}
		class="results"
		style:padding-top="{paddingTop}px"
		style:padding-bottom="{paddingBottom}px"
	>
		{#each movies.slice(firstElement, lastElement) as movie}
			<a href="/movie/{movie.id}">
				<img src={media(movie.poster_path, 500)} alt={movie.title} />
			</a>
		{/each}
	</div>
	{#if next}
		<a href={next}>next page</a>
	{/if}
</div>

<style>
	.viewport {
		overflow-y: auto;
	}
	.results {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
		width: 100%;
	}

	a {
		width: 100%;
		aspect-ratio: 2/3;
	}

	img {
		width: 100%;
	}
</style>

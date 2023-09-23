<script lang="ts">
	import Hero from './Hero.svelte';

	export let data;

	console.log(data);
</script>

<h1 class="column">Top trending movies</h1>

<Hero movie={data.featured} />

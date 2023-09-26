<script lang="ts">
	import Hero from './Hero.svelte';

	export let data;
</script>

<Hero movie={data.movie} />

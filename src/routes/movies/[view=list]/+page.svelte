<script lang="ts">
	import ResultsPage from '$lib/components/ResultsPage.svelte';

	export let data;
</script>

<div class="column">
	<h1>{data.title}</h1>

	<ResultsPage
		movies={data.movies}
		next={data.nextPage ? `/movies/${data.view}?page=${data.nextPage}` : null}
		on:feedEnd={() => {
			console.log('TODO load more data');
		}}
	/>
</div>

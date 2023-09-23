<script>
	import '../styles.css';
	import logo from '$lib/images/logo.svg';
	import tmdb from '$lib/images/tmdb.svg';
</script>

<nav>
	<a href="/"><img alt="SvelteFlix" src={logo} /></a>

	<div class="links">
		<a href="/search">Search</a>
		<a href="/watchlist">Watchlist</a>
		<a href="/login">Log in</a>
	</div>
</nav>

<main>
	<slot />
</main>

<footer>
	Data provided by <a href="https://www.themoviedb.org"><img alt="The Movie DB" src={tmdb} /></a>
</footer>

<style>
	nav {
		display: flex;
		width: 100%;
		height: 3rem;
		align-items: center;
		justify-content: space-between;
		max-width: var(--column);
		padding: 0 var(--side);
		color: var(--accent);
		margin: 0 auto;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	img {
		height: 1rem;
	}

	.links {
		display: flex;
		gap: 1rem;
	}

	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>

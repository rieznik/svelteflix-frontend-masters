<script>
	import '../styles.css';
</script>

<nav>
	<a href="/">SvelteFlix</a>

	<div class="links">
		<a href="/search">Search</a>
		<a href="/watchlist">Watchlist</a>
		<a href="/login">Log in</a>
	</div>
</nav>

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
</style>

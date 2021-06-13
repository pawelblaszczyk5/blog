<script lang="ts">
	import '../app.css';
	import '@fontsource/playfair-display/variable.css';
	import '@fontsource/source-sans-pro/400.css';
	import '@fontsource/source-sans-pro/600.css';
</script>

<main>
	<slot />
</main>

<style>
	:root {
		--serifFont: 'Playfair DisplayVariable', serif;
		--sansSerifFont: 'Source Sans Pro', sans-serif;
		font-size: 16px;
	}

	:global(body) {
		font-family: var(--serifFont);
	}

	main {
		max-width: 1200px;
		margin: 0 auto;
	}
</style>

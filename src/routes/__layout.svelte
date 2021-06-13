<script lang="ts">
	import '../app.css';
	import '@fontsource/playfair-display/variable.css';
	import '@fontsource/source-sans-pro/400.css';
	import '@fontsource/source-sans-pro/600.css';
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';

	onMount(() => {
		const darkMode = localStorage.getItem('darkMode');
		if (darkMode === 'on') {
			document.body.classList.add('dark');
			return;
		} else if (!darkMode) {
			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.body.classList.add('dark');
				localStorage.setItem('darkMode', 'on');
			}
		}
	});
</script>

<div>
	<Header />
	<main>
		<slot />
	</main>
</div>

<style>
	:root {
		font-size: 16px;
	}

	:global(body) {
		--serifFont: 'Playfair DisplayVariable', serif;
		--sansSerifFont: 'Source Sans Pro', sans-serif;
		--backgroundColor: #fdfffc;
		--fontColor: #011627;
		--primaryAccentColor: #e71d36;
		--secondaryAccentColor: #2ec4b6;

		font-family: var(--serifFont);
		background-color: var(--backgroundColor);
		color: var(--fontColor);
	}

	:global(body.dark) {
		--backgroundColor: #011627;
		--fontColor: #fdfffc;
		--primaryAccentColor: #e71d36;
		--secondaryAccentColor: #2ec4b6;
	}

	div {
		max-width: 800px;
		margin: 0 auto;
		padding: 1rem;
	}

	main {
		margin: 1rem 0;
	}

	:global(a.link) {
		position: relative;
		font-weight: 700;
		color: inherit;
		text-decoration: none;
		padding-bottom: 0.25rem;
		border-bottom: 3px solid var(--secondaryAccentColor);
		transition: border-bottom-color steps(1, jump-end) 0.4s;
	}

	:global(a.link:hover) {
		border-bottom-color: transparent;
		transition: none;
	}

	:global(a.link::after) {
		content: '';
		position: absolute;
		width: 0;
		height: 3px;
		left: 0;
		bottom: -3px;
		background-color: var(--primaryAccentColor);
		transition: width ease-in-out 0.2s;
	}

	:global(a.link:hover::after) {
		width: 100%;
	}

	@media screen and (min-width: 500px) {
		div {
			padding: 1.5rem;
		}

		main {
			margin: 1.5rem 0;
		}
	}
</style>

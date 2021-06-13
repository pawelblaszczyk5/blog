<script lang="ts">
	import '../app.css';
	import '@fontsource/playfair-display/variable.css';
	import '@fontsource/source-sans-pro/400.css';
	import '@fontsource/source-sans-pro/600.css';
	import { onMount } from 'svelte';

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

<main>
	<slot />
</main>

<style>
	:root {
		font-size: 16px;
	}

	:global(body) {
		--serifFont: 'Playfair DisplayVariable', serif;
		--sansSerifFont: 'Source Sans Pro', sans-serif;
		--backgroundColor: #fdfffc;
		--fontColor: #011627;
		--primaryAccentColor: #2ec4b6;
		--secondaryAccentColor: #e71d36;

		font-family: var(--serifFont);
		background-color: var(--backgroundColor);
		color: var(--fontColor);
	}

	:global(body.dark) {
		--backgroundColor: #0a1128;
		--fontColor: #fefcfb;
		--primaryAccentColor: #034078;
		--secondaryAccentColor: #1282a2;
	}

	main {
		max-width: 1200px;
		margin: 0 auto;
	}
</style>

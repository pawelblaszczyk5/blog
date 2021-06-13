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

	div {
		max-width: 800px;
		margin: 0 auto;
		padding: 1rem;
	}

	main {
		margin: 1rem 0;
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

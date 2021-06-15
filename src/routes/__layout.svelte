<script lang="ts">
	import '../app.css';
	import '@fontsource/playfair-display/variable.css';
	import '@fontsource/source-sans-pro/400.css';
	import '@fontsource/source-sans-pro/600.css';
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import MoonIcon from '$lib/components/MoonIcon.svelte';
	import SunIcon from '$lib/components/SunIcon.svelte';
	import { scale } from 'svelte/transition';

	let darkModeStatus = false;

	onMount(() => {
		const darkMode = localStorage.getItem('darkMode');
		if (darkMode === 'on') {
			document.body.classList.add('dark');
			darkModeStatus = true;
			return;
		} else if (!darkMode) {
			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.body.classList.add('dark');
				darkModeStatus = true;
				localStorage.setItem('darkMode', 'on');
			}
		}
	});

	const changeDarkModeStatus = () => {
		if (darkModeStatus) {
			localStorage.setItem('darkMode', 'off');
			document.body.classList.remove('dark');
		} else {
			localStorage.setItem('darkMode', 'on');
			document.body.classList.add('dark');
		}
		darkModeStatus = !darkModeStatus;
	};
</script>

<div class="pageContainer">
	<Header />
	<main>
		<slot />
	</main>
	<button
		on:click={changeDarkModeStatus}
		class="darkModeSwitcher"
		aria-label="Switch color theme to {darkModeStatus ? 'light' : 'dark'}"
	>
		{#if darkModeStatus}
			<div transition:scale class="darkModeSwitcher__iconContainer">
				<SunIcon />
			</div>
		{:else}
			<div transition:scale class="darkModeSwitcher__iconContainer">
				<MoonIcon />
			</div>
		{/if}
	</button>
</div>

<style>
	.pageContainer {
		max-width: 800px;
		margin: 0 auto;
		padding: 1rem 1rem 3rem;
	}

	main {
		margin: 1rem 0;
	}

	.darkModeSwitcher {
		position: fixed;
		bottom: 0;
		right: 0;
		margin: 1rem;
		background: var(--backgroundColor);
		border: 2px solid var(--secondaryAccentColor);
		padding: 0.5rem;
		color: var(--fontColor);
		display: grid;
		border-radius: 8px;
	}

	.darkModeSwitcher__iconContainer {
		grid-column-start: 1;
		grid-column-end: 1;
		grid-row-start: 1;
		grid-row-end: 1;
		width: 1.25rem;
		height: 1.25rem;
	}

	@media screen and (min-width: 500px) {
		.pageContainer {
			padding: 1.5rem 1.5rem 3rem;
		}

		main {
			margin: 1.5rem 0;
		}
	}
</style>

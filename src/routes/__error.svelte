<script lang="ts" context="module">
	import type { ErrorLoadInput, LoadOutput } from '@sveltejs/kit/types/page';

	export const load = (input: ErrorLoadInput): LoadOutput => {
		return {
			props: {
				status: input.status
			}
		};
	};
</script>

<script lang="ts">
	export let status: number;
</script>

<svelte:head>
	<title>Something went wrong 🙁</title>
</svelte:head>

<h1>{status}</h1>

<h2>
	{#if status < 500 && status >= 400}
		The page you're trying to request is not existing or you do not have access to view it. Use
		navigation to continue browsing the website.
	{:else if status >= 500 && status < 600}
		There was an internal server error, try again later or use navigation to continue browsing the
		website.
	{:else}
		Unexpected error occured. Use navigation to browse the website.
	{/if}
</h2>

<style>
	h1 {
		text-align: center;
		font-family: var(--sansSerifFont);
		font-weight: 600;
		font-size: 2.5rem;
	}

	h2 {
		text-align: center;
		font-weight: 400;
		margin: 0.5rem 0;
	}
</style>

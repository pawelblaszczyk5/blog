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
	import Meta from '$lib/components/Meta.svelte';

	export let status: number;
</script>

<Meta title="Something went wrong 🙁" />

<h1 class="error__heading">{status}</h1>
<h2 class="error__details">
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
	.error__heading {
		text-align: center;
		font-weight: 600;
		font-size: 2.5rem;
	}

	.error__details {
		text-align: center;
		font-weight: 400;
		margin: 0.5rem 0;
	}
</style>

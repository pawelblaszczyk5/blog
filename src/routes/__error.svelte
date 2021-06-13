<script lang="ts" context="module">
	import type { ErrorLoadInput, LoadOutput } from '@sveltejs/kit/types/page';

	export const load = (input: ErrorLoadInput): LoadOutput => {
		return {
			props: {
				title: `${input.status}: ${input.error.message}`
			}
		};
	};
</script>

<script lang="ts">
	export let title: string;
</script>

<svelte:head>
	<title>Something went wrong | Paweł Błaszczyk</title>
</svelte:head>

<h1>{title}</h1>

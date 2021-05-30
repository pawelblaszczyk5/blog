<script lang="ts" context="module">
	import type { ErrorLoadInput, LoadInput, LoadOutput } from '@sveltejs/kit/types/page';

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

<h1>{title}</h1>

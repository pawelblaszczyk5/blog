<script lang="ts">
	import type ApiSearchResponse from '@prismicio/client/types/ApiSearchResponse';

	import { page } from '$app/stores';

	export let posts: ApiSearchResponse;
</script>

{#if posts.prev_page || posts.next_page}
	<nav>
		{#if posts.prev_page}
			<a
				sveltekit:prefetch
				class="link navLink--prev"
				href={(Number($page.params.pageNumber) - 1).toString()}>Previous</a
			>
		{/if}
		{#if posts.next_page}
			<a
				sveltekit:prefetch
				class="link navLink--next"
				href={(Number($page.params.pageNumber) + 1).toString()}>Next</a
			>
		{/if}
	</nav>
{/if}

<style>
	nav {
		display: flex;
		justify-content: space-between;
		margin-top: 2rem;
	}

	.navLink--prev {
		margin-right: auto;
	}

	.navLink--next {
		margin-left: auto;
	}
</style>

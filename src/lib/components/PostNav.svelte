<script lang="ts">
	import type ApiSearchResponse from '@prismicio/client/types/ApiSearchResponse';

	import { page } from '$app/stores';

	export let posts: ApiSearchResponse;
</script>

{#if posts.prev_page || posts.next_page}
	<nav class="nav">
		{#if posts.prev_page}
			<a
				sveltekit:prefetch
				class="link nav__link--prev"
				href={(Number($page.params.pageNumber) - 1).toString()}>Previous</a
			>
		{/if}
		{#if posts.next_page}
			<a
				sveltekit:prefetch
				class="link nav__link--next"
				href={(Number($page.params.pageNumber) + 1).toString()}>Next</a
			>
		{/if}
	</nav>
{/if}

<style>
	.nav {
		display: flex;
		justify-content: space-between;
		margin-top: 2rem;
	}

	.nav__link--prev {
		margin-right: auto;
	}

	.nav__link--next {
		margin-left: auto;
	}
</style>

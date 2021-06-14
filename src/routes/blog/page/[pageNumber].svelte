<script lang="ts" context="module">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit/types/page';

	import { prismicClient } from '$lib/constants/prismicClient';
	import Prismic from '@prismicio/client';

	export const load = async (input: LoadInput): Promise<LoadOutput> => {
		try {
			const posts = await prismicClient.query(Prismic.Predicates.at('document.type', 'blog'), {
				pageSize: 1,
				page: Number(input.page.params.pageNumber)
			});

			return {
				props: {
					posts
				}
			};
		} catch (e) {
			return {
				status: 500,
				error: new Error('Error during posts fetching')
			};
		}
	};
</script>

<script lang="ts">
	import type ApiSearchResponse from '@prismicio/client/types/ApiSearchResponse';
	import SinglePost from '$lib/components/SinglePost.svelte';
	import { page } from '$app/stores';

	export let posts: ApiSearchResponse;
</script>

<svelte:head>
	<title>Blog | Paweł Błaszczyk</title>
</svelte:head>

<section>
	{#each posts.results as post}
		<SinglePost {post} />
	{/each}
	<nav>
		{#if posts.prev_page}
			<a class="link navLink--prev" href="/blog/page/{Number($page.params.pageNumber) - 1}"
				>Previous</a
			>
		{/if}
		{#if posts.next_page}
			<a class="link navLink--next" href="/blog/page/{Number($page.params.pageNumber) + 1}">Next</a>
		{/if}
	</nav>
</section>

<style>
	nav {
		display: flex;
		justify-content: space-between;
	}

	.navLink--prev {
		margin-right: auto;
	}

	.navLink--next {
		margin-left: auto;
	}
</style>

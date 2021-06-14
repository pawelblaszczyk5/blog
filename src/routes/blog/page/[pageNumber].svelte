<script lang="ts" context="module">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit/types/page';

	import { prismicClient } from '$lib/constants/prismicClient';
	import Prismic from '@prismicio/client';

	export const load = async (input: LoadInput): Promise<LoadOutput> => {
		try {
			const posts = await prismicClient.query(Prismic.Predicates.at('document.type', 'blog'), {
				pageSize: 3,
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
	import { page } from '$app/stores';
	import PostList from '$lib/components/PostList.svelte';

	export let posts: ApiSearchResponse;
</script>

<svelte:head>
	<title>Blog | Paweł Błaszczyk</title>
</svelte:head>

<section>
	<PostList posts={posts.results} />
	{#if posts.prev_page || posts.next_page}
		<nav>
			{#if posts.prev_page}
				<a class="link navLink--prev" href="/blog/page/{Number($page.params.pageNumber) - 1}"
					>Previous</a
				>
			{/if}
			{#if posts.next_page}
				<a class="link navLink--next" href="/blog/page/{Number($page.params.pageNumber) + 1}"
					>Next</a
				>
			{/if}
		</nav>
	{/if}
</section>

<style>
	h1 {
		margin: 0.5rem 0;
	}
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

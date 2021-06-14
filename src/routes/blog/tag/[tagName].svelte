<script lang="ts" context="module">
	import type ApiSearchResponse from '@prismicio/client/types/ApiSearchResponse';
	import type { LoadInput, LoadOutput } from '@sveltejs/kit/types/page';

	import { prismicClient } from '$lib/constants/prismicClient';
	import Prismic from '@prismicio/client';

	export const load = async (input: LoadInput): Promise<LoadOutput> => {
		try {
			const posts = await prismicClient.query(
				[
					Prismic.Predicates.at('document.type', 'blog'),
					Prismic.Predicates.at('document.tags', [input.page.params.tagName])
				],
				{ pageSize: 100 }
			);

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
	import PostList from '$lib/components/PostList.svelte';
	import { page } from '$app/stores';

	export let posts: ApiSearchResponse;
</script>

<svelte:head>
	<title>Blog | Paweł Błaszczyk</title>
</svelte:head>

<section>
	<h1>Posts with tag: {$page.params.tagName}</h1>
	<PostList posts={posts.results} />
</section>

<style>
	h1 {
		margin: 0.5rem 0;
	}
</style>

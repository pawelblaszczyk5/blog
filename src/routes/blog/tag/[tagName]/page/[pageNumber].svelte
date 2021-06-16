<script lang="ts" context="module">
	import type ApiSearchResponse from '@prismicio/client/types/ApiSearchResponse';
	import type { LoadInput, LoadOutput } from '@sveltejs/kit/types/page';

	import { prismicClient } from '$lib/constants/prismicClient';
	import { postsPerPage } from '$lib/constants/postsPerPage';
	import Prismic from '@prismicio/client';

	export const load = async (input: LoadInput): Promise<LoadOutput> => {
		try {
			const posts = await prismicClient.query(
				[
					Prismic.Predicates.at('document.type', 'blog'),
					Prismic.Predicates.at('document.tags', [input.page.params.tagName])
				],
				{ pageSize: postsPerPage, page: Number(input.page.params.pageNumber) }
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
	import PostNav from '$lib/components/PostNav.svelte';
	import { page } from '$app/stores';

	export let posts: ApiSearchResponse;
</script>

<svelte:head>
	<title>{$page.params.tagName} | Paweł Błaszczyk</title>
</svelte:head>

<section class="taggedPosts">
	<h1 class="taggedPosts__heading">Posts with tag: {$page.params.tagName}</h1>
	<PostList {posts} />
	<PostNav {posts} />
</section>

<style>
	.taggedPosts__heading {
		margin: 0.5rem 0;
	}
</style>

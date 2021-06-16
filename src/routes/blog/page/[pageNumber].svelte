<script lang="ts" context="module">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit/types/page';

	import { prismicClient } from '$lib/constants/prismicClient';
	import { postsPerPage } from '$lib/constants/postsPerPage';
	import Prismic from '@prismicio/client';

	export const load = async (input: LoadInput): Promise<LoadOutput> => {
		try {
			const posts = await prismicClient.query(Prismic.Predicates.at('document.type', 'blog'), {
				pageSize: postsPerPage,
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
	import PostList from '$lib/components/PostList.svelte';
	import PostNav from '$lib/components/PostNav.svelte';
	import Meta from '$lib/components/Meta.svelte';

	export let posts: ApiSearchResponse;
</script>

<Meta title="Blog" />

<section>
	<PostList {posts} />
	<PostNav {posts} />
</section>

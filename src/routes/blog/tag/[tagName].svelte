<script lang="ts" context="module">
	import type ApiSearchResponse from '@prismicio/client/types/ApiSearchResponse';
	import type { LoadInput, LoadOutput } from '@sveltejs/kit/types/page';

	import { prismicClient } from '$lib/constants/prismicClient';
	import Prismic from '@prismicio/client';

	export const load = async (input: LoadInput): Promise<LoadOutput> => {
		try {
			const posts = await prismicClient.query([
				Prismic.Predicates.at('document.type', 'blog'),
				Prismic.Predicates.at('document.tags', [input.page.params.tagName])
			]);

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
	export let posts: ApiSearchResponse;
</script>

<section>test</section>

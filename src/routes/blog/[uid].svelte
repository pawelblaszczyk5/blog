<script lang="ts" context="module">
	import { prismicClient } from '$lib/constants/prismicClient';

	import type { LoadInput, LoadOutput } from '@sveltejs/kit/types/page';
	import type { Document } from '@prismicio/client/types/documents';

	export const load = async (input: LoadInput): Promise<LoadOutput> => {
		const post = await prismicClient.getByUID('blog', input.page.params.uid, {});

		if (post) {
			return {
				props: {
					post
				}
			};
		}

		return {
			status: 404,
			error: new Error(`Could not load blog post by id ${input.page.params.uid}`)
		};
	};
</script>

<script lang="ts">
	import PrismicDom from 'prismic-dom';

	export let post: Document;
</script>

<div>
	{@html PrismicDom.RichText.asHtml(post.data.content)}
</div>

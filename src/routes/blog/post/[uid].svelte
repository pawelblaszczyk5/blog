<script lang="ts" context="module">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit/types/page';
	import type { Document } from '@prismicio/client/types/documents';

	import { prismicClient } from '$lib/constants/prismicClient';
	import '@fontsource/fira-code/variable.css';

	export const load = async (input: LoadInput): Promise<LoadOutput> => {
		try {
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
		} catch (e) {
			return {
				status: 500,
				error: new Error('Error during post fetching')
			};
		}
	};
</script>

<script lang="ts">
	import CalendarIcon from '$lib/components/CalendarIcon.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import PrismicDom from 'prismic-dom';
	import { formatDate } from '$lib/helpers/dateTimeFormatter';

	export let post: Document;
</script>

<svelte:head>
	<title>{post.data.title} | Paweł Błaszczyk</title>
</svelte:head>

<h1>{post.data.title}</h1>
{#if post.tags.length}
	<div class="article__tagContainer">
		{#each post.tags as tag}
			<Tag {tag} />
		{/each}
	</div>
{/if}
<p class="article__date">
	<CalendarIcon />&nbsp;&nbsp;{formatDate(post.first_publication_date || '')}
</p>
<article class="article__content">
	{@html PrismicDom.RichText.asHtml(post.data.content)}
</article>

<style>
	.article__tagContainer {
		margin: 0.5rem 0;
		display: flex;
		gap: 0.5rem;
	}

	.article__date {
		display: flex;
		align-items: center;
		font-family: var(--sansSerifFont);
		font-size: 0.875rem;
	}

	.article__content {
		margin: 1rem 0;
		width: 100%;
	}
	.article__content :global(img) {
		max-width: 100%;
	}

	.article__content :global(li),
	.article__content :global(ul) {
		list-style-position: inside;
		font-family: var(--sansSerifFont);
	}

	.article__content :global(li::marker),
	.article__content :global(ul::marker) {
		font-family: var(--serifFont);
	}

	.article__content :global(h3) {
		font-size: 1.375rem;
	}

	.article__content :global(h4) {
		font-size: 1.3125rem;
	}

	.article__content :global(h5) {
		font-size: 1.25rem;
	}

	.article__content :global(h6) {
		font-size: 1.1875rem;
	}

	.article__content :global(a) {
		color: inherit;
		text-decoration: none;
		border-bottom: 2px solid var(--secondaryAccentColor);
		transition: border-color ease-in-out 0.4s;
	}

	.article__content :global(a:hover) {
		border-bottom-color: var(--primaryAccentColor);
	}

	.article__content :global(pre) {
		font-family: 'Fira CodeVariable', monospace;
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>

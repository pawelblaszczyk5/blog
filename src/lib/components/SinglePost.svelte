<script lang="ts">
	import type { Document as Post } from '@prismicio/client/types/documents';

	import Tag from './Tag.svelte';
	import CalendarIcon from './CalendarIcon.svelte';
	import { formatDate } from '$lib/helpers/dateTimeFormatter';

	export let post: Post;
</script>

<article>
	<h2><a class="link" sveltekit:prefetch href="/blog/post/{post.uid}">{post.data.title}</a></h2>
	{#if post.tags.length}
		<div>
			{#each post.tags as tag}
				<Tag {tag} />
			{/each}
		</div>
	{/if}
	<p class="description">{post.data.description}</p>
	<div class="articleInfo">
		<p class="articleInfo__date">
			<CalendarIcon />&nbsp;&nbsp;{formatDate(post.first_publication_date || '')}
		</p>
		<a class="link articleInfo__link" sveltekit:prefetch href="/blog/post/{post.uid}">Read</a>
	</div>
</article>

<style>
	h2 {
		margin-bottom: 1rem;
	}
	article {
		padding: 0.5rem;
	}
	div {
		margin: 0.5rem 0;
		display: flex;
		gap: 0.5rem;
	}

	.description {
		font-size: 1rem;
	}

	.articleInfo {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.articleInfo__date {
		display: flex;
		align-items: center;
		font-family: var(--sansSerifFont);
		font-size: 0.875rem;
	}
	.articleInfo__link {
		display: block;
		width: max-content;
	}
</style>

<script lang="ts">
	import type { Document as Post } from '@prismicio/client/types/documents';

	import Tag from './Tag.svelte';
	import CalendarIcon from './CalendarIcon.svelte';
	import { formatDate } from '$lib/helpers/dateTimeFormatter';

	export let post: Post;
</script>

<article class="article">
	<h1 class="article__title">
		<a class="link" sveltekit:prefetch href="/blog/post/{post.uid}">{post.data.title}</a>
	</h1>
	{#if post.tags.length}
		<div class="article__tagsContainer">
			{#each post.tags as tag}
				<Tag {tag} />
			{/each}
		</div>
	{/if}
	<p class="article__description">{post.data.description}</p>
	<div class="article__info">
		<p class="article__date">
			<CalendarIcon />&nbsp;&nbsp;{formatDate(post.first_publication_date || '')}
		</p>
		<a class="link article__link" sveltekit:prefetch href="/blog/post/{post.uid}">Read</a>
	</div>
</article>

<style>
	.article {
		margin: 1rem 0;
	}
	.article__title {
		margin-bottom: 1rem;
	}
	.article__tagsContainer {
		margin: 0.5rem 0;
		display: flex;
		gap: 0.5rem;
	}

	.article__description {
		font-size: 1rem;
	}

	.article__info {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.article__date {
		display: flex;
		align-items: center;
		font-family: var(--sansSerifFont);
		font-size: 0.875rem;
	}
	.article__link {
		display: block;
		width: max-content;
	}
</style>

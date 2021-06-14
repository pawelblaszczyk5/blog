<script lang="ts">
	import type { Document as Post } from '@prismicio/client/types/documents';

	import Tag from './Tag.svelte';

	export let post: Post;

	console.log(post);
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
	<p>{post.data.description}</p>
	<a class="link readLink" sveltekit:prefetch href="/blog/post/{post.uid}">Read</a>
</article>

<style>
	h2 {
		margin-bottom: 1rem;
	}
	article {
		padding: 0.5rem;
	}
	div {
		margin: 1rem 0 0.5rem;
		display: flex;
		gap: 0.5rem;
	}

	p {
		font-size: 1rem;
	}

	.readLink {
		display: block;
		width: max-content;
		margin-left: auto;
		font-size: 0.875rem;
	}
</style>

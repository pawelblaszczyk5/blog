<script lang="ts">
	import type { Document as Post } from '@prismicio/client/types/documents';
	import SinglePost from './SinglePost.svelte';

	export let posts: Array<Post>;
</script>

{#each posts as post}
	<SinglePost {post} />
{:else}
	<h1>No blog posts found 🙁</h1>
{/each}

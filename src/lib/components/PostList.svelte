<script lang="ts">
	import type ApiSearchResponse from '@prismicio/client/types/ApiSearchResponse';
	import SinglePost from './SinglePost.svelte';

	export let posts: ApiSearchResponse;
</script>

{#each posts.results as post}
	<SinglePost {post} />
{:else}
	<h1 class="postList__heading">No blog posts found 🙁</h1>
{/each}

<style>
	.postList__heading {
		margin: 0.5rem 0;
	}
</style>

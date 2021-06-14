<script lang="ts">
	import type { Document as Post } from '@prismicio/client/types/documents';

	export let post: Post;
</script>

<p>{JSON.stringify(post.data)}</p>

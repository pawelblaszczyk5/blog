<script lang="ts">
	export let tag: string;
</script>

<a sveltekit:prefetch href="/blog/tag/{tag}/page/1">{tag}</a>

<style>
	a {
		display: inline-block;
		text-decoration: none;
		border: 2px solid var(--secondaryAccentColor);
		font-family: var(--sansSerifFont);
		font-size: 0.75rem;
		padding: 0.125rem 0.25rem;
		color: inherit;
		transition: border-color ease-in-out 0.4s;
	}

	a:hover {
		border-color: var(--primaryAccentColor);
	}
</style>

<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
</script>

<Meta title="Something went wrong 🙁" />

<h1 class="error__heading">404</h1>
<h2 class="error__details">
	The page you're trying to request is not existing. Use navigation to continue browsing the
	website.
</h2>

<style>
	.error__heading {
		text-align: center;
		font-weight: 600;
		font-size: 2.5rem;
	}

	.error__details {
		text-align: center;
		font-weight: 400;
		margin: 0.5rem 0;
	}
</style>

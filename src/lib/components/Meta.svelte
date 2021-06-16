<script lang="ts">
	export let title: string;
	export let description: string =
		"Hello, I'm Paweł Błaszczyk and that's my blog where I share my thoughts about web development in general";
	export let keywords: Array<string> = [];
</script>

<svelte:head>
	<title>{title} | Paweł Błaszczyk</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="Paweł Błaszczyk, blog, frontend, front-end, web development, web, javascript, html, css{keywords.length
			? ', ' + keywords.join(', ')
			: ''}"
	/>
	<meta property="og:title" content={title + ' | Paweł Błaszczyk'} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content="Paweł Błaszczyk Blog" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://pawel-blaszczyk-blog.netlify.app/" />
</svelte:head>

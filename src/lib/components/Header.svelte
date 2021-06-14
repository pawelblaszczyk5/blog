<script lang="ts">
	import monkeyLogoSrc from '../../assets/monkeyLogo.png';
</script>

<header>
	<nav>
		<div><a sveltekit:prefetch class="link" href="/blog/page/1">Blog</a></div>
		<a sveltekit:prefetch href="/" title="Front page"
			><img src={monkeyLogoSrc} alt="Monkey logo" /></a
		>
		<div><a sveltekit:prefetch class="link" href="/about">About</a></div>
	</nav>
</header>

<style>
	nav {
		width: 100%;
		max-width: 600px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}

	a {
		font-size: 1.5rem;
	}

	div {
		width: 100px;
		text-align: center;
	}

	img {
		clip-path: circle(45%);
		width: 100px;
		height: 100px;
	}

	@media screen and (min-width: 500px) {
		a {
			font-size: 2rem;
		}
	}
</style>

<script lang="ts">
	import monkeyLogoSrc from '../../assets/monkeyLogo.png';
</script>

<header>
	<nav>
		<a class="link" href="/blog">Blog</a>
		<a href="/"><img src={monkeyLogoSrc} alt="Monkey logo" /></a>
		<a class="link" href="/about">About</a>
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

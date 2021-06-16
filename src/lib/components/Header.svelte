<script lang="ts">
	import monkeyLogoSrc from '../../assets/monkeyLogo.png';
</script>

<header>
	<nav class="nav">
		<div class="nav__linkContainer">
			<a sveltekit:prefetch class="link nav__link" href="/blog/page/1">Blog</a>
		</div>
		<a sveltekit:prefetch href="/" title="Front page"
			><img class="nav__logo" src={monkeyLogoSrc} alt="Monkey logo" /></a
		>
		<div class="nav__linkContainer">
			<a sveltekit:prefetch class="link nav__link" href="/about">About</a>
		</div>
	</nav>
</header>

<style>
	.nav {
		width: 100%;
		max-width: 600px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}

	.nav__link {
		font-size: 1.5rem;
	}

	.nav__linkContainer {
		width: 100px;
		text-align: center;
	}

	.nav__logo {
		clip-path: circle(45%);
		width: 100px;
		height: 100px;
	}

	@media screen and (min-width: 500px) {
		.nav__link {
			font-size: 2rem;
		}
	}
</style>

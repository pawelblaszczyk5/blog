<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';

	import photoSrc from '../assets/photo.jpg';
</script>

<Meta title="Home" />

<img class="photo" src={photoSrc} alt="Paweł Błaszczyk" />
<h1>Hi, welcome to my website!</h1>
<p>
	My name is Paweł Błaszczyk, I'm a frontend developer from Poland. It's nice to see you on my blog,
	where I'd like to share my thoughts about the past, present, and future of the web development
	landmark. I always look forward to seeing new and innovative things happen on the web. Currently,
	I'm a hell of enthusiastic about Svelte and what it'll bring into modern front-end development.
	Moreover, I'm always excited about Typescript and the direction in which the JavaScript world is
	evolving.
</p>
<p>
	I'm fond of simplifying (sometimes even oversimplifying) things, making the web as accessible as
	it can be (though I'm still a newbie on that one), and trying new technologies. To make my
	horizons wider, I'd like to try things such as Deno, Lit, GraphQL, and Vue.js.
</p>
<p>
	Besides, I find testing really enjoyable and I'm hoping to learn more of it, so foresee coverage
	(pun intended) on that as well. Lastly, I wish you'll have a ball browsing some of my thoughts,
	have a nice day!
</p>
<h2>Featured posts</h2>
<ul class="featuredPosts">
	<li class="featuredPosts__element">
		<a sveltekit:prefetch class="link" href="/blog/post/this-weeks-finds-week-3"
			>This week's finds (Week 3)
		</a>
	</li>
	<li class="featuredPosts__element">
		<a sveltekit:prefetch class="link" href="/blog/post/this-weeks-finds-week-2"
			>This week's finds (Week 2)
		</a>
	</li>
	<li class="featuredPosts__element">
		<a sveltekit:prefetch class="link" href="/blog/post/likes-and-dislikes-svelte"
			>Likes & Dislikes - Svelte
		</a>
	</li>
</ul>

<style>
	.photo {
		display: none;
		background-color: white;
		margin: 10px;
	}

	.featuredPosts {
		list-style-position: inside;
	}

	.featuredPosts__element {
		margin: 0.5rem 0;
	}

	@media screen and (min-width: 500px) {
		.photo {
			display: initial;
			float: right;
			shape-outside: circle();
			clip-path: circle();
			width: 200px;
			height: 200px;
			object-fit: contain;
			object-position: top;
		}
	}
</style>

<script lang="ts">
	import 'uno.css';
	import NavMenu from '$lib/components/NavMenu/NavMenu.svelte';
	import '$lib/index.scss';
	import { onHydrated, theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	// ? moved to +layout.server.ts : will be deleted when we make sure that everything is alright
	// export const prerender = true;

	onMount(() => onHydrated());
</script>

<svelte:head>
	<title>Harsha Udutha | Portfolio</title>
	<meta name="description" content="Portfolio of Harsha Udutha — Software Developer, Mobile AI Enthusiast, and Data Engineer." />
	<!-- <meta property="og:title" content="Harsha Udutha | Portfolio" /> -->
	<meta property="og:description" content="Explore Harsha's projects, resume, and skills in software engineering, data science, and wearable AI development." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://harsha-udutha.github.io/portfolio" />
	<meta property="og:image" content="https://harsha-udutha.github.io/portfolio/preview.png" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>


<div class={`body contents ${$theme ? 'theme-dark' : 'theme-light'}`}>
	<NavMenu />
	<div class="content container"><slot /></div>
</div>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 0px 0px;
	}

	.body {
		margin: 0px;
		background-color: var(--main);
		color: var(--main-text);
		font-family: var(--text-f);
		display: flex;
		flex-direction: column;
		transition-duration: 200ms;

		letter-spacing: 1px;

		min-height: 100vh;
	}

	:global(p) {
		margin: 0px;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		margin: 5px 0px;
	}
</style>

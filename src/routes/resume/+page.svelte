<script>
	import { data, title } from '@data/resume';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
</script>

<svelte:head>
	<title>Harsha Udutha | Resume</title>
</svelte:head>

<CommonPage {title}>
	<div class="resume">
		{#if data}
			<a href={data} download>
				<Chip size={'10em'}>Click here to view</Chip>
			</a>

		{:else}
			<Chip>Ooops! no Resume at the moment.</Chip>
		{/if}
		
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
</style>

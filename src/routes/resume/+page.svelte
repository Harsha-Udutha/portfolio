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
			<div class="resume-actions">
				<a href={data} target="_blank" rel="noreferrer">
					<Chip size={'10em'}>Open PDF</Chip>
				</a>

				<a href={data} download>
					<Chip size={'10em'}>Download</Chip>
				</a>
			</div>

			<div class="resume-viewer">
				<iframe src={data} title="Harsha Udutha Resume"></iframe>
			</div>
		{:else}
			<Chip>Ooops! no Resume at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20px;
		width: 100%;

		a {
			color: inherit;
			text-decoration: none;
		}
	}

	.resume-actions {
		display: flex;
		justify-content: center;
		gap: 16px;
		flex-wrap: wrap;
		margin-bottom: 24px;
	}

	.resume-viewer {
		width: 100%;
		max-width: 1000px;
		height: 145vh;
		border-radius: 12px;
		overflow: hidden;
		background: white;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);

		iframe {
			width: 100%;
			height: 100%;
			border: none;
			background: white;
		}
	}

	@media (max-width: 768px) {
		.resume-viewer {
			height: 75vh;
			border-radius: 8px;
		}

		.resume-actions {
			gap: 10px;
		}
	}
</style>
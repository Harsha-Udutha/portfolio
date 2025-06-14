<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import { items, title } from '@data/certifications';
	import type { Certificate } from '$lib/types';

	let search = '';
	let displayed: Array<Certificate> = [];

	// Filtered results based on search
	$: {
		displayed = items.filter((cert) => {
			return (
				search.trim().length === 0 ||
				cert.name.toLowerCase().includes(search.toLowerCase()) ||
				cert.issuer?.toLowerCase().includes(search.toLowerCase())
			);
		});
	}

	// Group by category
	$: coreCerts = displayed.filter((c) => c.category === 'core');
	$: extraCerts = displayed.filter((c) => c.category === 'extra');

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		search = e.detail.search;
	};
</script>

<svelte:head>
	<title>Harsha Udutha | Certifications</title>
</svelte:head>

<SearchPage {title} on:search={onSearch}>
	{#if displayed.length === 0}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not find any certifications...</p>
		</div>
	{:else}
		<section class="col gap-8 mt-10">

			{#if coreCerts.length}
				<h2 class="text-xl font-bold">🎓 Core Certifications</h2>
				<div class="col gap-5">
					{#each coreCerts as cert (cert.name)}
						<Card id={cert.slug}>
							<div class="row gap-4 items-center justify-between flex-wrap">
								<div class="row gap-4 items-center">
									{#if cert.logo}
										<img
											src={cert.logo}
											alt="Logo"
											width="48"
											height="48"
											class="rounded bg-[var(--border)] p-2"
										/>
									{/if}
									<div class="col">
										<h2 class="text-[1.2em] font-semibold">{cert.name}</h2>
										<p class="text-[var(--secondary-text)]">{cert.issuer}</p>
									</div>
								</div>

								{#if cert.link}
									<a
										href={cert.link}
										target="_blank"
										rel="noopener noreferrer"
										class="px-4 py-1.5 bg-[var(--accent)] text-[var(--accent-text)] rounded font-semibold text-sm hover:opacity-80"
										style="text-decoration: none;"
									>
										View Certificate
									</a>
								{/if}
							</div>
						</Card>
					{/each}
				</div>
			{/if}

			{#if extraCerts.length}
			<details class="mt-10">
				<summary class="text-xl font-bold cursor-pointer select-none">📚 More Certifications</summary>
				<div class="col gap-5 mt-5">
					{#each extraCerts as cert (cert.name)}
						<Card id={cert.slug}>
							<div class="row gap-4 items-center justify-between flex-wrap">
								<div class="row gap-4 items-center">
									{#if cert.logo}
										<img
											src={cert.logo}
											alt="Logo"
											width="48"
											height="48"
											class="rounded bg-[var(--border)] p-2"
										/>
									{/if}
									<div class="col">
										<h2 class="text-[1.2em] font-semibold">{cert.name}</h2>
										<p class="text-[var(--secondary-text)]">{cert.issuer}</p>
									</div>
								</div>

								{#if cert.link}
									<a
										href={cert.link}
										target="_blank"
										rel="noopener noreferrer"
										class="px-4 py-1.5 bg-[var(--accent)] text-[var(--accent-text)] rounded font-semibold text-sm hover:opacity-80"
										style="text-decoration: none;"
									>
										View Certificate
									</a>
								{/if}
							</div>
						</Card>
					{/each}
				</div>
			</details>
		{/if}


		</section>
	{/if}
</SearchPage>

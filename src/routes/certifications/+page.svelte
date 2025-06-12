<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import { items, title } from '@data/certifications';
</script>

<svelte:head>
	<title>Harsha Udutha | Certifications</title>
</svelte:head>

<section class="col gap-5 mt-10">
	<h1 class="text-[1.8em] font-bold text-center">{title}</h1>

{#each items as cert (cert.name)}
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
					<!-- {#if cert.grade}
						<p class="text-sm mt-1"><strong>Grade:</strong> {cert.grade}</p>
					{/if} -->
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

</section>

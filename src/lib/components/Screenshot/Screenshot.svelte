<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import UIcon from '../Icon/UIcon.svelte';

	export let screenshot: { src: string; label: string } | undefined = undefined;

	export let onClose = () => {
		screenshot = undefined;
	};

	$: show = typeof screenshot !== 'undefined';

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			onClose();
		}
	}

	onMount(() => {
		if (browser) {
			window.addEventListener('keydown', handleKeydown);
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('keydown', handleKeydown);
		}
	});
</script>


{#if show}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="fixed inset-0px top-51px bg-[#000000dd] col-center p-50px"
		on:click={onClose}
		on:click={(e) => e.stopPropagation()}
		on:keydown
		on:keypress
		on:keyup
		on:keyup
	>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="w-full w-100% md:w-80% lg:w-70% col text-center gap-5 bg-[var(--main)] border-solid border-1px border-[var(--border)] p-5 rounded-xl"
			on:click={(e) => e.stopPropagation()}
			on:keydown
			on:keypress
			on:keyup
			on:keyup
		>
			<div class="self-end">
				<button
					class="cursor-pointer aspect-square rounded-full border-[var(--border)] border-1px bg-[transparent] border-solid hover:border-[var(--border-hover)]"
					on:click={onClose}
					on:keydown
					on:keypress
					on:keyup
				>
					<UIcon icon={'i-carbon-close'} />
				</button>
			</div>
			{#if screenshot?.src.endsWith('.mp4')}
				<video
					src={screenshot.src}
					controls
					autoplay
					class="aspect-video w-full rounded-xl"
				/>
			{:else}
				<div
					class="aspect-video col bg-contain w-100% rounded-xl bg-no-repeat bg-contains bg-center"
					style={`background-image: url(${screenshot?.src});`}
				/>
			{/if}
			<p
				class="font-italic m-t-auto m-x-auto bg-[var(--main-60)] border-solid border-1px border-[var(--border)] p-x-5 p-2 rounded-xl"
			>
				{screenshot?.label}
			</p>
		</div>
	</div>
{/if}

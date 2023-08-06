<script>
	import Card from '../../lib/layout/Card.svelte';
	import AllPosts from '../../lib/layout/wrappers/AllPosts.svelte';
	import PageWrapper from '../../lib/layout/wrappers/PageWrapper.svelte';

	export let data;

	async function loadComponent(name) {
		return await (async () => (await import(`./../../feed/${name}.svelte`)).default)();
	}
</script>

<svelte:head>
	<title>theoryslut | feed</title>
</svelte:head>

<PageWrapper header_text="twitter at home">
	<AllPosts added_class="left-margin">
		<ul>
			{#each data.entries as entry}
				<Card {entry}>
					{#if entry.custom}
						{#await loadComponent(entry.slug)}
							<p class="loading">loading. . .</p>
						{:then CustomComponent}
							<svelte:component this={CustomComponent} />
						{:catch error}
							<p class="error">Sorry, there's been an error loading this entry.</p>
						{/await}
					{:else}
						{entry.content}
					{/if}
				</Card>
			{/each}
		</ul>
	</AllPosts>
</PageWrapper>

<style>
	ul {
		list-style: none;
		padding: 0;
		width: 100%;
		font-size: 1.2rem;
	}

	.error {
		color: var(--red);
	}

	.loading {
		color: var(--yellow);
	}
</style>

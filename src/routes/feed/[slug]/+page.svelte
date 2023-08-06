<script>
	import ThemeToggle from '../../../lib/icons/ThemeToggle.svelte';
	import { theme, toggleTheme } from '../../../stores/global_theme';

	import { page } from '$app/stores';

	import Card from '../../../lib/layout/Card.svelte';
	import LeftArrow from '../../../lib/icons/LeftArrow.svelte';
	import AllPosts from '../../../lib/layout/wrappers/AllPosts.svelte';
	import PageWrapper from '../../../lib/layout/wrappers/PageWrapper.svelte';

	export let data;

	async function loadComponent(name) {
		return await (async () => (await import(`./../../../feed/${name}.svelte`)).default)();
	}
</script>

<PageWrapper header_text="twitter at home">
	<div class="header_box">
		<div class="back_link">
			<LeftArrow target="feed/" /><span> (back to all posts)</span>
		</div>
		<span class="tag_title">posts tagged <span class="tag">{`#${$page.params.slug}`}</span></span>
	</div>
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
		/* margin: 0; */
		width: 100%;
		font-size: 1.2rem;
	}

	.header_box {
		margin-left: 2rem;
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
	}

	.back_link {
		margin: 0px;
		font-size: 0.8rem;
		color: var(--text);
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
	}

	.tag_title {
		padding: 0rem;
		font-size: 1.9rem;
		color: var(--mauve);
	}

	.tag {
		padding: 0.3rem;
		font-size: 1.9rem;
		background-color: var(--surface0);
		color: var(--mauve);
		font-style: normal;
	}

	.error {
		color: var(--red);
	}

	.loading {
		color: var(--yellow);
	}
</style>

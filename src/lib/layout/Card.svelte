<script>
	import RainbowLink from '../links/RainbowLink.svelte';
	import { base } from '$app/paths';

	export let entry;
</script>

<li class="li-box">
	<div class="content"><slot /></div>
	<div class="meta">
		<div class="tags">
			{#each entry.tags as tag}
				<RainbowLink href={`${base}/feed/${tag}`} target="" rel=""
					><span class="tag">{`#${tag}`}</span></RainbowLink
				>
			{/each}
		</div>
		<span class="date">
			{new Date(entry.published).getMonth() +
				1 +
				'/' +
				new Date(entry.published).getDate() +
				'/' +
				new Date(entry.published).getFullYear() +
				' @ ' +
				new Date(entry.published).toLocaleTimeString('en-US', {
					hour12: true,
					hour: 'numeric',
					minute: 'numeric'
				})}
		</span>
	</div>
</li>

<style>
	li {
		color: var(--text);
		margin: 1rem 0rem;
	}

	.li-box {
		padding: 0.5em 1em;
		background-color: var(--crust);
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	}

	.content {
		font-size: 1rem;
		margin-bottom: 1rem;
	}

	.meta {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 0rem;
	}

	.date {
		font-size: 0.9rem;
		text-align: right;
		color: var(--sapphire);
	}

	.tags {
		display: flex;
		flex-direction: row;
		gap: 10px;
	}

	.tag {
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		padding: 0.3rem;
		font-size: 0.9rem;
		background-color: var(--surface0);
	}
</style>

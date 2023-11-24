<script>
	import ChainLink from '../links/ChainLink.svelte';
	import RainbowLink from '../links/RainbowLink.svelte';
	export let author;
	export let title;
	export let comment = '';
	export let link = '';
</script>

<li class="grow">
	{#if link !== ''}
		<RainbowLink href={link}
			><b>{title}</b>
			<span class="item-spacer">//</span>
			<i>{author}</i>
			<span class="item-spacer">//</span>
			<span class="chain">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="26"
					height="26"
					fill="currentColor"
					class="bi bi-link-45deg"
					viewBox="0 0 16 16"
				>
					<path
						d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
					/>
					<path
						d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
					/>
				</svg>
			</span></RainbowLink
		>
	{:else}
		<b>{title}</b>
		<span class="item-spacer">//</span>
		<i>{author}</i>
	{/if}
	<div class="comment">
		{comment}
		<slot />
		<div />
	</div>
</li>

<style>
	.item-spacer {
		padding: 0rem 0.2rem;
	}

	.chain {
		position: relative;
		top: 0.3em;
	}

	li {
		list-style: none;
		background-color: var(--base);
		/* width: 100%; */
		padding: 0.5em;
		border-radius: 5px;
	}

	li:hover {
		padding-left: 1.25em;
	}

	.grow {
		transition: all 0.2s ease-in-out;
	}

	.grow:hover {
		transform: scale(1.05);
	}
</style>

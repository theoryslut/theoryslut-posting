<script>
	export let figure = false;
	export let figcaption = '';
</script>

{#if figure}
	<figure class="center-flex">
		<slot />
		<figcaption class="caption">{figcaption}</figcaption>
	</figure>
{:else}
	<div class="center-flex">
		<slot />
	</div>
{/if}

<style>
	figure {
		margin: 0;
		padding: 0;
	}

	.caption {
		max-width: 70%;
	}

	.center-flex {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>

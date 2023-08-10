<script>
	export let src = '';
	export let alt = '';
	export let figure = false;
	export let figcaption = '';
	export let added_class = '';
</script>

{#if figure}
	<figure class="center-flex">
		<img {src} class="image {added_class}" {alt} />
		<figcaption class="caption">{figcaption}</figcaption>
	</figure>
{:else}
	<div class="center-flex {added_class}">
		<img {src} class="image {added_class}" {alt} />
	</div>
{/if}

<style>
	figure {
		margin: 0;
		padding: 0;
	}

	.image {
		max-height: 700px;
		max-width: 90%;
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

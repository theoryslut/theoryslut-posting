<script>
	export let added_class = '';
</script>

<div class={`all-posts ${added_class}`}><slot /></div>

<style>
	.all-posts {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.left-margin {
		margin-left: 2rem;
	}
</style>

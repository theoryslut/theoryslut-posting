<script>
	export let add_class = '';
</script>

<div class="main-body {add_class}"><slot /></div>

<style>
	.main-body {
		box-sizing: border-box;
		margin: 1rem;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		background-color: var(--mantle);
		width: 100%;
		max-width: min(100vw, 56rem);
	}

	.error,
	.blog_slug {
		padding: 1rem;
	}

	.home {
		padding: 2rem 2rem;
	}
</style>

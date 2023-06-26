<script>
	export let id;
	// export let isFocused;
</script>

<a href="#foot-{id}" class="footnote">^</a>
<span class="anchor" {id} />

<style>
	.footnote {
		display: inline-block;
		color: var(--red);
		font-weight: bolder;
		position: relative;
		bottom: 0.5ex;
		text-decoration: none;
	}

	.footnote b {
		color: var(--red);
		margin-right: 5px;
	}

	.anchor {
		position: absolute;
		transform: translateY(-30vh);
	}
</style>

<script>
	import { theme } from '../../../stores/global_theme';
</script>

<div class="body-wrapper {$theme}"><slot /></div>

<style>
	.body-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 100vh;
		width: 100%;
		background-color: var(--base);
	}
</style>

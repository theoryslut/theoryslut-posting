<script>
	import BackArrow from '../../../lib/back_arrow.svelte';
	import ThemeToggle from '../../../lib/ThemeToggle.svelte';
	import { theme, toggleTheme } from '../../../stores/global_theme';

	import { page } from '$app/stores';
</script>

<div class="body-wrapper {$theme}">
	<section class="main-body">
		<ThemeToggle checked={$theme === 'light-theme'} {toggleTheme} />
		<BackArrow target={'thoughts'} />
		<div class="blog-body">
			{#if $page.data.component}
				<svelte:component this={$page.data.component} />
			{/if}
			<slot />
		</div>
	</section>
	<p>want to get in touch? theoryslut@protonmail.com</p>
</div>

<style>
	.main-body {
		padding: 1rem;
	}
	.blog-body {
		padding: 0 2em;
	}
</style>

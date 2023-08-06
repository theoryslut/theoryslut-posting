<script>
	import BackArrow from '../../../lib/icons/BackArrow.svelte';
	import ThemeToggle from '../../../lib/icons/ThemeToggle.svelte';
	import { theme, toggleTheme } from '../../../stores/global_theme';

	import { page } from '$app/stores';
	import BodyWrapper from '../../../lib/layout/wrappers/BodyWrapper.svelte';
	import MainBody from '../../../lib/layout/wrappers/MainBody.svelte';
</script>

<BodyWrapper>
	<MainBody add_class="blog_slug">
		<ThemeToggle checked={$theme === 'light-theme'} {toggleTheme} />
		<BackArrow target={'log'} />
		<div class="blog-body">
			{#if $page.data.component}
				<svelte:component this={$page.data.component} />
			{/if}
			<slot />
		</div>
	</MainBody>
	<p>want to get in touch? theoryslut@protonmail.com</p>
</BodyWrapper>

<style>
	.blog-body {
		padding: 0 2em;
	}
</style>

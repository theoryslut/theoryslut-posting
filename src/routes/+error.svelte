<script>
	import { theme, toggleTheme } from '../stores/global_theme';
	import ThemeToggle from '../lib/icons/ThemeToggle.svelte';
	import { page } from '$app/stores';
	import BackArrow from '../lib/icons/BackArrow.svelte';
	import BodyWrapper from '../lib/layout/wrappers/BodyWrapper.svelte';
	import MainBody from '../lib/layout/wrappers/MainBody.svelte';
</script>

<BodyWrapper>
	<MainBody add_class="error">
		<ThemeToggle checked={$theme === 'light-theme'} {toggleTheme} />
		<BackArrow />
		<h1>{$page.status} {$page.error.message}</h1>
	</MainBody>
</BodyWrapper>

<style>
	h1 {
		text-align: center;
	}
</style>

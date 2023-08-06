<script>
	import Navbar from '../Navbar.svelte';
	import ThemeToggle from '../../icons/ThemeToggle.svelte';
	import BodyWrapper from './BodyWrapper.svelte';
	import MainBody from './MainBody.svelte';

	import { theme, toggleTheme } from '../../../stores/global_theme';

	export let header_text = '';
</script>

<BodyWrapper>
	<MainBody add_class="home">
		<ThemeToggle checked={$theme === 'light-theme'} {toggleTheme} />
		<h1>theoryslut</h1>
		<Navbar />
		<h5>{header_text}</h5>
		<hr />
		<slot />
	</MainBody>
	<p>want to get in touch? theoryslut@protonmail.com</p>
</BodyWrapper>

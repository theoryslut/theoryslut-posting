<script>
	import { base } from '$app/paths';

	import AllPosts from '../../lib/layout/wrappers/AllPosts.svelte';
	import PageWrapper from '../../lib/layout/wrappers/PageWrapper.svelte';

	export let data;
</script>

<svelte:head>
	<title>theoryslut | log</title>
</svelte:head>

<PageWrapper header_text="no polish lo stakes Posts">
	<AllPosts added_class="left-margin">
		<ul>
			{#each data.entries as entry}
				<li class="li-box">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-stars list-star"
						viewBox="0 0 16 16"
					>
						<path
							d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"
						/>
					</svg>
					<span class="entry-spacer"> {`  `}</span>
					<span>{new Date(entry.published).toDateString().split(' ').slice(1).join(' ')}</span>
					<span class="entry-spacer"> {`    `}</span>
					<a href={`${base}/log/${entry.slug}`} class="entry-title">{entry.title}</a>
				</li>
			{/each}
		</ul>
	</AllPosts>
</PageWrapper>

<style>
	ul {
		list-style: none;
		padding: 0;
		width: 100%;
		font-size: 1.2rem;
	}

	.list-star {
		color: var(--flamingo);
		padding-right: 0.5rem;
		padding-top: 0.5rem;
	}

	.li-box {
		display: flex;
		flex-direction: row;
		justify-content: left;
		padding-bottom: 1em;
	}

	.entry-spacer {
		white-space: pre;
	}

	.entry-title {
		flex-basis: 60%;
	}

	@media screen and (max-width: 768px) {
		.entry-title {
			flex-basis: 80%;
		}
	}
</style>

<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<footer>
	Made with <img src={logo} alt="" /> by <a href="https://twitter.com/sveltejs">@sveltejs</a>
</footer>

<style lang="scss">
	header {
		display: flex;
		align-items: center;
		> * {
			flex: 1;
		}
	}
	.logo-text {
		font-size: 2.9rem;
		line-height: 4.8rem;
		letter-spacing: 0.065em;
		font-family: var(--font-heading-family);
		color: black;

	}
	nav {
		display: flex;
		justify-content: flex-end;

		color: var(--background-color);
		ul {
			width: 100%;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			justify-content: center;
			background-color: var(--background-color);
			font-family: var(--font-heading-family);
			font-size: 1.8rem;
			line-height: 3rem;
			li {
				padding: 1.5rem 0;

				list-style: none;
				margin: 0;
				padding: 0;
				&:first-child a {
					border-bottom-left-radius: 0.2rem;
				}
				&:last-child a {
					border-bottom-right-radius: 0.2rem;
				}
				a {
					background-color: var(--primary-color);
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 1rem;
					text-decoration: none;
					color: var(--color-text);
					transition: all 0.2s ease-in-out;
					&:hover {
						background-color: var(--primary-color-active);
					}
				}
			}
		}
	}
</style>

<script lang="ts">
	import Hamburger from '../Hamburger/Hamburger.svelte';

	let toggled = false;
	function toggleNav(state: boolean) {
		toggled = state;
	}
</script>

<nav class:toggled>
	<Hamburger onStateChange={toggleNav} />
	<ul role="list">
		<li><a href="/">Home</a></li>
		<li><a href="/team">Team</a></li>
		<li><a href="#">Blog</a></li>
		<li><a href="#">Contact</a></li>
	</ul>
</nav>

<style lang="scss">
	nav {
		z-index: 3000;

		display: flex;
		flex: 1;
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
	@media screen and (max-width: 768px) {
		nav {
			&.toggled ul {
				transform: translateX(0vw);
				transition: transform 0.2s ease-in-out;
			}
			&:not(.toggled) ul {
				transform: translateX(100vw);
				transition: transform 0.2s ease-in-out;
			}
		}
		nav {
			position: relative;
			ul {
				position: absolute;
				display: grid;
				width: 50vw;
				grid-template-columns: 1fr;
				height: 90vh;
				a {
					height: 100%;
				}
			}
		}
	}
</style>

<script lang="ts">
	import { page } from '$app/stores';
	import Hamburger from '$lib/Header/Hamburger/Hamburger.svelte';
	import Nav from './Nav/Nav.svelte';
	import logo from './svelte-logo.svg';
</script>

<header>
	<div class="logo-text">FGC Jamaica</div>
	<Nav />
</header>

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
	.burger {
		display: none;
	}
</style>

<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import MenuItems from './MenuItems.svelte';
	import MobileMenu from './MobileMenu.svelte';
	import HamburgerIcon from './HamburgerIcon.svelte';

	let toggle: boolean;
	const links = {
		home: { href: '/' },
		about: { href: '/about' },
		blog: { href: '/blog' },
		contact: { href: '/contact' }
	};
	afterNavigate(() => {
		toggle = false;
	});
</script>

<!-- NavBar -->
<nav class="relative container flex justify-between tracking-[0.065em] mx-auto mb-12 ">
	<div class="flex items-center justify-between w-full">
		<!-- Logo -->
		<h1 class="pl-4 md:p-0 group block pt-2 text-rich-black font-bebas-neue text-3xl relative">
			<a href="/" class="no-underline group-hover:underline"> FGC Jamaica </a>
			<span class="absolute w-full h-2 rounded-full scale-0 bg-blue-900 group-hover:scale-1" />
		</h1>

		<MenuItems {links} />

		<HamburgerIcon bind:toggle />
		<MobileMenu {links} {toggle} />
	</div>
</nav>

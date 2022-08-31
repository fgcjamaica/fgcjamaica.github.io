<script lang="ts">
import type { Links } from "$lib/types/Link";


	export let toggle: boolean;
	export let links:Links;
	const linksArray = Object.entries(links);
</script>

<!-- Mobile Menu -->
<ul
	class={`transistion right:0 duration-300 ease-in-out md:hidden flex flex-col absolute w-[80%] mt-50 font-bold bg-cornsilk items-center text-rich-black text-2xl font-bebas-neue top-0  drop-shadow-lg py-6 translate-y-16 left-[50%] -translate-x-[50%] ${
		!toggle && '-translate-y-96'
	} `}
>
{#each linksArray as [text, { href }]}

	<li class="w-full flex justify-center">
		<a class="w-full flex justify-center py-3 hover:bg-black" {href}>{text}</a>
	</li>
	{/each}

</ul>

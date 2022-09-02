<script lang="ts">
	import SpotlightPost from '$lib/components/SpotlightPost.svelte';

	import Post from '$lib/components/Post.svelte';

	import type { PageServerLoad } from './+page.server';
	export let data: PageServerLoad;
	let [spotlightPost, ...posts] = data.articles.sort((a, b) =>
		a.datePublished < b.datePublished ? 1 : -1
	);
</script>

<main>
	<section class="flex md:container min-h-[50vh] md:h-[70vh] mx-auto w-full">
		<SpotlightPost metadata={spotlightPost} />
	</section>
	<section class="md:container mx-auto">
		<!-- Posts -->
		<section class="w-full flex flex-col md:container pl-4 md:p-0 ">
			<h2 class="text-2xl font-montserrat font-semibold">Latest Posts</h2>

			{#each posts as metadata}
				<div class="flex container w-full xs:flex 2xs:flex">
					<Post {metadata} />
				</div>
			{/each}
		</section>
		<!-- Search -->
	</section>
</main>

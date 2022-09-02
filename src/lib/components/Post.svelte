<script lang="ts">
	import axios from 'axios';
	import arrow from '$lib/assets/images/arrow.svg';
	import type { ArticleMetaData } from '$lib/types/Article';
	import type { Profile } from '$lib/types/Profile';
	import { onMount } from 'svelte';
	export let metadata: ArticleMetaData;
	$: postImg = null as unknown as { default: string };
	$: author = null as unknown as Profile;
	onMount(async () => {
		const response = await axios.get(`/api/profile`, { params: { id: metadata.authorId } });
		author = await response.data;

		postImg = await import(`../../routes/blog/[slug]/articles/images/${metadata.imageUrl}.jpg`);
		console.log(postImg);
		console.log(author);
	});
</script>


<!-- Post Mobile and Larger -->
<a href={`/blog/${metadata.slug}`} class="xs:hidden 2xs:hidden flex gap-2 mb-8 cursor-pointer">
	<!-- Image -->
	<img class=" self-start w-[50%]" src={postImg?.default} alt="" />

	<!-- Info -->
	<div class="flex flex-col justify-between">
		<!-- Contextual Info -->
		<div class="flex flex-col">
			<!-- Post Title -->
			<h3 class="font-bold text-xl font-montserrat md:text-3xl">{metadata.title}</h3>
			<!-- Meta Data -->
			<div class="flex text-sm items-center gap-[0.1em] font-montserrat font-semibold mb-2">
				<!-- Read Time -->
				<h3 class="text-rich-black">
					{`${metadata.readTime} ${metadata.readTime === '1' ? 'min' : 'mins'} read`}
				</h3>
				<!-- Dot -->
				<span class="inline-block w-4 aspect-1 bg-rich-black rounded-full scale-[25%]" />
				<!-- Date Published -->
				<h3 class="font-montserrat text-rich-black">{metadata.datePublished}</h3>
			</div>
			<!-- Author -->

			<div class="flex gap-2 items-center">
				<img class="w-8 rounded-full" src={author?.imageUrl} alt="author" />
				<h6 class="text-sm font-normal text-rich-black font-montserrat">Ajani Hickling</h6>
			</div>
		</div>
		<!-- Call To Action -->
		<div class="transistion duration-200 flex flex-col mb-4">
			<a href={`/blog/${metadata.slug}`} class="group flex gap-1 items-center">
				<span
					class="capitalize text-bangladesh-green font-semibold transistion duration-200  group-hover:underline md:text-xl "
					>Read full Article</span
				>
				<img
					class="transistion duration-200 group-hover:translate-x-1 group-hover:scale-110"
					src={arrow}
					alt="arrow"
				/>
			</a>
			<!-- Tags -->
			<div class="flex gap-2">
				{#each metadata.tags as tag}
					<span>{`#${tag}`}</span>
				{/each}
			</div>
		</div>
	</div>
</a>


<!-- Xtra Small Screens -->
<a href={`/blog/${metadata.slug}`} class="xs:flex 2xs:flex flex-col gap-2 mb-8 cursor-pointer hidden">
	<!-- Image -->
	<img class=" self-start w-[80%]" src={postImg?.default} alt="" />

	<!-- Info -->
	<div class="flex flex-col justify-between">
		<!-- Contextual Info -->
		<div class="flex flex-col">
			<!-- Post Title -->
			<h3 class="font-bold text-xl font-montserrat md:text-3xl">{metadata.title}</h3>
			<!-- Meta Data -->
			<div class="flex text-sm items-center gap-[0.1em] font-montserrat font-semibold mb-2">
				<!-- Read Time -->
				<h3 class="text-rich-black">
					{`${metadata.readTime} ${metadata.readTime === '1' ? 'min' : 'mins'} read`}
				</h3>
				<!-- Dot -->
				<span class="inline-block w-4 aspect-1 bg-rich-black rounded-full scale-[25%]" />
				<!-- Date Published -->
				<h3 class="font-montserrat text-rich-black">{metadata.datePublished}</h3>
			</div>
			<!-- Author -->

			<div class="flex gap-2 items-center">
				<img class="w-8 rounded-full" src={author?.imageUrl} alt="author" />
				<h6 class="text-sm font-normal text-rich-black font-montserrat">Ajani Hickling</h6>
			</div>
		</div>
		<!-- Call To Action -->
		<div class="transistion duration-200 flex flex-col mb-4">
			<a href={`/blog/${metadata.slug}`} class="group flex gap-1 items-center">
				<span
					class="capitalize text-bangladesh-green font-semibold transistion duration-200  group-hover:underline md:text-xl "
					>Read full Article</span
				>
				<img
					class="transistion duration-200 group-hover:translate-x-1 group-hover:scale-110"
					src={arrow}
					alt="arrow"
				/>
			</a>
			<!-- Tags -->
			<div class="flex gap-2">
				{#each metadata.tags as tag}
					<span>{`#${tag}`}</span>
				{/each}
			</div>
		</div>
	</div>
</a>

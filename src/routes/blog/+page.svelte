<script lang="ts">
	import Post from '../../lib/components/Post.svelte';

	import postImg from '$lib/assets/images/post-img.png';
	import profile from '$lib/assets/images/profile.png';
	import arrow from '$lib/assets/images/arrow.svg';
</script>

<main>
	<!-- Top Post -->
	<section class="hidden md:flex md:container h-[50vh] md:h-[70vh] mx-auto w-full">
		<!-- Post -->
		<div class="grid grid-cols-10 grid-rows-1 gap-2 mb-8 md:container w-full">
			<!-- Image -->
			<div class="row-span-full col-end-11 col-span-6 self-center">
				<img class="object-cover w-full" src={postImg} alt="" />
			</div>
			<!-- Info -->
			<div
				class="col-start-1 col-span 3 flex flex-col justify-between row-span-full col-span-6 col-end-7 self-center p-4"
			>
				<div class="flex flex-col mb-6">
					<!-- Date Published -->
					<h3 class="font-montserrat font-semibold text-rich-black">Aug 23,2022</h3>
					<!-- Post Title -->
					<h3 class="font-bold text-5xl leading-[1.4] rounded-full">
						<span class="inline bg-white  highlight">Programming An Arduino Robot Car</span>
					</h3>

					<!-- Read Time -->
					<h3 class="font-montserrat font-semibold text-rich-black">11 min read</h3>

					<!-- Author -->
					<div class="flex gap-2 items-center">
						<img class="w-8 rounded-full" src={profile} alt="author" />
						<h6 class="text-sm font-normal text-rich-black font-montserrat">Ajani Hickling</h6>
					</div>
				</div>

				<!-- Call To Action -->
				<div class="transistion duration-200 flex flex-col mb-4">
					<a
						href="/blog"
						class="group flex gap-1 items-center border-b-4 border-b-bangladesh-green"
					>
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
						<span>#tag1</span>
						<span>#tag2</span>
						<span>#tag3</span>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="md:container mx-auto">
		<!-- Posts -->
		<section class="w-full flex flex-col md:container pl-4 md:p-0 ">
			<h2 class="text-2xl font-montserrat font-semibold">Latest Posts</h2>

			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</section>
		<!-- Search -->
	</section>
</main>

<style lang="scss">
	.highlight {
		box-shadow: 0.2em 0 0 white, -0.2em 0 0 white;
	}
</style>

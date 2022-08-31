<script lang="ts">
	import postImg from '$lib/assets/images/post-img.png';
	import profile from '$lib/assets/images/profile.png';
	import arrow from '$lib/assets/images/arrow.svg';
</script>

<!-- Post -->
<div class="flex gap-2 mb-8 cursor-pointer">
	<!-- Image -->
	<img class=" self-start w-[50%]" src={postImg} alt="" />

	<!-- Info -->
	<div class="flex flex-col justify-between">
		<!-- Contextual Info -->
		<div class="flex flex-col">
			<!-- Post Title -->
			<h3 class="font-bold text-xl font-montserrat md:text-3xl">Post Title</h3>
			<!-- Meta Data -->
			<div class="flex text-sm items-center gap-[0.1em] font-montserrat font-semibold mb-2">
				<!-- Read Time -->
				<h3 class="text-rich-black">11 min read</h3>
				<!-- Dot -->
				<span class="inline-block w-4 aspect-1 bg-rich-black rounded-full scale-[25%]" />
				<!-- Date Published -->
				<h3 class="font-montserrat text-rich-black">Aug 23,2022</h3>
			</div>
			<!-- Author -->
			<div class="flex gap-2 items-center">
				<img class="w-8 rounded-full" src={profile} alt="author" />
				<h6 class="text-sm font-normal text-rich-black font-montserrat">Ajani Hickling</h6>
			</div>
		</div>

		<!-- Call To Action -->
		<div class="transistion duration-200 flex flex-col mb-4">
			<a href="/blog" class="group flex gap-1 items-center">
				<span
					class="capitalize text-bangladesh-green font-semibold transistion duration-200  group-hover:underline md:text-xl "
					>Read full Article</span
				>
				<img class="transistion duration-200 group-hover:translate-x-1 group-hover:scale-110" src={arrow} alt="arrow" />
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

<script lang="ts">
	import ProfileCard from '../../lib/components/ProfileCard.svelte';
	import ProfilePicker from '$lib/components/ProfilePicker.svelte';
	import type { Profile } from '$lib/types/Profile';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	export let data: { profiles: Profile[] };
	let pickedProfile: Profile = data.profiles[0];
	let teamSection: HTMLElement;
	onMount(() => {
		page.subscribe(() => {
			if ($page.url.hash === '#team') {
				if (teamSection) {
					teamSection.scrollIntoView({ behavior: 'smooth' });
				}
			}
		});
	});
</script>

<main class="container mx-auto w-full flex flex-col gap-8 md:gap-12">
	<!-- Who we are? -->
	<section id="who-we-are" class="flex flex-col justify-center mb-8 gap-6">
		<h2 class="text-center text-2xl text-rich-black font-black md:text-3xl ">Who we are?</h2>
		<p class="text-center text-rich-black font-montserrat font-semibold md:text-xl">
			We are a team of high school students from all over Jamaica who are passionate about robotics.
			We participate in the annual <a
				class="underline text-bangladesh-green"
				href="https://first.global/">First Global Competition</a
			>.
		</p>
	</section>
	<!-- Team -->
	<section bind:this={teamSection} class="flex flex-col justify-center mb-8 gap-6">
		<h2 class="text-center text-2xl text-rich-black font-black md:text-3xl mb-6">Team Members</h2>
		<div class="flex flex-col sm::container w-full mx-auto md:flex-row xs:gap-10">
			<ProfileCard profile={pickedProfile ?? data.profiles[0]} />
			<ProfilePicker profiles={data.profiles} bind:picked={pickedProfile} />
		</div>
	</section>
</main>

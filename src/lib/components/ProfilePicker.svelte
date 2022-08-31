<script lang="ts">
	import profileImg from '$lib/assets/images/profile.png';
	import type { Profile } from '$lib/types/Profile';
	export let profiles: Profile[];
	export let picked: Profile;
</script>

<div class="flex flex-col relative gap-4">
	<h6 class="text-rich-black text-xl font-semibold opacity-80 underline">Tap to view members</h6>

	<div class="grid justify-around grid-cols-7">
		<a class="rounded-full w-14 aspect-1" href="/" on:click={() => {}}>
			<img class="rounded-full" src={profileImg} alt="profile" />
		</a>
	</div>
</div>

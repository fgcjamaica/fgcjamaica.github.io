<script lang="ts">
	import profileImg from '$lib/assets/images/profile.png';
	import type { Profile } from '$lib/types/Profile';
	export let profile: Profile;
	export let onClick: () => void;
</script>

<div class="rounded-full w-14 aspect-1 cursor-pointer" on:click={onClick}>
	<img class="rounded-full" src={profile.imageUrl} alt={`profile of ${profile.name}`} />
</div>

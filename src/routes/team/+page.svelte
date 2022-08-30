<script lang="ts">
	import Head from '$lib/Head/Head.svelte';
	import MemberCard from '$lib/MemberCard/MemberCard.svelte';
	import type { Member } from '$lib/MemberList/Member';
	import MemberList from '$lib/MemberList/MemberList.svelte';
	export let data: {
		members: Member[];
	};
	let selectedMember: Member;
</script>

<Head title="Team" />
<section>
	<div class="watermark">
		<h1>Team</h1>
	</div>
	<MemberCard member={selectedMember ?? data.members[0]} />
	<MemberList bind:selected={selectedMember} members={data.members} />
</section>

<style lang="scss">
	section {
		padding: 0 4rem;
		isolation: isolate;
		margin-top: 8.5rem;
		width: 100%;
		display: grid;
		position: relative;
		grid-template-columns: 1fr 3fr;
		gap: 2rem;
		max-height: 500px;
		@media screen and (max-width: 1000px) {
			grid-template-columns: 1fr;
		}
	}
	.watermark {
		z-index: -1;
		position: absolute;
		left: -5%;
		top: -20%;
		user-select: none;

		@media screen and (max-width: 768px) {
			display: none;
		}
		h1 {
			font-size: 18rem;
			font-family: var(--font-heading-body);
			color: var(--primary-color-pale);
			text-transform: uppercase;
			font-weight: 900;
		}
	}
</style>

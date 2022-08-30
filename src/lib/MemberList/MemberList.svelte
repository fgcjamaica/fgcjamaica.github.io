<script lang="ts">
	import MemberCard from '$lib/MemberCard/MemberCard.svelte';

	import type { Member } from './Member';
	import MemberListItem from './MemberListItem.svelte';

	export let members: Member[];
	export let selected: Member;
	function onSelect(member: Member) {
		selected = member;
	}
</script>

<div class="container">
	<h3>Members</h3>
	<ul class="members">
		{#each members as member}
			<MemberListItem {member} {onSelect} />
		{/each}
	</ul>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		@media screen and (max-width: 1000px) {
			/**Turn it into carousel*/
			// flex-direction: row;
			ul {
				grid-template-columns: 1fr !important;
				position: relative;
				overflow: hidden;
				li {
					grid-row:1 !important;
				}
			}
		}
		h3 {
			font-family: var(--font-body-family);
			text-transform: uppercase;
			font-weight: 900;
			font-size: 2.5rem;
		}
		ul {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
			justify-content: center;
			align-items: center;
		}
	}
</style>

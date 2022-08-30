<script lang="ts">
	import type { Member } from './Member';
	export let member: Member;
	export let onSelect: (member: Member) => void;
</script>

<li class="container" on:click={() => onSelect(member)}>
	<img src={member.imagePath} alt="" />
</li>

<style lang="scss">
	li {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			border-radius: 100%;
			filter: grayscale(100%);
			cursor: pointer;
			transition: all 0.2s ease-in-out;
			&:hover {
				filter: none;
				border-radius: 2rem;
				transform: scale(1.1);
			}
		}
	}
</style>

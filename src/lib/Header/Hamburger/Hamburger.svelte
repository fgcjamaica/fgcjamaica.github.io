<script lang="ts">
	import { page } from '$app/stores';
	export let onStateChange: (state: boolean) => void;
	let toggle = false;
	onStateChange(toggle);
	function toggleState() {
		toggle = !toggle;
		onStateChange(toggle);
	}
</script>

<div class="container" class:toggle on:click={toggleState}>
	<div class="bar1" />
	<div class="bar2" />
	<div class="bar3" />
</div>

<style lang="scss">
	.container {
		aspect-ratio: 1/1;
		padding:2rem;
		z-index: 1300;
		display: inline-block;
		position: relative;
		cursor: pointer;
		@media screen and (min-width: 768px) {
			display: none;
		}
	}
	.toggle {
		.bar1,
		.bar2,
		.bar3 {
			background-color: white;
		}
	}
	.bar1,
	.bar2,
	.bar3 {
		aspect-ratio: 6/1;
		width: 2rem;
		margin: 0.2rem 0;
		transition: 0.4s;
		background-color: black;
	}
	.bar2 {
		transform: translateX(20%);
	}

	.toggle {
		&:hover {
			border-radius: 100vw;
			background-color: rgba(255, 255, 255, 0.199);
		}
		/* Rotate first bar */
		.bar1,
		.bar3 {
			position: absolute;
			left:50%;
			top:50%;

			// width: calc(100% * 1.414);
		}
		.bar1 {
			transform: translate(-50%, -100%) rotate(45deg);
			transform-origin: center;
		}
		.bar3 {
			transform: translate(-50%, -100%) rotate(-45deg);
			transform-origin: center;
		}
		.bar1 {

		}

		/* Fade out the second bar */
		.bar2 {
			opacity: 0;
		}
	}
</style>

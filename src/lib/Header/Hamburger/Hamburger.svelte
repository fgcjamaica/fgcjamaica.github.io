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

<div class={`container`} class:toggle on:click={toggleState}>
	<div class={`bar1`} />
	<div class={`bar2`} />
	<div class={`bar3`} />
</div>

<style lang="scss">
	.container {
		z-index: 1300;
		display: inline-block;
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
		width: 35px;
		height: 5px;
		// background-color: #333;
		margin: 6px 0;
		transition: 0.4s;
		background-color: #333;
	}
	.bar2 {
		transform: translateX(20%);
	}

	.toggle {
		/* Rotate first bar */
		.bar1 {
			-webkit-transform: rotate(-45deg) translate(-9px, 6px);
			transform: rotate(-45deg) translate(-9px, 6px);
		}

		/* Fade out the second bar */
		.bar2 {
			opacity: 0;
		}

		/* Rotate last bar */
		.bar3 {
			-webkit-transform: rotate(45deg) translate(-8px, -8px);
			transform: rotate(45deg) translate(-8px, -8px);
		}
	}
</style>

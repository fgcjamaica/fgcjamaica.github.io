<script lang="ts">
	import Counter from '$lib/Counter.svelte';
	import image from './image.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 class="headline">
		<span>Jamaica's</span>
		Official<br /> Robotics Team
	</h1>
	<h2 class="subhead">Representing Jamaica in the yearly FIRST Global Competition</h2>
	<div class="img-container">
		<img src={image} alt="collage of group meetings and robot" />
		<div class="floaters">
			<!-- TODO: add some floating elements -->
		</div>
	</div>
	<div class="call-to-action">
		<a href="#">Meet the Team</a>
	</div>
</section>

<style lang="scss">
	section {
		margin-top: 8.5rem;
		width: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.headline {
		font-size: 8rem;
		line-height: 120%;
		letter-spacing: 0.065em;
		font-family: var(--font-heading-family);
		color: black;
		text-align: center;
		span {
			background-image: url(./ja-flag.svg);
			background-repeat: no-repeat;
			background-position: center;
			background-clip: content-box;
			-webkit-background-clip: text;
			color: transparent;
			background-size: cover;
		}
	}
	.subhead {
		font-size: 2rem;
		line-height: 4.8rem;
		font-family: var(--font-body-family);
		color: black;
		text-align: center;
		margin-bottom: 3rem;
	}
	.img-container {
		display: flex;
		justify-content: center;
		min-height: 100%;
	}
	img {
		max-width: 95%;
	}
	.call-to-action {
		display: flex;
		justify-content: center;
		margin-top: 3rem;
		margin-bottom: 4rem;
		a {
			font-weight: 700;
			display: flex;
			padding: 0.6rem 4rem;
			font-size: 2rem;
			// line-height: 4.8rem;
			font-family: var(--font-body-family);
			color: white;
			letter-spacing: 0.065em;
			background-color: var(--primary-color);
			text-align: center;
			text-decoration: none;
			border-radius: 0.3rem;
			transition: all 0.2s ease-in-out;
			&:hover {
				background-color: var(--primary-color-active);
			}
		}
	}
</style>

<script lang="ts">
	import { page } from '$app/stores';
	import github from '$lib/SocialBar/github.svg';
	import instagram from '$lib/SocialBar/instagram.svg';
</script>

<ul class="logos">
	<li><a href="#"><img src={github} alt="" /></a></li>
	<li><a href="#"><img src={instagram} alt="" /></a></li>
</ul>

<style lang="scss">
	.logos {
		margin-top: 50vh;
		transform: translateY(-50%) translateX(-50%);

		position: absolute;
		display: flex;
		flex-direction: column;
		&::before,
		&::after {
			content: '';
			display: block;
			position: relative;
			height: 10rem;
			width: 0;
			margin-left: 50%;
			border: 2px solid var(--primary-color);
			border-radius: 100vw;
		}
		&::before {
			transform: translate(-50%, -1rem);
		}
		&::after {
			transform: translate(-50%, 1rem);
		}
		li {
			list-style: none;
		}
		a {
			text-decoration: none;
			display: block;
			width: 100%;
			height: 100%;
			text-align: center;
			padding: 0.2rem;
			opacity: 0.6;

			img {
				width: 1.8rem;
			}
			&:hover {
				opacity: 1;
			}
		}
	}
</style>

<script lang="ts">
	import profileImage from './profile.png';
	import bg from './bg.svg';
	import github from '$lib/assets/github.svg';
	import instagram from '$lib/assets/instagram.svg';
	import type { Member } from '$lib/MemberList/Member';
	import { slide } from 'svelte/transition';
	export let member: Member;
</script>

<div class="memberCard">
	<div class="overflowHiddenWrapper">
		<img src={bg} alt="" class="bg" />
	</div>

	<div class="memberType" transition:slide>
		<h3>{member.role}</h3>
	</div>
	<div class="content">
		<img class="profile" src={member.imagePath} alt="profile of Ajani Hickling" />

		{#key member.name}
			<div transition:slide class="name">
				<h3>{member.name}</h3>
			</div>
		{/key}

		{#key member.positions}
			<div transition:slide class="positions">
				{#each member.positions as position}
					<h4>{position}</h4>
				{/each}
			</div>
		{/key}
	</div>
	<ul class="socials">
		<li><a href="#"> <img src={github} alt="" />@username</a></li>
		<li><a href="#"><img src={instagram} alt="" />@username</a></li>
	</ul>
</div>

<style lang="scss">
	.memberCard {
		position: relative;
		display: flex;
		align-items: center;
		border-radius: 0.8rem;
		padding: 2rem 0;
		flex-direction: column;
		background-color: #fff;
		overflow: hidden;
		min-width: 300px;
		isolation: isolate;
		box-shadow: 0px 10px 20px #e9e1c0;
		.content {
			width: 100%;
			margin: 2rem 0;
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		@media screen and (max-width: 600px) {
			aspect-ratio: 609/471;
			// max-width: 70vw;
			display: grid;
			position: relative;
			grid-template-columns: 65fr 35fr;

			.content {
				grid-area: 1/1/1/1;
				width: fit-content;
				height: 100%;
				margin: auto;
				.positions {
					margin: 0;
				}
				.name {
					margin-bottom: auto;
				}
				> * {
					width: 100%;
					margin: 0;

					text-align: left;
					align-items: flex-start;
				}
			}
			.memberType {
				position: absolute;
				right: 1.2em;
				top: 1.2em;
			}
			.socials {
				grid-area: 1/2/1/2;
				width: 100%;
				justify-content: center;
				align-items: center;
			}
			img.bg {
				transform: scale(9);
			}
		}
	}
	.overflowHiddenWrapper {
		overflow: hidden;
	}

	img.bg {
		z-index: -1;
		position: absolute;
		top: -10%;
		left: -50%;
		user-select: none;
	}
	.memberType {
		font-family: var(--font-body-family);
		font-size: var(--font-body-size);
		font-weight: 900;
		text-transform: uppercase;
		color: #fff;
		background-color: var(--primary-color);
		padding: 0.7rem 1.8rem;
		border-radius: 0.35rem;
		margin-bottom: 1.2rem;
	}
	.profile {
		width: 60%;
		border-radius: 2.5rem;
		margin-bottom: 1.75rem;
	}
	.name {
		font-family: var(--font-heading-family);
		font-size: 2.5rem;
		letter-spacing: 0.0625rem;
	}
	.positions {
		display: flex;
		flex-direction: column;
		margin-bottom: 4.2rem;
		opacity: 80%;
		> * {
			text-align: center;
			font-family: var(--font-body-family);
			font-size: 1.5rem;
			line-height: 3rem;
		}
	}
	.socials {
		display: flex;
		flex-direction: column;
		> li {
			list-style: none;
			&:not(:last-child) {
				margin-bottom: 0.5rem;
			}
			a {
				display: flex;
				align-items: center;
				gap: 0.5rem;
				img {
					max-width: 1.5rem;
				}
			}
		}
	}
</style>

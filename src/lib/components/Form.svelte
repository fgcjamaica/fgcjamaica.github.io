<script lang="ts">
	import FormInput from './FormInput.svelte';
	import sendIcon from '$lib/assets/images/send-icon.svg';
	let name: string, email: string, subject: string, message: string;
</script>

<form
	action="./"
	method="post"
	class="container flex flex-col w-full leading-[1.5] font-montserrat mb-8"
>
	<div class="container w-full flex flex-col md:flex-row md:gap-2">
		<FormInput label="Your Name" name="name" placeholder="John Doe" bind:value={name} />
		<FormInput label="Your Email" name="email" placeholder="johndoe@gmail.com" bind:value={email} />
	</div>
	<FormInput
		label="Subject"
		name="subject"
		placeholder="Google Meet Get Together"
		bind:value={subject}
	/>
	<FormInput
		isLongText={true}
		label="Message"
		name="message"
		placeholder="Hi, Would you like to meet with Country Z to talk about our robots..."
		bind:value={message}
	/>

	<button
		class="mx-auto gap-2 flex transistion duration-[250ms] outline-none rounded-sm self-start max-w-full py-2 px-16 bg-bangladesh-green text-cornsilk hover:bg-north-texas-green hover:scale-105 font-semibold"
		type="submit"
		on:click|preventDefault|stopPropagation={() => {
			alert('Thanks for reaching out! We will get back to you soon.');
		}}
	>
		Send
		<img class="scale-75" src={sendIcon} alt="send icon" />
	</button>
</form>

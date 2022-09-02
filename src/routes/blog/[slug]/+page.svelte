<!-- src/routes/[slug]/+page.svelte -->
<script lang="ts">
	import type { Profile } from '$lib/types/Profile';

	import axios from 'axios';

	import { onMount } from 'svelte';

	import type { PageLoad } from './+page';
	export let data: PageLoad;
	let author: Profile;
	onMount(async () => {
		const response = await axios.get(`/api/profile`, { params: { id: data.metadata.authorId } });
		author = await response.data;
	});
</script>

<article class="prose lg:prose-xl px-8 m-auto my-4 sm:my-16">
	<h1>{data.metadata.title}</h1>
	<p>Published: {data.metadata.datePublished}</p>
	<p>By: {author?.name}</p>
	<br/>
	<br/>
	<svelte:component this={data.content} />
</article>

<!-- src/routes/[slug]/+page.svelte -->
<script lang="ts">
	import type { Profile } from '$lib/types/Profile';

	import axios from 'axios';

	import { onMount } from 'svelte';

	import type { PageLoad } from './+page.server';
	import SvelteMarkdown from 'svelte-markdown';
	const source = `
  # This is a header

This is a paragraph.

* This is a list
* With two items
  1. And a sublist
  2. That is ordered
    * With another
    * Sublist inside

| And this is | A table |
|-------------|---------|
| With two    | columns |`;

	export let data: PageLoad;
	let author: Profile;
	onMount(async () => {
		const response = await axios.get(`/api/profile?id=${data.metadata.authorId}`, { params: { id: data.metadata.authorId } });
		author = await response.data;
		console.log({ author });
	});
</script>

<article class="prose lg:prose-xl px-8 m-auto my-4 sm:my-16">
	<h1>{data.metadata.title}</h1>
	<p>Published: {data.metadata.datePublished}</p>
	<p>By: {author?.name}</p>
	<SvelteMarkdown source={data.content} />
</article>

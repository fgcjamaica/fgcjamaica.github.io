<!-- src/routes/[slug]/+page.svelte -->
<script lang="ts">
	import type { Profile } from '$lib/types/Profile';

	import axios from 'axios';

	import { onMount } from 'svelte';

	import type { PageLoad } from './+page.server';
	import SvelteMarkdown from 'svelte-markdown';
	import { getProfile } from '$lib/scripts/profiles';
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
	const author = getProfile({ id: data.metadata.authorId });
</script>

<article class="prose lg:prose-xl px-8 m-auto my-4 sm:my-16">
	<h1>{data.metadata.title}</h1>
	<p>Published: {data.metadata.datePublished}</p>
	<p>By: {author?.name}</p>
	<SvelteMarkdown source={data.content} />
</article>

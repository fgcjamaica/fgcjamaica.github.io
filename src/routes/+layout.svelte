<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import { HtmlTag } from 'svelte/internal';

	import '../app.css';
</script>

<svelte:head>
	<title>FGC Jamaica</title>
	<style lang="scss">

	</style>
</svelte:head>
<NavBar />
<slot />

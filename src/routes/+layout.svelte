<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>FGC Jamaica</title>
</svelte:head>

<!-- Layout -->
<NavBar />
<slot />

<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';

	// // Asset imports since Vite doesnt see it in .ts files
	import instagramIconUrl from '$lib/assets/images/instagram.svg';
	import githubIconUrl from '$lib/assets/images/github.svg';
</script>

<svelte:head>
	<title>FGC Jamaica</title>
</svelte:head>

<!-- Layout -->
<NavBar />
<slot />

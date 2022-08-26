<script lang="ts">
	import Footer from '$lib/Footer/Footer.svelte';
import Header from '$lib/Header/Header.svelte';
import SocialBar from '$lib/SocialBar/SocialBar.svelte';
	import '../app.scss';
</script>



<Header />
<SocialBar/>
<main>
	<slot />
</main>



<style>

</style>

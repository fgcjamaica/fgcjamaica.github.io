<script lang="ts">
	import { slide } from 'svelte/transition';
</script>

<div out:slide>
	<slot />
</div>

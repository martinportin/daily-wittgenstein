<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<title>Daily Wittgenstein</title>
	<link rel="icon" href="favicon/favicon-32x32.png" />
</svelte:head>

{@render children()}

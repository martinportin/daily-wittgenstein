<script lang="ts">
	import Number from './Number.svelte';
	import Quote from './Quote.svelte';
	import Source from './Source.svelte';

	interface Props {
		number: string;
		quote: string;
		source: string;
	}

	let { number, quote, source }: Props = $props();
</script>

<div>
	<Number {number} />
	<Quote {quote} />
	<Source {source} />
</div>

<style>
	div {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>

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

<Number {number} />
<Quote {quote} />
<Source {source} />

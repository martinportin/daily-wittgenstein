<script lang="ts">
	import Paragraph from './components/Paragraph.svelte';

	interface Props {
		number: string;
		quote: string;
		source: string;
	}

	let { number, quote, source }: Props = $props();
</script>

<Paragraph {number} {quote} {source} />

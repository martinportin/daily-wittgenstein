<script lang="ts">
	import Paragraph from './components/Paragraph.svelte';

	interface Data {
		number: string;
		quote: string;
		source: string;
	}

	interface Props {
		data: Data;
	}

	let { data }: Props = $props();
</script>

<Paragraph number={data.number} quote={data.quote} source={data.source} />

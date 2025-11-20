<script lang="ts">
	interface Props {
		quote: string;
	}

	let { quote }: Props = $props();
</script>

<p>{quote}</p>

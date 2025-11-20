<script lang="ts">
	interface Props {
		source: string;
	}

	let { source }: Props = $props();
</script>

<p>{source}</p>

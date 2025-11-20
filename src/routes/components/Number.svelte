<script lang="ts">
	interface Props {
		number: string;
	}

	let { number } = $props();
</script>

<p>{number}</p>

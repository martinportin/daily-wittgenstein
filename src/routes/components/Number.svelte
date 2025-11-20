<script lang="ts">
	interface Props {
		number: string;
	}

	let { number }: Props = $props();
</script>

<p>{number}</p>

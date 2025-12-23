<script lang="ts">
	interface Props {
		source: string;
	}

	let { source }: Props = $props();
</script>

<p>{source}</p>

<style>
	p {
		float: right;
		text-align: right;
		font-style: italic;
	}

	@media screen and (width <= 750px) {
		p {
			font-size: small;
		}
	}
</style>

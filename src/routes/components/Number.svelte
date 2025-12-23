<script lang="ts">
	interface Props {
		number: string;
	}

	let { number }: Props = $props();
</script>

<p>{number}</p>

<style>
	@media screen and (width >= 750px) {
		p {
			float: left;
			margin-right: 0.3em;
		}
	}
</style>

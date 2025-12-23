<script lang="ts">
	interface Props {
		quote: string;
	}

	let { quote }: Props = $props();
</script>

<p>{quote}</p>

<style>
	@media screen and (width >= 750px) {
		p {
			float: right;
			width: 85%;
			margin-left: 0.3em;
		}
	}
</style>

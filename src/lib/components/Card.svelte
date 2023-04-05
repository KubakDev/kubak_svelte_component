<script lang="ts">
	export let title = '';
	export let content = '';
</script>

<div class="card">
	<div class="title">{title}</div>
	<div class="content">{content}</div>
</div>

<style>
	.card {
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 1rem;
		margin: 1rem;
	}
	.title {
		font-size: 1.5rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}
	.content {
		font-size: 1rem;
	}
</style>

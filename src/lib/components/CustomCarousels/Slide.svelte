<script lang="ts">
	export let image: string = '';
	export let altTag: string = '';
	export let attr: string = '';
	export let slideClass: string = '';
</script>

<div class={slideClass}>
	<img class="w-full h-full object-cover" src={image} alt={altTag} title={attr} />
</div>

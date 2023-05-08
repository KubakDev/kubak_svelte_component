<script lang="ts">
	export let image = '';
	export let altTag = '';
	export let attr = '';
	export let slideClass = 'h-full w-full';
</script>

<img src={image} alt={altTag} title={attr} class="h-full w-full object-cover" />

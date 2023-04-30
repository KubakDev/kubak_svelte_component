<script lang="ts">
  export let image: string = '';
  export let altTag: string = '';
  export let attr: string = '';
  export let slideClass: string = 'h-full w-full';
</script>

<img src={image} alt={altTag} title={attr} class="h-full w-full object-fill" />

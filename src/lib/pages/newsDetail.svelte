<script lang="ts">
	import Carousel from '../components/carousels/Carousel.svelte';
	export let data = {
		title: '',
		long_description: '',
		images: []
	};
	export let long_description = '';
	export let images: { imgurl: string; id: number }[] = [] as { imgurl: string; id: number }[];
	console.log(data.images);
</script>

<div class="w-full min-h-screen bg-[#292e36] flex flex-col items-center text-white">
	<div class="">
		{#if images.length > 1}
			<Carousel {images} showCaptions={false} divClass="bg-red-400" />
		{/if}
	</div>
	<div>
		{@html long_description}
	</div>
</div>

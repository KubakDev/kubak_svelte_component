<script>
	import Carousel from '../components/carousels/Carousel.svelte';

	export let data = {
		title: '',
		long_description: '',
		images: []
	};
</script>

<div class="w-full min-h-screen bg-[#292e36] flex flex-col items-center text-white">
	<div class="">
		{#if data.images.length > 1}
			<Carousel images={data.images} showCaptions={false} divClass="bg-red-400" />
		{/if}
	</div>
	<div class=" flex flex-col items-center text-white">
		<h2 class="my-5 text-2xl font-bold">{data.title}</h2>
		{@html data.long_description}
	</div>
</div>

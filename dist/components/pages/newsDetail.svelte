<script>import { onMount } from 'svelte';
import Carousel from '../CustomCarousels/Carousel.svelte';
export let news;
onMount(() => {
    console.log('package: ', news);
});
</script>

<div class="w-full min-h-screen bg-[#292e36] flex flex-col items-center text-white">
	{#if news}
		{#if news.imagesCarousel}
			<Carousel
				divClass="w-full overflow-hidden relative h-80  md:h-96    lg:h-[34rem]  2xl:h-140"
				slideClass="p-0 w-full h-80 md:h-96  lg:h-[34rem]   2xl:h-140"
				images={news.imagesCarousel}
				showCaptions={false}
				showIndicators={false}
				slideControls={true}
			/>
		{/if}

		{#if news.long_description}
			<div class="px-4 py-4">
				{@html news.long_description}
			</div>
		{/if}
	{/if}
</div>

<style>
	#default-carousel {
		width: 100% !important;
	}

	#default-carousel img {
		width: 100% !important;
		height: 100% !important;
		-o-object-fit: cover !important;
		   object-fit: cover !important;
	}</style>

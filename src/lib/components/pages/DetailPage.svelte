<script lang="ts">
	import Carousel from '$lib/components/CustomCarousels/Carousel.svelte';
	import type { CarouselImage } from '$lib/models/newsModel';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import VideoPlayer from './VideoPlayer.svelte';
	export let imagesCarousel: CarouselImage[] | undefined = undefined;
	export let long_description: string | undefined = undefined;
	export let videoId: string | undefined = undefined;
	export let customClass: string | undefined = undefined;

	interface $$Props extends HTMLAnchorAttributes {
		imagesCarousel?: CarouselImage[] | undefined;
		long_description: string | undefined;
		videoId?: string | undefined;
		customClass?: string | undefined;
	}
</script>

<div class=" w-full flex flex-col items-center {customClass}">
	{#if imagesCarousel}
		<Carousel
			divClass="w-full overflow-hidden relative h-80  md:h-96    lg:h-[34rem]  2xl:h-140"
			slideClass="p-0 w-full h-80 md:h-96  lg:h-[34rem]   2xl:h-140"
			images={imagesCarousel}
			showCaptions={false}
			showIndicators={false}
			slideControls={true}
		/>
	{/if}
	{#if videoId}
		<div class="w-full h-80 md:h-96 lg:h-[34rem] 2xl:h-140">
			<VideoPlayer {videoId} />
		</div>
	{/if}

	{#if long_description}
		<div class="px-4 py-4">
			{@html long_description}
		</div>
	{/if}
</div>

<style>
	#default-carousel {
		width: 100% !important;
	}

	#default-carousel img {
		width: 100% !important;
		height: 100% !important;
		object-fit: cover !important;
	}
</style>

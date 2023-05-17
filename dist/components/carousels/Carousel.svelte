<script>
	// @ts-nocheck

	import Slide from './Slide.svelte';
	import Thumbnail from './Thumbnail.svelte';
	import Caption from './Caption.svelte';
	import Indicator from './Indicator.svelte';
	import { ImgSourceEnum } from '../models/imgSourceEnum';
	export let showIndicators = true;
	export let showCaptions = true;
	export let showThumbs = true;
	export let images;
	export let slideControls = true;
	export let loop = false;
	export let duration = 2e3;
	export let divClass =
		'overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96 object-cover';
	export let indicatorDivClass = 'flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2';
	export let captionClass =
		'h-10 bg-gray-300 dark:bg-gray-700 dark:text-white p-2 my-2 text-center';
	export let indicatorClass = 'w-3 h-3 rounded-full bg-gray-100 hover:bg-gray-300 opacity-60';
	export let slideClass = '';
	let imageShowingIndex = 0;
	$: image = images[imageShowingIndex];
	const nextSlide = () => {
		if (imageShowingIndex === images.length - 1) {
			imageShowingIndex = 0;
		} else {
			imageShowingIndex += 1;
		}
	};
	console.log(images);
	const prevSlide = () => {
		if (imageShowingIndex === 0) {
			imageShowingIndex = images.length - 1;
		} else {
			imageShowingIndex -= 1;
		}
	};
	const goToSlide = (number) => (imageShowingIndex = number);
	let thumbWidth = 100 / images.length;
	if (loop) {
		setInterval(() => {
			nextSlide();
		}, duration);
	}
</script>

<div id="default-carousel" class="relative">
	<div class={divClass + ' h-screen-1/4 sm:h-screen-1/3'} style="height:30vh">
		<Slide
			image={image.imgSource == ImgSourceEnum.remote
				? `${import.meta.env.VITE_PUBLIC_SUPABASE_STORAGE_URL}/${image.imgurl}`
				: image.imgurl}
			altTag={image.name}
			attr={image.attribution}
			{slideClass}
		/>
		<!-- <img src={image.imgurl} alt="df" title="df" class="object-fill" /> -->
	</div>
	{#if showIndicators}
		<!-- Slider indicators -->
		<div class={indicatorDivClass}>
			{#each images as { id, imgurl, name, attribution }}
				<Indicator
					{name}
					selected={imageShowingIndex === id}
					on:click={() => goToSlide(id)}
					{indicatorClass}
				/>
			{/each}
		</div>
	{/if}
	{#if slideControls}
		<!-- Slider controls -->
		<button
			on:click={prevSlide}
			type="button"
			class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
			data-carousel-prev
		>
			<span
				class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
			>
				{#if $$slots.previous}
					<slot name="previous" />
				{:else}
					<svg
						aria-hidden="true"
						class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						/></svg
					>
				{/if}
				<span class="hidden">Previous</span>
			</span>
		</button>
		<button
			on:click={nextSlide}
			type="button"
			class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
			data-carousel-next
		>
			<span
				class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
			>
				{#if $$slots.next}
					<slot name="next" />
				{:else}
					<svg
						aria-hidden="true"
						class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/></svg
					>
				{/if}
				<span class="hidden">Next</span>
			</span>
		</button>
	{/if}
</div>
{#if showThumbs}
	<div class="flex flex-row justify-center h-20 mt-4 image-container">
		{#each images as { id, imgurl, name, attribution, imgSource }}
			<Thumbnail
				{imgSource}
				{thumbWidth}
				thumbImg={imgurl}
				altTag={name}
				titleLink={attribution}
				{id}
				selected={imageShowingIndex === id}
				on:click={() => goToSlide(id)}
			/>
		{/each}
	</div>
{/if}

<style>
	.image-container {
		overflow-x: auto;
	}

	.image-container::-webkit-scrollbar {
		width: 0.5rem;
		height: 0.5rem;
	}

	.image-container::-webkit-scrollbar-thumb {
		background-color: #ccc;
		border-radius: 0.5rem;
	}

	.image-container::-webkit-scrollbar-thumb:hover {
		background-color: #aaa;
	}

	.image-container::-webkit-scrollbar-track {
		background-color: #fff;
		border-radius: 0.5rem;
	}

	.image-container {
		padding: 10px 0;
	}
</style>

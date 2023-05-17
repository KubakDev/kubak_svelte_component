<script lang="ts">
	import MainCard from '$lib/components/cards/MainCard.svelte';
	import { ImgSourceEnum } from '$lib/components/models/imgSourceEnum';
	import Carousel from '../components/carousels/Carousel.svelte';

	export let data: {
		title: string;
		long_description: string;
		images: { imgurl: string; id: number }[];
	} = {
		title: '',
		long_description: '',
		images: []
	};
	console.log('bnar bnar bnar be jaw ');

	let cardData = {
		title: 'Welcome',
		img: 'images/ibn7mdcfevd4rypbvsm1m.jpeg',
		date: '',
		thumbnail: 'images/ibn7mdcfevd4rypbvsm1m.jpeg',
		created_at: Date.now(),
		short_description: '',
		imgSource: ImgSourceEnum.remote
	};
</script>

<div class="w-full min-h-screen bg-[#292e36] flex flex-col items-center text-white">
	<div class="">
		{#if data.images.length > 1}
			<Carousel images={data.images} showCaptions={false} divClass="bg-red-400" />
		{/if}
	</div>
	<div>
		{@html data.long_description}
	</div>
	<MainCard data={cardData} />
</div>

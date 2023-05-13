<script lang="ts">
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
</div>

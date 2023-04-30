<script>
	import Carousel from '../components/carousels/Carousel.svelte';
	let images = [
		{
			id: 0,
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
			imgurl: 'https://ychef.files.bbci.co.uk/1280x720/p0f4p79z.jpg'
		},
		{
			id: 1,
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
			imgurl:
				'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/05/23202105/LSA-hero-2-1600x900.jpg'
		},
		{
			id: 2,
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
			imgurl: 'https://www.gardeningknowhow.com/wp-content/uploads/2019/09/flower-color.jpg'
		},
		{
			id: 3,
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
			imgurl:
				'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/05/23202105/LSA-hero-2-1600x900.jpg'
		},
		{
			id: 4,
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
			imgurl: 'https://ychef.files.bbci.co.uk/1280x720/p0f4p79z.jpg'
		},
		{
			id: 0,
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
			imgurl: 'https://ychef.files.bbci.co.uk/1280x720/p0f4p79z.jpg'
		},
		{
			id: 1,
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
			imgurl:
				'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/05/23202105/LSA-hero-2-1600x900.jpg'
		},
		{
			id: 2,
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
			imgurl: 'https://www.gardeningknowhow.com/wp-content/uploads/2019/09/flower-color.jpg'
		},
		{
			id: 3,
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
			imgurl:
				'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/05/23202105/LSA-hero-2-1600x900.jpg'
		},
		{
			id: 4,
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
			imgurl: 'https://ychef.files.bbci.co.uk/1280x720/p0f4p79z.jpg'
		}
	];
	export let data = {
		title: '',
		description: '',
		images: []
	};
</script>

<div class="w-full min-h-screen bg-[#292e36] flex flex-col items-center text-white">
	<div class="">
		{#if data.images.length > 1}
			<Carousel images={data.images} showCaptions={false} divClass="bg-red-400" />
		{/if}
	</div>
	<div class=" flex flex-col items-center">
		<h2 class="my-5 text-2xl font-bold">{data.title}</h2>
		<p class="text-xl text-white">
			{data.description}
		</p>
	</div>
</div>

<script>import Carousel from "../components/carousels/Carousel.svelte";
export let data = {
  title: "",
  long_description: "",
  images: []
};
console.log("bnar bnar bnar be jaw ");
</script>

<div class="w-full min-h-screen bg-[#292e36] flex flex-col items-center text-white">
	<h1> Welcome bnar</h1>
	<!-- <div class="">
		{#if data.images.length > 1}
			<Carousel images={data.images} showCaptions={false} divClass="bg-red-400" />
		{/if}
	</div>
	<div>
		{@html data.long_description}
	</div> -->
</div>

<script lang="ts">
	export let data: {
		title: string;
		img?: string;
		date: string;
		description: string;
	} = {
		title: '',
		img: '',
		date: '',
		description: ''
	};
</script>

<div class="bg-test flex flex-col items-center w-full max-w-[600px]">
	<img
		src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
		alt=""
		class="h-[350px] w-full object-cover"
	/>
	<div class="h-[200px] flex flex-col justify-end px-8">
		<div class="text-white">
			<h1 class="text-3xl font-bold pb-3">{data.title}</h1>

			<p>{data.description}</p>
		</div>
	</div>

	<p class="text-[#cbcbcb] text-end w-full p-10">{data.date}</p>
</div>

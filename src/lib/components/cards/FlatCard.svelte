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

<div class="card flex flex-col items-center">
	<img
		src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
		alt=""
		class="h-[388px] w-full object-cover"
	/>
	<div class="h-[291px] flex flex-col justify-end">
		<div class="text-white w-[563px]">
			<h1 class="text-3xl font-bold pb-3">{data.title}</h1>

			<p>{data.description}</p>
		</div>
	</div>

	<p class="text-[#cbcbcb] text-end w-full p-10">{data.date}</p>
</div>

<style lang="scss">
	.card {
		background-color: #292e36;
		height: 679px;
		width: 664px;
	}
</style>

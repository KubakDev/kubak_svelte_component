<script lang="ts">
	export let data: {
		title: string;
		img?: string;
		date: string;
	} = {
		title: '',
		img: '',
		date: ''
	};
</script>

<div class="card">
	<img
		src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
		alt=""
		class="h-[352px] w-full object-cover"
	/>
	<div class="text-white flex justify-between px-8 items-center h-[60px]">
		<h1 class="text-3xl font-bold">{data.title}</h1>
		<p class="text-[#cbcbcb]">{data.date}</p>
	</div>
</div>

<style lang="scss">
	.card {
		background-color: #292e36;
		height: 412px;
		width: 500px;
		border-radius: 30px;
		img {
			border-top-right-radius: 30px;
			border-top-left-radius: 30px;
		}
	}
</style>

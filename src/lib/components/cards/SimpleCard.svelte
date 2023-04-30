<script>
	export let data = {
		title: '',
		img: '',
		date: ''
	};
	export let colors = {
		onPrimaryColor: '',
		onSecondaryColor: '',
		primaryColor: '',
		secondaryColor: '',
		backgroundColor: '',
		onBackgroundColor: ''
	};
</script>

<div
	class="simpleCard w-full max-w-[600px] rounded-3xl"
	style={`background-color: ${colors.primaryColor};`}
>
	<img src={data.img} alt="" class="w-full object-cover rounded-3xl" style="height: 352px;" />
	<div
		class=" flex justify-between px-8 items-center py-3"
		style={`color: ${colors.onPrimaryColor};`}
	>
		<h1 class="text-2xl font-bold">{data.title}</h1>
		<p>{data.date}</p>
	</div>
</div>

<style>
	.simpleCard {
		border-radius: 1.5rem;
	}
	.simpleCard img {
		border-top-right-radius: 1.5rem;
		border-top-left-radius: 1.5rem;
	}
</style>

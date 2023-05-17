<script>
	import moment from 'moment';
	import { ImgSourceEnum } from '../models/imgSourceEnum';

	export let data = {
		title: '',
		img: '',
		date: '',
		thumbnail: '',
		created_at: Date.now(),
		short_description: '',
		imgSource: ImgSourceEnum.remote
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
	class="simpleCard w-full max-w-[600px] rounded-3xl cursor-pointer"
	style={`background-color: ${colors.primaryColor};`}
>
	<div class="rounded-3xl overflow-hidden" style="height: 300px;">
		<img
			src={data.thumbnail
				? data.imgSource === ImgSourceEnum.remote
					? `${import.meta.env.VITE_PUBLIC_SUPABASE_STORAGE_URL}/${data.thumbnail}`
					: data.thumbnail
				: 'https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg'}
			alt=""
			class="w-full object-cover hover:scale-150 duration-300"
		/>
	</div>

	<div
		class=" flex justify-between px-8 items-center py-3"
		style={`color: ${colors.onPrimaryColor};`}
	>
		<h1 class="text-2xl font-bold">{data.title}</h1>
		<!-- format created_at date for only month -->
		<p style={`color: ${colors.onPrimaryColor};`}>
			{moment(data.created_at).format('DD MMMM YYYY')}
		</p>
	</div>
	<div class="p-6">
		<p style={`color: ${colors.onPrimaryColor};`}>
			{data.short_description}
		</p>
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

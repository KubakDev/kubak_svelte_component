<script>
	import moment from 'moment';
	import { ImgSourceEnum } from '../models/imgSourceEnum';

	export let data = {
		title: '',
		thumbnail: '',
		created_at: Date.now(),
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
	export let imageData = {
		thumbnail: '',
		imgSource: ImgSourceEnum.remote
	};
</script>

<div
	class="simpleCard w-full max-w-[600px] rounded-3xl"
	style={`background-color: ${colors.primaryColor};`}
>
	<img
		src={imageData.thumbnail
			? imageData.imgSource === ImgSourceEnum.remote
				? `${import.meta.env.VITE_PUBLIC_SUPABASE_STORAGE_URL}/${imageData.thumbnail}`
				: imageData.thumbnail
			: 'https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg'}
		alt=""
		class="w-full object-cover rounded-3xl"
		style="height: 300px;"
	/>
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

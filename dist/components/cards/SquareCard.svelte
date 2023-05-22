<script>
	import moment from 'moment';
	import { ImgSourceEnum } from '../models/imgSourceEnum';
	export let data = {
		title: '',
		img: '',
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
	export let imageData = {
		thumbnail: '',
		imgSource: ImgSourceEnum.remote
	};
</script>

<div
	class=" flex flex-col items-center w-full max-w-[600px] h-[500px]"
	style={`background-color: ${colors.primaryColor};border-radius: 12px`}
>
	<div class="p-3 w-full">
		<img
			src={imageData.thumbnail
				? imageData.imgSource === ImgSourceEnum.remote
					? `${import.meta.env.VITE_PUBLIC_SUPABASE_STORAGE_URL}/${imageData.thumbnail}`
					: imageData.thumbnail
				: 'https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg'}
			alt=""
			class="h-[300px] w-full object-cover"
			style="border-radius: 12px;"
		/>
	</div>
	<div class="h-[200px] flex flex-col justify-end px-10 py-5">
		<div class="w-full justify-center">
			<h1 class="text-3xl font-bold pb-3" style={`color: ${colors.onPrimaryColor};`}>
				{data.title}
			</h1>
			<p class="w-full text-center" style={`color: ${colors.onPrimaryColor};`}>250 views</p>
		</div>
	</div>
</div>

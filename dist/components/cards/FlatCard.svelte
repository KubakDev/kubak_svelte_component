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
	style={`background-color: ${colors.primaryColor};`}
>
	<img
		src={imageData.thumbnail
			? imageData.imgSource === ImgSourceEnum.remote
				? `${import.meta.env.VITE_PUBLIC_SUPABASE_STORAGE_URL}/${imageData.thumbnail}`
				: imageData.thumbnail
			: 'https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg'}
		alt=""
		class="h-[300px] w-full object-cover"
	/>
	<div class="h-[200px] flex flex-col justify-end px-8 py-5">
		<div>
			<h1 class="text-3xl font-bold pb-3" style={`color: ${colors.onPrimaryColor};`}>
				{data.title}
			</h1>

			<p style={`color: ${colors.onPrimaryColor};`}>{data.short_description}</p>
		</div>
	</div>

	<p class="text-end w-full p-10" style={`color: ${colors.onPrimaryColor};`}>
		{moment(data.created_at).format('DD MMMM YYYY')}
	</p>
</div>

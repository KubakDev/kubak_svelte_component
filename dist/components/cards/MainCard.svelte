<script>import moment from 'moment';
import { ImgSourceEnum } from '../models/imgSourceEnum';
import Frame from '../../utils/Frame.svelte';
import classNames from 'classnames';
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
export let imageData = {
    thumbnail: '',
    imgSource: ImgSourceEnum.remote
};
let cardClass;
$: cardClass = classNames(' w-full max-w-[600px] cursor-pointer   shadow-xl rounded-3xl bg-red-500');
</script>

<Frame
	tag={'div'}
	on:click
	on:focusin
	on:focusout
	on:mouseenter
	on:mouseleave
	{...$$restProps}
	class={cardClass}
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
		class=" flex justify-between items-center py-3 px-8"
		style={`color: ${colors.onPrimaryColor}`}
	>
		<h1 class="text-2xl font-bold">{data.title}</h1>
		<!-- format created_at date for only month -->
		{#if data.created_at}
			<p style={`color: ${colors.onPrimaryColor};`}>
				{moment(data.created_at).format('DD MMMM YYYY')}
			</p>
		{/if}
	</div>
	<div class="p-6">
		<p style={`color: ${colors.onPrimaryColor};`}>
			{data.short_description}
		</p>
	</div>
</Frame>

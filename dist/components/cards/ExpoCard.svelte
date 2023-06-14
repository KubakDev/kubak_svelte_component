<script>import { CardType } from '../../models/cardType';
import { ImgSourceEnum } from '../../models/imgSourceEnum';
import moment from 'moment';
import classNames from 'classnames';
('');
export let cardType = CardType.Flat;
export let title = undefined;
export let img = undefined;
export let thumbnail = undefined;
export let created_at = undefined;
export let short_description = undefined;
export let imgSource = undefined;
export let overlayPrimaryColor = undefined;
export let overlaySecondaryColor = undefined;
export let primaryColor = undefined;
export let secondaryColor = undefined;
export let backgroundColor = undefined;
export let overlayBackgroundColor = undefined;
$: cardClass = classNames(' w-full cursor-pointer   shadow-xl rounded-3xl  relative ', primaryColor ? ' ' : '  bg-primary ', cardType === CardType.Main ? ' max-w-[400px] min-w-[300px]' : ' max-w-[600px]');
</script>

<!-- {#if cardType === CardType.Main} -->
<div class={cardClass} style="background-color: {primaryColor}">
	<div class="relative">
		<img
			src={thumbnail
				? imgSource === ImgSourceEnum.remote
					? `${thumbnail}`
					: thumbnail
				: 'https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg'}
			alt=""
			class="w-full object-cover rounded-3xl {cardType !== CardType.Video ? 'h-72' : 'h-52'} "
		/>
		<!--  video player icon  -->
		{#if cardType === CardType.Video}
			<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-16 w-16"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" />
					<polygon points="9.5, 6.5 16.5, 12 9.5, 17.5" fill="currentColor" />
				</svg>
			</div>
		{/if}
	</div>
	<div class="{cardType !== CardType.Video ? 'h-40' : 'h-16 '} overflow-hidden">
		<div
			class=" flex justify-between items-center py-3 px-8 {cardType !== CardType.Video
				? ''
				: ' h-full text-center'}  "
			style={`color: ${overlayPrimaryColor}`}
		>
			<h1
				class="{cardType !== CardType.Video
					? 'text-start'
					: 'text-center  '} font-bold text-lg w-full"
			>
				{title?.slice(0, 40)}
			</h1>
			<!-- format created_at date for only month -->
			{#if created_at}
				<p style={`color: ${overlayPrimaryColor};`}>
					{moment(created_at).format('DD MMMM YYYY')}
				</p>
			{/if}
		</div>
		{#if cardType !== CardType.Video}
			<div class="px-6 text-base">
				<p style={`color: ${overlayPrimaryColor};`}>
					{short_description?.slice(0, 80)}
				</p>
			</div>
		{/if}
	</div>
</div>

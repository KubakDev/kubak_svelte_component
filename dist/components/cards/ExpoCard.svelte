<script>
	import { CardType } from '../../models/cardType';
	import { ImgSourceEnum } from '../../models/imgSourceEnum';
	import moment from 'moment';
	import classNames from 'classnames';
	export let cardType = CardType;
	export let title = undefined;
	export let img = undefined;
	export let thumbnail = undefined;
	export let short_description = undefined;
	export let imgSource = undefined;
	export let overlayPrimaryColor = undefined;
	export let overlaySecondaryColor = undefined;
	export let primaryColor = undefined;
	export let secondaryColor = undefined;
	export let backgroundColor = undefined;
	export let overlayBackgroundColor = undefined;
	export let startDate = undefined;
	export let endDate = undefined;
	export let date = undefined;
	export let imageClass = undefined;
	//rovar
	$: cardClass = classNames(
		' w-full cursor-pointer shadow-xl relative ',
		primaryColor ? ' ' : '  bg-[var(--primaryColor)] ',
		' w-full '
	);

	$: dateText = getDate();
	function getDate() {
		let dateText = '';
		if (startDate && endDate) {
			dateText = `${moment(startDate).format('DD MMM YYYY')} - ${moment(endDate).format(
				'DD MMM YYYY'
			)}`;
		} else {
			dateText = `${moment(date).format('DD MMM YYYY')}`;
		}
		return dateText;
	}
</script>

{#if cardType == CardType.Main}
	<div
		class="{cardClass} max-w-2xl mx-auto"
		style="border-radius: 30px;background-color: {primaryColor};"
	>
		<div class="relative">
			<img
				src={thumbnail
					? imgSource === ImgSourceEnum.remote
						? `${thumbnail}`
						: thumbnail
					: 'https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg'}
				alt=""
				class="h-72 w-full object-cover"
				style="border-top-right-radius: 30px;border-top-left-radius: 30px;"
			/>
		</div>

		<div class="h-40 overflow-hidden flex flex-col">
			<div
				class=" flex justify-between items-center py-3 px-6 {cardType !== CardType.Video
					? ''
					: ' h-full text-center'}  "
				style={`color: ${overlayPrimaryColor ?? 'var(--overlayPrimaryColor)'}`}
			>
				<h1 class="text-start font-bold text-base w-full">
					{#if title?.length > 20}
						{title?.slice(0, 20)}...
					{:else}
						{title}
					{/if}
				</h1>
				<div class="w-full flex justify-end">
					<div
						style={`color: ${overlayPrimaryColor ?? 'var(--overlayPrimaryColor)'}`}
						class="text-base"
					>
						{moment(date).format('DD MMM YYYY')}
					</div>
				</div>
			</div>

			<div class="px-6 text-base">
				<p style={`color: ${overlayPrimaryColor ?? 'var(--overlayPrimaryColor)'}`}>
					{#if short_description?.length > 80}
						{short_description?.slice(0, 80)}...
					{:else}
						{short_description}
					{/if}
				</p>
			</div>
		</div>
	</div>
{/if}
{#if cardType == CardType.Flat}
	<div class={cardClass} style="background-color: {primaryColor};">
		<div class="relative">
			<img
				src={thumbnail
					? imgSource === ImgSourceEnum.remote
						? `${thumbnail}`
						: thumbnail
					: 'https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg'}
				alt=""
				class="w-full h-72"
			/>
		</div>

		<div class="h-40 overflow-hidden flex flex-col justify-between">
			<div class="w-full flex flex-col justify-center items-center">
				<div
					class=" flex justify-between items-center py-3 px-6 {cardType !== CardType.Video
						? ''
						: ' h-full text-center'}  "
					style={`color: ${overlayPrimaryColor ?? 'var(--overlayPrimaryColor)'}`}
				>
					<h1 class="text-start font-bold text-xl w-full">
						{title.toUpperCase()}
					</h1>
				</div>

				<div class="px-6 text-base">
					<p style={`color: ${overlayPrimaryColor ?? 'var(--overlayPrimaryColor)'}`}>
						{short_description?.slice(0, 80)}
					</p>
				</div>
			</div>
			<div class="w-full flex justify-end pb-3 px-3">
				<div
					style={`color: ${overlayPrimaryColor ?? 'var(--overlayPrimaryColor)'}`}
					class="text-xs"
				>
					{getDate()}
				</div>
			</div>
		</div>
	</div>
{/if}

{#if cardType == CardType.Square}
	<div class={cardClass} style="border-radius: 12px; background-color: {primaryColor};">
		<div class="relative">
			<img
				src={thumbnail
					? imgSource === ImgSourceEnum.remote
						? `${thumbnail}`
						: thumbnail
					: 'https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg'}
				alt=""
				class="w-full h-72 p-3"
				style="border-radius: 18px;"
			/>
		</div>

		<div class="h-20 overflow-hidden flex flex-col items-center">
			<div
				class=" flex justify-between items-center py-3 {cardType !== CardType.Video
					? ''
					: ' h-full text-center'}  "
				style={`color: ${overlayPrimaryColor ?? 'var(--overlayPrimaryColor)'}`}
			>
				<h1 class="text-start font-bold text-xl w-full">
					{title}
				</h1>
			</div>

			<div class=" pb-3">
				<div
					style={`color: ${overlayPrimaryColor ?? 'var(--overlayPrimaryColor)'}`}
					class="text-xs"
				>
					{getDate()}
				</div>
			</div>
		</div>
	</div>
{/if}
{#if cardType == CardType.Video}
	<div class={cardClass} style="border-radius: 30px; background-color: {primaryColor};">
		<div class="relative">
			<img
				src={thumbnail
					? imgSource === ImgSourceEnum.remote
						? `${thumbnail}`
						: thumbnail
					: 'https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg'}
				alt=""
				class="w-full h-72"
				style="border-top-right-radius: 30px;border-top-left-radius: 30px;"
			/>
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
		</div>

		<div class="h-20 overflow-hidden flex flex-col">
			<div
				class=" flex justify-center items-center py-3 px-6 {cardType !== CardType.Video
					? ''
					: ' h-full text-center'}  "
				style={`color: ${overlayPrimaryColor ?? 'var(--overlayPrimaryColor)'}`}
			>
				<h1 class="text-center font-bold text-xl w-full">
					{title}
				</h1>
			</div>
		</div>
	</div>
{/if}

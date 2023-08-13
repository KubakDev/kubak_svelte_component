<script lang="ts">
	import { CardType } from '../../models/cardType';
	import { ImgSourceEnum } from '../../models/imgSourceEnum';
	import { Shadow } from 'svelte-loading-spinners';
	import moment from 'moment';
	import classNames from 'classnames';
	export let cardType: any = CardType;
	export let title: string | undefined = undefined;
	export let img: string | undefined = undefined;
	export let thumbnail: string | undefined = undefined;
	export let short_description: string | undefined = undefined;
	export let imgSource: string | undefined = undefined;
	export let overlayPrimaryColor: string | undefined = undefined;
	export let overlaySecondaryColor: string | undefined = undefined;
	export let primaryColor: string | undefined = undefined;
	export let secondaryColor: string | undefined = undefined;
	export let backgroundColor: string | undefined = undefined;
	export let overlayBackgroundColor: string | undefined = undefined;
	export let startDate: Date | undefined = undefined;
	export let endDate: Date | undefined = undefined;
	export let date: Date | undefined = undefined;
	export let imageClass: string | undefined = undefined;
	export let to_text: string | undefined = undefined;
	//rovar
	$: cardClass = classNames(
		' w-full cursor-pointer shadow-xl relative ',
		primaryColor ? ' ' : '  bg-[var(--primaryColor)] ',
		' w-full '
	);

	// function getDate() {
	// 	let dateText = '';
	// 	if (startDate && endDate) {
	// 		dateText = `${moment(startDate).format('DD MMM YYYY')} - ${moment(endDate).format(
	// 			'DD MMM YYYY'
	// 		)}`;
	// 	} else {
	// 		dateText = `${moment(date).format('DD MMM YYYY')}`;
	// 	}
	// 	return dateText;
	// }
</script>

{#if cardType == CardType.Main}
	<div
		class="{cardClass} max-w-2xl mx-auto"
		style="border-radius: 30px;background-color: {primaryColor};"
	>
		<div class="relative">
			{#if thumbnail}
			<img
			data-sveltekit-preload-code
				src={thumbnail
					? imgSource === ImgSourceEnum.remote
						? `${thumbnail}`
						: thumbnail
					: 'https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg'}
				alt=""
				class="h-72 w-full object-cover"
				style="border-top-right-radius: 30px;border-top-left-radius: 30px;"
			/>
			{:else}
			<Shadow size="60" color="#E1B168" unit="px" duration="1s" />
			{/if}
		</div>

		<div class="h-40 overflow-hidden flex flex-col">
			<div
				class=" flex justify-between items-center py-3 px-6 {cardType !== CardType.Video
					? ''
					: ' h-full text-center'}  "
				style={`color: ${overlayPrimaryColor ?? 'var(--overlayPrimaryColor)'}`}
			>
				<h1 class="text-start font-bold text-base w-full">
					{#if title !== undefined && title?.length > 37}
						{title?.slice(0, 37)}...
					{:else}
						{title}
					{/if}
				</h1>
				<div class="w-full flex justify-end" dir="ltr">
					<div
						style={`color: ${overlayPrimaryColor ?? 'var(--overlayPrimaryColor)'}`}
						class="text-base"
					>
						{#if startDate && endDate}
							<span class="font-bold">
								{moment(startDate).format('DD MMMM')}
							</span>
							-
							<span class="font-bold">
								{moment(endDate).format('DD MMMM')},
								{moment(endDate).format('YYYY')}
							</span>
						{:else}
							{moment(date).format('DD MMM YYYY')}
						{/if}
					</div>
				</div>
			</div>

			<div class="px-6 text-base">
				<p style={`color: ${overlayPrimaryColor ?? 'var(--overlayPrimaryColor)'}`}>
					{#if short_description !== undefined && short_description?.length > 80}
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
	<div class="{cardClass} max-w-2xl mx-auto" style="background-color: {primaryColor};">
		<div class="relative">
			{#if thumbnail}
			<img
			data-sveltekit-preload-code
				src={thumbnail
					? imgSource === ImgSourceEnum.remote
						? `${thumbnail}`
						: thumbnail
					: 'https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg'}
				alt=""
				class="w-full h-72 object-cover"
			/>
			{:else}
			<Shadow size="60" color="#E1B168" unit="px" duration="1s" />
			{/if}
		</div>

		<div class="h-40 overflow-hidden flex flex-col justify-between">
			<div class="w-full flex flex-col justify-center items-center">
				<div
					class=" flex justify-between items-center py-3 px-6 {cardType !== CardType.Video
						? ''
						: ' h-full text-center'}  "
					style={`color: ${overlayPrimaryColor ?? 'var(--overlayPrimaryColor)'}`}
				>
					<h1 class="text-start font-bold text-base w-full">
						{#if title !== undefined && title?.length > 37}
							{title?.slice(0, 37).toUpperCase()}...
						{:else}
							{title?.toUpperCase()}
						{/if}
					</h1>
				</div>

				<div class="px-6 text-sm">
					<p style={`color: ${overlayPrimaryColor ?? 'var(--overlayPrimaryColor)'}`}>
						{#if short_description !== undefined && short_description?.length > 80}
							{short_description?.slice(0, 80)}...
						{:else}
							{short_description}
						{/if}
					</p>
				</div>
			</div>
			<div class="w-full flex justify-end pb-3 px-3" dir="ltr">
				<div
					style={`color: ${overlayPrimaryColor ?? 'var(--overlayPrimaryColor)'}`}
					class="text-sm"
				>
					{#if startDate && endDate}
						<span class="font-bold">
							{moment(startDate).format('DD MMMM')}
						</span>
						-
						<span class="font-bold">
							{moment(endDate).format('DD MMMM')},
							{moment(endDate).format('YYYY')}
						</span>
					{:else}
						{moment(date).format('DD MMM YYYY')}
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}

{#if cardType == CardType.Square}
	<div
		class="{cardClass} max-w-2xl mx-auto"
		style="border-radius: 12px; background-color: {primaryColor};"
	>
		<div class="relative">
			{#if thumbnail}
			<img
			data-sveltekit-preload-code
				src={thumbnail
					? imgSource === ImgSourceEnum.remote
						? `${thumbnail}`
						: thumbnail
					: 'https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg'}
				alt=""
				class="w-full h-80 p-3 object-cover"
				style="border-radius: 18px;"
			/>
			{:else}
			<Shadow size="60" color="#E1B168" unit="px" duration="1s" />
			{/if}
		</div>

		<!-- <div class="h-20 overflow-hidden flex flex-col items-center">
			<div
				class=" flex justify-between items-center py-3 {cardType !== CardType.Video
					? ''
					: ' h-full text-center'}  "
				style={`color: ${overlayPrimaryColor ?? 'var(--overlayPrimaryColor)'}`}
			>
				<h1 class="text-start font-bold text-xl w-full">
					{#if title !== undefined && title?.length > 20}
						{title?.slice(0, 20)}...
					{:else}
						{title}
					{/if}
				</h1>
			</div>

			<div class=" pb-3">
				<div
					style={`color: ${overlayPrimaryColor ?? 'var(--overlayPrimaryColor)'}`}
					class="text-xs"
				>
					{#if startDate && endDate}
						{moment(startDate).format('DD MMM YYYY')} - {moment(endDate).format('DD MMM YYYY')}
					{:else}
						{moment(date).format('DD MMM YYYY')}
					{/if}
				</div>
			</div>
		</div> -->

		<div class="h-20 overflow-hidden flex flex-col items-center">
			<div
				class=" flex justify-between items-center py-3 {cardType !== CardType.Video
					? ''
					: ' h-full text-center'}  "
				style={`color: ${overlayPrimaryColor ?? 'var(--overlayPrimaryColor)'}`}
			>
				<h1 class="text-start font-bold text-xl w-full">
					{#if title !== undefined && title?.length > 37}
						{title?.slice(0, 37)}...
					{:else}
						{title}
					{/if}
				</h1>
			</div>

			<div class="pb-3" dir="ltr">
				<div
					style={`color: ${overlayPrimaryColor ?? 'var(--primaryColor)'}`}
					class="text-sm opacity-80"
				>
					{#if startDate && endDate}
						<span class="font-bold">
							{moment(startDate).format('DD MMMM')}
						</span>
						-
						<span class="font-bold">
							{moment(endDate).format('DD MMMM')},
							{moment(endDate).format('YYYY')}
						</span>
					{:else}
						{moment(date).format('DD MMM YYYY')}
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}
{#if cardType == CardType.Video}
	<div
		class="{cardClass} max-w-2xl mx-auto"
		style="border-radius: 30px; background-color: {primaryColor};"
	>
		<div class="relative">
			{#if thumbnail}
			<img
			data-sveltekit-preload-code
				src={thumbnail
					? imgSource === ImgSourceEnum.remote
						? `${thumbnail}`
						: thumbnail
					: 'https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg'}
				alt=""
				class="w-full h-72 object-cover"
				style="border-top-right-radius: 30px;border-top-left-radius: 30px;"
			/>
			{:else}
			<Shadow size="60" color="#E1B168" unit="px" duration="1s" />
			{/if}
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
					{#if title !== undefined && title?.length > 37}
						{title?.slice(0, 37)}...
					{:else}
						{title}
					{/if}
				</h1>
			</div>
		</div>
	</div>
{/if}

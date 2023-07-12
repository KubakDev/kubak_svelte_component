<script lang="ts">
	import { CardType } from '$lib/models/cardType';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { ImgSourceEnum } from '$lib/models/imgSourceEnum';
	import moment from 'moment';
	import classNames from 'classnames';
	('');
	export let cardType: CardType = CardType.Flat;

	export let title: string | undefined = undefined;
	export let img: string | undefined = undefined;
	export let thumbnail: string | undefined = undefined;
	export let short_description: string | undefined = undefined;
	export let imgSource: ImgSourceEnum | undefined = undefined;
	export let overlayPrimaryColor: string | undefined = undefined;
	export let overlaySecondaryColor: string | undefined = undefined;
	export let primaryColor: String | undefined = undefined;
	export let secondaryColor: string | undefined = undefined;
	export let backgroundColor: string | undefined = undefined;
	export let overlayBackgroundColor: string | undefined = undefined;
	export let date: Date | undefined = undefined;

	// propagate props type from underlying
	interface $$Props extends HTMLAnchorAttributes {
		title: string;
		img?: string;
		cardType: CardType;
		thumbnail: string;
		short_description?: string;
		imgSource?: ImgSourceEnum;
		overlayPrimaryColor?: string | undefined;
		overlaySecondaryColor?: string | undefined;
		primaryColor?: string | undefined;
		secondaryColor?: string | undefined;
		backgroundColor?: string | undefined;
		overlayBackgroundColor?: string | undefined;
		date?: Date | undefined;
	}
	//
	$: cardClass = classNames(
		' w-full cursor-pointer   shadow-xl rounded-3xl  relative ',
		primaryColor ? ' ' : '  bg-primary ',
		' w-full '
	);
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
			class="w-full object-cover rounded-top-3xl {cardType !== CardType.Video ? 'h-72' : 'h-52'} "
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
	<div class="{cardType !== CardType.Video ? 'h-40' : 'h-16 '} overflow-hidden flex flex-col">
		<div
			class=" flex justify-between items-center py-3 px-6 {cardType !== CardType.Video
				? ''
				: ' h-full text-center'}  "
			style={`color: ${overlayPrimaryColor}`}
		>
			<h1
				class="{cardType !== CardType.Video
					? 'text-start'
					: 'text-center  '} font-bold text-lg w-full"
			>
				{title}
			</h1>
			<!-- format created_at date for only month -->
		</div>
		{#if cardType !== CardType.Video && cardType !== CardType.Square}
			<div class="px-6 text-base">
				<p style={`color: ${overlayPrimaryColor};`}>
					{short_description?.slice(0, 80)}
				</p>
			</div>
		{/if}

		{#if date}
			<div class="flex-1 w-full" />
			<div class="w-full flex justify-end px-6 pb-3">
				<div style={`color: ${overlayPrimaryColor};`} class="text-xs">
					{moment(date).format('DD MMMM YYYY')}
				</div>
			</div>
		{/if}
	</div>
</div>

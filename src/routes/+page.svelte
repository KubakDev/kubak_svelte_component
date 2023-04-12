<script lang="ts">
	import MainCard from '$lib/components/cards/MainCard.svelte';
	import HorizontalCard from '$lib/components/cards/HorizontalCard.svelte';
	import Headers from '$lib/components/headers/defaultNavigationHeader.svelte';
	import DefaultSectionHeader from '$lib/components/headers/defaultSectionHeader.svelte';
	let cardData = {
		title: 'The Story',
		description:
			'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content, makinlook like readable English. Many desktop publishing packages.',
		date: '16 Nov 2023'
	};
</script>

<div class="dark">
	<Headers />
	<MainCard data={cardData} />
	<HorizontalCard data={cardData} />
	<DefaultSectionHeader title="NEWS" />
</div>

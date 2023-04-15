<script lang="ts">
	import MainCard from '$lib/components/cards/MainCard.svelte';
	import Headers from '$lib/components/headers/defaultNavigationHeader.svelte';
	import DefaultSectionHeader from '$lib/components/headers/defaultSectionHeader.svelte';
	import SimpleCard from '$lib/components/cards/SimpleCard.svelte';
	import FlatCard from '$lib/components/cards/FlatCard.svelte';
	let cardData = {
		title: 'The Story',
		description:
			'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content, makinlook like readable English. Many desktop publishing packages.',
		date: '16 Nov 2023'
	};
	let cardData2 = {
		title: 'SULIMANIYAH INTERNATIONAL FAIR',
		description:
			'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content, makinlook like readable English. Many desktop publishing packages.',
		date: '16 Nov 2023'
	};
</script>

<div class="flex justify-center mt-10">
	<!-- <Headers />
	<MainCard data={cardData} />
	<HorizontalCard data={cardData} />
	<DefaultSectionHeader title="NEWS" /> -->
	<!-- <FlatCard data={cardData2} /> -->
</div>

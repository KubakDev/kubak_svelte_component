<script lang="ts">
	import MainCard from '$lib/components/cards/MainCard.svelte';
	import HorizontalCard from '$lib/components/cards/HorizontalCard.svelte';
	// import '../lib/style.scss';
	let cardData = {
		title: 'The Story',
		description:
			'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content, makinlook like readable English. Many desktop publishing packages.',
		date: '16 Nov 2023'
	};
</script>

<MainCard data={cardData} />
<HorizontalCard data={cardData} />

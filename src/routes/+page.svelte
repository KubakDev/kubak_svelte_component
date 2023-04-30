<script lang="ts">
	import NewsDetail from '$lib/pages/newsDetail.svelte';
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

<div class="">
	<NewsDetail />
</div>

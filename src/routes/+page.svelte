<script lang="ts">
	import { CardType } from '$lib';
	import ExpoCard from '$lib/components/cards/ExpoCard.svelte';
	import NewsDetail from '$lib/components/pages/DetailPage.svelte';
	import type { CarouselImage, NewsModel } from '$lib/models/newsModel';
	let news: NewsModel = {
		id: 1,
		title: 'News 1',
		short_description: 'Short description 1',
		long_description: `<p style="text-align: center;">SULIMANIYAH INTERNATIONAL FAIR</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdamrecusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maximedoloremque. Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantiummodi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!</p>`,
		images: [
			'https://egnwlzzlqqwrpvnvvwrr.supabase.co/storage/v1/object/public/image/images/qkxv5r4i0yqgataqbd5y9a.jpeg',
			'https://egnwlzzlqqwrpvnvvwrr.supabase.co/storage/v1/object/public/image/images/5yioy40h3dmlr887wtx1tj.png',
			'https://fastly.picsum.photos/id/1026/200/300.jpg?hmac=Thvj4aJ_VnAGT6DKAcy1yTs100zlstJTyImDWphGDFI'
		],
		imagesCarousel: [
			{
				id: 0,
				name: 'Cosmic timetraveler',
				imgurl:
					'https://egnwlzzlqqwrpvnvvwrr.supabase.co/storage/v1/object/public/image/images/qkxv5r4i0yqgataqbd5y9a.jpeg',
				attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
			} as CarouselImage,
			{
				id: 1,
				name: 'Cristina Gottardi',
				imgurl:
					'https://egnwlzzlqqwrpvnvvwrr.supabase.co/storage/v1/object/public/image/images/lkooc447wrdy9v505ctzqk.jpeg',
				attribution: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com'
			} as CarouselImage
		]
	};
</script>

<div class="m-auto max-w-6xl">
	<!-- <NewsDetail {news} /> -->
	<ExpoCard title="HI HI" thumbnail="kl" cardType={CardType.Main} />
	<ExpoCard title="HI HI" thumbnail="kl" cardType={CardType.Square} />
</div>

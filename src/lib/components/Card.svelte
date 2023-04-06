<script>
	import { Card, Button, Toggle } from 'flowbite-svelte';
	let vCard = false;
</script>

<div>
	<Card
		img="https://www.sulyexpo.com/Img/Reklam/1512202193610Ku-1.jpg"
		reverse={vCard}
		class="rounded-3xl"
	>
		<div class="flex justify-between items-center">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				The Story
			</h5>
			<p>16 Nov 2023</p>
		</div>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
			'Content here, content, makinlook like readable English. Many desktop publishing packages.
		</p>
	</Card>
</div>

<script>
	import { Button, Card, Toggle } from 'flowbite-svelte';
	export let data = {
		title: '',
		description: '',
		date: ''
	};
</script>

<div>
	<Card img="https://www.sulyexpo.com/Img/Reklam/1512202193610Ku-1.jpg" href="/" horizontal>
		<div class="flex justify-between items-center">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{data.title}
			</h5>
			<p>{data.date}</p>
		</div>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			{data.description}
		</p>

		<Button class="mt-3 " outline>See More</Button>
	</Card>
</div>

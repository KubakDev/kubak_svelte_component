<script lang="ts">
	import { ImgSourceEnum } from '../models/imgSourceEnum';

	export let thumbImg = '';
	export let altTag = '';
	export let titleLink = '';
	export let id: number;
	export let selected = false;
	export let imgSource: ImgSourceEnum = ImgSourceEnum.local;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<img
	class="opacity-40 w-32 object-cover rounded-md mx-2 image-con"
	class:active={selected}
	id={id.toString()}
	src={imgSource == ImgSourceEnum.remote
		? `${import.meta.env.VITE_PUBLIC_SUPABASE_STORAGE_URL}/${thumbImg}`
		: thumbImg}
	alt={altTag}
	title="Image from {titleLink}"
	on:click
/>

<style>
	.active {
		opacity: 1;
	}
	.image-con {
		user-drag: none;
		user-select: none;
		-webkit-user-drag: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
	}
</style>

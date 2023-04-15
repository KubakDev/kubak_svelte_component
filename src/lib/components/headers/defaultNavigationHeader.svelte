<script lang="ts">
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
	import { goto } from '$app/navigation';
	// import BsFacebook from 'svelte-icons-pack/bs/BsFacebook';
	// import BsInstagram from 'svelte-icons-pack/bs/BsInstagram';
	import BsTwitter from 'svelte-icons-pack/bs/BsTwitter';
	import { Select } from 'flowbite-svelte';
	import Icon from 'svelte-icons-pack';

	let activeUrl: string;
	let pages = [
		{
			title: 'HOME',
			url: '/home'
		},
		{
			title: 'NEWS',
			url: '/news'
		},
		{
			title: 'EXHIBITION',
			url: '/exhibition'
		},
		{
			title: 'MEDIA',
			url: '/media'
		},
		{
			title: 'ARCHIVE',
			url: '/archive'
		},
		{
			title: 'SERVICES',
			url: '/services'
		},
		{
			title: 'ABOUT US',
			url: '/about-us'
		}
	];
	let selected: string | number;
	let countries = [
		{ value: 'en', name: 'En' },
		{ value: 'ku', name: 'Ku' },
		{ value: 'ar', name: 'Ar' }
	];
</script>

<Navbar let:hidden let:toggle navClass="py-3">
	<NavHamburger on:click={toggle} />

	<NavUl {hidden}>
		{#each pages as page}
			<div
				class="p-2 cursor-pointer {activeUrl == page.url ? 'border-y-2  border-[#e1b168] ' : ''}"
			>
				<h1 class="text-black">
					{page.title}
				</h1>
			</div>
		{/each}
	</NavUl>
	<div class="text-black flex justify-around w-56 items-center cursor-pointer">
		<!-- <!-- <Icon src={BsInstagram} size="1.2rem" /> -->
		<!-- <Icon src={BsFacebook} size="1.2rem" /> -->
		<Icon src={BsTwitter} size="1.2rem" />
		<div class="w-20">
			<Select
				class="mt-2 rounded-2xl h-10 bg-[#e1b168] border-none"
				items={countries}
				bind:value={selected}
				placeholder="En"
			/>
		</div>
	</div>
</Navbar>

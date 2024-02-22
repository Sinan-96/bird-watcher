<script>
	import Logo from './Logo.svelte'
	import Hamburger from './Hamburger.svelte'
	import Title from './title.svelte';
	
	export let sidebar = false
</script>

<header class="flex p-2 items-center text-gray-600 border-b-2">
	<nav class="flex pr-2">
		<Hamburger bind:open={sidebar}/>
		<Logo/>	
	</nav>
	<div class="flex">
		<img class="md:h-16 h-10 rounded w-auto mr-4" src="images/logo.png" sizes="" alt="">
		<h1 class="md:text-5xl text-3xl font-extrabold self-center">Fugletitterne</h1>
	</div>
</header>
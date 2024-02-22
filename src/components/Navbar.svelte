<script>
	import Logo from './Logo.svelte'
	import Hamburger from './Hamburger.svelte'
	import Title from './title.svelte';
	
	export let sidebar = false
</script>

<header class="flex justify-between p-2 items-center text-gray-600 border-b-2">
	<nav class="flex">
		<Hamburger bind:open={sidebar}/>
		<Logo/>	
	</nav>
	<Title/>
</header>
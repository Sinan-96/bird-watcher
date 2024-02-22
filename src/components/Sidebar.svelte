<script>
	export let open = false
</script>

<aside class="absolute w-full h-full bg-gray-200 border-r-2 shadow-lg" class:open>
	<nav class="p-12 text-xl">
        <li><a class="text-2xl font" href="/" on:click={() => open = false}>Forside</a></li>
        <li><a class="text-2xl" href="/stats" on:click={() => open = false}>Statistikk</a></li>
        <li><a class="text-2xl" href="/contact" on:click={() => open = false}>Kontakt</a></li>
<li><a class="text-2xl" href="/birds/create" on:click={() => open = false}>Fugler</a></li>
	</nav>
</aside>


<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
		z-index: 9999; /* Set a high z-index value to make the component the topmost layer */
	}
	
	.open {
		left: 0;
	}
</style>
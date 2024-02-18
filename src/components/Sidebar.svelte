<script>
	export let open = false
</script>

<aside class="absolute w-full h-full bg-gray-200 border-r-2 shadow-lg" class:open>
	<nav class="p-12 text-xl">
        <li><a class="text-2xl font" href="/">Forside</a></li>
        <li><a class="text-2xl" href="/stats">Statistikk</a></li>
        <li><a class="text-2xl" href="/contact">Kontakt</a></li>
        <li><a class="text-2xl" href="/birds/create">Fugler</a></li>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out
	}
	
	.open {
		left: 0
	}
</style>
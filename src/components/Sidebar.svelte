<script>
	import { ActionIcon } from "@svelteuidev/core";
	import { Cross1 } from "radix-icons-svelte";

	export let open = false
</script>

<aside class="fixed w-full h-screen bg-gray-200 border-r-2 shadow-lg" class:open>
	<nav class="flex flex-col pt-20 items-center text-5xl gap-12">
        <a href="/" on:click={() => open = false}>Forside</a>
        <a href="/stats" on:click={() => open = false}>Statistikk</a>
        <a href="/contact" on:click={() => open = false}>Kontakt</a>
        <a href="/birds/create" on:click={() => open = false}>Fugler</a>
		<ActionIcon size="text-x" on:click={() => open = false}><Cross1 size={40}/></ActionIcon>
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
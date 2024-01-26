<script lang="ts">
	import type { Bird } from "@prisma/client";
    import BirdType from "./bird-type.svelte";

    export let birds: Bird[] 
</script>

{#if birds.length === 0}
    <h2 class="text-lg">Ingen fugler funnet</h2>
{/if}

<div class="grid grid-rows-8 grid-cols-8">
    {#each birds as bird}
    <BirdType bird={bird}/>
{/each}
</div>


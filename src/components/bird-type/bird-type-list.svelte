<script lang="ts">
	import type { Bird } from "@prisma/client";
    import BirdType from "./bird-type.svelte";
	import { TextInput } from "@svelteuidev/core";

    export let birds: Bird[]
    export let birdSighteings: any[]
    
    let birdName = '';
    $: filteredBirds = birds.filter(bird => bird.name.toLowerCase().includes(birdName.toLowerCase()));

    function getCount(birdId: number): number {
		return birdSighteings.find(sighteingCount => sighteingCount.birdId == birdId)?._count || 0;
	}
</script>

{#if filteredBirds.length === 0}
    <h2 class="text-lg">Ingen fugler funnet</h2>
{/if}

<div class="flex justify-center mt-10">
    <TextInput type="text" name="name" placeholder="Søk på fugl" bind:value={birdName} class="m-auto" />
</div>
<div class="flex justify-center">
    <div class="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1">
        {#each filteredBirds as bird}
        <BirdType bird={bird} count={getCount(bird.id)}/>
    {/each}
    </div>
</div>


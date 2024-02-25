<script lang="ts">
	import type { Bird } from "@prisma/client";
    import BirdType from "./bird-type.svelte";
	import { TextInput, ActionIcon } from "@svelteuidev/core";
	import { Plus } from "radix-icons-svelte";

    export let birds: Bird[]
    export let birdSighteings: any[]
    
    let birdName = '';
    $: filteredBirds = birds.filter(bird => bird.name.toLowerCase().includes(birdName.toLowerCase()));



    function removeBird(birdId: number) {
        birds = birds.filter(bird => bird.id !== birdId);
    }
</script>


<div class="flex justify-center mt-10">
    <TextInput type="text" name="name" placeholder="Søk på fugl" bind:value={birdName} class="m-auto" />
</div>
<div class="flex justify-center">
    <div class="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1">
        {#each filteredBirds as bird}
        <BirdType removeBird={removeBird} bird={bird}/>
    {/each}
    </div>
    {#if filteredBirds.length === 0}
    <div class="flex flex-col items-center gap-4">
        <h2 class="text-lg mt-6">Ingen fugler funnet</h2>
        <a href="/birds/create">
            <ActionIcon  size="2xl">
                <Plus size={50} />
            </ActionIcon>
        </a>
    </div>
{/if}

</div>


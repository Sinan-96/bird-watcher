<script lang="ts"> 
import { TextInput, Button } from '@svelteuidev/core';
import { Image } from '@svelteuidev/core';
import { Check } from 'radix-icons-svelte';

export let birdName = '';


let images: any[] = []; // Declare images as an array of Image type.
export let selectedImage: string = '';

$: searchWord = birdName;

function getImages(){
    fetch(`api/images/${searchWord}`, {method:'GET'})
    .then(response => response.json())
    .then(data => images = data.images) // Added closing parenthesis here
    .catch(error => console.log(error))
}

function selectImage(image: Image){
    selectedImage = image.link;
}


</script>
<div class="flex justify-center font-mono">
<div class="flex-col">
<form  method="post" class="grid grid-cols-1 gap-4">
    <TextInput type="text" name="name" label="Navn" placeholder="Navn på fugl" bind:value={birdName} />
    <Button disabled={!birdName || !selectedImage} type="submit">Last opp fugl</Button>
    <input type="hidden" name="image" bind:value={selectedImage}/>
</form>

<div class="mt-4">
<h2 class="text-xl ">Søk etter bilde</h2>
<div class="flex justify-center gap-2">
<Button on:click={getImages}> Søk </Button>
<TextInput type="text" name="search" placeholder="Søk etter bilde" bind:value={searchWord} />
</div>

</div>
</div>
</div>
<div class="flex justify-center">
<div class="grid grid-cols-3 gap-2 mt-4">

{#each images as image}
<figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale-[50%]">
<Image on:click={() => selectImage(image)} width={320} height={240} src={image.link} alt="image" />
    {#if image.link === selectedImage}
    <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <Check size={40} color="green" />
    </div>
        {/if}
</figure>
{/each}


</div>
</div>



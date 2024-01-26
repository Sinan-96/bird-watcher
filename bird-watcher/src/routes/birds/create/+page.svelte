<script lang="ts"> 
import { TextInput, Button } from '@svelteuidev/core';
import Header from '../../../components/header.svelte';
import { Image } from '@svelteuidev/core';
import { Check } from 'radix-icons-svelte';
	import type { PageData } from '../$types';

export let birdName = '';


let images: any[] = []; // Declare images as an array of Image type.
export let selectedImage: string = '';

function getImages(){
    fetch(`api/images/${birdName}`, {method:'GET'})
    .then(response => response.json())
    .then(data => images = data.images) // Added closing parenthesis here
    .catch(error => console.log(error))
}

function selectImage(image: Image){
    selectedImage = image.link;
}


</script>

<Header />
<form method="post" class="grid grid-cols-1 gap-4">
    <TextInput type="text" name="name" label="Navn" placeholder="Navn på fugl" bind:value={birdName} />
    <Button type="submit">Last opp fugl</Button>
    <TextInput type="text" name="image" label="Bilde" bind:value={selectedImage}/>
</form>

<Button on:click={getImages}> søk </Button>
<h2 class="text-lg">Velg et bilde</h2>
<div class="flex flex-row gap-2">
{#each images as image}
<figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale-[50%]">
<Image on:click={() => selectImage(image)} width={240} height={240} src={image.link} alt="image" />
    {#if image.link === selectedImage}
    <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <Check size={40} color="green" />
    </div>
        {/if}
</figure>
{/each}
</div>



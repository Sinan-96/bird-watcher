<script> 
import { TextInput, Button } from '@svelteuidev/core';
	import Header from '../../components/header.svelte';
    import UploadWidget from '../../components/upload-widget.svelte';


export let birdName = '';
let images = [];

function getImages(){
    fetch(`api/images/${birdName}`, {method:'GET'})
    .then(response => response.json())
    .then(data => images = data.images)
    .catch(error => console.log(error))
}

</script>

<Header/>
<form method="post" action="/birds/create">
    <TextInput type="text" label="name" placeholder="Navn på fugl" bind:value={birdName} />
    <UploadWidget/>
    <Button type="submit">Last opp fugl</Button>


</form>
<Button on:click={getImages}> søk </Button>
{#each images as image}
<img src={image.link} alt="image"/>
{/each}



<script> 
import { TextInput, Button } from '@svelteuidev/core';
	import Header from '../../components/header.svelte';
    import UploadWidget from '../../components/upload-widget.svelte';


let birdName = '';
</script>
<Header/>
<form method="post" action="/birds/create">
    <TextInput type="text" label="name" placeholder="Navn på fugl" bind:value={birdName} />
    <UploadWidget/>
    <Button type="submit">Last opp fugl</Button>
</form>

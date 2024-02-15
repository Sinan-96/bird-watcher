<script lang="ts">
	import { Button, Image } from "@svelteuidev/core";
	import type { Bird } from "@prisma/client";
	import { writableLocationStore } from "$lib/stores";
	import { get } from 'svelte/store';

	export let bird: Bird
	export let count: number = 0;
	
	function incrementCount() {
		count += 1;
		fetch(`birds/api/sighteing`, {
			method:'POST', 
			headers: {
				"Content-Type": "application/json",
    		},
			body: JSON.stringify({birdId: bird.id, locationId: get(writableLocationStore)})
		})
		.then(response => response.json())
		.catch(error => console.log(error))
	}

</script>
<div class="flex  flex-wrap flex-col m-4 w-fit items-center">
	<Image width={160} height={240} src={bird.picture} sizes="" alt=""/>
	<a class="text-[2em] font-extrabold self-center">{bird.name}</a>
	<a class="text-[2em] font-extrabold self-center">{count}</a>
	<Button on:click={() => incrementCount()}>Pluss</Button>
</div>
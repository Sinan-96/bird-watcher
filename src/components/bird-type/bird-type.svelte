<script lang="ts">
	import { ActionIcon, Button, Image, Modal } from "@svelteuidev/core";
	import type { Bird } from "@prisma/client";
	import { writableLocationStore } from "$lib/stores";
	import { get } from 'svelte/store';
	import { Cross1 } from "radix-icons-svelte";

	export let bird: Bird
	let opened = false

	export let removeBird: (birdId: number) => void;

	let locationId = 0;

	writableLocationStore.subscribe(value => locationId = value)

	$: {
		getCount(locationId);
 	} 

	let count = 0

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

function deleteBird() {
	fetch(`birds/api/${bird.id}`, {
		method: 'DELETE',
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ birdId: bird.id }),
	})
		.then(response => {
			removeBird(bird.id);
			return response.json()
		})
		.catch(error => console.log(error))
}

function getCount(locationId: number) {
	fetch(`birds/api/${bird.id}/${locationId}`, {
		method: 'GET',
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then(response => response.json())
		.then(data => count = data.birdSighteingsCount)
		.catch(error => console.log(error))
}
	

</script>
<div class="flex flex-col bg-slate-100 m-4">
	<div class="ml-auto pl-auto"><ActionIcon on:click={() => opened=true}><Cross1 size={20}/></ActionIcon></div>
	<div class="flex flex-col m-4 w-fit items-center px-4">
		<Image width={160} height={240} src={bird.picture} sizes="" alt=""/>
		<a class="text-[2em] font-extrabold self-center">{bird.name}</a>
		<a class="text-[2em] font-extrabold self-center">{count}</a>
		<Button on:click={() => incrementCount()}>Pluss</Button>
	</div>

	<Modal {opened} on:close={() => (opened=false) } title="Sikker på at du skal slette {bird.name}?" class="font-mono">
		<div class="flex items-center gap-6">
			<Button color="red" size= {40} on:click={() => deleteBird()}>Slett</Button>
			<Button variant="outline" size= {40} on:click={() => (opened=false)}>Avbryt</Button>
		</div>
    </Modal>
</div>
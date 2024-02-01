<script lang="ts">
	import { Button, Image } from "@svelteuidev/core";
	import type { Bird } from "@prisma/client";
	import { writableLocationStore } from "$lib/stores";

	export let bird: Bird
	let count: number = 0;
	writableLocationStore.subscribe((location) => {
		getCount(location)
	})

	function getCount(location: number) {
    fetch(`api/${bird.id}/${location}`, {method:'GET'})
    .then(response => response.json())
	.then(data => count = data.count)
    .catch(error => console.log(error))
}

</script>
<div class="flex justify-center flex-wrap flex-col m-4 w-fit">
	<Image width={160} height={240} src={bird.picture} sizes="" alt=""/>
	<a class="text-[2em] font-extrabold self-center">{bird.name}</a>
	<a class="text-[2em] font-extrabold self-center">{count}</a>
	<Button on:click{}>Pluss</Button>
</div>
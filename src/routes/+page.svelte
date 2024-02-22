<script>
    import Title from "../components/title.svelte";
    import BirdTypeList from "../components/bird-type/bird-type-list.svelte";
	import LocationSelector from "../components/location-selector.svelte";
    import { SvelteUIProvider } from '@svelteuidev/core';
	import isMobile from "is-mobile";

    export let data;
</script>
<SvelteUIProvider class="font-mono">
    {#if isMobile() }
    <Title/>
    {/if}
    <LocationSelector locations={data.locations.concat({id: 0, name:"Alle steder"})} />
    <BirdTypeList birds = {data.birds} birdSighteings = {data.birdSighteings}/>
</SvelteUIProvider>

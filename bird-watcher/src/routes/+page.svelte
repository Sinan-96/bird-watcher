<script>
    import Title from "../components/title.svelte";
    import BirdTypeList from "../components/bird-type/bird-type-list.svelte";
	import LocationSelector from "../components/location-selector.svelte";
    import { SvelteUIProvider } from '@svelteuidev/core';

    export let data;
</script>
<SvelteUIProvider class="font-mono">
    <Title/>
    <LocationSelector locations={data.locations} />
    <BirdTypeList birds = {data.birds}/>
</SvelteUIProvider>

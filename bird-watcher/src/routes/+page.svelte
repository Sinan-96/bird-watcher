<script>
    import Title from "../components/title.svelte";
    import Header from "../components/header.svelte";
    import BirdTypeList from "../components/bird-type/bird-type-list.svelte";
	import LocationSelector from "../components/location-selector.svelte";
    import { SvelteUIProvider } from '@svelteuidev/core';

    export let data;
</script>
<SvelteUIProvider>
    <Header/>
    <Title/>
    <LocationSelector locations={data.locations} />
    <BirdTypeList birds = {data.birds}/>
</SvelteUIProvider>

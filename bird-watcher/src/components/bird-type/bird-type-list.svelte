<script lang="ts">
    import BirdType from "./bird-type.svelte";

    interface Bird {
    img: string;
    name: string;
    count: number;
    }

    export let birds: Bird = [
    {
        img: "images/birds/skjære.jpg",
        name: "Skjære"
    },
    {
        img: "images/birds/skjære.jpg",
        name: "Skjære"
    },
    {
        img: "images/birds/skjære.jpg",
        name: "Skjære"
    },
    {
        img: "images/birds/skjære.jpg",
        name: "Skjære"
    },
    {
        img: "images/birds/skjære.jpg",
        name: "Skjære"
    },
    {
        img: "images/birds/skjære.jpg",
        name: "Skjære"
    },
    {
        img: "images/birds/skjære.jpg",
        name: "Skjære"
    },
    {
        img: "images/birds/skjære.jpg",
        name: "Skjære"
    },
    {
        img: "images/birds/skjære.jpg",
        name: "Skjære"
    },
    {
        img: "images/birds/skjære.jpg",
        name: "Skjære"
    },
    {
        img: "images/birds/skjære.jpg",
        name: "Skjære"
    },
    {
        img: "images/birds/skjære.jpg",
        name: "Skjære"
    },
    {
        img: "images/birds/skjære.jpg",
        name: "Skjære"
    },
    ]
</script>

<div class="grid grid-rows-8 grid-cols-8">
    {#each birds as bird}
    <BirdType img={bird.img} name={bird.name}/>
{/each}
</div>


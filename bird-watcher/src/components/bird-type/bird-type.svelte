<script lang="ts">
	import { Image } from "@svelteuidev/core";
	import type { Bird } from "@prisma/client";

	export let bird: Bird
	export let count: number
</script>
<div class="flex justify-center flex-wrap flex-col m-4 w-fit">
	<Image width={160} height={240} src={bird.picture} sizes="" alt=""/>
	<a class="text-[2em] font-extrabold self-center">{bird.name}</a>
	<a class="text-[2em] font-extrabold self-center">{count}</a>
	
</div>
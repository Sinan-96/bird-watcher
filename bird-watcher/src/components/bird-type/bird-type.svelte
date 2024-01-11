<script>
	export let img = "images/birds/skjære.jpg";
	export let name = "Skjære";
	export let count = 0;
</script>
<div class="flex justify-center flex-wrap flex-col m-4 w-fit">
	<img class="h-auto w-auto rounded mb-2" src={img} sizes="" alt="">
	<a class="text-[2em] font-extrabold self-center">{name}</a>
	<a class="text-[2em] font-extrabold self-center">{count}</a>
	
</div>
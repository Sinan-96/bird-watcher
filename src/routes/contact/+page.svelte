<script>
	import { GithubLogo, LinkedinLogo, PaperPlane } from "radix-icons-svelte";
    import { ActionIcon } from '@svelteuidev/core';


</script>
<div class="flex items-center justify-center mx-16 font-mono mt-8">
    <div class="flex-col">
        <h1 class="text-xl pb-2">Har du noen ønsker for denne nettsiden?</h1>
        <p class="mb-10">
            Ta gjerne kontakt med meg på mail eller sosiale medier.
        </p>
        <div class="flex flex-row tems-center justify-center gap-8">
            <ActionIcon size="xl"><a href="mailto: sinan2009@gmail.com" class="h-full w-full"><PaperPlane class="h-full w-full" size{70}/></a></ActionIcon>
            <ActionIcon size="xl"><a href="https://www.linkedin.com/in/sinan-selboe-738a0918b/" class="h-full w-full"><LinkedinLogo class="h-full w-full" size{70} /></a></ActionIcon>
            <ActionIcon size="xl"><a href="https://github.com/Sinan-96" class="h-full w-full"><GithubLogo class="h-full w-full" size{70}/></a></ActionIcon>
    </div>

    </div>
</div>
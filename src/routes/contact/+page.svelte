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
        <div class="flex flex-row items-center justify-center gap-16">
            <a href="mailto:sinan2009@gmail.com">
                <ActionIcon size="2xl">
                    <PaperPlane color="black" size={50}/>
                </ActionIcon>
            </a>
            <a href="https://www.linkedin.com/in/sinan-selboe-738a0918b/">
                <ActionIcon size="2xl">
                    <LinkedinLogo color="#0077b5" size={50}/>
                </ActionIcon>
            </a>
            <a href="https://github.com/Sinan-96">
                <ActionIcon size="2xl">
                    <GithubLogo color="black" size={50}/>
                </ActionIcon>
            </a>
        </div>
    </div>
</div>
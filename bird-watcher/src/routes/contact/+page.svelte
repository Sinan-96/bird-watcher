<script>
	import { Button } from "@svelteuidev/core";
	import { GithubLogo, LinkedinLogo, PaperPlane } from "radix-icons-svelte";


</script>
<div class="flex justify-center mt-8 font-mono">
<div class="flex-col">
<h1 class="text-xl  pb-1">Har du noen ønsker for denne nettsiden?</h1>
<p class="mb-8">
    Ta gjerne kontakt med meg på mail eller sosiale medier.
</p>
<div class="grid grid-cols-3 gap-1">
    <a href="mailto: sinan2009@gmail.com"><Button><PaperPlane slot="leftIcon"/>Email</Button></a>
    <a href="https://www.linkedin.com/in/sinan-selboe-738a0918b/"><Button><LinkedinLogo slot="leftIcon"/>LinkedIn</Button></a>
    <a href="https://github.com/Sinan-96"><Button><GithubLogo slot="leftIcon"/>Github</Button></a>
</div>

</div>
</div>
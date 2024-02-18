<script>
    import "../app.css";
    import { SvelteUIProvider } from '@svelteuidev/core';
    import Header from "../components/header.svelte";
	import Navbar from '../components/Navbar.svelte';
  import Sidebar from '../components/Sidebar.svelte';
  import isMobile from "is-mobile";

  let open = false
  </script>

{#if isMobile() }
<Sidebar bind:open/>
<Navbar bind:sidebar={open}/>
  {:else}
  <Header/>
{/if}
  <SvelteUIProvider>
    <slot />
</SvelteUIProvider>
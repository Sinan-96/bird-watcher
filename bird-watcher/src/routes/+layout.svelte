<script>
    import "../app.css";
    import { SvelteUIProvider } from '@svelteuidev/core';
    import Header from "../components/header.svelte";
  </script>
<Header/>
  <SvelteUIProvider>
    <slot />
</SvelteUIProvider>
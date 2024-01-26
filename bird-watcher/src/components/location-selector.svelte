<script lang="ts">
    import { ActionIcon, Modal } from '@svelteuidev/core';
    import { Plus } from 'radix-icons-svelte';
    import { NativeSelect } from '@svelteuidev/core'
    import { TextInput } from '@svelteuidev/core';
    import { Button, Group } from '@svelteuidev/core';
	import type { Location } from '@prisma/client';

    let opened = false
    let locationName = ''
    export let locations: Location[];

</script>
<div class="flex justify-center gap-2">
    <NativeSelect on:click data={locations.map(location => location.name)} placeholder="Velg et sted"/>
    <ActionIcon on:click={() => (opened=true)} size="lg">
        <Plus size={24} />
    </ActionIcon>
    <Modal {opened} on:close={() => (opened=false) } title="Legg til sted">
        <form method="post" action="/location/create" class="flex flex-col gap-4">
            <label for="location">Sted</label>
            <TextInput type="text" name="location" placeholder="Navn på sted" bind:value={locationName} />
            <Group position="right">
                <Button variant="outline" size= {30} on:click={() => (opened=false)}>Avbryt</Button>
                <Button size= {30}>Legg til</Button>
            </Group>
        </form>
    </Modal>
</div>
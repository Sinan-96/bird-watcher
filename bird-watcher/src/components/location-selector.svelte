<script lang="ts">
    import { ActionIcon, Modal } from '@svelteuidev/core';
    import { Plus } from 'radix-icons-svelte';
    import { NativeSelect } from '@svelteuidev/core'
    import { PrismaClient } from '@prisma/client'
    import { TextInput } from '@svelteuidev/core';
    import { Button, Group } from '@svelteuidev/core';
	import Title from './title.svelte';
	import Page from '../routes/+page.svelte';
	import type { PageData } from '../routes/$types';

    const prisma = new PrismaClient()
    let opened = false
    let locationName = ''
    export let data: PageData;

</script>
<div class="flex justify-center gap-2">
    <NativeSelect on:click data={data.locations.map(location => location.name)} placeholder="Velg et sted"/>
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
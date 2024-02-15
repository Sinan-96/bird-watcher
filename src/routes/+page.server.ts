// src/routes/+page.server.ts

import prisma from '$lib/prisma';
import { get } from 'svelte/store';
import type { PageServerLoad } from './$types';
import { writableLocationStore } from '$lib/stores';

export const load = (async () => {

const locationId = get(writableLocationStore);
// 1.
const locations = await prisma.location.findMany()

const birds = await prisma.bird.findMany()
// 2.
return { locations: locations, birds: birds, birdSighteings: locationId == 0 ? await getAllBirdSighteings() : await getBirdSighteingsByLocation(locationId)};
}) satisfies PageServerLoad;


function getBirdSighteingsByLocation(locationId: number) {
    return prisma.sighting.groupBy({
        where: { locationId: locationId },
        by: ['birdId'],
        _count: true
    })
}

function getAllBirdSighteings(){
    return prisma.sighting.groupBy({
        by: ['birdId'],
        _count: true
    })
}
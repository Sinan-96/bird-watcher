// src/routes/+page.server.ts

import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
// 1.
const locations = await prisma.location.findMany()

const birds = await prisma.bird.findMany()

// 2.
return { locations: locations, birds: birds};
}) satisfies PageServerLoad;
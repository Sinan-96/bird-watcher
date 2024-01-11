// src/routes/+page.server.ts

import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
// 1.
const locations = await prisma.location.findMany()

// 2.
return { locations: locations };
}) satisfies PageServerLoad;
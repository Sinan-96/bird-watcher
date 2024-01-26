// src/routes/create/+page.server.ts

import prisma from "$lib/prisma";
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
    // 1.
    default: async ({ request }) => {
        const data = await request.formData();

        const location = data.get("location");
        const bird = data.get("bird");

        // 2.
        if (!location) {
            return fail(400, { location, missing: true });
        }

        if (!bird) {
            return fail(400, { bird, missing: true });
        }

        // 3.
        if (typeof location != "string" || typeof bird != "string") {
            return fail(400, { incorrect: true })
        }

        // 4.
        await prisma.sighting.create({
            data: {
                location,
                bird,
            },
        });

        //5.
        throw redirect(303, `/`)
    }
} satisfies Actions;
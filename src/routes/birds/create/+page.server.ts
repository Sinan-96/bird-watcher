// src/routes/create/+page.server.ts

import prisma from "$lib/prisma";
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
    // 1.
    default: async ({ request }) => {
        const data = await request.formData();


		const name = data.get("name")
        const picture = data.get("image")

        // 2.
        if (!picture) {
            return fail(400, { location: picture, missing: true });
        }

        // 3.
        if (typeof picture != "string" || typeof name != "string") {
            return fail(400, { incorrect: true })
        }

        // 4.
        await prisma.bird.create({
            data: {
                picture,
				name,
            },
        });

        //5.
        throw redirect(303, `/`)
    }
} satisfies Actions;
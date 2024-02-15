import prisma from "$lib/prisma";
import { json, type RequestEvent } from "@sveltejs/kit";


export async function POST({ request } : RequestEvent) {
    const body = await request.json();
    const result = await prisma.sighting.create({
        data: {
            birdId: body.birdId,
            locationId: body.locationId,
        },
    });

    // Example: Return a JSON response
    return json({
        status: 200,
        body: JSON.stringify({ message: 'Success', result }),
    });
}
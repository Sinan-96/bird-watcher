import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';


export async function GET({params}: {params: {bird: string, location: string}}) {
    if(Number(params.location) == 0) return json({birdSighteingsCount: await prisma.sighting.count({where: {birdId: Number(params.bird)}})});
    const birdSighteingsCount = await prisma.sighting.count({
        where: {
            locationId: Number(params.location),
            birdId: Number(params.bird)
        }
    });
    return json({birdSighteingsCount});
  }

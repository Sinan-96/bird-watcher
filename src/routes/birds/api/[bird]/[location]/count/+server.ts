import prisma from '$lib/prisma';
export async function GET({params}: {params: {bird: number, location: number}}) : Promise<{count: number}>{
   const birdCount = await prisma.sighting.count({
        where: {
            birdId: params.bird,
            locationId: params.location,
        }
    })
    return {count: birdCount};
}
  
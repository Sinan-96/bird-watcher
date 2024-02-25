import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';


// DELETE /birds/:id
export const DELETE = async ({params}: {params: {bird: string}}) => {
    try {
        await prisma.bird.delete({
            where: {
                id: parseInt(params.bird),
            },
        });

        return json({
            status: 200
        });
    } catch (error) {
        console.error(error);
        return json({
            status: 500,
            body: JSON.stringify({ message: 'Error deleting bird' }),
        });
    }
};

import type { Handle } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

export const handle: Handle = async ({ event, resolve }) => {
    const session = event.cookies.get('session');
    if(!session) {
        return await resolve(event);
    }
    const user = await prisma.user.findUnique({
        where: { userToken: session },
        select: { name: true, age: true, sex: true, points: true, createdAt: true }
    });

    if(user){
        event.locals.user = {
            name: user.name,
            age: user.age,
            sex: user.sex,
            points: user.points,
            createdAt: user.createdAt,
        };
    }

    return await resolve(event);
};
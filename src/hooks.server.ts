import type { Handle } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

export const handle: Handle = async ({ event, resolve }) => {
    const session = event.cookies.get('session');
    if(!session) {
        return await resolve(event);
    }
    const user = await prisma.user.findUnique({
        where: { id: Number(session) },
        select: { name: true, age: true, sex: true }
    });

    if(user){
        event.locals.user = {
            name: user.name,
            age: user.age,
            sex: user.sex
        };
    }

    return await resolve(event);
};
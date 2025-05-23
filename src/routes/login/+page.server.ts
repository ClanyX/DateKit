import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import { prisma } from "$lib/server/prisma";
import type { RequestEvent } from './$types';

export const load = async ({ locals }: { locals: App.Locals }) => {
    if(locals.user) {
        redirect(302, '/main');
    }
};

const login = async ({ request, cookies }: RequestEvent) => {
    const data = await request.formData();
    const name = data.get('name') as string;
    const password = data.get('password') as string;

    const user = await prisma.user.findUnique({
        where: { name }
    });

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return fail(400, { error: "Invalid credentials" });
    }

    const authenticatedUser = await prisma.user.update({
        where: { name: user.name },
        data: { userToken: crypto.randomUUID() }
    });

    cookies.set('session', authenticatedUser.userToken, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 30
    });

    redirect(302, '/main');
};

export const actions = { login };
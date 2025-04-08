import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import { prisma } from "$lib/server/prisma";
import type { RequestEvent } from './$types';

const register = async ({ request }: RequestEvent) => {
    const data = await request.formData();
    const name = data.get('name') as string;
    const age = data.get('age') as string;
    const password = data.get('password') as string;
    const password1 = data.get('password1') as string;

    const existingUser = await prisma.user.findUnique({
        where: { name: name }
    });

    if (existingUser) {
        return fail(400, { error: "User already exists" });
    }

    if (Number(age) <= 0) {
        return fail(400, { error: "Age must be a positive number" });
    }

    if (password !== password1) {
        return fail(400, { error: "Passwords do not match" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await prisma.user.create({
            data: {
                name,
                password: hashedPassword,
                age: Number(age)
            }
        });
    } catch (error) {
        return fail(500, { error: "Internal server error" });
    }
    redirect(303, '/login');
};

export const actions = { register };
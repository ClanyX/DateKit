import { Sex } from '@prisma/client';
import type { RequestEvent, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

export const load: PageServerLoad = async ({ locals }: { locals: App.Locals }) => {
    if (locals.user) {
        return { user: locals.user, local: true };
    }
};

const updateProfile = async ({ request, locals }: RequestEvent) => {
    const data = await request.formData();
    const name = data.get('name') as string || locals.user.name;
    const age = data.get('age') as string || locals.user.age.toString();
    const gender = data.get('gender') as string || locals.user.sex;

    await prisma.user.update({
        where: {
            name: locals.user.name
        },
        data: {
            name,
            age: parseInt(age),
            sex: Sex[gender as keyof typeof Sex]
        }
    });
};

const passwordChange = async ({ request, locals }: RequestEvent) => {
    const data = await request.formData();
    const oldPassword = data.get('oldPassword') as string || null;
    const newPassword = data.get('newPassword') as string || null;
    const newPassword1 = data.get('newPassword1') as string || null;

    if (!oldPassword || !newPassword || !newPassword1) {
        return fail(400, { error: 'All fields are required' });
    }

    if (newPassword !== newPassword1) {
        return fail(400, { error: 'Passwords do not match' });
    }

    const userPass = await prisma.user.findUnique({
        where: {
            name: locals.user.name
        },
        select: {
            password: true
        }
    });

    if (!userPass || !bcrypt.compareSync(oldPassword, userPass.password)) {
        return fail(400, { error: 'Old password is incorrect' });
    }

    await prisma.user.update({
        where: {
            name: locals.user.name
        },
        data: {
            password: bcrypt.hashSync(newPassword, 10)
        }
    });
    location.reload();
};

export const actions = { updateProfile, passwordChange };
import { Sex } from '@prisma/client';
import type { RequestEvent } from './$types';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ locals }: { locals: App.Locals }) => {
    if(locals.user){
        return { user: locals.user };
    }
};

const updateProfile = async ({ request, locals }: RequestEvent) => {
    const data = await request.formData();
    const name = data.get('name') as string;
    const age = data.get('age') as string;
    const gender = data.get('gender') as string;

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

export const actions = { updateProfile };
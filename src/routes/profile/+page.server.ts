import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ locals }: { locals: App.Locals }) => {
    if(locals.user){
        return { user: locals.user };
    }
};

export const actions: Actions = {
    update: async ({ request }) => {
        const data = await request.formData();
        const name = data.get('name') as string;
        const age = data.get('age') as string;
        const gender = data.get('gender') as string;

        console.log(name, age, gender);
    }
};
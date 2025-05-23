import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }: { locals: App.Locals }) => {
    if(locals.user){
        return { user: locals.user };
    }
};
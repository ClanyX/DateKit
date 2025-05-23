import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    throw redirect(302, '/');
};

export const actions: Actions = {
    default: async ({ cookies }: { cookies: import('@sveltejs/kit').Cookies }) => {
        cookies.set('session', '', {
            path: '/',
            expires: new Date(0),
        })

        throw redirect(302, '/login');
    }
};
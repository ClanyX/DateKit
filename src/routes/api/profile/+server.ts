import type { RequestEvent } from "@sveltejs/kit";

export async function POST({ request, cookies }: RequestEvent) {
    const { user } = await request.json();
    if(user){
        cookies.set('user', JSON.stringify(user),{
            path: '/',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24
        });
    }
};
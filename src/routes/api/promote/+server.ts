import { json } from "@sveltejs/kit";

export async function POST({ request }: { request: Request }) {
    const { user } = await request.json();
    await prisma.user.update({
        where: {
            name: user.name
        },
        data: {
            points: user.points + 1
        }
    });
    return json({ success: true });
};
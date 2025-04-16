import { json } from "@sveltejs/kit";

export async function POST({ locals }: { locals: App.Locals & { user: { name: string } } }) {
    const user = await prisma.user.findMany({
        where: {
            name: {
                not: locals.user.name
            }
        },
        select: { name: true, age: true, sex: true, points: true }
    });

    const randomUser = user[Math.floor(Math.random() * user.length)];

    return json({ randomUser: randomUser });
};
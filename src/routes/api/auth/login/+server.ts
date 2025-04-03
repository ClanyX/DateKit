import { json,type RequestEvent } from '@sveltejs/kit';
import  bcrypt from 'bcrypt';

export async function POST({ request}: RequestEvent) {
    const { name, password} = await request.json() as {
        name: string
        password: string
    };

    const user = await prisma.user.findUnique({
        where: { name: name }
    });

    if(!user || !bcrypt.compareSync(password, user.password)) {
        return json({ error: "Invalid credentials" }, { status: 401 });
    }

    return json({ message: "Login successful" }, { status: 200 });
}
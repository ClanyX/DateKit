import { prisma } from "$lib/server/prisma";
import { json,type RequestEvent } from "@sveltejs/kit";
import bcrypt from "bcrypt";

export async function POST({ request }: RequestEvent) {
    const { name, password, age } = await request.json() as {
        name: string
        password: string
        age: string
    };

    const existingUser = await prisma.user.findUnique({
        where: { name: name}
    });

    if(existingUser) {
        return json({ error: "User already exists (change the name)" }, { status: 400});
    }

    if(Number(age) <= 0){
        return json({ error: "Age must be greater than 0" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try{
        await prisma.user.create({
            data: {
                name,
                password: hashedPassword,
                age: Number(age)
            }
        });
    } catch (error) {
        console.error(error);
        return json({ error: "Could not create user" }, { status: 500 });
    }

    return json({ message: "User created successfully" }, { status: 201 });
}
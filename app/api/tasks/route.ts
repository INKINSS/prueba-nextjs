import { NextResponse } from "next/server"
import { prisma } from "@/src/libs/prisma"

export const GET = async () => {
    const tasks = await prisma.task.findMany()
    console.log(tasks)
    return NextResponse.json(tasks)
}

export const POST = async (request: Request) => {
    const { title, description } = await request.json()
    const task = await prisma.task.create({
        data: {
            title,
            description
        }
    })
    return NextResponse.json(task)
}



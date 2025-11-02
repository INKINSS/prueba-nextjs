import { NextResponse } from "next/server"
import { prisma } from "@/src/libs/prisma"

interface Params {
    id: string
}

export const GET = async (request: Request,{ params }: { params: Params }) => {
    const { id } = await params;
    const taskData = await prisma.task.findUnique({
        where: {
            id: Number(id)
        }
    })
    return NextResponse.json(taskData)
}

export const PUT = async (request: Request, { params }: { params: Params }) => {
    const { id } = params;
    const { title, description } = await request.json();
    const updatedTask = await prisma.task.update({
        where: {
            id: Number(id)
        },
        data: {
            title,
            description
        }
    })
    return NextResponse.json(updatedTask)
}

export const DELETE = async (request: Request, { params }: { params: Params }) => {
    const { id } = await params;
    const deleteTask = await prisma.task.delete({
        where: {
            id: Number(id)
        }
    })
    return NextResponse.json(deleteTask)
}
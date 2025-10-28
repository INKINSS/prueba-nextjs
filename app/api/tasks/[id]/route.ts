import { NextResponse } from "next/server"
import { prisma } from "@/src/libs/prisma"

interface Params {
    id: number
}

export const GET = async ( request: Request, { params }: { params: Params }) => {
    const { id } = await params
    const oneTask = await prisma.task.findUnique({
        where: {
            id: Number(id)
        }
    })
    return NextResponse.json({ oneTask })
}

export const POST = async ( request: Request, { params }: { params: Params }) => {
    const { id } = await params;
    return NextResponse.json({ message: `post one task ${id}` })
}

export const PUT = async ( request: Request, { params }: { params: Params }) => {
    const { id } = await params;
    return NextResponse.json({ message: `put one task ${id}` })
}

export const DELETE = async ( request: Request, { params }: { params: Params }) => {
    const { id } = await params;
    return NextResponse.json({ message: `delete one task ${id}` })
}
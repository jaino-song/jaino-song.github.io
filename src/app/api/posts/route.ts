import { NextRequest, NextResponse } from "next/server";
import { CreatePostUseCase } from "@/backend/application/usecases/CreatePostUseCase";
import { SbPostRepository } from "@/backend/infrastructure/repositories/SbPostRepository";
import { UpdatePostUseCase } from "@/backend/application/usecases/UpdatePostUseCase";
import { DeletePostUseCase } from "@/backend/application/usecases/GeletePostUseCase";
import { DeletePostDto } from "@/backend/application/dto/DeletePostDto";
import { UpdatePostDto } from "@/backend/application/dto/UpdatePostDto";
import { CreatePostDto } from "@/backend/application/dto/CreatePostDto";
import { GetPostDto } from "@/backend/application/dto/GetPostDto";
import { GetPostUseCase } from "@/backend/application/usecases/GetPostUseCase";

const postRepository = new SbPostRepository();
const createPostUseCase = new CreatePostUseCase(postRepository);
const deletePostUseCase = new DeletePostUseCase(postRepository);
const updatePostUseCase = new UpdatePostUseCase(postRepository);
const getPostUseCase = new GetPostUseCase(postRepository);

export async function GET(req: NextRequest) {
    const body = await req.json();
    const dto: GetPostDto = { id: body.id };
    try {
    const post = await getPostUseCase.execute(dto);
    return NextResponse.json(post);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    try {
        const dto: CreatePostDto = {
            postId: body.postId,
            userId: body.userId,
            title: body.title,
            content: body.content,
            published: body.published,
            tagIds: body.tagIds
        };
        const post = await createPostUseCase.execute(dto);
        return NextResponse.json(post);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    const body = await req.json();
    try {
        const dto: UpdatePostDto = {
            id: body.id,
            userId: body.userId, 
            title: body.title, 
            content: body.content, 
            published: body.published,
            tagIds: body.tagIds
        };
        const post = await updatePostUseCase.execute(dto);
        return NextResponse.json(post);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    const body = await req.json();
    try {
        const dto: DeletePostDto = { id: body.id };
        await deletePostUseCase.execute(dto);
        return NextResponse.json({ message: "Post deleted successfully" });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
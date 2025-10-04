import { NextRequest, NextResponse } from "next/server";
import { SbUserRepository } from "@/backend/infrastructure/repositories/SbUserRepository";
import { CreateUserUseCase } from "@/backend/application/usecases/CreateUserUseCase";
import { GetUserUseCase } from "@/backend/application/usecases/GetUserUseCase";
import { UpdateUserUseCase } from "@/backend/application/usecases/UpdateUserUseCase";
import { DeleteUserUseCase } from "@/backend/application/usecases/DeleteUserUseCase";
import { CreateUserDto } from "@/backend/application/dto/CreateUserDto";
import { GetUserDto } from "@/backend/application/dto/GetUserDto";
import { UpdateUserDto } from "@/backend/application/dto/UpdateUserDto";
import { DeleteUserDto } from "@/backend/application/dto/DeleteUserDto";

const userRepository = new SbUserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const getUserUseCase = new GetUserUseCase(userRepository);
const updateUserUseCase = new UpdateUserUseCase(userRepository);
const deleteUserUseCase = new DeleteUserUseCase(userRepository);

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    try {
        if (id) {
            const dto: GetUserDto = { id };
            const user = await getUserUseCase.execute(dto);
            if (!user) {
                return NextResponse.json({ error: "User not found" }, { status: 404 });
            }
            return NextResponse.json(user);
        } else {
            const users = await getUserUseCase.executeAll();
            return NextResponse.json(users);
        }
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const dto: CreateUserDto = { 
            name: body.name, 
            email: body.email, 
            password: body.password 
        };
        const user = await createUserUseCase.execute(dto);
        return NextResponse.json(user);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    try {
        const body = await req.json();
        const dto: UpdateUserDto = {
            id: body.id,
            name: body.name,
            email: body.email,
            password: body.password,
        };
        const user = await updateUserUseCase.execute(dto);
        return NextResponse.json(user);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const body = await req.json();
        const dto: DeleteUserDto = { id: body.id };
        await deleteUserUseCase.execute(dto);
        return NextResponse.json({ message: "User deleted successfully" });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
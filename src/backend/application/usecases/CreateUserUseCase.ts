import { UserRepository } from "@/backend/domain/repositories/UserRepository";
import { User } from "@/backend/domain/entities/User";
import { CreateUserDto } from "../dto/CreateUserDto";

export class CreateUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(dto: CreateUserDto): Promise<User> {
        const user: User = {
            id: crypto.randomUUID(),
            name: dto.name,
            email: dto.email,
            password_hash: dto.password, // In production, hash the password
            created_at: new Date(),
        };
        return await this.userRepository.create(user);
    }
}


import { UserRepository } from "@/backend/domain/repositories/UserRepository";
import { User } from "@/backend/domain/entities/User";
import { UpdateUserDto } from "../dto/UpdateUserDto";

export class UpdateUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(dto: UpdateUserDto): Promise<User> {
        const existingUser = await this.userRepository.findById(dto.id);
        if (!existingUser) {
            throw new Error("User not found");
        }

        const updatedUser: User = {
            ...existingUser,
            name: dto.name ?? existingUser.name,
            email: dto.email ?? existingUser.email,
            password_hash: dto.password ?? existingUser.password_hash, // In production, hash the password
        };

        return await this.userRepository.update(updatedUser);
    }
}


import { UserRepository } from "@/backend/domain/repositories/UserRepository";
import { DeleteUserDto } from "../dto/DeleteUserDto";

export class DeleteUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(dto: DeleteUserDto): Promise<void> {
        await this.userRepository.delete(dto.id);
    }
}


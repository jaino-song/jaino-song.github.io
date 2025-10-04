import { UserRepository } from "@/backend/domain/repositories/UserRepository";
import { User } from "@/backend/domain/entities/User";
import { GetUserDto } from "../dto/GetUserDto";

export class GetUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(dto: GetUserDto): Promise<User | null> {
        return await this.userRepository.findById(dto.id);
    }

    async executeAll(): Promise<User[]> {
        return await this.userRepository.findAll();
    }
}


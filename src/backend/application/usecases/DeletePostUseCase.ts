import { PostRepository } from "@/backend/domain/repositories/PostRepository";
import { DeletePostDto } from "../dto/DeletePostDto";

export class DeletePostUseCase {
    constructor(private postRepository: PostRepository) {}

    async execute(dto: DeletePostDto): Promise<void> {
        return this.postRepository.delete(dto.id);
    }
}
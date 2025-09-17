import { Post } from "@/backend/domain/entities/Post";
import { PostRepository } from "@/backend/domain/repositories/PostRepository";
import { GetPostDto } from "../dto/GetPostDto";

export class GetPostUseCase {
    constructor(private postRepository: PostRepository) {}

    async execute(dto: GetPostDto): Promise<Post | null> {
        return this.postRepository.findById(dto.id);
    }
}
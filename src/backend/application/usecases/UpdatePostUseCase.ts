import { Post } from "@/backend/domain/entities/Post";
import { PostRepository } from "@/backend/domain/repositories/PostRepository";
import { UpdatePostDto } from "../dto/UpdatePostDto";

export class UpdatePostUseCase {
    constructor(private postRepository: PostRepository) {}

    async execute(dto: UpdatePostDto): Promise<Post> {
        const post: Post = {
            id: dto.id,
            user_id: dto.userId || "",
            title: dto.title || "",
            content: dto.content || "",
            published: dto.published || false,
            tags: [],
            created_at: new Date(),
            updated_at: null,
        };
        return this.postRepository.update(post);
    }
}
import { Post } from "@/backend/domain/entities/Post";
import { PostRepository } from "@/backend/domain/repositories/PostRepository";
import { CreatePostDto } from "../dto/CreatePostDto";

export class CreatePostUseCase {
    constructor(private postRepository: PostRepository) {}

    async execute(dto: CreatePostDto): Promise<Post> {
        const post: Post = {
            id: dto.postId,
            user_id: dto.userId,
            title: dto.title,
            content: dto.content,
            published: dto.published,
            tags: [],
            created_at: new Date(),
            updated_at: null,
        };
        return this.postRepository.create(post);
    }
}
import { Post } from "@/backend/domain/entities/post";
import { PostRepository } from "@/backend/domain/repositories/postRepository";
import { CreatePostDto } from "../dto/createPostDto";

export class CreatePostUsecase {
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
import { Post } from "../entities/post";

export interface PostRepository {
    create(post: Post): Promise<Post>;
    findById(id: string): Promise<Post | null>;
    update(post: Post): Promise<Post>;
    delete(id: string): Promise<void>;
    findAll(): Promise<Post[]>;
    findByUserId(userId: string): Promise<Post[]>;
    addTagToPost(postId: string, tagId: string): Promise<void>;
    removeTagFromPost(postId: string, tagId: string): Promise<void>;
}
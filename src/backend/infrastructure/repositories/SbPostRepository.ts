import { PostRepository } from "@/backend/domain/repositories/PostRepository";
import { Post } from "@/backend/domain/entities/Post";
import { supabase } from "@/backend/utils/SbClient";
import { PostMapper, PostPersistence } from "@/backend/infrastructure/mappers/PostMapper";

export class SbPostRepository implements PostRepository {
    async create(post: Post): Promise<Post> {
        const { data, error } = await supabase.from("posts").insert(PostMapper.toPersistence(post)).select().single();
        if (error) {
            throw new Error(error.message);
        }
        return PostMapper.toDomain(data as unknown as PostPersistence);
    }
    async findById(id: string): Promise<Post | null> {
        const { data, error } = await supabase.from("posts").select("*").eq("id", id).single();
        if (error) {
            throw new Error(error.message);
        }
        return PostMapper.toDomain(data as unknown as PostPersistence);
    }
    async update(post: Post): Promise<Post> {
        const { data, error } = await supabase.from("posts").update(PostMapper.toPersistence(post)).eq("id", post.id).select().single();
        if (error) {
            throw new Error(error.message);
        }
        return PostMapper.toDomain(data as unknown as PostPersistence);
    }
    async delete(id: string): Promise<void> {
        const { error } = await supabase.from("posts").delete().eq("id", id);
        if (error) {
            throw new Error(error.message);
        }
    }
    async findAll(): Promise<Post[]> {
        const { data, error } = await supabase.from("posts").select("*");
        if (error) {
            throw new Error(error.message);
        }
        return data.map((item: unknown) => PostMapper.toDomain(item as PostPersistence));
    }
    async findByUserId(userId: string): Promise<Post[]> {
        const { data, error } = await supabase.from("posts").select("*").eq("user_id", userId);
        if (error) {
            throw new Error(error.message);
        }
        return data.map((item: unknown) => PostMapper.toDomain(item as PostPersistence));
    }
    async addTagToPost(postId: string, tagId: string): Promise<void> {
        const { error } = await supabase.from("posts_tags").insert({ post_id: postId, tag_id: tagId });
        if (error) {
            throw new Error(error.message);
        }
    }
    async removeTagFromPost(postId: string, tagId: string): Promise<void> {
        const { error } = await supabase.from("posts_tags").delete().eq("post_id", postId).eq("tag_id", tagId);
        if (error) {
            throw new Error(error.message);
        }
    }
}
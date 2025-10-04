import { PostRepository } from "@/backend/domain/repositories/PostRepository";
import { Post } from "@/backend/domain/entities/Post";
import { supabase } from "@/backend/utils/SbClient";

export class SbPostRepository implements PostRepository {
    async create(post: Post): Promise<Post> {
        const { data, error } = await supabase.from("posts").insert(post).select().single();
        if (error) {
            throw new Error(error.message);
        }
        return data;
    }
    async findById(id: string): Promise<Post | null> {
        const { data, error } = await supabase.from("posts").select("*").eq("id", id).single();
        if (error) {
            throw new Error(error.message);
        }
        return data;
    }
    async update(post: Post): Promise<Post> {
        const { data, error } = await supabase.from("posts").update(post).eq("id", post.id).select().single();
        if (error) {
            throw new Error(error.message);
        }
        return data;
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
        return data;
    }
    async findByUserId(userId: string): Promise<Post[]> {
        const { data, error } = await supabase.from("posts").select("*").eq("user_id", userId);
        if (error) {
            throw new Error(error.message);
        }
        return data;
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
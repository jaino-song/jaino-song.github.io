import { TagRepository } from "@/backend/domain/repositories/tagRepository";
import { Tag } from "@/backend/domain/entities/tag";
import { supabase } from "@/backend/utils/SbClient";

export class SbTagRepository implements TagRepository {
    async create(tag: Tag): Promise<Tag> {
        const { data, error } = await supabase.from("tags").insert(tag).select().single();
        if (error) {
            throw new Error(error.message);
        }
        return data;
    }
    async findById(id: string): Promise<Tag | null> {
        const { data, error } = await supabase.from("tags").select("*").eq("id", id).single();
        if (error) {
            throw new Error(error.message);
        }
        return data;
    }
    async update(tag: Tag): Promise<Tag> {
        const { data, error } = await supabase.from("tags").update(tag).eq("id", tag.id).select().single();
        if (error) {
            throw new Error(error.message);
        }
        return data;
    }
    async delete(id: string): Promise<void> {
        const { error } = await supabase.from("tags").delete().eq("id", id);
        if (error) {
            throw new Error(error.message);
        }
    }
    async findAll(): Promise<Tag[]> {
        const { data, error } = await supabase.from("tags").select("*");
        if (error) {
            throw new Error(error.message);
        }
        return data;
    }
}
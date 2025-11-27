import { TagRepository } from "@/backend/domain/repositories/TagRepository";
import { Tag } from "@/backend/domain/entities/Tag";
import { supabase } from "@/backend/utils/SbClient";
import { TagMapper, TagPersistence } from "@/backend/infrastructure/mappers/TagMapper";

export class SbTagRepository implements TagRepository {
    async create(tag: Tag): Promise<Tag> {
        const { data, error } = await supabase.from("tags").insert(TagMapper.toPersistence(tag)).select().single();
        if (error) {
            throw new Error(error.message);
        }
        return TagMapper.toDomain(data as unknown as TagPersistence);
    }
    async findById(id: string): Promise<Tag | null> {
        const { data, error } = await supabase.from("tags").select("*").eq("id", id).single();
        if (error) {
            throw new Error(error.message);
        }
        return TagMapper.toDomain(data as unknown as TagPersistence);
    }
    async update(tag: Tag): Promise<Tag> {
        const { data, error } = await supabase.from("tags").update(TagMapper.toPersistence(tag)).eq("id", tag.id).select().single();
        if (error) {
            throw new Error(error.message);
        }
        return TagMapper.toDomain(data as unknown as TagPersistence);
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
        return data.map((item: unknown) => TagMapper.toDomain(item as TagPersistence));
    }
}
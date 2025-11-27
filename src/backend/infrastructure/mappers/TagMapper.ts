import { Tag } from "@/backend/domain/entities/Tag";
import type { PostPersistence } from "./PostMapper";

export interface TagPersistence {
    id: string;
    name: string;
    posts?: PostPersistence[];
}

export class TagMapper {
    static toDomain(raw: TagPersistence): Tag {
        return {
            id: raw.id,
            name: raw.name,
            posts: raw.posts ? raw.posts.map((p: PostPersistence) => ({
                id: p.id,
                user_id: p.user_id,
                title: p.title,
                content: p.content,
                published: p.published,
                tags: [],
                created_at: new Date(p.created_at),
                updated_at: p.updated_at ? new Date(p.updated_at) : null,
            })) : [],
        };
    }

    static toPersistence(tag: Tag): TagPersistence {
        return {
            id: tag.id,
            name: tag.name,
        };
    }
}

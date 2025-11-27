import { Post } from "@/backend/domain/entities/Post";
import { TagMapper, TagPersistence } from "./TagMapper";

export interface PostPersistence {
    id: string;
    user_id: string;
    title: string;
    content: string;
    published: boolean;
    tags?: TagPersistence[];
    created_at: string;
    updated_at: string | null;
}

export class PostMapper {
    static toDomain(raw: PostPersistence): Post {
        return {
            id: raw.id,
            user_id: raw.user_id,
            title: raw.title,
            content: raw.content,
            published: raw.published,
            tags: raw.tags ? raw.tags.map((t: TagPersistence) => TagMapper.toDomain(t)) : [],
            created_at: new Date(raw.created_at),
            updated_at: raw.updated_at ? new Date(raw.updated_at) : null,
        };
    }

    static toPersistence(post: Post): PostPersistence {
        return {
            id: post.id,
            user_id: post.user_id,
            title: post.title,
            content: post.content,
            published: post.published,
            created_at: post.created_at.toISOString(),
            updated_at: post.updated_at?.toISOString() ?? null,
        };
    }
}

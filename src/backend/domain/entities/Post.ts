import { Tag } from "./Tag";

export interface Post {
    id: string,
    user_id: string,
    title: string,
    content: string,
    published: boolean,
    tags: Tag[],
    created_at: Date,
    updated_at: Date | null
}
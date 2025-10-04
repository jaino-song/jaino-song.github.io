import { Tag } from "../entities/Tag";

export interface TagRepository {
    create(tag: Tag): Promise<Tag>;
    findById(id: string): Promise<Tag | null>;
    update(tag: Tag): Promise<Tag>;
    delete(id: string): Promise<void>;
    findAll(): Promise<Tag[]>;
}
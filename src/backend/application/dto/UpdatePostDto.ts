export interface UpdatePostDto {
    id: string;
    userId?: string;
    title?: string;
    content?: string;
    published?: boolean;
    tagIds?: string[];
}
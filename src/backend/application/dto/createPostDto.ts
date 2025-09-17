export interface CreatePostDto {
    postId: string;
    userId: string;
    title: string;
    content: string;
    published: boolean;
    tagIds?: string[];
}
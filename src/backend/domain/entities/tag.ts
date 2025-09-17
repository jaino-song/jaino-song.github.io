import { Post } from "./post";

export interface Tag {
    id: string,
    name: string,
    posts: Post[],
}
import apiClient from '@/lib/axios';
import { Post } from '@/backend/domain/entities/Post';
import { CreatePostDto } from '@/backend/application/dto/CreatePostDto';
import { UpdatePostDto } from '@/backend/application/dto/UpdatePostDto';
import { GetPostDto } from '@/backend/application/dto/GetPostDto';
import { DeletePostDto } from '@/backend/application/dto/DeletePostDto';

export const postsApi = {
  // Get a single post
  getPost: async (dto: GetPostDto): Promise<Post> => {
    const response = await apiClient.get(`/posts?id=${dto.id}`);
    return response.data;
  },

  // Create a new post
  createPost: async (dto: CreatePostDto): Promise<Post> => {
    const response = await apiClient.post('/posts', dto);
    return response.data;
  },

  // Update a post
  updatePost: async (dto: UpdatePostDto): Promise<Post> => {
    const response = await apiClient.put('/posts', dto);
    return response.data;
  },

  // Delete a post
  deletePost: async (dto: DeletePostDto): Promise<{ message: string }> => {
    const response = await apiClient.delete('/posts', { data: dto });
    return response.data;
  },
};


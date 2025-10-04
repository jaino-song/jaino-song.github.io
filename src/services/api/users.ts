import apiClient from '@/lib/axios';
import { User } from '@/backend/domain/entities/User';
import { CreateUserDto } from '@/backend/application/dto/CreateUserDto';
import { UpdateUserDto } from '@/backend/application/dto/UpdateUserDto';
import { GetUserDto } from '@/backend/application/dto/GetUserDto';
import { DeleteUserDto } from '@/backend/application/dto/DeleteUserDto';

export const usersApi = {
  // Get a single user
  getUser: async (dto: GetUserDto): Promise<User> => {
    const response = await apiClient.get(`/users?id=${dto.id}`);
    return response.data;
  },

  // Get all users
  getAllUsers: async (): Promise<User[]> => {
    const response = await apiClient.get('/users');
    return response.data;
  },

  // Create a new user
  createUser: async (dto: CreateUserDto): Promise<User> => {
    const response = await apiClient.post('/users', dto);
    return response.data;
  },

  // Update a user
  updateUser: async (dto: UpdateUserDto): Promise<User> => {
    const response = await apiClient.put('/users', dto);
    return response.data;
  },

  // Delete a user
  deleteUser: async (dto: DeleteUserDto): Promise<{ message: string }> => {
    const response = await apiClient.delete('/users', { data: dto });
    return response.data;
  },
};


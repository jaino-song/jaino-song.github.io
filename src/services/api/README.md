# API Services with Axios

This directory contains axios-based API service functions for making HTTP requests to your Next.js API routes.

## Setup

The axios client is configured in `src/lib/axios.ts` with:
- Base URL: `/api`
- Request/Response interceptors
- Error handling
- 10-second timeout

## Usage Examples

### Posts API

```typescript
'use client';
import { postsApi } from '@/services/api';
import { useState } from 'react';

function PostsList() {
  const [post, setPost] = useState(null);

  const fetchPost = async () => {
    try {
      const data = await postsApi.getPost({ id: 'post-id' });
      setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  const createPost = async () => {
    try {
      const newPost = await postsApi.createPost({
        postId: 'unique-id',
        userId: 'user-id',
        title: 'My Post',
        content: 'Post content',
        published: true,
        tagIds: ['tag1', 'tag2']
      });
      console.log('Created:', newPost);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const updatePost = async () => {
    try {
      const updated = await postsApi.updatePost({
        id: 'post-id',
        userId: 'user-id',
        title: 'Updated Title',
        content: 'Updated content',
        published: true
      });
      console.log('Updated:', updated);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const deletePost = async () => {
    try {
      await postsApi.deletePost({ id: 'post-id' });
      console.log('Post deleted');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return <div>{/* Your UI */}</div>;
}
```

### Users API

```typescript
'use client';
import { usersApi } from '@/services/api';

async function handleUserOperations() {
  // Get single user
  const user = await usersApi.getUser({ id: 'user-id' });

  // Get all users
  const allUsers = await usersApi.getAllUsers();

  // Create user
  const newUser = await usersApi.createUser({
    name: 'John Doe',
    email: 'john@example.com',
    password: 'secure-password'
  });

  // Update user
  const updated = await usersApi.updateUser({
    id: 'user-id',
    name: 'Jane Doe',
    email: 'jane@example.com'
  });

  // Delete user
  await usersApi.deleteUser({ id: 'user-id' });
}
```

## Environment Variables

Add to your `.env.local` (optional):
```
NEXT_PUBLIC_API_URL=/api
```

## Error Handling

All API functions return Promises. Use try-catch blocks to handle errors:

```typescript
try {
  const data = await postsApi.getPost({ id: 'post-id' });
  // Handle success
} catch (error) {
  // Handle error
  if (error.response) {
    // Server responded with error status
    console.error('Error:', error.response.data);
  } else if (error.request) {
    // Request made but no response
    console.error('Network error');
  }
}
```

## Adding Authentication

To add JWT tokens or other auth headers, update `src/lib/axios.ts`:

```typescript
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```


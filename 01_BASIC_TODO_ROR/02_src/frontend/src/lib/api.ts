import {
  Todo,
  TodoResponse,
  TodosResponse,
  CreateTodoInput,
  UpdateTodoInput,
} from '@/types/todo';

// API base URL
// In production (Docker): use internal network URL
// In development (local): use localhost
const API_BASE_URL = process.env.INTERNAL_API_URL || 'http://localhost:3001/api/v1';

/**
 * Fetch all todos with optional search query
 * This function should only be called from Server Components or Server Actions
 */
export async function fetchTodos(query?: string): Promise<Todo[]> {
  const url = new URL(`${API_BASE_URL}/todos`);
  if (query) {
    url.searchParams.set('q', query);
  }

  const response = await fetch(url.toString(), {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }

  const data: TodosResponse = await response.json();
  return data.todos;
}

/**
 * Fetch a single todo by ID
 * This function should only be called from Server Components or Server Actions
 */
export async function fetchTodo(id: number): Promise<Todo> {
  const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Todo not found');
    }
    throw new Error('Failed to fetch todo');
  }

  const data: TodoResponse = await response.json();
  return data.todo;
}

/**
 * Create a new todo
 * This function should only be called from Server Actions
 */
export async function createTodo(input: CreateTodoInput): Promise<Todo> {
  const response = await fetch(`${API_BASE_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ todo: input }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Failed to create todo');
  }

  const data: TodoResponse = await response.json();
  return data.todo;
}

/**
 * Update an existing todo
 * This function should only be called from Server Actions
 */
export async function updateTodo(id: number, input: UpdateTodoInput): Promise<Todo> {
  const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ todo: input }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Failed to update todo');
  }

  const data: TodoResponse = await response.json();
  return data.todo;
}

/**
 * Delete a todo
 * This function should only be called from Server Actions
 */
export async function deleteTodo(id: number): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Todo not found');
    }
    throw new Error('Failed to delete todo');
  }
}

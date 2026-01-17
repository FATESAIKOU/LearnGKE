'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createTodo, updateTodo } from '@/lib/api';

export interface ActionState {
  success: boolean;
  error?: string;
}

export async function createTodoAction(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;

  if (!title || title.trim() === '') {
    return { success: false, error: '標題不能為空' };
  }

  if (title.length > 255) {
    return { success: false, error: '標題不能超過 255 個字元' };
  }

  try {
    await createTodo({
      title: title.trim(),
      description: description?.trim() || undefined,
    });
  } catch (e) {
    return { 
      success: false, 
      error: e instanceof Error ? e.message : '新增失敗' 
    };
  }

  revalidatePath('/');
  redirect('/');
}

export async function updateTodoAction(
  id: number,
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const completed = formData.get('completed') === 'true';

  if (!title || title.trim() === '') {
    return { success: false, error: '標題不能為空' };
  }

  if (title.length > 255) {
    return { success: false, error: '標題不能超過 255 個字元' };
  }

  try {
    await updateTodo(id, {
      title: title.trim(),
      description: description?.trim() || undefined,
      completed,
    });
  } catch (e) {
    return { 
      success: false, 
      error: e instanceof Error ? e.message : '更新失敗' 
    };
  }

  revalidatePath('/');
  revalidatePath(`/todos/${id}`);
  redirect(`/todos/${id}`);
}

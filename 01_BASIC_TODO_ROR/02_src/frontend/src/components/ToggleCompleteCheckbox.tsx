'use client';

import { useTransition } from 'react';
import { toggleTodoAction } from '@/actions/todo';

interface ToggleCompleteCheckboxProps {
  todoId: number;
  completed: boolean;
}

export function ToggleCompleteCheckbox({ todoId, completed }: ToggleCompleteCheckboxProps) {
  const [isPending, startTransition] = useTransition();

  const handleToggle = () => {
    startTransition(async () => {
      await toggleTodoAction(todoId, !completed);
    });
  };

  return (
    <input
      type="checkbox"
      checked={completed}
      onChange={handleToggle}
      disabled={isPending}
      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer disabled:cursor-wait disabled:opacity-50"
      title={completed ? '標記為未完成' : '標記為已完成'}
    />
  );
}

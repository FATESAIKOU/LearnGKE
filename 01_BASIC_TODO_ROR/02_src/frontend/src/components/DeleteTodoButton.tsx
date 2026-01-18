'use client';

import { useState, useTransition } from 'react';
import { deleteTodoAction } from '@/actions/todo';

interface DeleteTodoButtonProps {
  todoId: number;
  todoTitle: string;
}

export function DeleteTodoButton({ todoId, todoTitle }: DeleteTodoButtonProps) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const handleDelete = () => {
    setError(null);
    startTransition(async () => {
      const result = await deleteTodoAction(todoId);
      if (!result.success && result.error) {
        setError(result.error);
        setShowConfirm(false);
      }
    });
  };

  if (showConfirm) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-md mx-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            確認刪除
          </h3>
          <p className="text-gray-600 mb-4">
            確定要刪除「{todoTitle}」嗎？此操作無法復原。
          </p>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded mb-4 text-sm">
              ❌ {error}
            </div>
          )}
          <div className="flex gap-3">
            <button
              onClick={() => setShowConfirm(false)}
              disabled={isPending}
              className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50"
            >
              取消
            </button>
            <button
              onClick={handleDelete}
              disabled={isPending}
              className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
            >
              {isPending ? '刪除中...' : '確認刪除'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => setShowConfirm(true)}
      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
    >
      🗑️ 刪除
    </button>
  );
}

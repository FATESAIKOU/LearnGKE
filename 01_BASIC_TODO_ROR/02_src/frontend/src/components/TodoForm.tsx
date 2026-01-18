'use client';

import { useActionState } from 'react';
import { createTodoAction, ActionState } from '@/actions/todo';

const initialState: ActionState = {
  success: false,
  error: undefined,
};

export function TodoForm() {
  const [state, formAction, isPending] = useActionState(createTodoAction, initialState);

  return (
    <form action={formAction} className="space-y-6">
      {state.error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          ❌ {state.error}
        </div>
      )}

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
          標題 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          maxLength={255}
          disabled={isPending}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900"
          placeholder="請輸入待辦事項標題"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          描述
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          disabled={isPending}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed resize-none text-gray-900"
          placeholder="請輸入待辦事項描述（選填）"
        />
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isPending}
          className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
        >
          {isPending ? '處理中...' : '新增待辦事項'}
        </button>
      </div>
    </form>
  );
}

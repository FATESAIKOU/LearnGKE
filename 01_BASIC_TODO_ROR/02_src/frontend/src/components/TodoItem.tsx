import Link from 'next/link';
import { Todo } from '@/types/todo';
import { DeleteTodoButton } from '@/components/DeleteTodoButton';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <Link 
            href={`/todos/${todo.id}`}
            className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
          >
            {todo.title}
          </Link>
          {todo.description && (
            <p className="text-gray-600 mt-1 text-sm line-clamp-2">
              {todo.description}
            </p>
          )}
          <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
            <span>
              {new Date(todo.created_at).toLocaleDateString('zh-TW', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}
            </span>
            <span className={`px-2 py-1 rounded-full ${
              todo.completed 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {todo.completed ? '✓ 已完成' : '○ 進行中'}
            </span>
          </div>
        </div>
        <div className="ml-4 flex-shrink-0">
          <DeleteTodoButton todoId={todo.id} todoTitle={todo.title} />
        </div>
      </div>
    </div>
  );
}

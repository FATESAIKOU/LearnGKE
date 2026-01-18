import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchTodo } from '@/lib/api';
import { DeleteTodoButton } from '@/components/DeleteTodoButton';

interface TodoDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function TodoDetailPage({ params }: TodoDetailPageProps) {
  const { id } = await params;
  const todoId = parseInt(id, 10);

  if (isNaN(todoId)) {
    notFound();
  }

  let todo;
  try {
    todo = await fetchTodo(todoId);
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <header className="mb-8">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 transition-colors mb-4 inline-block"
          >
            ← 返回列表
          </Link>
          <div className="flex items-center justify-between mt-4">
            <h1 className="text-3xl font-bold text-gray-900">
              📝 待辦事項詳情
            </h1>
            <div className="flex gap-2">
              <Link
                href={`/todos/${todo.id}/edit`}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                ✏️ 編輯
              </Link>
              <DeleteTodoButton todoId={todo.id} todoTitle={todo.title} />
            </div>
          </div>
        </header>

        <main>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                todo.completed 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {todo.completed ? '✓ 已完成' : '○ 進行中'}
              </span>
            </div>

            <h2 className={`text-2xl font-bold mb-4 ${
              todo.completed ? 'text-gray-500 line-through' : 'text-gray-900'
            }`}>
              {todo.title}
            </h2>

            {todo.description ? (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">描述</h3>
                <p className="text-gray-700 whitespace-pre-wrap">
                  {todo.description}
                </p>
              </div>
            ) : (
              <p className="text-gray-400 italic mb-6">無描述</p>
            )}

            <div className="border-t pt-4 mt-6">
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                <div>
                  <span className="font-medium">建立時間：</span>
                  <br />
                  {new Date(todo.created_at).toLocaleString('zh-TW', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
                <div>
                  <span className="font-medium">更新時間：</span>
                  <br />
                  {new Date(todo.updated_at).toLocaleString('zh-TW', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchTodo } from '@/lib/api';
import { EditTodoForm } from '@/components/EditTodoForm';

interface EditTodoPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditTodoPage({ params }: EditTodoPageProps) {
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
      <div className="max-w-2xl mx-auto py-8 px-4">
        <header className="mb-8">
          <Link
            href={`/todos/${todo.id}`}
            className="text-blue-600 hover:text-blue-800 transition-colors mb-4 inline-block"
          >
            ← 返回詳情
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">
            ✏️ 編輯待辦事項
          </h1>
          <p className="text-gray-600 mt-2">
            修改待辦事項的資訊
          </p>
        </header>

        <main>
          <div className="bg-white rounded-lg shadow p-6">
            <EditTodoForm todo={todo} />
          </div>
        </main>
      </div>
    </div>
  );
}

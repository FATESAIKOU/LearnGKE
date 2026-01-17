import Link from 'next/link';
import { TodoForm } from '@/components/TodoForm';

export default function NewTodoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto py-8 px-4">
        <header className="mb-8">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 transition-colors mb-4 inline-block"
          >
            ← 返回列表
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">
            ➕ 新增待辦事項
          </h1>
          <p className="text-gray-600 mt-2">
            填寫以下表單新增一個待辦事項
          </p>
        </header>

        <main>
          <div className="bg-white rounded-lg shadow p-6">
            <TodoForm />
          </div>
        </main>
      </div>
    </div>
  );
}

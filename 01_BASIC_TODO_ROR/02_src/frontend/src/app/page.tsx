import Link from 'next/link';
import { fetchTodos } from '@/lib/api';
import { TodoItem } from '@/components/TodoItem';
import { SearchBar } from '@/components/SearchBar';

interface HomeProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const query = params.q;
  
  let todos: Awaited<ReturnType<typeof fetchTodos>>;
  let error = null;

  try {
    todos = await fetchTodos(query);
  } catch (e) {
    error = e instanceof Error ? e.message : 'Failed to load todos';
    todos = [];
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                📝 ToDo Application
              </h1>
              <p className="text-gray-600 mt-2">
                管理你的待辦事項
              </p>
            </div>
            <Link
              href="/todos/new"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              ＋ 新增待辦事項
            </Link>
          </div>
        </header>

        <main>
          <div className="bg-white rounded-lg shadow p-6">
            <SearchBar />

            {error ? (
              <div className="text-center py-8 text-red-600">
                ❌ {error}
              </div>
            ) : todos.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                {query ? (
                  <>
                    🔍 找不到符合「{query}」的待辦事項
                  </>
                ) : (
                  <>
                    📭 目前沒有待辦事項
                    <br />
                    <Link href="/todos/new" className="text-blue-600 hover:underline mt-2 inline-block">
                      點擊這裡新增第一個待辦事項
                    </Link>
                  </>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {query && (
                  <p className="text-sm text-gray-600 mb-4">
                    找到 {todos.length} 個符合「{query}」的結果
                  </p>
                )}
                {todos.map((todo) => (
                  <TodoItem key={todo.id} todo={todo} />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}


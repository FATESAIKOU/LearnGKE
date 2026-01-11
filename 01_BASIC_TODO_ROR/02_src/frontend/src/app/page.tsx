export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            📝 ToDo Application
          </h1>
          <p className="text-gray-600 mt-2">
            A simple todo application built with Next.js and Rails
          </p>
        </header>

        <main>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-500 text-center py-8">
              🚧 Application is under construction...
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

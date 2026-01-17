# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# db/seeds.rb
# Idempotent seeds for Todo
# Uses `title` as the stable unique key for find_or_create_by!

todos = [
  { title: "Setup: Rails initial config", description: "Check database.yml, credentials, and env vars.", completed: false },
  { title: "Setup: RuboCop baseline", description: "Add .rubocop.yml and run autocorrect on core files.", completed: false },
  { title: "Setup: CI pipeline", description: "Add GitHub Actions workflow for test + lint.", completed: false },
  { title: "Setup: Docker dev environment", description: "docker-compose for app + mysql + redis (optional).", completed: false },
  { title: "Auth: Add basic login", description: "Implement simple authentication (session-based).", completed: false },
  { title: "UI: Todo list page", description: "Render todos sorted by created_at desc.", completed: false },
  { title: "UI: Create todo form", description: "Form with title (required) and description (optional).", completed: false },
  { title: "UI: Edit todo", description: "Allow updating title/description.", completed: false },
  { title: "Feature: Mark completed", description: "Toggle completed state from list and detail view.", completed: false },
  { title: "Feature: Bulk complete", description: "Select multiple todos and mark as completed.", completed: false },
  { title: "Feature: Filter completed", description: "Add filter: all / active / completed.", completed: false },
  { title: "Feature: Search by title", description: "Simple keyword search for title.", completed: false },
  { title: "Perf: Add pagination", description: "Paginate todo list when > 50 records.", completed: false },
  { title: "DB: Add index for completed", description: "Consider adding index if filtering often.", completed: false },
  { title: "DB: Add NOT NULL constraint checks", description: "Ensure title null constraint is respected in validations.", completed: false },
  { title: "Test: Model validations", description: "title presence, completed default, etc.", completed: false },
  { title: "Test: Request specs for todos", description: "CRUD + edge cases.", completed: false },
  { title: "Ops: Add healthcheck endpoint", description: "Return 200 with minimal payload.", completed: false },
  { title: "Docs: README setup steps", description: "How to run locally, run tests, seed data.", completed: false },
  { title: "Refactor: Extract service objects", description: "If logic grows, move to app/services.", completed: false },

  # Extra seeds to make it clearly >= 20
  { title: "Chore: Cleanup unused gems", description: "Remove unused dependencies and run bundle clean.", completed: false },
  { title: "Chore: Improve error pages", description: "Add friendly 404/500 pages.", completed: false }
]

# Create or update records (idempotent)
todos.each do |attrs|
  todo = Todo.find_or_create_by!(title: attrs[:title]) do |t|
    t.description = attrs[:description]
    t.completed   = attrs[:completed]
  end

  # Keep seeds idempotent but also allow updating description/completed if changed later
  updates = {}
  updates[:description] = attrs[:description] if todo.description != attrs[:description]
  updates[:completed]   = attrs[:completed]   if todo.completed != attrs[:completed]
  todo.update!(updates) if updates.any?
end

puts "Seeded/updated #{todos.size} todos."
